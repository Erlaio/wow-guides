---
tags:
  - wow
  - mage
  - frost
  - rotation
  - guide
created: 2026-03-17
---

Термины и сокращения → [[mage-glossary|Глоссарий]]

> **Patch:** 12.0.1 (Midnight Season 1) | **Дата:** 2026-03-17

---

## Что изменилось в Midnight (12.0)

> Frost Mage получил крупнейшую переработку за всю историю спека.

**Удалено:**
- **Icy Veins** (способность) — заменена на [[mage-glossary#^ray-of-frost|Ray of Frost]]
- **Mirror Image** — убрана из базового дерева
- **Greater Invisibility** — убрана из базового дерева
- **Mass Barrier** — удалена
- **Shifting Power** — удалена у всех спеков мага
- **Temporal Shield** — удалена
- **Coldest Snap** — удалена (есть [[mage-glossary#^cold-snap|Cold Snap]] на чойс-ноде)

**Добавлено/переработано:**
- **[[mage-glossary#^freezing|Freezing]]** — новый стакающийся дебафф (до 20), накладывается [[mage-glossary#^frostbolt|Frostbolt]], [[mage-glossary#^flurry|Flurry]], [[mage-glossary#^ray-of-frost|Ray of Frost]]. Потребляется через [[mage-glossary#^ice-lance|Ice Lance]] или [[mage-glossary#^comet-storm|Comet Storm]], вызывая [[mage-glossary#^shatter|Shatter]] — основной источник урона
- **[[mage-glossary#^shatter|Shatter]] переработан** — больше не бонус к криту. Теперь это потребление [[mage-glossary#^freezing|Freezing]]-стаков, каждый стак = урон
- **[[mage-glossary#^ray-of-frost|Ray of Frost]]** — новый основной бёрст-КД (до 2 зарядов), ченнел, билдит 8 стаков [[mage-glossary#^freezing|Freezing]]
- **[[mage-glossary#^glacial-bulwark|Glacial Bulwark]]** — новый пассив: доп. заряд [[mage-glossary#^ice-block|Ice Block]] + [[mage-glossary#^ice-barrier|Ice Barrier]]
- **Apex Talents** — новая система из 4 очков талантов
- **[[mage-glossary#^comet-storm|Comet Storm]]** заменяет [[mage-glossary#^ray-of-frost|Ray of Frost]] на панели после ченнела
- **[[mage-glossary#^glacial-spike|Glacial Spike]]** заменяет [[mage-glossary#^frostbolt|Frostbolt]] при 5 [[mage-glossary#^icicles|Icicles]]
- Крит больше не имеет "Shatter cap" — обычный стат наравне с другими

**Итог:** спек стал проще механически (меньше баффов отслеживать), но новая система [[mage-glossary#^freezing|Freezing]]-стаков добавляет свою глубину.

---

## Сильные и слабые стороны

**Сильные:**
- Лучший 2-target клив в игре (Splitting Ice)
- Мощный on-demand AoE бёрст ([[mage-glossary#^ray-of-frost|Ray of Frost]] + [[mage-glossary#^comet-storm|Comet Storm]])
- Отличный контроль передвижения врагов (замедления, руты)
- С [[mage-glossary#^glacial-bulwark|Glacial Bulwark]] — один из самых живучих спеков
- Простой для изучения ([[mage-glossary#^freezing|Freezing]]-система интуитивна)

**Слабые:**
- Потеряны многие дефенсивы в Midnight (Mirror Image, Greater Invis, Mass Barrier)
- Без [[mage-glossary#^glacial-bulwark|Glacial Bulwark]] — очень хрупкий ("aggressively squishy")
- [[mage-glossary#^ray-of-frost|Ray of Frost]] требует стоять на месте
- Менее гибкий, чем Fire/Arcane, на некоторых боссах с высокой мобильностью

---

## Таланты

### Hero Talent

- **Spellslinger** — основной выбор для ST и AoE
  - Frost Splinter — пассивные снаряды, наносят урон автоматически
  - Потребление [[mage-glossary#^freezing|Freezing]] при **6+ стаках**
  - Ключевые таланты: Shifting Shards, Reactive Barrier, Slippery Slinging

- **Frostfire** — ситуативный выбор, уступает по DPS
  - Frostfire Bolt заменяет [[mage-glossary#^frostbolt|Frostbolt]], добавляет Ignite
  - Потребление [[mage-glossary#^freezing|Freezing]] при **10+ стаках**
  - Isothermic Core — [[mage-glossary#^comet-storm|Comet Storm]] вызывает дополнительные метеоры
  - Может быть "fun choice", но не оптимален для парсинга

> [!warning] Спорный момент
> Method рекомендует Frostfire для рейд ST, в то время как Maxroll, Icy Veins и Archon однозначно ставят Spellslinger на первое место для обоих типов контента. Murlok.io данные (топ-50 игроков) подтверждают доминирование Spellslinger. **Рекомендация: Spellslinger для обоих.**

### Apex талант

- **Hand of Frost** — единственный Apex талант для Frost
  - **Rank 1:** шанс призвать Hand of Frost при [[mage-glossary#^shatter|Shatter]], наносит Frost-урон + стаки [[mage-glossary#^freezing|Freezing]]
  - **Rank 2:** повышает шанс + бонус к урону заклинаний
  - **Rank 3:** [[mage-glossary#^ray-of-frost|Ray of Frost]] получает **дополнительный заряд** + усиленный урон + призывает 4 Hands of Frost во время ченнела
  - Rank 3 = ~+25% общего урона. **Берём всегда, все 4 очка.**

### Ключевые таланты

Всегда берём:
- **[[mage-glossary#^glacial-bulwark|Glacial Bulwark]]** — доп. заряд [[mage-glossary#^ice-block|Ice Block]] + [[mage-glossary#^ice-barrier|Ice Barrier]]. Один из сильнейших дефенсивов в игре
- **Splitting Ice** — [[mage-glossary#^flurry|Flurry]] и [[mage-glossary#^frostbolt|Frostbolt]] бьют 1 доп. цель на 80%
- **Lonely Winter** — убирает Water Elemental, +урон заклинаниям
- **[[mage-glossary#^comet-storm|Comet Storm]]** — AoE бёрст, потребляет [[mage-glossary#^freezing|Freezing]]-стаки
- **[[mage-glossary#^thermal-void|Thermal Void]]** — при проке [[mage-glossary#^bf|Brain Freeze]] даёт бафф, усиливающий следующий [[mage-glossary#^ice-lance|Ice Lance]] (бонус к [[mage-glossary#^shatter|Shatter]]-урону). Пока бафф активен — [[mage-glossary#^ice-lance|Ice Lance]] в приоритете
- **[[mage-glossary#^icicles|Icicles]] / [[mage-glossary#^glacial-spike|Glacial Spike]]** — [[mage-glossary#^glacial-spike|Glacial Spike]] доступен при 5 [[mage-glossary#^icicles|Icicles]]. Мощный каст
- **[[mage-glossary#^ray-of-frost|Ray of Frost]]** — основной бёрст-КД
- **[[mage-glossary#^frozen-orb|Frozen Orb]]** — по КД всегда
- **Improved [[mage-glossary#^flurry|Flurry]]** — must-have
- **[[mage-glossary#^fof|Fingers of Frost]]** — основной прок
- **[[mage-glossary#^bf|Brain Freeze]]** — основной прок

Класс-таланты (универсальные):
- **[[mage-glossary#^ice-barrier|Ice Barrier]], [[mage-glossary#^alter-time|Alter Time]], [[mage-glossary#^ice-block|Ice Block]]** — базовые дефенсивы
- **Spatial Manipulation** — доп. заряд [[mage-glossary#^shimmer|Shimmer]]. Всегда выбирать вместо Reflection
- **Flow of Time, [[mage-glossary#^ice-block|Ice Cold]]** — must-have
- **Improved [[mage-glossary#^counterspell|Counterspell]]** — must-have для M+

Рейд (ST-ориентированные):
- **Wintertide** — бонус к ST-урону
- **Piercing Cold**
- **Deep [[mage-glossary#^shatter|Shatter]]** — для ST

M+ (AoE-ориентированные):
- **Fractured Frost** — усиление AoE
- **Hailstones**
- **Rimecaster**
- **[[mage-glossary#^freezing-rain|Freezing Rain]]** — усиливает [[mage-glossary#^blizzard|Blizzard]] в AoE

> [!note] Water Elemental vs Lonely Winter
> Water Elemental вернулся в Midnight как опция. Lonely Winter доминирует в обоих типах контента. Пет проигрывает на мультитаргете и не лечит через Leech. Elemental — вариант только для open world/соло.

---

## Готовые билды (импорт)

> В игре: открыть таланты (N) → Loadouts → Import Loadout → вставить строку → Import

### ST / Рейд / M+ боссы (Spellslinger)

```
CAEAAAAAAAAAAAAAAAAAAAAAAMzwYZmZmlxMzEzwYMjZWMzMzMjZAAAgZmZWWmZaDAA2AAAA2AYbZMzMDml5BMmhFAAAmZBYmMGwMYA
```

### M+ / AoE (Spellslinger)

```
CAEAAAAAAAAAAAAAAAAAAAAAAMzwMLzMzsMMzEzwMzMzMziZmhZMDAAAMzMzyyMTbAAwGAAAwCAbLjZmZwsNMmZsAAAwMbAzkxAmBD
```

---

## Ключевые правила

1. **Не оверкапить [[mage-glossary#^freezing|Freezing]] на 20** — потерянные стаки = потерянный урон
2. **Тратить [[mage-glossary#^fof|FoF]] и [[mage-glossary#^bf|BF]] проки немедленно** — не допускать оверкап (2 заряда [[mage-glossary#^fof|FoF]] макс)
3. **[[mage-glossary#^frozen-orb|Frozen Orb]] и [[mage-glossary#^glacial-spike|Glacial Spike]] — по КД**
4. **[[mage-glossary#^ray-of-frost|Ray of Frost]] — низкий приоритет** в ротации, ибо он билдер стаков. Сначала потратить стаки, потом билдить
5. **Порог [[mage-glossary#^ice-lance|Ice Lance]]:** 6+ стаков (Spellslinger) или 10+ стаков (Frostfire)
6. **ST ротация используется и на 2-target клив** — не переключаться на AoE при 2 целях
7. **Не двигаться во время [[mage-glossary#^ray-of-frost|Ray of Frost]]** — это ченнел
8. **[[mage-glossary#^thermal-void|Thermal Void]] бафф — приоритет [[mage-glossary#^ice-lance|Ice Lance]]**, когда он активен
9. **[[mage-glossary#^frozen-orb|Frozen Orb]] не кастовать при активном [[mage-glossary#^bf|Brain Freeze]]** — сначала потратить [[mage-glossary#^bf|BF]]
10. **[[mage-glossary#^alter-time|Alter Time]]** — использовать проактивно (снапшотить ДО урона), не реактивно

### Когда переключаться на AoE

- **1-2 цели** — ST ротация. Splitting Ice и так кливает вторую цель
- **3+ целей** — переход на AoE: [[mage-glossary#^frozen-orb|Frozen Orb]] в пак, [[mage-glossary#^comet-storm|Comet Storm]], [[mage-glossary#^blizzard|Blizzard]] (с [[mage-glossary#^freezing-rain|Freezing Rain]]), [[mage-glossary#^glacial-spike|Glacial Spike]]
- **Важно:** при 2 целях AoE-ротация — потеря урона. Splitting Ice делает ST-ротацию лучшим выбором для клива

---

## Opener

### ST Opener (рейд / M+ боссы)

1. Summon Water Elemental (если выбран) или подготовка
2. **Pre-cast [[mage-glossary#^frostbolt|Frostbolt]]** или [[mage-glossary#^glacial-spike|Glacial Spike]] (если есть)
3. Trinket (on-use, напр. Vaelgor's Final Stare)
4. **[[mage-glossary#^flurry|Flurry]]** сразу на пулле
5. **[[mage-glossary#^frozen-orb|Frozen Orb]]** (если [[mage-glossary#^bf|Brain Freeze]] не активен)
6. **[[mage-glossary#^ray-of-frost|Ray of Frost]]** (не двигаться!)
7. При проке **[[mage-glossary#^bf|Brain Freeze]]** — [[mage-glossary#^shatter|Shatter]]-комбо: **[[mage-glossary#^frostbolt|Frostbolt]] → [[mage-glossary#^flurry|Flurry]] → [[mage-glossary#^ice-lance|Ice Lance]]** (кастовать именно в этом порядке: [[mage-glossary#^flurry|Flurry]] летит быстрее и догоняет [[mage-glossary#^frostbolt|Frostbolt]], накладывая [[mage-glossary#^freezing|Freezing]]-стаки до попадания [[mage-glossary#^ice-lance|Ice Lance]])
8. При проке **[[mage-glossary#^fof|Fingers of Frost]]** — сразу **[[mage-glossary#^ice-lance|Ice Lance]]** ([[mage-glossary#^fof|FoF]] позволяет шаттерить без набора стаков)
9. **[[mage-glossary#^comet-storm|Comet Storm]]** по КД

### AoE Opener (M+ треш)

1. **[[mage-glossary#^frozen-orb|Frozen Orb]]** в пак
2. **[[mage-glossary#^comet-storm|Comet Storm]]** по стакнутым целям
3. **[[mage-glossary#^ray-of-frost|Ray of Frost]]** (если цели стоят)
4. **[[mage-glossary#^blizzard|Blizzard]]** (с [[mage-glossary#^freezing-rain|Freezing Rain]])
5. **[[mage-glossary#^glacial-spike|Glacial Spike]]** по КД
6. **[[mage-glossary#^ice-lance|Ice Lance]]** при 6+ [[mage-glossary#^freezing|Freezing]] или при проке [[mage-glossary#^fof|FoF]]
7. Филлить [[mage-glossary#^frostbolt|Frostbolt]]

---

## ST приоритет (рейды) — Spellslinger

1. **[[mage-glossary#^comet-storm|Comet Storm]]** — по КД (если талант)
2. **[[mage-glossary#^flurry|Flurry]]** — если [[mage-glossary#^bf|Brain Freeze]] активен И [[mage-glossary#^thermal-void|Thermal Void]] **не** активен
3. **[[mage-glossary#^frozen-orb|Frozen Orb]]** — по КД (если [[mage-glossary#^bf|Brain Freeze]] не активен)
4. **[[mage-glossary#^glacial-spike|Glacial Spike]]** — по КД (доступен при 5 [[mage-glossary#^icicles|Icicles]])
5. **[[mage-glossary#^ice-lance|Ice Lance]]** — при [[mage-glossary#^thermal-void|Thermal Void]] баффе
6. **[[mage-glossary#^ice-lance|Ice Lance]]** — при 6+ стаках [[mage-glossary#^freezing|Freezing]] ИЛИ [[mage-glossary#^fof|Fingers of Frost]] проке
7. **[[mage-glossary#^flurry|Flurry]]** — филлер без прока [[mage-glossary#^bf|BF]] (кастовать для накопления [[mage-glossary#^freezing|Freezing]]-стаков, когда остальные приоритеты закрыты)
8. **[[mage-glossary#^ray-of-frost|Ray of Frost]]** — билдер [[mage-glossary#^freezing|Freezing]]-стаков (низкий приоритет, ибо генерирует стаки — использовать когда [[mage-glossary#^freezing|Freezing]] < порога)
9. **[[mage-glossary#^frostbolt|Frostbolt]]** — основной филлер

> [!important] Ключевое правило
> [[mage-glossary#^ray-of-frost|Ray of Frost]] стоит низко не потому, что слабый, а потому, что он **генератор** стаков. Лучше сначала потратить накопленные стаки, потом билдить новые через [[mage-glossary#^ray-of-frost|Ray of Frost]].

---

## AoE приоритет (M+) — Spellslinger

1. **[[mage-glossary#^comet-storm|Comet Storm]]** — по КД на стакнутых целях
2. **[[mage-glossary#^blizzard|Blizzard]]** — с баффом [[mage-glossary#^freezing-rain|Freezing Rain]] (приоритет)
3. **[[mage-glossary#^flurry|Flurry]]** — если [[mage-glossary#^bf|Brain Freeze]] активен И [[mage-glossary#^thermal-void|Thermal Void]] не активен
4. **[[mage-glossary#^frozen-orb|Frozen Orb]]** — по КД, ловить несколько целей
5. **[[mage-glossary#^glacial-spike|Glacial Spike]]** — скейлится с количеством врагов
6. **[[mage-glossary#^blizzard|Blizzard]]** — если Splinterstorm не активен
7. **[[mage-glossary#^ice-lance|Ice Lance]]** — при 6+ [[mage-glossary#^freezing|Freezing]] или при проке [[mage-glossary#^fof|FoF]]
8. **[[mage-glossary#^flurry|Flurry]]** — филлер
9. **[[mage-glossary#^ray-of-frost|Ray of Frost]]** — генерация стаков
10. **[[mage-glossary#^frostbolt|Frostbolt]]** — филлер

---

## Frostfire вариант (если выбран)

- [[mage-glossary#^frostbolt|Frostbolt]] заменён на **Frostfire Bolt** (Frost + Fire урон, накладывает Ignite)
- Порог потребления [[mage-glossary#^freezing|Freezing]]: **10+ стаков** (вместо 6)
- **Isothermic Core** — [[mage-glossary#^comet-storm|Comet Storm]] вызывает Meteor дополнительно
- Приоритет аналогичен, но [[mage-glossary#^comet-storm|Comet Storm]] ещё важнее из-за Meteor бонуса
- Frostfire Bolt в качестве филлера вместо [[mage-glossary#^frostbolt|Frostbolt]]

---

## Дефенсивы и утилити

### Дефенсивы

| Способность | Эффект | КД | Примечание |
|---|---|---|---|
| **Ice Cold (Ice Block)** | 70% DR на 6 сек, можно кастовать | ~5 мин | Основной дефенсив |
| **Ice Barrier** | Щит ~22% HP + замедление врагов | 30 сек (25 с талантом) | Использовать по КД |
| **Glacial Bulwark** | +1 заряд Ice Block И Ice Barrier | пассив | **Must-have талант** |
| **Alter Time** | Снапшот позиции + HP, телепорт назад | 1 мин | Лучший дефенсив против предсказуемого урона |
| **Cold Snap** | Сброс КД барьера/блока/новы | 5 мин | Чойс-нода с Glacial Bulwark |

> [!warning] Спорный момент: [[mage-glossary#^glacial-bulwark|Glacial Bulwark]] vs [[mage-glossary#^cold-snap|Cold Snap]]
> [[mage-glossary#^glacial-bulwark|Glacial Bulwark]] (доп. заряд) vs [[mage-glossary#^cold-snap|Cold Snap]] (полный сброс КД). Большинство гайдов рекомендуют [[mage-glossary#^glacial-bulwark|Glacial Bulwark]] для общего использования. [[mage-glossary#^cold-snap|Cold Snap]] может быть лучше на специфичных рейд-боссах с редким, но смертельным уроном.

### Утилити

- **[[mage-glossary#^counterspell|Counterspell]]** — прерывание (must-have в M+)
- **[[mage-glossary#^shimmer|Shimmer]]** — блинк без прерывания каста, 2 заряда с Spatial Manipulation
- **[[mage-glossary#^frost-nova|Frost Nova]]** — AoE рут
- **Polymorph** — CC на одну цель
- **Remove Curse** — снятие проклятия
- **Spellsteal** — кража баффа с врага
- **Time Warp** — Bloodlust/Heroism

**Удалено в Midnight:** Mirror Image, Greater Invisibility, Mass Barrier (значительная потеря дефенсивов — спек стал "aggressively squishy" по мнению сообщества).

---

## Статы

### Приоритет

**Intellect >> Mastery >= Haste > Crit > Versatility**

> [!note] Статы зависят от текущего набора
> - Method: Int > Mastery = Crit > Haste > Vers
> - Maxroll: Int > Crit > Haste > Mastery > Vers
> - Murlok.io (топ-50): Mastery 38% > Crit 17% ≈ Haste 16% > Vers 4%
>
> **Вывод:** Mastery — ведущий стат, Haste и Crit близки. Используй **Raidbots Stat Weights** для точного сима под свой гир.

Важные нюансы:
- **Shatter cap не существует** — Crit обычный стат
- **Haste soft cap** на 100% — недостижим, не париться
- **[[mage-glossary#^dr|DR]] (Diminishing Returns)** — ускоряются после ~35% Haste
- **Третичные:** Avoidance > Leech > Speed (Leech не лечит через пета)

---

## Гир и тринкеты

### Тир-сет: Midnight Season 1

- **2-Set:** [[mage-glossary#^flurry|Flurry]] damage +10%, [[mage-glossary#^flurry|Flurry]] имеет 10% шанс дать [[mage-glossary#^fof|Fingers of Frost]]
- **4-Set:** [[mage-glossary#^fof|Fingers of Frost]] увеличивает урон [[mage-glossary#^shatter|Shatter]] на 15%

> Тир-сет не меняет геймплей — просто усиливает существующие проки. Но приоритет — собрать 4 части ASAP.

Приоритет частей: Шлем, Грудь, Перчатки, Ноги (основные), Плечи для добивания бонуса.

### BiS тринкеты

| Тринкет | Тип | Рейтинг | Источник |
|---|---|---|---|
| **Vaelgor's Final Stare** | On-use Mastery (1.5 мин КД) | S | Рейд (Vaelgor/Ezzorak) |
| **Gaze of the Alnseer** | Passive Intellect proc | S | Рейд (Chimaerus) |
| **Locus-Walker's Ribbon** | Passive Int (растёт в бою) | A+ | Рейд |
| **Emberwing Feather** | On-use Haste (2 мин КД) | A | Данж: Windrunner Spire |
| **Crucible of Erratic Energies** | Passive | A | M+ популярный |
| **Vessel of Tortured Souls** | Passive | A | Данж |

> [!note] Рейд vs M+
> Для рейда: Vaelgor's Final Stare + Gaze of the Alnseer
> Для M+: Crucible of Erratic Energies доминирует в топ-50

### Оружие

- **Рейд BiS:** Umbral Spire of Zuraal
- **Крафт альтернатива:** Aln'hara Cane (стафф с эмбелишментом) — хорош в начале сезона

### Эмбелишменты

- **Darkmoon Sigil: Hunt** — на крафт-оружие (Aln'hara Cane). Приоритетный эмбелишмент в начале сезона
- **Prismatic Focusing Iris** — на шею/кольца
- **Stabilizing Gemstone Bandolier** — на запястья/пояс/ботинки
- **Arcanoweave Lining** — альтернатива на низкобюджетные слоты (плащ, запястья)

### Самоцветы и зачарования

- **Мета-гем:** Indecipherable Eversong Diamond (макс Intellect)
- **Остальные слоты:** Flawless Masterful Garnet (Mastery)
- **Оружие:** Acuity of the Ren'dorei
- **Кольца:** Eyes of the Eagle

### Расходники

| Тип | Название | Примечание |
|---|---|---|
| Фласк | Flask of the Shattered Sun | DPS |
| Еда | Harandar Celebration | |
| Боевое зелье | Potion of Recklessness | |
| Хил-зелье | Silvermoon Health Potion | На экстренный случай |
| Оружейное масло | Thalassian Phoenix Oil | |
| Augment Rune | Void-Touched Augment Rune | |

---

## Расы

**Оптимальные для M+:**
- **Dwarf** — Stoneform (снятие дебаффов + 10% физ [[mage-glossary#^damage-reduction|DR]]). Самая популярная раса среди топ-игроков
- **Night Elf** — Shadowmeld для сброса мобов и пропуска механик

**Оптимальные для рейда:**
- **Mechagnome** — пассивный DPS бонус
- **Pandaren** — бонус от еды

**Сильные универсальные:**
- **Void Elf** — без пуш-бэка при касте
- **Orc** — Blood Fury + стан-резист
- **Troll** — Berserking + slow-резист
