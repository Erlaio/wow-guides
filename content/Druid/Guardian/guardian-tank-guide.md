---
tags:
  - wow
  - guardian
  - druid
  - tank
  - guide
created: 2026-03-15
---

Термины и сокращения → [[druid-glossary|Глоссарий]]

> **Patch:** 12.0.1 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

> Guardian Druid получил серьёзную переработку дерева талантов и философии геймплея.

**Удалено:**
- **Rage of the Sleeper** — убран
- **Thorns of Iron** — убран (был причиной токсичного геймплей-лупа с [[druid-glossary#^ironfur|Ironfur]]-спамом для ДПС)
- **Tooth and Claw** — убран

**Добавлено / переработано:**
- **[[druid-glossary#^heart-of-the-wild|Heart of the Wild]]** — переработан в 2-мин [[druid-glossary#^cd|КД]] с мгновенным эффектом по форме (Cat → Feral Frenzy, Moonkin → АоЕ бёрст, Caster → Wild Growth)
- **[[druid-glossary#^natural-resilience|Natural Resilience]]** — новый талант (80% оверхила [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]] → абсорб-щит)
- **[[druid-glossary#^harnessed-rage|Harnessed Rage]]** — новый (2-й заряд [[druid-glossary#^mangle|Mangle]], [[druid-glossary#^gore|Gore]] при 80+ [[druid-glossary#^rage|rage]])
- **[[druid-glossary#^killing-blow|Killing Blow]]** — новый (удвоение урона спендера за +20 [[druid-glossary#^rage|rage]])
- **[[druid-glossary#^dream-of-cenarius|Dream of Cenarius]]** — рework, стакается до 4 раз для усиленных [[druid-glossary#^regrowth|Regrowth]]
- **[[druid-glossary#^wild-guardian|Wild Guardian]]** (Apex) — новая система апекс-талантов
- **[[druid-glossary#^berserk-guardian|Berserk]]** — сокращён до 1 очка таланта
- Общая перестройка дерева талантов спеки

**Суть изменений:** [[druid-glossary#^ironfur|Ironfur]]-спам для урона больше не работает. [[druid-glossary#^rage|Rage]] теперь тратится на [[druid-glossary#^maul|Maul]]/[[druid-glossary#^raze|Raze]] для урона, [[druid-glossary#^ironfur|Ironfur]] — только для выживания. APM снижен, геймплей стал проще.

---

## Сильные и слабые стороны

**Сильные:**
- Сильная пассивная [[druid-glossary#^damage-reduction|DR]] через таланты и базовые пассивки
- Бесконечная стакаемая [[druid-glossary#^active-mitigation|активная митигация]] ([[druid-glossary#^ironfur|Ironfur]]) — 100% [[druid-glossary#^uptime|аптайм]]
- Короткие [[druid-glossary#^cd|КД]] дефенсивов позволяют сглаживать урон постоянно
- Отличная выживаемость против физического урона и спайк-дэмеджа
- [[druid-glossary#^catweaving|Catweaving]] даёт конкурентный [[druid-glossary#^st|ST]]-урон
- Лучшая утилити среди танков: [[druid-glossary#^stampeding-roar|Stampeding Roar]], [[druid-glossary#^innervate|Innervate]], [[druid-glossary#^soothe|Soothe]], офф-хил через [[druid-glossary#^dream-of-cenarius|Dream of Cenarius]]
- A-тир в M+ (выше Blood DK, VDH, Prot Warrior)

**Слабые:**
- Ограниченный контроль (нет стана, кроме [[druid-glossary#^incapacitating-roar|Incapacitating Roar]])
- Медленный набор аггро на старте пулла (урон через [[druid-glossary#^dot|DoT]])
- Нет уникальной утилити, которой бы не было у других друид-спеков
- Уступает Brewmaster Monk и Prot Paladin (S-тир) в текущем мете

---

## Таланты

### Hero Talent

**[[druid-glossary#^druid-of-the-claw-guardian|Druid of the Claw]]** — рекомендуется как основной выбор для любого контента (рейд и М+). Фокус на блид-механике: [[druid-glossary#^rake|Rake]], [[druid-glossary#^rip|Rip]] и частые [[druid-glossary#^proc|проки]] [[druid-glossary#^ravage|Ravage]]. Лучший урон в [[druid-glossary#^st|СТ]] и стабильная защита. Ключевые таланты: [[druid-glossary#^ravage|Ravage]], Claw Rampage, Ruthless Aggression, Wildshape Mastery, [[druid-glossary#^feline-potential|Fluid Form]].

**[[druid-glossary#^elunes-chosen-guardian|Elune's Chosen]]** — альтернатива для [[druid-glossary#^aoe|АоЕ]], проще в освоении. Фокус на [[druid-glossary#^moonfire|Moonfire]] и [[druid-glossary#^lunar-beam|Lunar Beam]]. Жизнеспособна в М+, но [[druid-glossary#^druid-of-the-claw-guardian|Druid of the Claw]] оптимальнее в большинстве ситуаций из-за того, что оба билда теперь тратят [[druid-glossary#^rage|rage]] на [[druid-glossary#^raze|Raze]], а DotC делает это эффективнее. Ключевые: Lunar Calling, Star Cascade, Lunar Insight, [[druid-glossary#^twin-moonfire|Twin Moonfire]].

> [!note] Консенсус гайдов
> Играть [[druid-glossary#^druid-of-the-claw-guardian|Druid of the Claw]] везде. Murlok.io: 30 из 50 топ-игроков используют DotC. [[druid-glossary#^elunes-chosen-guardian|Elune's Chosen]] — если хочется проще или чисто [[druid-glossary#^aoe|АоЕ]]-контент.

### Apex Talent

**[[druid-glossary#^wild-guardian|Wild Guardian]]** — основной апекс-талант. После каста [[druid-glossary#^berserk-guardian|Berserk]] / [[druid-glossary#^incarnation-guardian|Incarnation]] активируется Wild Guardian, который дублирует следующие 2 каста [[druid-glossary#^ironfur|Ironfur]], [[druid-glossary#^maul|Maul]] и [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]] с 50% эффективностью. По сути добавляет 12-секундный [[druid-glossary#^dot|DoT]] через [[druid-glossary#^maul|Maul]], который поддерживается кастом [[druid-glossary#^maul|Maul]] раз в 12 секунд.

### Ключевые таланты (общие)

- **[[druid-glossary#^harnessed-rage|Harnessed Rage]]** — даёт 2-й заряд [[druid-glossary#^mangle|Mangle]] и увеличивает шанс [[druid-glossary#^proc|прока]] [[druid-glossary#^gore|Gore]] при трате [[druid-glossary#^rage|rage]] выше 80
- **[[druid-glossary#^natural-resilience|Natural Resilience]]** — 80% оверхила от [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]] конвертируется в абсорб-щит (очень сильно)
- **[[druid-glossary#^killing-blow|Killing Blow]]** — удваивает урон спендера за 20 дополнительного [[druid-glossary#^rage|rage]]
- **[[druid-glossary#^dream-of-cenarius|Dream of Cenarius]]** — рeworked, стакается до 4 раз, позволяя копить усиленные [[druid-glossary#^regrowth|Regrowth]] для лечения
- **[[druid-glossary#^flashing-claws|Flashing Claws]]** — талант на урон, можно дропнуть ради выживаемости
- **[[druid-glossary#^ursocs-fury|Ursoc's Fury]]** — значительно повышает танкоустойчивость в обоих hero-билдах
- **[[druid-glossary#^rend-and-tear|Rend and Tear]]** — усиливает [[druid-glossary#^thrash|Thrash]], must-have для обоих билдов
- **[[druid-glossary#^scintillating-moonlight|Scintillating Moonlight]]** — пассивная защита при поддержании [[druid-glossary#^moonfire|Moonfire]]
- **[[druid-glossary#^reinforced-fur|Reinforced Fur]]** — усиливает [[druid-glossary#^ironfur|Ironfur]] для тяжёлых танк-чеков

### Рейд vs М+

**Рейд:**
- [[druid-glossary#^druid-of-the-claw-guardian|Druid of the Claw]]
- Без [[druid-glossary#^catweaving|catweaving]] (преимущества минимальны в рейде)
- Фокус на [[druid-glossary#^st|СТ]]-выживаемость и утилити (контроль)
- Больше очков в защиту: [[druid-glossary#^reinforced-fur|Reinforced Fur]], Ursoc's Endurance

**М+:**
- [[druid-glossary#^druid-of-the-claw-guardian|Druid of the Claw]] (или [[druid-glossary#^elunes-chosen-guardian|Elune's Chosen]] для простоты)
- [[druid-glossary#^catweaving|Catweaving]] через [[druid-glossary#^heart-of-the-wild|Heart of the Wild]] — [[druid-glossary#^feline-potential|Fluid Form]] + Persistence для вхождения в Cat Form на бёрсты
- Больше очков в урон: [[druid-glossary#^flashing-claws|Flashing Claws]]
- [[druid-glossary#^twin-moonfire|Twin Moonfire]] (если [[druid-glossary#^elunes-chosen-guardian|Elune's Chosen]]) для быстрого спреда урона

---

## Готовые билды (импорт)

### Рейд — Druid of the Claw

```
CgGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgZmxsMPwYM2MLzMPgZZZgZDGNRzMzyMzMzYMjZAAAAAADLzAAAAQNzysMzMDAgFMzAsYGMYwy2AgZWgB
```

> [!note] Фокус
> [[druid-glossary#^st|СТ]]-урон через [[druid-glossary#^mangle|Mangle]] и [[druid-glossary#^maul|Maul]]. Тратить [[druid-glossary#^rage|rage]] на [[druid-glossary#^maul|Maul]] оффенсивно, поддерживая 1 стак [[druid-glossary#^ironfur|Ironfur]] по необходимости. [[druid-glossary#^killing-blow|Killing Blow]], [[druid-glossary#^harnessed-rage|Harnessed Rage]] и [[druid-glossary#^red-moon|Red Moon]] — ядро ротации.

### М+ — Elune's Chosen (рекомендуемый)

```
CgGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgZmZmlZGjxiZh5BmZZZgZzwoJamZWmZmZmlxMAAAAAAMsMDYZbmBjZZAMFAAAYzYmHAYxMYwgltBYmBwA
```

> [!note] Фокус
> [[druid-glossary#^aoe|АоЕ]]-урон. [[druid-glossary#^twin-moonfire|Twin Moonfire]] для спреда [[druid-glossary#^moonfire|Moonfire]]. [[druid-glossary#^ursocs-fury|Ursoc's Fury]] и Elune's Favored для выживаемости — адаптировать под комфорт.

### М+ — Druid of the Claw (catweaving)

> [!warning] Нет импорт-строки
> Используйте рейдовый билд DotC как базу, заменив дефенсивные таланты (Ursoc's Endurance) на [[druid-glossary#^flashing-claws|Flashing Claws]] и Fluid Form + Persistence для [[druid-glossary#^catweaving|catweaving]].

---

## Ключевые правила

1. **[[druid-glossary#^ironfur|Ironfur]] ≠ DPS.** Не спамить [[druid-glossary#^ironfur|Ironfur]] без необходимости. Тратить [[druid-glossary#^rage|rage]] на [[druid-glossary#^maul|Maul]]/[[druid-glossary#^raze|Raze]] для урона
2. **[[druid-glossary#^rage|Rage]] 80+** — идеальная точка для трат с [[druid-glossary#^harnessed-rage|Harnessed Rage]] (больше [[druid-glossary#^proc|проков]] [[druid-glossary#^gore|Gore]] → больше [[druid-glossary#^mangle|Mangle]])
3. **Не перекрывать [[druid-glossary#^barkskin|Barkskin]] и [[druid-glossary#^survival-instincts|Survival Instincts]]** — чередовать (стакаются мультипликативно, перекрытие = потеря общей [[druid-glossary#^dr|DR]])
4. **[[druid-glossary#^catweaving|Catweaving]]:** сбрасывать [[druid-glossary#^rage|rage]] ниже 25 перед шифтом в Cat Form
5. **[[druid-glossary#^moonfire|Moonfire]] и [[druid-glossary#^thrash|Thrash]]** — поддерживать всегда, это основа пассивной защиты через [[druid-glossary#^scintillating-moonlight|Scintillating Moonlight]] и [[druid-glossary#^rend-and-tear|Rend and Tear]]
6. **Правильная ротация = защита.** Многие дефенсивные таланты работают пассивно при корректном выполнении ротации
7. **[[druid-glossary#^maul|Maul]] в [[druid-glossary#^st|СТ]], [[druid-glossary#^raze|Raze]] в [[druid-glossary#^aoe|АоЕ]]** — основное правило трат [[druid-glossary#^rage|rage]]

---

## Ротация / приоритет урона

### Общий приоритет (Druid of the Claw)

1. Поддерживать [[druid-glossary#^moonfire|Moonfire]] на цели
2. Поддерживать 3+ стаков [[druid-glossary#^thrash|Thrash]]
3. [[druid-glossary#^red-moon|Red Moon]] по [[druid-glossary#^cd|кд]] (если взят)
4. [[druid-glossary#^mangle|Mangle]] по [[druid-glossary#^cd|кд]] (высший приоритет генератора)
5. [[druid-glossary#^thrash|Thrash]] по [[druid-glossary#^cd|кд]]
6. Тратить [[druid-glossary#^rage|rage]] (60+) на [[druid-glossary#^maul|Maul]] / [[druid-glossary#^raze|Raze]] / [[druid-glossary#^ravage|Ravage]]
7. [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]] при просадке здоровья
8. [[druid-glossary#^moonfire|Moonfire]] по [[druid-glossary#^proc|проку]] [[druid-glossary#^galactic-guardian|Galactic Guardian]]
9. [[druid-glossary#^swipe|Swipe]] как филлер

> [!important] Rage management
> Тратить [[druid-glossary#^rage|rage]] при 80+ для максимизации [[druid-glossary#^proc|проков]] [[druid-glossary#^gore|Gore]] с [[druid-glossary#^harnessed-rage|Harnessed Rage]]. Нажимать [[druid-glossary#^ironfur|Ironfur]] без дефенсивной необходимости — серьёзная потеря DPS.

### Приоритет Elune's Chosen

1. [[druid-glossary#^moonfire|Moonfire]] на цели
2. 3+ стаков [[druid-glossary#^thrash|Thrash]]
3. [[druid-glossary#^lunar-beam|Lunar Beam]] почти по [[druid-glossary#^cd|кд]] (получает CDR от Lunar Calling и [[druid-glossary#^thrash|Thrash]])
4. Тратить [[druid-glossary#^rage|rage]] (80+) на [[druid-glossary#^maul|Maul]] / [[druid-glossary#^raze|Raze]]
5. [[druid-glossary#^mangle|Mangle]] по [[druid-glossary#^cd|кд]]
6. [[druid-glossary#^thrash|Thrash]] по [[druid-glossary#^cd|кд]]
7. [[druid-glossary#^moonfire|Moonfire]] (но не в ущерб [[druid-glossary#^mangle|Mangle]])

> [!note] АоЕ ротация
> [[druid-glossary#^aoe|АоЕ]] и [[druid-glossary#^st|СТ]] ротация Guardian практически идентичны. Приоритеты не меняются, что упрощает геймплей.

### [[druid-glossary#^catweaving|Catweaving]] (Druid of the Claw, М+)

[[druid-glossary#^catweaving|Catweaving]] — переключение между Bear и Cat Form для повышения урона. Даёт значительный прирост [[druid-glossary#^st|ST]] DPS, но требует аккуратного исполнения. Wildshape Mastery сохраняет 80% брони медведя на 6 сек после трансформации.

1. Поддержать [[druid-glossary#^moonfire|Moonfire]] и 3+ стаков [[druid-glossary#^thrash|Thrash]]
2. При 80+ [[druid-glossary#^rage|rage]] — [[druid-glossary#^maul|Maul]]/[[druid-glossary#^raze|Raze]]/[[druid-glossary#^ravage|Ravage]] в Bear Form
3. При 6 стаках [[druid-glossary#^feline-potential|Feline Potential]] — [[druid-glossary#^ferocious-bite|Ferocious Bite]] или [[druid-glossary#^rip|Rip]]
4. [[druid-glossary#^rip|Rip]] с 6+ комбо-поинтами если не висит
5. [[druid-glossary#^ferocious-bite|Ferocious Bite]] с 2+ комбо-поинтами при активном [[druid-glossary#^rip|Rip]]
6. Bear-генераторы: [[druid-glossary#^mangle|Mangle]], [[druid-glossary#^thrash|Thrash]], [[druid-glossary#^galactic-guardian|Galactic Guardian]] [[druid-glossary#^moonfire|Moonfire]]
7. Сбросить [[druid-glossary#^rage|rage]] ниже 25 перед шифтом в Cat ([[druid-glossary#^rage|rage]] сбрасывается до 25 при возврате в Bear)
8. Cat DPS: [[druid-glossary#^rake|Rake]] → [[druid-glossary#^shred|Shred]], [[druid-glossary#^swipe|Swipe]] если небезопасно

> [!warning] Catweaving — только когда безопасно
> Не переключаться в Cat Form при активном танковании тяжёлого урона. Использовать между паками или когда off-tank держит босса.

### Rage Management

- **Стандартная ротация:** тратить [[druid-glossary#^rage|rage]] на 60+
- **С [[druid-glossary#^harnessed-rage|Harnessed Rage]]:** стараться тратить при 80+ [[druid-glossary#^rage|rage]] для повышения шанса [[druid-glossary#^gore|Gore]]
- **[[druid-glossary#^catweaving|Catweaving]]:** сбросить [[druid-glossary#^rage|rage]] ниже 25 перед переходом в Cat Form ([[druid-glossary#^rage|rage]] ресетится до 25 при возврате)
- **Приоритет трат:** [[druid-glossary#^maul|Maul]] ([[druid-glossary#^st|СТ]]) / [[druid-glossary#^raze|Raze]] ([[druid-glossary#^aoe|АоЕ]]) > [[druid-glossary#^ironfur|Ironfur]] (по необходимости) > [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]]
- **Не спамить [[druid-glossary#^ironfur|Ironfur]] без нужды** — это огромная потеря DPS. Держать 1-3 стака в зависимости от входящего урона

---

## Дефенсивы

### Таблица дефенсивов

| Способность | Эффект | КД | Примечание |
|---|---|---|---|
| **Ironfur** | Стакаемый бафф брони, off-**GCD** | нет (стоит **rage**) | Основная **активная митигация**. 1-3 стака постоянно. Не спамить для DPS |
| **Barkskin** | 20% **DR** всего урона, 12 сек | ~60 сек | Первый деф в ротации **КД**. Жать часто. С Brambles наносит урон |
| **Survival Instincts** | 50-60% **DR**, 6 сек | длинный **КД** | Для опасных фаз и больших ударов. **Не перекрывать с Barkskin** |
| **Frenzied Regeneration** | Самохил % макс. HP | короткий | С **Natural Resilience**: 80% оверхила → абсорб. Использовать проактивно |
| **Incarnation** / **Berserk** | Офф + деф **КД**, активирует **Wild Guardian** | 3 мин | Максимизировать **Thrash** и **Mangle**, не допускать переполнения **rage** |
| **Lunar Beam** | Урон + хил зона | ~1 мин | В Elune's — ключевой **КД**, жать по кд |
| **Heart of the Wild** | Эффект по форме | 2 мин | Cat = Feral Frenzy, Moonkin = **АоЕ** бёрст, Caster = Wild Growth |

### Стратегия ротации дефов

[[druid-glossary#^barkskin|Barkskin]] → (перерыв) → [[druid-glossary#^survival-instincts|Survival Instincts]] → (перерыв) → [[druid-glossary#^barkskin|Barkskin]]. Не перекрывать. [[druid-glossary#^ironfur|Ironfur]] держать постоянно как базовый слой. [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]] — реактивно или проактивно под большой урон.

---

## Приоритет для М+

### Пулл

1. [[druid-glossary#^moonfire|Moonfire]] на подходе для аггро
2. [[druid-glossary#^thrash|Thrash]] сразу в паке для стаков и аггро
3. [[druid-glossary#^mangle|Mangle]] по [[druid-glossary#^cd|кд]]
4. [[druid-glossary#^ironfur|Ironfur]] перед входящим уроном (1-2 стака)
5. [[druid-glossary#^barkskin|Barkskin]] на первом большом пулле
6. [[druid-glossary#^raze|Raze]] для [[druid-glossary#^aoe|АоЕ]] урона при 60+ [[druid-glossary#^rage|rage]]
7. [[druid-glossary#^lunar-beam|Lunar Beam]] (Elune's) или [[druid-glossary#^incarnation-guardian|Incarnation]] на сложных паках

### Стратегия паков

- **Маленькие паки (3-5 мобов):** [[druid-glossary#^barkskin|Barkskin]] + [[druid-glossary#^ironfur|Ironfur]] достаточно. [[druid-glossary#^catweaving|Catweave]] между паками
- **Большие паки (6+ мобов):** [[druid-glossary#^incarnation-guardian|Incarnation]]/[[druid-glossary#^berserk-guardian|Berserk]] + [[druid-glossary#^barkskin|Barkskin]]. Спамить [[druid-glossary#^thrash|Thrash]] + [[druid-glossary#^raze|Raze]]
- **Опасные паки / тиранические боссы:** [[druid-glossary#^survival-instincts|Survival Instincts]] + [[druid-glossary#^ironfur|Ironfur]] стаки. Не [[druid-glossary#^catweaving|catweave]]
- **Кайтинг:** [[druid-glossary#^typhoon|Typhoon]] + [[druid-glossary#^ursols-vortex|Ursol's Vortex]] → отбежать → [[druid-glossary#^moonfire|Moonfire]] спред для поддержания аггро

### Между паками

- Восполнить HP через [[druid-glossary#^frenzied-regeneration|Frenzied Regeneration]]
- Сбросить [[druid-glossary#^ironfur|Ironfur]] если не нужен
- [[druid-glossary#^catweaving|Catweave]] для урона если безопасно

### Приоритет урона в М+

- [[druid-glossary#^aoe|АоЕ]] ротация та же, что и [[druid-glossary#^st|СТ]] — приоритеты не меняются
- [[druid-glossary#^thrash|Thrash]] и [[druid-glossary#^raze|Raze]] — основные [[druid-glossary#^aoe|АоЕ]]-источники урона
- [[druid-glossary#^moonfire|Moonfire]] спред через [[druid-glossary#^twin-moonfire|Twin Moonfire]] ([[druid-glossary#^elunes-chosen-guardian|Elune's Chosen]])
- [[druid-glossary#^heart-of-the-wild|Heart of the Wild]] в Moonkin Form для [[druid-glossary#^aoe|АоЕ]] бёрстов

### Утилити

- [[druid-glossary#^typhoon|Typhoon]] / [[druid-glossary#^ursols-vortex|Ursol's Vortex]] для кайтинга
- [[druid-glossary#^soothe|Soothe]] для снятия enrage
- [[druid-glossary#^stampeding-roar|Stampeding Roar]] для группового спида
- Mark of the Wild — бафф группе
- [[druid-glossary#^regrowth|Regrowth]] с [[druid-glossary#^dream-of-cenarius|Dream of Cenarius]] — офф-хил группе
- [[druid-glossary#^incapacitating-roar|Incapacitating Roar]] — [[druid-glossary#^aoe|АоЕ]] стан на 3 сек

---

## Статы

**Приоритет:** Item Level > Agility > Haste > Versatility >= Critical Strike >= [[druid-glossary#^mastery-guardian|Mastery]]

> [!important] Все статы близки по ценности
> Все вторичные статы у Guardian крайне близки по силе. Нет брейкпоинтов или целевых значений. Лучше балансировать равномерно, чтобы не попасть в diminishing returns. При сомнениях — **симить персонажа** через Raidbots.

| Стат | Зачем | Примечание |
|---|---|---|
| **Item Level** | Всегда приоритет | Вторичные важны только при одинаковом ilvl |
| **Agility** | Основной стат, скейлит всё | Всегда берём, не выбираем |
| **Haste** | Снижает **ГКД**, **кд** **Mangle**/**Thrash**/**FR**, ускоряет тики **DoT** | Лучший "на ощущения" стат |
| **Versatility** | Плоская **DR** + бонус к урону и хилу | Лучший стат для чистой выживаемости |
| **Critical Strike** | Шанс уклонения через пассивку + бонус к урону | Офф + деф ценность |
| **Mastery** (Nature's Guardian) | Увеличивает макс. HP и получаемое лечение | Полезно, но слабее остальных |

### Энчанты и камни

| Слот | Рекомендация |
|---|---|
| **Оружие** | Berserker's Rage |
| **Голова** | Empowered Blessing of Speed |
| **Плечи** | Akil'zon's Swiftness |
| **Грудь** | Mark of the Worldsoul |
| **Ноги** | Forest Hunter's Armor Kit |
| **Ботинки** | Farstrider's Hunt |
| **Кольца** | Silvermoon's Alacrity (Haste) |
| **Камни** | Flawless Versatile Peridot (все сокеты) |
| **Основной камень** | Indecipherable Eversong Diamond |

---

## Гир и тринкеты

### Тир-сет: Sprouts of the Luminous Bloom

- **2-Set:** [[druid-glossary#^maul|Maul]]/[[druid-glossary#^raze|Raze]] и [[druid-glossary#^ravage|Ravage]] урон **+10%**. [[druid-glossary#^moonfire|Moonfire]] урон **+10%**
- **4-Set:** [[druid-glossary#^maul|Maul]]/[[druid-glossary#^raze|Raze]] и [[druid-glossary#^ravage|Ravage]] имеют доп. **5% шанс** активировать [[druid-glossary#^galactic-guardian|Galactic Guardian]]. Периодический урон [[druid-glossary#^moonfire|Moonfire]] имеет шанс сделать следующий [[druid-glossary#^maul|Maul]]/[[druid-glossary#^raze|Raze]] или [[druid-glossary#^ravage|Ravage]] ударом дважды на **100% эффективности**

> Тир-сет усиливает основной цикл урона (Maul/Raze + Moonfire) и добавляет больше [[druid-glossary#^gore|Gore]]-подобных проков. Не меняет приоритеты ротации. **Приоритет — собрать 4 части ASAP.**

Части сета: голова (Branches), грудь (Trunk), плечи (Seedpods), перчатки (Arbortenders), ноги (Phloemwraps). Оффсет-части выбирать по ilvl.

### Тринкеты

| Тринкет | Тип | Источник | Примечание |
|---|---|---|---|
| **Crucible of Erratic Energies** | Пассив | ? | Топ-1 по популярности у топ-50 M+ игроков (murlok.io, 39/50) |
| **Gaze of the Alnseer** | Пассив | Chimaerus | Лучший пассивный тринкет по гайдам |
| **The Eternal Egg** | Пассив | Belo'ren | Хорошая альтернатива |
| **Algeth'ar Puzzle Box** | On-use | Algeth'ar Academy | Лучший on-use тринкет |
| **Undreamt God's Oozing Vestige** | Пассив | ? | Дефенсивная альтернатива |

> [!note] Танк-тринкеты
> Для прогрессии рейда берите 1 дефенсивный + 1 офф тринкет. В М+ на комфортных ключах — 2 офф тринкета.

### Оружие

| Оружие | Тип | Источник |
|---|---|---|
| **Alnscorned Spire** | Staff | Рейд |
| **Preyseeker's Spear** | Polearm | M+ |
| **Splinterthorn Spear** | Polearm | M+ |
| **Inescapable Reach** | Polearm | ? |

> [!note] Выбор оружия
> Всегда берите оружие с наивысшим ilvl. При одинаковом ilvl — предпочтение Haste/Vers.

### Embellishments

> [!warning] Нужна верификация
> Конкретные рекомендации по embellishments для Guardian Druid в Midnight Season 1 не были найдены в проверенных источниках. Проверьте Wowhead/Icy Veins для актуальных рекомендаций.

---

## Расходники

| Тип | Название | Примечание |
|---|---|---|
| **Фласка** | Flask of the Blood Knights | Haste. Все статы близки — альтернативы тоже работают |
| **Еда** | Silvermoon Parade | Основной стат (agility) — всегда лучший выбор |
| **Еда (альт.)** | Harandar Celebration | Если нет Silvermoon Parade |
| **Боевое зелье** | Draught of Rampant Abandon | Основной выбор |
| **Зелье (альт.)** | Light's Potential | Ситуативно по механикам |
| **Хил-пот** | Silvermoon Health Potion | — |
| **Масло на оружие** | Thalassian Phoenix Oil | Crit/Haste бафф |
| **Augment Rune** | Void-Touched Augment Rune | — |

---

## Расы

### Орда

| Раса | Почему |
|---|---|
| **Highmountain Tauren** | Пассивная **DR**, Bull Rush (доп. стан), бонус Versatility. Лучший выбор для танка |
| **Troll** | Berserking (+Haste **КД**) — отличный для **бёрста** и ускорения ротации |
| **Tauren** | War Stomp (**АоЕ** стан) + бонусный Stamina. Солидный выбор |
| **Zandalari Troll** | Embrace выбирается раз и навсегда. Pa'ku (+Crit) или Bwonsamdi (хил при низком HP) |

### Альянс

| Раса | Почему |
|---|---|
| **Kul Tiran** | Haymaker (стан), пассивная **DR** Frost/Nature, Versatility самохил. Лучший для танка |
| **Night Elf** | Shadowmeld (сброс боя/аггро в М+), +Haste. Утилити-выбор |
| **Worgen** | Darkflight (доп. спид), +Crit. Хороший баланс |

> [!note] Расы — минимальная разница
> Разница между расами незначительна. Выбирайте по эстетике и удобству. Highmountain Tauren и Kul Tiran — формально лучшие для танка.
