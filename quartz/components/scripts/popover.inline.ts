import { computePosition, flip, inline, shift } from "@floating-ui/dom"
import { normalizeRelativeURLs } from "../../util/path"
import { fetchCanonical } from "./util"

const p = new DOMParser()
let activeAnchor: HTMLAnchorElement | null = null

// Cache parsed page content by pathname to avoid refetching
const pageCache = new Map<string, HTMLElement[]>()

async function mouseEnterHandler(
  this: HTMLAnchorElement,
  { clientX, clientY }: { clientX: number; clientY: number },
) {
  const link = (activeAnchor = this)
  if (link.dataset.noPopover === "true") {
    return
  }

  const targetUrl = new URL(link.href)
  const hash = decodeURIComponent(targetUrl.hash)
  targetUrl.hash = ""
  targetUrl.search = ""

  async function setPosition(popoverElement: HTMLElement) {
    const { x, y } = await computePosition(link, popoverElement, {
      strategy: "fixed",
      middleware: [inline({ x: clientX, y: clientY }), shift(), flip()],
    })
    Object.assign(popoverElement.style, {
      transform: `translate(${x.toFixed()}px, ${y.toFixed()}px)`,
    })
  }

  // Remove any existing popover elements from DOM (but don't reset activeAnchor)
  document.querySelectorAll(".popover").forEach((el) => el.remove())

  // Build popover content from cache or fetch
  let elts = pageCache.get(link.pathname)
  if (!elts) {
    const response = await fetchCanonical(targetUrl).catch((err) => {
      console.error(err)
    })

    if (!response) return
    const [contentType] = response.headers.get("Content-Type")!.split(";")
    const [contentTypeCategory, typeInfo] = contentType.split("/")

    if (contentTypeCategory === "image") {
      const img = document.createElement("img")
      img.src = targetUrl.toString()
      img.alt = targetUrl.pathname
      elts = [img]
    } else if (contentTypeCategory === "application" && typeInfo === "pdf") {
      const pdf = document.createElement("iframe")
      pdf.src = targetUrl.toString()
      elts = [pdf as unknown as HTMLElement]
    } else {
      const contents = await response.text()
      const html = p.parseFromString(contents, "text/html")
      normalizeRelativeURLs(html, targetUrl)
      const hints = [...html.getElementsByClassName("popover-hint")] as HTMLElement[]
      if (hints.length === 0) return
      elts = hints
    }

    pageCache.set(link.pathname, elts)
  }

  if (activeAnchor !== this) return

  // Create a fresh popover element each time
  const popoverElement = document.createElement("div")
  popoverElement.classList.add("popover")
  const popoverInner = document.createElement("div")
  popoverInner.classList.add("popover-inner")
  popoverElement.appendChild(popoverInner)

  // Clone cached content into popover
  for (const elt of elts) {
    popoverInner.appendChild(elt.cloneNode(true))
  }

  // Assign unique IDs to prevent duplicates
  popoverInner.querySelectorAll("[id]").forEach((el) => {
    el.id = `popover-internal-${el.id}`
  })

  document.body.appendChild(popoverElement)

  // Must add active class AFTER inserting into DOM so CSS animation triggers
  requestAnimationFrame(() => {
    popoverElement.classList.add("active-popover")
    setPosition(popoverElement)

    // Scroll to target hash if present
    if (hash !== "") {
      const targetAnchor = `popover-internal-${hash.slice(1)}`
      const heading = popoverInner.querySelector(`[id="${targetAnchor}"]`) as HTMLElement | null
      if (heading) {
        popoverInner.scroll({ top: heading.offsetTop - 12, behavior: "instant" })
      }
    }
  })
}

function clearActivePopover() {
  activeAnchor = null
  const allPopoverElements = document.querySelectorAll(".popover")
  allPopoverElements.forEach((el) => el.remove())
}

document.addEventListener("nav", () => {
  pageCache.clear()
  const links = [...document.querySelectorAll("a.internal")] as HTMLAnchorElement[]
  for (const link of links) {
    link.addEventListener("mouseenter", mouseEnterHandler)
    link.addEventListener("mouseleave", clearActivePopover)
    window.addCleanup(() => {
      link.removeEventListener("mouseenter", mouseEnterHandler)
      link.removeEventListener("mouseleave", clearActivePopover)
    })
  }
})
