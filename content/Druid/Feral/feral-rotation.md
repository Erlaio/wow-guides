---
tags:
  - wow
  - feral
  - druid
  - rotation
  - guide
created: 2026-03-15
---

Термины и сокращения → [[druid-glossary|Глоссарий]]

> **Patch:** 12.0.1 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

Blizzard провели масштабное упрощение спека. Основные изменения:

**Удалено:**
- [[druid-glossary#^bleed|Bloodtalons]] — больше нет окна "3 разных билдера за 4 сек"
- Brutal Slash — заменён на [[druid-glossary#^swipe|Swipe]] как основной AoE-[[druid-glossary#^builder|билдер]]
- Thrash — убран полностью, меньше [[druid-glossary#^dot|DoT]]-ов для трекинга
- Adaptive Swarm — убран
- Berserk: Frenzy — убран

**Добавлено:**
- [[druid-glossary#^chomp|Chomp]] — мощная атака без затрат [[druid-glossary#^energy|энергии]] (20с [[druid-glossary#^cd|КД]]), доступна при энергии <30% (+ 2с окно после). Тройной урон при крите. Усиливается [[druid-glossary#^tear-down-the-mighty|Tear Down the Mighty]] (+25%)
- [[druid-glossary#^unseen-predator|Unseen Predator]] — новый Apex-талант (см. ниже)
- Frantic Frenzy — AoE-версия [[druid-glossary#^feral-frenzy|Feral Frenzy]]
- Hunger for Battle — улучшенная генерация [[druid-glossary#^energy|энергии]] и урон

**Изменения механик:**
- [[druid-glossary#^snapshotting|Снапшоттинг]] упрощён — теперь снапшотят только [[druid-glossary#^tigers-fury|Tiger's Fury]] и [[druid-glossary#^prowl|Prowl]]
- Аддоны ограничены в бою — трекинг снапшотов стал сложнее без аддонов
- Claw Rampage нерфнут до одного [[druid-glossary#^proc|прока]] за каст (не за цель)
- [[druid-glossary#^sudden-ambush|Sudden Ambush]] reworked — больше не снапшотит [[druid-glossary#^rake|Rake]]
- Все атаки получили +8% урона; [[druid-glossary#^swipe|Swipe]] +20%

> [!note] Итог
> Спек стал значительно проще — меньше [[druid-glossary#^builder|билдеров]] и [[druid-glossary#^dot|DoT]]-ов, основной фокус на [[druid-glossary#^shred|Shred]]/[[druid-glossary#^swipe|Swipe]] + [[druid-glossary#^finisher|финишеры]]. Меньше кнопок, но ротация остаётся узнаваемой.

---

## Сильные и слабые стороны

### Сильные стороны

- **Мощный [[druid-glossary#^burst|бёрст]]** — [[druid-glossary#^berserk-feral|Berserk]] + [[druid-glossary#^convoke|Convoke the Spirits]] на 2-мин цикле, плюс [[druid-glossary#^feral-frenzy|Feral Frenzy]] на коротком [[druid-glossary#^cd|КД]]
- **Сильный [[druid-glossary#^st|ST]] урон** — [[druid-glossary#^wildstalker-feral|Wildstalker]]-билд показывает отличные цифры на боссах
- **Хороший [[druid-glossary#^aoe|AoE]]** — [[druid-glossary#^primal-wrath|Primal Wrath]] безлимитный, усиленный [[druid-glossary#^unseen-predator|Unseen Predator]]
- **Утилити** — Mark of the Wild, Rebirth, [[druid-glossary#^innervate|Innervate]], [[druid-glossary#^stampeding-roar|Stampeding Roar]]
- **Мобильность** — Dash/Tiger Dash, Wild Charge, [[druid-glossary#^stampeding-roar|Stampeding Roar]]
- **Упрощённая ротация** — проще входить в спек после Midnight-изменений

### Слабые стороны

- **Упрощение "убило" часть фана** — многие уникальные геймплей-петли удалены или урезаны
- **Ограничения аддонов** — [[druid-glossary#^snapshotting|снапшоттинг]] стал труднее отслеживать без боевых аддонов
- **Медленный геймплей** — бывают пустые [[druid-glossary#^gcd|GCD]], медленнее многих мили-спеков
- **Зависимость от рампа** — нужно время на развёртывание [[druid-glossary#^bleed|блидов]], слабый урон в первые секунды боя

---

## Таланты

### Hero Talent

- **Рейд ([[druid-glossary#^st|ST]]):** [[druid-glossary#^wildstalker-feral|Wildstalker]] — упор на [[druid-glossary#^bleed|блиды]] и устойчивый урон по одной цели. Bloodseeker Vines и Thriving Growth усиливают [[druid-glossary#^dot|DoT]]-урон
- **M+ ([[druid-glossary#^aoe|AoE]]):** [[druid-glossary#^druid-of-the-claw-feral|Druid of the Claw]] — лучшие AoE инструменты, дефенсивы и [[druid-glossary#^ravage|Ravage]]-[[druid-glossary#^proc|прок]]. Даёт Frenzied Regeneration в Cat Form через Empowered Shapeshifting

> [!warning] Нюанс
> Некоторые гайды (Maxroll) отмечают, что [[druid-glossary#^wildstalker-feral|Wildstalker]] может быть лучше в высоких ключах, где мобы живут дольше и [[druid-glossary#^bleed|блиды]] успевают отработать. [[druid-glossary#^druid-of-the-claw-feral|Druid of the Claw]] — для низких/средних ключей с быстрым AoE.

### Apex талант

- **[[druid-glossary#^unseen-predator|Unseen Predator]]** — [[druid-glossary#^ferocious-bite|Ferocious Bite]] имеет 15% шанс за каждый потраченный [[druid-glossary#^cp|CP]] вызвать Unseen Slash ([[druid-glossary#^st|ST]]) или Unseen Swipe ([[druid-glossary#^aoe|AoE]]). При [[druid-glossary#^proc|проке]] — +7.5% ко всему урону на 5 сек (стакается). [[druid-glossary#^tigers-fury|Tiger's Fury]] заставляет следующие 2 [[druid-glossary#^builder|билдера]] триггерить Unseen Attack. Берём всегда.

### Ключевые таланты (консенсус 6+ гайдов)

Всегда берём:
- **[[druid-glossary#^feral-frenzy|Feral Frenzy]]** — [[druid-glossary#^st|ST]] [[druid-glossary#^burst|бёрст]] с коротким [[druid-glossary#^cd|КД]]; выбор ноды: Focused Frenzy (30с КД, ST) или Frantic Frenzy (AoE версия)
- **[[druid-glossary#^chomp|Chomp]]** — мощная атака без затрат [[druid-glossary#^energy|энергии]] (20с КД), доступна при энергии <30% (+ 2с окно после). Тройной урон при крите. Усиливается [[druid-glossary#^tear-down-the-mighty|Tear Down the Mighty]] (+25%)
- **[[druid-glossary#^convoke|Convoke the Spirits]]** — мощный [[druid-glossary#^burst|бёрст]], синхронить с [[druid-glossary#^berserk-feral|Berserk]] + [[druid-glossary#^tigers-fury|Tiger's Fury]]
- **[[druid-glossary#^berserk-feral|Berserk]]** — основной [[druid-glossary#^burst|бёрст]]-кулдаун
- **[[druid-glossary#^predator|Predator]]** — сброс [[druid-glossary#^tigers-fury|Tiger's Fury]] при смерти цели
- **[[druid-glossary#^moment-of-clarity|Moment of Clarity]]** — бесплатные усиленные [[druid-glossary#^builder|билдеры]] (синергия с тир-сетом)
- **[[druid-glossary#^soul-of-the-forest-feral|Soul of the Forest]]** — больше [[druid-glossary#^energy|энергии]] и урона от [[druid-glossary#^finisher|финишеров]]
- **[[druid-glossary#^apex-predators-craving|Apex Predator's Craving]]** — бесплатные [[druid-glossary#^ferocious-bite|Ferocious Bite]] от тиков [[druid-glossary#^rip|Rip]]

Рейд ([[druid-glossary#^wildstalker-feral|Wildstalker]]):
- Focused Frenzy — укороченный КД [[druid-glossary#^feral-frenzy|Feral Frenzy]] для [[druid-glossary#^st|ST]]
- [[druid-glossary#^lunar-inspiration|Lunar Inspiration]] — [[druid-glossary#^moonfire|Moonfire]] как дополнительный [[druid-glossary#^builder|билдер]]
- [[druid-glossary#^sudden-ambush|Sudden Ambush]] — усиленные [[druid-glossary#^shred|Shred]] (reworked в Midnight — больше не снапшотит [[druid-glossary#^rake|Rake]])
- [[druid-glossary#^panthers-guile|Panther's Guile]] — бонус урона в [[druid-glossary#^st|ST]]
- [[druid-glossary#^circle-of-life-and-death|Circle of Life and Death]] — ускоренные тики [[druid-glossary#^bleed|блидов]]

M+ ([[druid-glossary#^druid-of-the-claw-feral|Druid of the Claw]]):
- Frantic Frenzy — AoE-версия [[druid-glossary#^feral-frenzy|Feral Frenzy]]
- [[druid-glossary#^primal-wrath|Primal Wrath]] — AoE-[[druid-glossary#^finisher|финишер]], [[druid-glossary#^spread|распространяет]] [[druid-glossary#^rip|Rip]]
- [[druid-glossary#^rampant-ferocity|Rampant Ferocity]] — [[druid-glossary#^ferocious-bite|Ferocious Bite]] наносит [[druid-glossary#^aoe|AoE]]
- [[druid-glossary#^double-clawed-rake|Double-Clawed Rake]] — [[druid-glossary#^rake|Rake]] бьёт второго таргета
- [[druid-glossary#^apex-predators-craving|Apex Predator's Craving]] — обязателен для M+

---

## Готовые билды (импорт)

### [[druid-glossary#^druid-of-the-claw-feral|Druid of the Claw]]

**Рейд ([[druid-glossary#^st|ST]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAghZ2YmZmZGzmx2MbzMzMmZAAAAYJYWMGmZUzYWMzMzsMmZAAAAAAwADAAAgmZZ2mZmBEYBMzAswgBAAwMbYA
```

**M+ ([[druid-glossary#^aoe|AoE]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmZYmZmZMzsZsNz2MzMzDMzAAAAwSwsYMMzomxsYmZmZZMzAAAAAAgBAAAAoZWmtZmZABWAzMALMYAAAMzGG
```

### [[druid-glossary#^wildstalker-feral|Wildstalker]]

**Рейд ([[druid-glossary#^st|ST]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZwMzMzMmtlxyMbzYGzMDAAAALBzihxMjaGziZmZGjZYAAAAAAMwAAAAIAYWmZpZbmlNwMDwiZwAAYmBAD
```

**M+ ([[druid-glossary#^aoe|AoE]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZYmZmZMmNjtZ2mZmZegZGAAAAWCmFjhZG1MmFzMzMGzMGAAAAAADMAAAACAmlZ2aWmZZDMzAswgBAwMDAG
```

> [!note] Источник строк
> Talent strings взяты с Wowhead (обновлено 2026-03-17). Импорт: Talents → Loadouts → Import.

---

## Ключевые правила

### [[druid-glossary#^snapshotting|Снапшоттинг]] (упрощён в Midnight)

Теперь снапшотят только [[druid-glossary#^tigers-fury|Tiger's Fury]] и [[druid-glossary#^prowl|Prowl]]. Bloodtalons удалён. [[druid-glossary#^rip|Rip]] и [[druid-glossary#^rake|Rake]], наложенные во время TF, сохраняют бонус урона на всю длительность.

> [!important] Не перезаписывай TF-снапшот
> Если [[druid-glossary#^rake|Rake]]/[[druid-glossary#^rip|Rip]] наложены с [[druid-glossary#^tigers-fury|Tiger's Fury]], не обновляй их без активного TF — это даунгрейд урона. Лучше подождать следующий TF или дать [[druid-glossary#^dot|DoT]]-у истечь.

### [[druid-glossary#^pandemic|Пандемик]]-окна

Безопасный рефреш без потери длительности:
- [[druid-glossary#^rip|Rip]]: последние **5.8с**
- [[druid-glossary#^rake|Rake]]: последние **3.6с**
- [[druid-glossary#^moonfire|Moonfire]]: последние **4.3с**

### [[druid-glossary#^energy|Энергия]]

- Не [[druid-glossary#^overcap|оверкапить]]. Юзать [[druid-glossary#^tigers-fury|Tiger's Fury]] при низкой энергии
- Не спамить [[druid-glossary#^shred|Shred]] вхолостую — следить за [[druid-glossary#^panthers-guile|Panther's Guile]]/[[druid-glossary#^moment-of-clarity|Moment of Clarity]] [[druid-glossary#^proc|проками]]
- Перед [[druid-glossary#^chomp|Chomp]] — слить [[druid-glossary#^energy|энергию]] ниже 30%. Есть 2с окно после достижения порога

### [[druid-glossary#^finisher|Финишеры]]

- Всегда кастовать при 5 [[druid-glossary#^cp|CP]]
- Главная цель — максимизировать количество [[druid-glossary#^ferocious-bite|Ferocious Bite]] без потери [[druid-glossary#^uptime|аптайма]] [[druid-glossary#^bleed|блидов]]
- [[druid-glossary#^apex-predators-craving|Apex Predator's Craving]] [[druid-glossary#^proc|проки]] — тратить сразу, не копить

### [[druid-glossary#^chomp|Chomp]] тайминг

- Можно использовать [[druid-glossary#^tigers-fury|Tiger's Fury]] → [[druid-glossary#^chomp|Chomp]] сразу (2с grace period позволяет)
- Идеально: слить [[druid-glossary#^energy|энергию]] [[druid-glossary#^shred|Shred]]-ами → TF → [[druid-glossary#^chomp|Chomp]]

### [[druid-glossary#^rake|Rake]] vs [[druid-glossary#^swipe|Swipe]] (AoE)

- С [[druid-glossary#^double-clawed-rake|Double-Clawed Rake]] — приоритет [[druid-glossary#^rake|Rake]] на максимум целей
- Без него — [[druid-glossary#^rake|Rake]] на 4 и меньше целей, дальше [[druid-glossary#^swipe|Swipe]]
- [[druid-glossary#^swipe|Swipe]] только когда все цели под [[druid-glossary#^rake|Rake]]

### [[druid-glossary#^sudden-ambush|Sudden Ambush]] (reworked)

- Приоритет использования на [[druid-glossary#^shred|Shred]] ([[druid-glossary#^st|ST]]) или [[druid-glossary#^swipe|Swipe]] ([[druid-glossary#^aoe|AoE]])
- Больше **не** снапшотит [[druid-glossary#^rake|Rake]] — не тратить на рейк

---

## Opener

### [[druid-glossary#^st|ST]] Opener (рейд)

1. [[druid-glossary#^prowl|Prowl]]
2. [[druid-glossary#^rake|Rake]] (из стелса)
3. [[druid-glossary#^shred|Shred]] + [[druid-glossary#^moonfire|Moonfire]] → набрать 5 [[druid-glossary#^cp|CP]]
4. [[druid-glossary#^tigers-fury|Tiger's Fury]]
5. [[druid-glossary#^rip|Rip]] ([[druid-glossary#^snapshotting|снапшотит]] TF)
6. [[druid-glossary#^berserk-feral|Berserk]]
7. [[druid-glossary#^feral-frenzy|Feral Frenzy]] → [[druid-glossary#^ferocious-bite|Ferocious Bite]]
8. [[druid-glossary#^convoke|Convoke the Spirits]]

> [!note] Продвинутый [[druid-glossary#^chomp|Chomp]] Opener
> Перед пулом слить [[druid-glossary#^energy|энергию]] через [[druid-glossary#^swipe|Swipe]], затем:
> [[druid-glossary#^prowl|Prowl]] → [[druid-glossary#^rake|Rake]] → [[druid-glossary#^tigers-fury|Tiger's Fury]] + [[druid-glossary#^berserk-feral|Berserk]] → [[druid-glossary#^chomp|Chomp]] → [[druid-glossary#^feral-frenzy|Feral Frenzy]] → [[druid-glossary#^rip|Rip]] → [[druid-glossary#^convoke|Convoke]]

### [[druid-glossary#^aoe|AoE]] Opener (M+)

1. [[druid-glossary#^prowl|Prowl]]
2. [[druid-glossary#^rake|Rake]] (из стелса)
3. [[druid-glossary#^rake|Rake]]/[[druid-glossary#^swipe|Swipe]] → набрать 5 [[druid-glossary#^cp|CP]] (с [[druid-glossary#^double-clawed-rake|Double-Clawed Rake]] — приоритет [[druid-glossary#^rake|Rake]] по нескольким целям)
4. [[druid-glossary#^tigers-fury|Tiger's Fury]]
5. [[druid-glossary#^primal-wrath|Primal Wrath]]
6. [[druid-glossary#^berserk-feral|Berserk]]
7. [[druid-glossary#^feral-frenzy|Feral Frenzy]] → [[druid-glossary#^ferocious-bite|Ferocious Bite]]
8. [[druid-glossary#^convoke|Convoke the Spirits]]
9. [[druid-glossary#^primal-wrath|Primal Wrath]] (обновить [[druid-glossary#^rip|Rip]])

---

## [[druid-glossary#^st|ST]] приоритет (рейды)

1. **[[druid-glossary#^berserk-feral|Berserk]]** — по [[druid-glossary#^cd|КД]], синхронить с [[druid-glossary#^tigers-fury|Tiger's Fury]]
2. **[[druid-glossary#^tigers-fury|Tiger's Fury]]** — по КД при низкой [[druid-glossary#^energy|энергии]] (не [[druid-glossary#^overcap|оверкапить]])
3. **[[druid-glossary#^convoke|Convoke the Spirits]]** — с активными [[druid-glossary#^berserk-feral|Berserk]] + [[druid-glossary#^tigers-fury|Tiger's Fury]]
4. **[[druid-glossary#^feral-frenzy|Feral Frenzy]]** — при низких [[druid-glossary#^cp|CP]]
5. **[[druid-glossary#^chomp|Chomp]]** — по КД, слить [[druid-glossary#^energy|энергию]] до <30% перед использованием, идеально во время TF
6. **[[druid-glossary#^rake|Rake]]** — держать, обновлять в [[druid-glossary#^pandemic|пандемик]] (<3.6с), приоритет рефреша при TF (апгрейд [[druid-glossary#^snapshotting|снапшота]])
7. **[[druid-glossary#^rip|Rip]]** — держать на цели (5 [[druid-glossary#^cp|CP]]), рефрешить в [[druid-glossary#^pandemic|пандемик]] (<5.8с) если [[druid-glossary#^tigers-fury|Tiger's Fury]] активен
8. **[[druid-glossary#^ferocious-bite|Ferocious Bite]]** — при 5 [[druid-glossary#^cp|CP]] если [[druid-glossary#^rip|Rip]] не в [[druid-glossary#^pandemic|пандемике]] или рефреш даунгрейднет (нет TF)
9. **[[druid-glossary#^moonfire|Moonfire]]** — держать (если [[druid-glossary#^lunar-inspiration|Lunar Inspiration]])
10. **[[druid-glossary#^shred|Shred]]** — генерация [[druid-glossary#^cp|CP]], следить за [[druid-glossary#^panthers-guile|Panther's Guile]] [[druid-glossary#^proc|проками]], не спамить вслепую

---

## [[druid-glossary#^aoe|AoE]] приоритет (M+)

1. **[[druid-glossary#^berserk-feral|Berserk]]** — по [[druid-glossary#^cd|КД]], синхронить с [[druid-glossary#^tigers-fury|Tiger's Fury]]
2. **[[druid-glossary#^tigers-fury|Tiger's Fury]]** — по КД при низкой [[druid-glossary#^energy|энергии]]
3. **[[druid-glossary#^convoke|Convoke the Spirits]]** — с [[druid-glossary#^berserk-feral|Berserk]] + TF, убедиться что [[druid-glossary#^rip|Rip]] доживёт весь ченнел
4. **Frantic Frenzy** — при низких [[druid-glossary#^cp|CP]]
5. **[[druid-glossary#^chomp|Chomp]]** — по КД, слить [[druid-glossary#^energy|энергию]] до <30% перед использованием
6. **[[druid-glossary#^primal-wrath|Primal Wrath]]** — держать [[druid-glossary#^rip|Rip]] на всех целях, рефрешить в [[druid-glossary#^pandemic|пандемик]], [[druid-glossary#^snapshotting|снапшотить]] TF
7. **[[druid-glossary#^ferocious-bite|Ferocious Bite]]** — при 5 [[druid-glossary#^cp|CP]] если [[druid-glossary#^rip|Rip]] здоровый (5+ сек), триггерит [[druid-glossary#^rampant-ferocity|Rampant Ferocity]]
8. **[[druid-glossary#^apex-predators-craving|Apex Predator's Craving]]** [[druid-glossary#^proc|проки]] — тратить сразу
9. **[[druid-glossary#^rake|Rake]]** — по приоритетным целям ([[druid-glossary#^double-clawed-rake|Double-Clawed Rake]] упрощает)
10. **[[druid-glossary#^swipe|Swipe]]** — генерация [[druid-glossary#^cp|CP]] когда все цели под [[druid-glossary#^rake|Rake]]
11. **[[druid-glossary#^moonfire|Moonfire]]** — на приоритетные цели (если талант)

---

## Дефенсивы и утилити

### Дефенсивы

| Способность | Эффект | **КД** |
|---|---|---|
| **Barkskin** | **DR** 20%, можно кастовать в любой форме | 60с |
| **Survival Instincts** | **DR** 50%, 2 заряда | 2 мин |
| Bear Form | Дополнительное HP + armor, использовать если дефы на **КД** | — |
| **Heart of the Wild** | Усиленная Bear Form для экстренных ситуаций | 5 мин |
| Frenzied Regeneration | Доступна в Cat Form через Empowered Shapeshifting (**DotC**) | — |

> [!note] Лейеринг
> [[druid-glossary#^barkskin|Barkskin]] → [[druid-glossary#^survival-instincts|Survival Instincts]] → Bear Form + [[druid-glossary#^heart-of-the-wild|Heart of the Wild]]. Не стакать дефы без нужды.

### Утилити

| Способность | Назначение |
|---|---|
| Skull Bash | Интеррапт + мини-чардж. Savage Momentum: успешный интеррапт снижает КД TF/Roar/SI на 10с |
| **Stampeding Roar** | Групповой спринт |
| **Innervate** | Экстернал для хилера |
| Rebirth | Боевое воскрешение |
| **Soothe** | Снятие Enrage с врагов |
| **Typhoon** | Нокбэк |
| **Ursol's Vortex** | Контроль мобов, стягивание |
| **Incapacitating Roar** | AoE-инкапаситейт |
| Mark of the Wild | Рейд-бафф |

---

## Статы

### Приоритет

**Рейд ([[druid-glossary#^st|ST]]):** Agility > [[druid-glossary#^mastery-feral|Mastery]] > Crit > Haste > Versatility

**M+ ([[druid-glossary#^aoe|AoE]]):** Agility > [[druid-glossary#^mastery-feral|Mastery]] ≈ Haste > Crit > Versatility

> [!warning] Нюанс между гайдами
> Method: Mastery > Crit > Haste > Vers. Maxroll (M+): Haste > Mastery > Vers > Crit. Noxxic и Wowhead подтверждают Mastery как топ-стат в обоих случаях. **Рекомендация:** симить свой персонаж через Raidbots — приоритет зависит от текущего гира.

### Что даёт каждый стат

- **[[druid-glossary#^mastery-feral|Mastery]] (Razor Claws)** — увеличивает урон [[druid-glossary#^bleed|блидов]] И [[druid-glossary#^finisher|финишеров]]. Топ-стат для большинства билдов
- **Crit** — Primal Fury даёт 2 [[druid-glossary#^cp|CP]] при крите, ускоряет ротацию
- **Haste** — ускоряет генерацию [[druid-glossary#^energy|энергии]] и тики [[druid-glossary#^bleed|блидов]]
- **Versatility** — плоский бонус к урону и хилу + [[druid-glossary#^damage-reduction|DR]]

### Третичные статы

- **Avoidance** — снижает AoE-урон (очень ценно в M+)
- **Leech** — пассивный самохил от урона
- **Speed** — нишево, но полезно на некоторых боссах

### Энчанты и камни

| Слот | Энчант |
|---|---|
| Оружие | Enchant Weapon - Acuity of the Ren'dorei |
| Голова | Enchant Helm - Empowered Rune of Avoidance |
| Плечи | Enchant Shoulders - Amirdrassil's Grace |
| Грудь | Enchant Chest - Mark of the Worldsoul |
| Ноги | Forest Hunter's Armor Kit |
| Ботинки | Enchant Boots - Lynx's Dexterity |
| Кольца | Enchant Ring - Zul'jin's Mastery |

**Камни:**
- Основной: Powerful Eversong Diamond
- Остальные: Flawless Masterful Garnet / Flawless Masterful Peridot / Flawless Masterful Lapis (по одному каждого цвета)

---

## Гир и тринкеты

### Тир-сет (Midnight Season 1 — Luminous Bloom)

- **2-set:** Получение Clearcasting от Omen of Clarity увеличивает шанс крита на 5% на 4 сек
- **4-set:** Урон [[druid-glossary#^rake|Rake]] +20%. Clearcasting увеличивает урон [[druid-glossary#^shred|Shred]] или [[druid-glossary#^swipe|Swipe]] на 15%

> [!note] Синергия
> Берите [[druid-glossary#^moment-of-clarity|Moment of Clarity]] — больше [[druid-glossary#^proc|проков]] Clearcasting = больше [[druid-glossary#^uptime|аптайм]] бонусов тир-сета.

### Оружие

| Предмет | Источник | Контекст |
|---|---|---|
| Roostwarden's Bough | Windrunner Spire (данж) | M+ BiS |
| Inescapable Reach | Vorasius (рейд) | Рейд BiS |

### Тринкеты

**S-тир (рейд и M+):**
- **Algeth'ar Puzzle Box** — on-use stat тринкет, синхронить с [[druid-glossary#^berserk-feral|Berserk]]
- **Gaze of the Alnseer** — пассивный stat stick (рейд, Chimaerus)
- **Radiant Plume** — пассивный, сильный в обоих контекстах

**A-тир:**
- Umbral Plume — stat stick для M+
- Sealed Chaos Urn
- Heart of Wind
- Emberwing Feather
- Vaelgor's Final Stare

> [!important] Правило тринкетов
> Всегда носить 1 on-use тринкет (Puzzle Box) + 1 пассивный. On-use синхронить с [[druid-glossary#^berserk-feral|Berserk]] + [[druid-glossary#^tigers-fury|Tiger's Fury]].

### Эмбеллишменты

**Ранний сезон:**
- Blood Knight's Impetus + Darkmoon Sigil: Hunt
- Arcanoweave Lining на не-тир слоты

**Поздний сезон (BiS):**
- Masterwork Sin'dorei Band + Prismatic Focusing Iris
- Silvermoon Agent's Deflectors + Stabilizing Gemstone Bandolier
- Adherent's Silken Shroud (плащ) + Arcanoweave Lining

### Консюмы

| Тип | Предмет |
|---|---|
| Фласка | Flask of the Blood Knights (максимум DPS) / Flask of the Magisters (альтернатива) |
| Еда | Silvermoon Parade / Harandar Celebration (пир) / Crimson Calamari (личная) |
| Боевое зелье | Potion of Recklessness / Draught of Rampant Abandon (осторожно: войд-лужа сайленсит) |
| Хил-зелье | Silvermoon Health Potion |
| Масло на оружие | Thalassian Phoenix Oil |
| Аугмент руна | Void-Touched Augment Rune |

---

## Расы

### Alliance

**Night Elf** (лучший выбор) — Shadowmeld даёт:
- Ре-стелс в бою → усиленный [[druid-glossary#^rake|Rake]] ([[druid-glossary#^prowl|Prowl]]-[[druid-glossary#^snapshotting|снапшот]])
- Дроп таргета в M+ (избежание опасных механик)
- Значимый DPS-прирост по сравнению с другими расами

### Horde

**Tauren** (лучший выбор) — War Stomp даёт AoE-стан, полезно в M+ для контроля. Урон немного уступает Night Elf, но разница небольшая.

> [!note] Практический совет
> Разница между расами минимальна (<1% DPS). Night Elf имеет преимущество за счёт Shadowmeld-утилити, но выбирайте что нравится — это не сломает вам рейтинг.
