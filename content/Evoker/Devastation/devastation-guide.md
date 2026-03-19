---
tags:
  - wow
  - devastation
  - evoker
  - rotation
  - guide
created: 2026-03-17
---

Термины и сокращения → [[evoker-glossary|Глоссарий]]

> **Patch:** 12.0.1 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

**Удалено / объединено:**
- **Engulf** — удалён (переработка [[evoker-glossary#^flameshaper|Flameshaper]])
- **Arcane Vigor, Dense Energy, Snapfire** — удалены/конвертированы в пассивы
- **Shattering Star** — интегрирован в [[evoker-glossary#^eternity-surge|Eternity Surge]] (пассивный эффект)
- **Firestorm** — интегрирован в [[evoker-glossary#^pyre|Pyre]] пассивно
- **[[evoker-glossary#^renewing-blaze|Renewing Blaze]]** — поглощён [[evoker-glossary#^obsidian-scales|Obsidian Scales]] (пассивная активация)
- **Unravel** — стал пассивным эффектом [[evoker-glossary#^fire-breath|Fire Breath]]

**Добавлено:**
- **Strafing Run** — двойной [[evoker-glossary#^deep-breath|Deep Breath]] в 18-сек окне
- **[[evoker-glossary#^azure-sweep|Azure Sweep]]** — усиленный [[evoker-glossary#^azure-strike|Azure Strike]], ключевой с тир-сетом
- **Star Salvo** — +35% урона Shattering Star
- **Strike From Above** — улучшенная мобильность [[evoker-glossary#^glide|Glide]]
- **[[evoker-glossary#^stretch-time|Stretch Time]]** — перенесён из Augmentation, приостанавливает урон
- **Apex Talents** — [[evoker-glossary#^rising-fury|Rising Fury]] (4 ранга, усиливает [[evoker-glossary#^dragonrage|Dragonrage]])

**Переработано:**
- **[[evoker-glossary#^flameshaper|Flameshaper]]** — полная переработка: 2 заряда [[evoker-glossary#^fire-breath|Fire Breath]], Consume Flame вместо Engulf
- **Imminent Destruction** — [[evoker-glossary#^deep-breath|Deep Breath]] снижает стоимость [[evoker-glossary#^essence|Essence]] (до 8 стаков)
- **[[evoker-glossary#^scorching-embers|Scorching Embers]]** — враги с DoT [[evoker-glossary#^fire-breath|Fire Breath]] получают +25% Red-урона
- **[[evoker-glossary#^hover|Hover]]** — теперь можно активировать во время каста
- **[[evoker-glossary#^animosity|Animosity]]** — продления больше без верхнего лимита (каждое слабее предыдущего)
- **[[evoker-glossary#^eternity-surge|Eternity Surge]]** — теперь поражает цели в радиусе 25 ярдов вокруг Evoker (было 12 ярдов вокруг цели)

**Баффы:** все способности +5%, [[evoker-glossary#^pyre|Pyre]] +20%, [[evoker-glossary#^azure-strike|Azure Strike]] +50%, Firestorm +25%

---

## Сильные и слабые стороны

**Сильные:**
- Мощный бёрст с [[evoker-glossary#^dragonrage|Dragonrage]] (один из лучших 2-мин окон в игре)
- Отличный AoE и клив ([[evoker-glossary#^deep-breath|Deep Breath]], [[evoker-glossary#^mass-disintegrate|Mass Disintegrate]], [[evoker-glossary#^pyre|Pyre]])
- Уникальная утилити ([[evoker-glossary#^rescue|Rescue]], [[evoker-glossary#^cauterizing-flame|Cauterizing Flame]], [[evoker-glossary#^zephyr|Zephyr]])
- Высокая мобильность ([[evoker-glossary#^hover|Hover]], [[evoker-glossary#^deep-breath|Deep Breath]], [[evoker-glossary#^glide|Glide]])

**Слабые:**
- Урон вне [[evoker-glossary#^dragonrage|Dragonrage]] значительно ниже ([[evoker-glossary#^rising-fury|Rising Fury]] сглаживает, но не решает полностью)
- Короткий рейнж (25 ярдов вместо стандартных 40) — ближе к механикам
- [[evoker-glossary#^empower|Empower]]-система требует стоять для каста
- Ограниченный рейнж [[evoker-glossary#^eternity-surge|Eternity Surge]] (25 ярдов вокруг Evoker)

---

## Таланты

### Hero Talent

- **[[evoker-glossary#^scalecommander|Scalecommander]]** — основной выбор для M+ и рейда
  - [[evoker-glossary#^mass-disintegrate|Mass Disintegrate]] — клив на 3-4 цели, приоритет над [[evoker-glossary#^pyre|Pyre]]
  - Melt Armor — [[evoker-glossary#^deep-breath|Deep Breath]] накладывает +20% получаемого урона
  - Strafing Run — 2 заряда [[evoker-glossary#^deep-breath|Deep Breath]] в 18-сек окне
  - Maneuverability — управляемый [[evoker-glossary#^deep-breath|Deep Breath]] + продлённый DoT
  - Wingleader — снижает КД [[evoker-glossary#^deep-breath|Deep Breath]]
  - Slipstream — заряд [[evoker-glossary#^hover|Hover]] за каждый [[evoker-glossary#^deep-breath|Deep Breath]]

- **[[evoker-glossary#^flameshaper|Flameshaper]]** — альтернатива для длительного AoE
  - 2 заряда [[evoker-glossary#^fire-breath|Fire Breath]] (переработан в Midnight)
  - Consume Flame — спендеры поглощают DoT [[evoker-glossary#^fire-breath|Fire Breath]] для доп. урона
  - Проще в освоении

> [!warning] Спорный момент
> Archon raid logs показывают ~71% [[evoker-glossary#^flameshaper|Flameshaper]] в рейде, в то время как гайды (Method, Maxroll) рекомендуют [[evoker-glossary#^scalecommander|Scalecommander]] как оптимальный. Возможно, это инерция игроков из TWW или предпочтения на определённых боссах. Для M+ — [[evoker-glossary#^scalecommander|Scalecommander]] однозначно. **Рекомендация: [[evoker-glossary#^scalecommander|Scalecommander]] для обоих типов контента, [[evoker-glossary#^flameshaper|Flameshaper]] — если хочется проще или чистый AoE.**

### Apex талант

- **[[evoker-glossary#^rising-fury|Rising Fury]]** — единственный Apex для Devastation
  - **Rank 1:** +4% Haste каждые 6 сек во время [[evoker-glossary#^dragonrage|Dragonrage]] (до 5 стаков)
  - **Rank 2:** при 5 стаках — +8%/+15% ко всему урону (два подранга)
  - **Rank 3:** после окончания [[evoker-glossary#^dragonrage|Dragonrage]] — Risen Fury (4 сек за стак): сохраняет бонусы Haste/урона + генерирует [[evoker-glossary#^essence-burst|Essence Burst]]
  - **Берём всегда, все 4 очка.** Сглаживает провал DPS после окончания [[evoker-glossary#^dragonrage|Dragonrage]]

### Ключевые таланты

Всегда берём:
- **[[evoker-glossary#^dragonrage|Dragonrage]]** — 2-мин бёрст-КД, основа геймплея
- **[[evoker-glossary#^animosity|Animosity]]** — [[evoker-glossary#^empower|Empower]]-касты продлевают [[evoker-glossary#^dragonrage|Dragonrage]]
- **[[evoker-glossary#^tyranny|Tyranny]]** — Mastery на полную мощность во время [[evoker-glossary#^dragonrage|Dragonrage]]
- **[[evoker-glossary#^causality|Causality]]** — [[evoker-glossary#^disintegrate|Disintegrate]]/[[evoker-glossary#^pyre|Pyre]] снижают КД [[evoker-glossary#^empower|Empower]]-заклинаний
- **[[evoker-glossary#^burnout|Burnout]]** — [[evoker-glossary#^living-flame|Living Flame]] мгновенный (прок)
- **[[evoker-glossary#^essence-burst|Essence Burst]]** (Ruby + Azure) — генерация ресурсов
- **Essence Attunement** — доп. стаки [[evoker-glossary#^essence-burst|Essence Burst]]
- **[[evoker-glossary#^eternity-surge|Eternity Surge]]** — ключевой [[evoker-glossary#^empower|Empower]]
- **[[evoker-glossary#^pyre|Pyre]]** — AoE-спендер
- **[[evoker-glossary#^spellweavers-dominance|Spellweaver's Dominance]]** — +230% крит-бонус для [[evoker-glossary#^empower|Empower]]
- **Azure Celerity** — [[evoker-glossary#^disintegrate|Disintegrate]] тикает 1 доп. раз
- **[[evoker-glossary#^tip-the-scales|Tip the Scales]]** — мгновенный макс-ранк [[evoker-glossary#^empower|Empower]]

M+ ([[evoker-glossary#^scalecommander|Scalecommander]]):
- **Strafing Run** — двойной [[evoker-glossary#^deep-breath|Deep Breath]]
- **Lay Waste** — усиливает урон [[evoker-glossary#^deep-breath|Deep Breath]]
- **[[evoker-glossary#^azure-sweep|Azure Sweep]]** — ключевой с тир-сетом
- **Shattering Stars**
- **Leaping Flames** — бонус [[evoker-glossary#^living-flame|Living Flame]] для клива

Рейд:
- **Charged Blast** — AoE-синергия в бёрст-окно
- **Star Salvo** — +35% урона Shattering Star

---

## Готовые билды (импорт)

> В игре: открыть таланты (N) → Loadouts → Import Loadout → вставить строку → Import

### ST / Рейд / M+ боссы (Scalecommander)

```
CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzMDMDzYmBMYMTzMzMNjx2MmZmZmHYmZGwMmxYmZZmZgBGDWglxox2AyMIYDDMzghB
```

### M+ / AoE (Scalecommander)

```
CsbBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgZmZgZ8AzgBGGjZaMzMNjx2MmZmZGzMzAmZmxYmZZmZgBGDWglxox2AyMIYDzgZGMMA
```

---

## Ключевые правила

1. **[[evoker-glossary#^empower|Empower]] на Rank 1** в стандартной ротации — чем быстрее кастуешь [[evoker-glossary#^empower|Empower]], тем чаще срабатывает [[evoker-glossary#^animosity|Animosity]] (талант, продлевающий [[evoker-glossary#^dragonrage|Dragonrage]] за каждый [[evoker-glossary#^empower|Empower]]-каст)
2. **[[evoker-glossary#^dragonrage|Dragonrage]] = основной бёрст.** Синхронить тринкеты, зелья, [[evoker-glossary#^tip-the-scales|Tip the Scales]] с ним
3. **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]] > [[evoker-glossary#^pyre|Pyre]]** на любом количестве целей ([[evoker-glossary#^scalecommander|Scalecommander]])
4. **[[evoker-glossary#^deep-breath|Deep Breath]] по КД** для Melt Armor дебаффа
5. **Тратить [[evoker-glossary#^essence-burst|Essence Burst]] немедленно** — не допускать оверкап
6. **[[evoker-glossary#^disintegrate|Disintegrate]] ченнелить до конца** для максимизации [[evoker-glossary#^causality|Causality]] CDR
7. **[[evoker-glossary#^hover|Hover]] заранее** — держать заряды для механик, но не оверкапить
8. **[[evoker-glossary#^pyre|Pyre]] на 3+ целях** — до этого [[evoker-glossary#^disintegrate|Disintegrate]] эффективнее

### Когда переключаться на AoE

- **1-2 цели** — ST ротация: [[evoker-glossary#^disintegrate|Disintegrate]] как основной спендер, [[evoker-glossary#^fire-breath|Fire Breath]] / [[evoker-glossary#^eternity-surge|Eternity Surge]] по КД
- **3+ целей** — [[evoker-glossary#^pyre|Pyre]] заменяет [[evoker-glossary#^disintegrate|Disintegrate]] как спендер (больше суммарного урона)
- **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]** ([[evoker-glossary#^scalecommander|Scalecommander]]) — приоритетнее [[evoker-glossary#^pyre|Pyre]] на **любом** количестве целей. [[evoker-glossary#^pyre|Pyre]] кастуется между [[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]
- **Важно:** при 2 целях [[evoker-glossary#^pyre|Pyre]] ещё не выгоден. [[evoker-glossary#^disintegrate|Disintegrate]] + клив от [[evoker-glossary#^mass-disintegrate|Mass Disintegrate]] эффективнее

---

## Opener

### ST Opener (рейд / M+ боссы) — Scalecommander

1. Pre-cast 2x **[[evoker-glossary#^hover|Hover]]** перед пуллом
2. Pre-cast **[[evoker-glossary#^living-flame|Living Flame]]**
3. **[[evoker-glossary#^dragonrage|Dragonrage]]** (зелье во время GCD)
4. **[[evoker-glossary#^tip-the-scales|Tip the Scales]]** + on-use тринкет
5. **[[evoker-glossary#^fire-breath|Fire Breath]]** (Rank 1)
6. **[[evoker-glossary#^eternity-surge|Eternity Surge]]** (Rank 1)
7. **[[evoker-glossary#^deep-breath|Deep Breath]]** x2 (Strafing Run)
8. **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]**
9. Спам **[[evoker-glossary#^disintegrate|Disintegrate]]** до исчерпания [[evoker-glossary#^essence|Essence]]

### ST Opener — Flameshaper вариант

1. Pre-cast **[[evoker-glossary#^living-flame|Living Flame]]**
2. **[[evoker-glossary#^dragonrage|Dragonrage]]** (зелье + тринкет во время GCD)
3. **[[evoker-glossary#^fire-breath|Fire Breath]]** Rank 1
4. **[[evoker-glossary#^tip-the-scales|Tip the Scales]]**
5. **[[evoker-glossary#^eternity-surge|Eternity Surge]]** Rank 1
6. Спам **[[evoker-glossary#^disintegrate|Disintegrate]]**
7. **[[evoker-glossary#^fire-breath|Fire Breath]]** (2-й заряд)
8. Продолжать **[[evoker-glossary#^disintegrate|Disintegrate]]**

### AoE Opener (M+ треш) — Scalecommander

1. **[[evoker-glossary#^eternity-surge|Eternity Surge]]** Rank 1
2. **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]**
3. **[[evoker-glossary#^deep-breath|Deep Breath]]** x2
4. Зелье + тринкет + **[[evoker-glossary#^tip-the-scales|Tip the Scales]]**
5. **[[evoker-glossary#^dragonrage|Dragonrage]]**
6. **[[evoker-glossary#^fire-breath|Fire Breath]]**
7. **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]**
8. Спам **[[evoker-glossary#^pyre|Pyre]]**

---

## ST приоритет (рейды)

1. **[[evoker-glossary#^dragonrage|Dragonrage]]** — по КД
2. **[[evoker-glossary#^fire-breath|Fire Breath]]** (Rank 1) — по КД, синхронить с [[evoker-glossary#^dragonrage|Dragonrage]] когда возможно
3. **[[evoker-glossary#^eternity-surge|Eternity Surge]]** (Rank 1) — по КД
4. **[[evoker-glossary#^deep-breath|Deep Breath]]** — по КД ([[evoker-glossary#^scalecommander|Scalecommander]])
5. **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]** — приоритет над обычным [[evoker-glossary#^disintegrate|Disintegrate]] ([[evoker-glossary#^scalecommander|Scalecommander]])
6. **[[evoker-glossary#^disintegrate|Disintegrate]]** — тратить [[evoker-glossary#^essence|Essence]] (или бесплатно по проку [[evoker-glossary#^essence-burst|Essence Burst]]), ченнелить до конца для максимизации [[evoker-glossary#^causality|Causality]] CDR
7. **[[evoker-glossary#^azure-sweep|Azure Sweep]]** — по прокам тир-сета
8. **[[evoker-glossary#^living-flame|Living Flame]]** — филлер (или [[evoker-glossary#^azure-strike|Azure Strike]] если нужно двигаться без [[evoker-glossary#^hover|Hover]])

> [!important] Ключевое правило
> [[evoker-glossary#^fire-breath|Fire Breath]] и [[evoker-glossary#^eternity-surge|Eternity Surge]] кастуются на **Rank 1** (минимальный [[evoker-glossary#^empower|Empower]]) в стандартной ротации. Это максимизирует количество кастов в минуту и продление [[evoker-glossary#^dragonrage|Dragonrage]] через [[evoker-glossary#^animosity|Animosity]].

---

## AoE приоритет (M+)

**1-3 цели:**
- Спендить [[evoker-glossary#^essence|Essence]] на **[[evoker-glossary#^disintegrate|Disintegrate]]** ([[evoker-glossary#^mass-disintegrate|Mass Disintegrate]] приоритетнее)
- [[evoker-glossary#^fire-breath|Fire Breath]] / [[evoker-glossary#^eternity-surge|Eternity Surge]] по КД

**3+ целей:**
- Спендить [[evoker-glossary#^essence|Essence]] на **[[evoker-glossary#^pyre|Pyre]]** (с 3 целей [[evoker-glossary#^pyre|Pyre]] обгоняет [[evoker-glossary#^disintegrate|Disintegrate]] по суммарному урону)
- **[[evoker-glossary#^mass-disintegrate|Mass Disintegrate]]** приоритетнее [[evoker-glossary#^pyre|Pyre]] на любом количестве целей
- **[[evoker-glossary#^pyre|Pyre]]** вставлять между кастами [[evoker-glossary#^mass-disintegrate|Mass Disintegrate]] ([[evoker-glossary#^mass-disintegrate|Mass Disintegrate]] на КД → [[evoker-glossary#^pyre|Pyre]] → [[evoker-glossary#^mass-disintegrate|Mass Disintegrate]])
- **[[evoker-glossary#^deep-breath|Deep Breath]]** по КД для Melt Armor дебаффа
- Поддерживать **[[evoker-glossary#^fire-breath|Fire Breath]]** DoT на нескольких целях

---

## Дефенсивы и утилити

### Дефенсивы

| Способность | Эффект | Примечание |
|---|---|---|
| **[[evoker-glossary#^obsidian-scales|Obsidian Scales]]** | Основной [[evoker-glossary#^damage-reduction|DR]] кулдаун, плоское снижение урона | Первый дефенсив в ротации |
| **[[evoker-glossary#^renewing-blaze|Renewing Blaze]]** | Пассивный в Midnight — активируется через [[evoker-glossary#^obsidian-scales|Obsidian Scales]], накапливает и конвертирует урон в хил | Не нужно жать отдельно |
| **[[evoker-glossary#^zephyr|Zephyr]]** | AoE [[evoker-glossary#^damage-reduction|DR]] + скорость для группы | Использовать при групповом уроне |
| **[[evoker-glossary#^hover|Hover]]** | Каст в движении + доп. мобильность | Можно активировать во время каста (новое в Midnight) |
| **[[evoker-glossary#^cauterize|Cauterize]]** | Предотвращение смерти (Cheat Death) | Пассив |
| **[[evoker-glossary#^glide|Glide]]** | Отменяет нокбэки в воздухе | Спасает от механик |

### Утилити

- **[[evoker-glossary#^rescue|Rescue]]** — перемещает союзника к себе. "Может спасти весь данж"
- **[[evoker-glossary#^cauterizing-flame|Cauterizing Flame]]** — 4-в-1 диспел: кровотечения, яды, проклятия, болезни. Уникальный и крайне ценный
- **Oppressing Roar** — продлевает CC
- **Wing Buffet / Tail Swipe** — нокбэк / нокап для кайтинга
- **[[evoker-glossary#^stretch-time|Stretch Time]]** — приостанавливает урон на 10 сек после [[evoker-glossary#^deep-breath|Deep Breath]]. **Осторожно с [[evoker-glossary#^scalecommander|Scalecommander]]** — потеря DPS, т.к. задерживает возврат к ротации

---

## Гир и тринкеты

### Тир-сет: Black Talon

- **2-Set:** [[evoker-glossary#^azure-sweep|Azure Sweep]] урон +50%, урон по основной цели +100% дополнительно
- **4-Set:** [[evoker-glossary#^eternity-surge|Eternity Surge]] даёт 1 доп. заряд [[evoker-glossary#^azure-sweep|Azure Sweep]]. [[evoker-glossary#^azure-sweep|Azure Sweep]] снижает КД [[evoker-glossary#^eternity-surge|Eternity Surge]] на 2 сек

**Влияние:** [[evoker-glossary#^azure-sweep|Azure Sweep]] становится ключевой ротационной способностью в любом контенте.

Приоритет частей: Шлем, Плечи, Грудь, Ноги (избегать Перчатки — слишком много Vers).

### BiS тринкеты

| Тринкет | Тип | Рейтинг | Примечание |
|---|---|---|---|
| **Vaelgor's Final Stare** | On-use Mastery | S | Рейд, синхронить с [[evoker-glossary#^dragonrage|Dragonrage]] |
| **Gaze of the Alnseer** | Passive Int стак | S | Рейд |
| **Shadow of the Empyrean Requiem** | Passive (execute scaling) | S | "by far our best trinket" |
| **Emberwing Feather** | On-use Haste | A | Данж |
| **Crucible of Erratic Energies** | Passive | A | M+ популярный |
| **Vessel of Tortured Souls** | Passive Int стак | A | Данж |

> [!note] Рейд vs M+
> Для рейда: Vaelgor's Final Stare + Shadow of the Empyrean Requiem (или Gaze of the Alnseer)
> Для M+: Crucible of Erratic Energies доминирует среди топ-игроков

### Оружие

- **Рейд BiS:** Belo'melorn, The Shattered Talon (MH) + Grimoire of the Eternal Light (OH)
- **Крафт:** Aln'hara Cane (стафф) с Darkmoon Sigil: Hunt — хорош в начале сезона

### Эмбелишменты

- **Darkmoon Sigil: Hunt** — на крафт-оружие (ранний сезон)
- **Arcanoweave Lining** — высший бюджет
- **Devouring Banding** — альтернатива

### Самоцветы и зачарования

- **Мета-гем:** Indecipherable Eversong Diamond
- **Остальные:** Quick Garnet (Haste) или Deadly Peridot (Crit)
- **Оружие:** Acuity of the Ren'dorei
- **Кольца:** Silvermoon's Alacrity (Haste) / Nature's Wrath (Crit)
- **Грудь:** Mark of the Worldsoul
- **Ноги:** Sunfire Silk Spellthread

### Расходники

| Тип | Название |
|---|---|
| Фласк | Flask of the Shattered Sun |
| Еда | Harandar Celebration / Silvermoon Parade |
| Зелье | Potion of Recklessness / Light's Potential |
| Масло | Thalassian Phoenix Oil |
| Augment Rune | Void-Touched Augment Rune |

---

## Статы

### Приоритет

**Intellect >> Haste > Crit > Mastery > Versatility**

> [!note] Статы спорны — симить обязательно
> - Method / Icy Veins / Maxroll M+ / Wowhead: Haste > Crit
> - Overgear / один вариант Maxroll: Crit > Haste
> - Оба стата очень близки по ценности. **Sim your own gear** через Raidbots.

Нюансы:
- **Haste** — снижает GCD, ускоряет [[evoker-glossary#^empower|Empower]]-касты, косвенно продлевает [[evoker-glossary#^dragonrage|Dragonrage]] (больше кастов = больше [[evoker-glossary#^animosity|Animosity]])
- **Crit** — скейлится с [[evoker-glossary#^spellweavers-dominance|Spellweaver's Dominance]] (+230% крит-бонус для [[evoker-glossary#^empower|Empower]]). Огромная ценность
- **[[evoker-glossary#^mastery-giantkiller|Mastery: Giantkiller]]** — урон по целям с высоким HP. Максимальный эффект во время [[evoker-glossary#^dragonrage|Dragonrage]] ([[evoker-glossary#^tyranny|Tyranny]])
- **Versatility** — плоский бонус урона + [[evoker-glossary#^damage-reduction|DR]]. Наименее ценный для DPS
- **Item Level > вторичные статы** — более высокий ilvl почти всегда лучше
