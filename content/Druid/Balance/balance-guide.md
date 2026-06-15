---
tags:
  - wow
  - balance
  - druid
  - rotation
  - guide
created: 2026-03-15
---

Термины и сокращения → [[druid-glossary|Глоссарий]]

> **Patch:** 12.0.5 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

> Balance Druid получил значительную переработку core-механик в Midnight.

**Удалено:**
- **Stellar Flare** - убрана из дерева талантов
- **Warrior of Elune** - удалена
- **Nature's Vigil** - заменена на [[druid-glossary#^gift-of-the-wild|Дар дикой природы]]
- **Renewal** - убрана как кнопка, осталась пассивная Aessina's Renewal

**Переработано:**
- **[[druid-glossary#^eclipse|Затмение]]** - из пассивного бафф (2 каста → Eclipse) в **активную кнопку** на 2 заряда (32с [[druid-glossary#^cd|КД]] каждый). [[druid-glossary#^wrath|Гнев]] → Solar [[druid-glossary#^eclipse|Затмение]], [[druid-glossary#^starfire|Звездный огонь]] → Lunar [[druid-glossary#^eclipse|Затмение]]. Длительность 15 сек. Основная задача - максимизировать [[druid-glossary#^uptime|аптайм]] [[druid-glossary#^eclipse|Затмение]]
- **[[druid-glossary#^mastery-balance|Искусность: астральные чары]]** - больше не усиливает [[druid-glossary#^moonfire|Лунный огонь]]/[[druid-glossary#^sunfire|Солнечный огонь]] [[druid-glossary#^dot|DoT]]-ы, сконцентрирован на прямом уроне Nature и Arcane заклинаний
- **[[druid-glossary#^heart-of-the-wild|Сердце дикой природы]]** - переделан в 2-мин [[druid-glossary#^cd|КД]] с разными эффектами по формам: Облик медведя (Bear Form) → +30% макс. HP на 20 сек (сохраняется в любой форме), Human Form → усиленный Буйный рост (Wild Growth) (~15% HP союзников за 8 сек)

**Добавлено:**
- **[[druid-glossary#^ascendant-eclipses|Возвышенные затмения]]** (Apex талант) - 4 ранга, все связаны с [[druid-glossary#^eclipse|Затмение]]
- **[[druid-glossary#^total-eclipse|Полное затмение]]** - 10% шанс получить оба [[druid-glossary#^eclipse|Затмение]] одновременно
- **[[druid-glossary#^meteor-storm|Метеоритный шторм]]** - [[druid-glossary#^starfall|Звездопад]] наносит полный урон за половину времени
- **[[druid-glossary#^elunes-challenge|Испытание Элуны]]** - снижение каст-тайма при выходе из [[druid-glossary#^eclipse|Затмение]] с низким [[druid-glossary#^ap|AP]]

**Итог:** спек стал более "кнопочным" - [[druid-glossary#^eclipse|Затмение]] теперь активная способность, а не пассивный цикл. Основная глубина геймплея - в управлении [[druid-glossary#^eclipse|Затмение]]-зарядами и [[druid-glossary#^cd|КД]]-синхронизации.

---

## Сильные и слабые стороны

**Сильные:**
- Хорошая производительность как на [[druid-glossary#^st|ST]], так и на [[druid-glossary#^aoe|AoE]] при правильном таланте
- Гибкие кулдауны - можно копить для [[druid-glossary#^burst|бёрста]] или тратить стабильно
- Отличная мобильность: [[druid-glossary#^stampeding-roar|Тревожный рев]], Dash, пассивные таланты движения
- Простая и понятная ротация, но с глубиной для оптимизации
- Мощная рейд-утилити: [[druid-glossary#^solar-beam|Столп солнечного света]] (бланкет-сайленс), [[druid-glossary#^innervate|Озарение]], [[druid-glossary#^typhoon|Тайфун]], Знак дикой природы (Mark of the Wild)

**Слабые:**
- Требуется полная перенастройка талантов для [[druid-glossary#^st|ST]] vs [[druid-glossary#^aoe|AoE]] - гибридные файты самые слабые
- Босс-файты в M+ - спек не может одновременно талантить под [[druid-glossary#^st|ST]] и [[druid-glossary#^aoe|AoE]]
- Длительный [[druid-glossary#^st|ST]]-урон слабоват - проигрывает чистым ST-спекам на затяжных боссах
- [[druid-glossary#^aoe|AoE]] требует рамп-тайм - нужно развесить [[druid-glossary#^dot|DoT]]-ы и войти в [[druid-glossary#^eclipse|Затмение]] перед [[druid-glossary#^burst|бёрстом]]

---

## Таланты

### Hero Talent

- **[[druid-glossary#^keeper-of-the-grove|Хранитель рощи]]** - основной выбор для **рейда и M+**
  - [[druid-glossary#^force-of-nature|Сила природы]] усилены: треанты дают +4% урона заклинаний (Harmony of the Grove)
  - Dream Surge - следующие 3-4 [[druid-glossary#^wrath|Гнев]]/[[druid-glossary#^starfire|Звездный огонь]] взрываются вокруг цели (доп. Nature-урон)
  - Лучше на [[druid-glossary#^st|ST]] и [[druid-glossary#^spread|спред]]-[[druid-glossary#^cleave|кливе]]
  - Гибкий: короткие [[druid-glossary#^burst|бёрст]]-окна с [[druid-glossary#^force-of-nature|Сила природы]], легко стакать с другими [[druid-glossary#^cd|КД]]

- **[[druid-glossary#^elunes-chosen|Избранник Элуны]]** - альтернатива для **стакнутого AoE**
  - Фокус на [[druid-glossary#^fury-of-elune|Ярость Элуны]] + [[druid-glossary#^lunation|Лунация]] (касты [[druid-glossary#^starfire|Звездный огонь]] снижают [[druid-glossary#^cd|КД]] [[druid-glossary#^fury-of-elune|Ярость Элуны]])
  - [[druid-glossary#^atmospheric-exposure|Атмосферные явления]] - увеличивает получаемый урон для целей в зоне [[druid-glossary#^fury-of-elune|Ярость Элуны]]
  - Сильнее на стакнутом [[druid-glossary#^cleave|кливе]], но сложнее в исполнении
  - Для высоких ключей со стабильно сгруппированными паками

> [!note] Что брать
> **[[druid-glossary#^keeper-of-the-grove|Хранитель рощи]] - лучший выбор для обоих типов контента.** [[druid-glossary#^elunes-chosen|Избранник Элуны]] - нишевый вариант для стакнутого [[druid-glossary#^aoe|AoE]].

### Apex талант

- **[[druid-glossary#^ascendant-eclipses|Возвышенные затмения]]** - 4 ранга, все связаны с [[druid-glossary#^eclipse|Затмение]]:
  - **Rank 1:** при входе в [[druid-glossary#^eclipse|Затмение]] следующие 3 [[druid-glossary#^spender|спендера]] усилены на 20% + следующий [[druid-glossary#^wrath|Гнев]]/[[druid-glossary#^starfire|Звездный огонь]] инстант
  - **Rank 2 (2 очка):** криты в [[druid-glossary#^eclipse|Затмение]] накладывают стакающийся дебафф - 12% урона крита за 6 сек (Languish)
  - **Rank 3:** [[druid-glossary#^eclipse|Затмение]] выпускает Solar Bolt ([[druid-glossary#^st|ST]]) или Lunar Bolt ([[druid-glossary#^aoe|AoE]]); [[druid-glossary#^celestial-alignment|Парад планет]]/[[druid-glossary#^incarnation|Воплощение]] или [[druid-glossary#^total-eclipse|Полное затмение]] [[druid-glossary#^proc|прок]] стреляет обоими. Болты гарантированно критят → активируют Rank 2
  - **Берём всегда, все 4 очка.** Пассивный эффект - не меняет ротацию, но значительно усиливает [[druid-glossary#^burst|бёрст]]-окна

### Ключевые таланты

Всегда берём:
- **[[druid-glossary#^fury-of-elune|Ярость Элуны]]** - предпочтительнее [[druid-glossary#^new-moon|Новолуние]] из-за синергии с [[druid-glossary#^atmospheric-exposure|Атмосферные явления]]
- **[[druid-glossary#^starweaver|Ткач Звезд]]** - [[druid-glossary#^proc|проки]] бесплатных [[druid-glossary#^starsurge|Звездный поток]]/[[druid-glossary#^starfall|Звездопад]] ([[druid-glossary#^rattle-the-stars|Звездная встряска]] - альтернатива)
- **[[druid-glossary#^starlord|Звездный лорд]]** - стакающийся бафф хасты от [[druid-glossary#^spender|спендеров]] (3 стака), ключевой для ритма ротации
- **[[druid-glossary#^shooting-stars|Падающие звезды]]** - генерация [[druid-glossary#^ap|Астральная мощь]] от [[druid-glossary#^dot|DoT]]-ов, особенно сильно на нескольких целях. Усилен тир-сетом
- **[[druid-glossary#^force-of-nature|Сила природы]]** - треанты, ключевой [[druid-glossary#^cd|КД]] для [[druid-glossary#^keeper-of-the-grove|Хранитель рощи]]

Рейд ([[druid-glossary#^keeper-of-the-grove|Хранитель рощи]]):
- **[[druid-glossary#^convoke|Созыв духов]]** - лучше на [[druid-glossary#^st|ST]] и [[druid-glossary#^burst|бёрст]]-окнах; синхронить с [[druid-glossary#^celestial-alignment|Парад планет]]
- **[[druid-glossary#^meteor-storm|Метеоритный шторм]]** - [[druid-glossary#^starfall|Звездопад]] наносит полный урон за половину времени
- Офф-таланты класса: Nurturing Instinct, Lycara's Teachings, Starlight Conduit, Circle of the Heavens, Lore of the Grove

M+ ([[druid-glossary#^keeper-of-the-grove|Хранитель рощи]] / [[druid-glossary#^elunes-chosen|Избранник Элуны]]):
- **[[druid-glossary#^incarnation-balance|Воплощение: избранный Элуны]]** - предпочтительнее [[druid-glossary#^convoke|Созыв духов]] для M+ и каунсил-файтов
- **Aetherial Kindling** - для продолжительных [[druid-glossary#^aoe|AoE]]-ситуаций
- **Light of the Sun** - снижение [[druid-glossary#^cd|КД]] [[druid-glossary#^solar-beam|Столп солнечного света]]
- [[druid-glossary#^typhoon|Тайфун]], [[druid-glossary#^incapacitating-roar|Парализующий рык]] - утилити для контроля мобов

---

## Готовые билды (импорт)

> В игре: открыть таланты (N) → Loadouts → Import Loadout → вставить строку → Import

> [!note]
> Импорт-строки могут меняться с хотфиксами. Если строка не грузится или хочешь свежий билд - бери на [Method](https://www.method.gg/guides/balance-druid/talents), [Wowhead](https://www.wowhead.com/guide/classes/druid/balance/talent-builds-pve-dps) или [Maxroll](https://maxroll.gg/wow/class-guides/balance-druid-mythic-plus-guide).

### ST / Рейд (Keeper of the Grove)

```
CYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoMbNjxMDMmlZmZmBYYWmZZsNjZsxyMGzMzYBDAGgltxGmmZWGBAAAYzMzMzgNjhxMAmZAgB
```

### M+ / AoE (Keeper of the Grove)

```
CYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoMbNMmZgxsMzMzMLMgZbmlZWmxM2YZGjZmZsgBADwy2YDTzMLjAAAAsZm5BmZwmxMGDAzMAwA
```

### M+ / Стакнутый AoE (Elune's Chosen, альтернатива)

```
CYGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWoMbNMmZgxsMzMzMLMgZZmlZWMzMWYZmlxMjxGGAMW2mZwY2GBmAAAAswMzMD2MmxYAAYmBGA
```

---

## Ключевые правила

> [!important] Eclipse - core-механика Midnight
> [[druid-glossary#^eclipse|Затмение]] - больше не пассивный бафф от двух кастов. Теперь это **активная кнопка** на 2 заряда (32 сек [[druid-glossary#^cd|КД]] каждый). [[druid-glossary#^wrath|Гнев]] → Solar [[druid-glossary#^eclipse|Затмение]], [[druid-glossary#^starfire|Звездный огонь]] → Lunar [[druid-glossary#^eclipse|Затмение]]. Длительность 15 сек. Вне [[druid-glossary#^eclipse|Затмение]] урон значительно ниже → **максимизировать [[druid-glossary#^uptime|аптайм]] [[druid-glossary#^eclipse|Затмение]]**. Копить [[druid-glossary#^ap|AP]] вне [[druid-glossary#^eclipse|Затмение]], тратить внутри.

1. **[[druid-glossary#^ap|Астральная мощь]]** - не [[druid-glossary#^overcap|оверкапить]] (макс 100). Генерация: [[druid-glossary#^wrath|Гнев]] ([[druid-glossary#^st|ST]]), [[druid-glossary#^starfire|Звездный огонь]] ([[druid-glossary#^aoe|AoE]]). Трата: [[druid-glossary#^starsurge|Звездный поток]] ([[druid-glossary#^st|ST]]), [[druid-glossary#^starfall|Звездопад]] ([[druid-glossary#^aoe|AoE]]). Правило "Always Be Casting" - инстант-[[druid-glossary#^spender|спендеры]] на движении
2. **[[druid-glossary#^dot|DoT]]-менеджмент** - [[druid-glossary#^moonfire|Лунный огонь]] и [[druid-glossary#^sunfire|Солнечный огонь]] держать на всех целях. Обновлять в [[druid-glossary#^pandemic|пандемик]]-окно (последние 30% длительности). Перед [[druid-glossary#^cd|КД]] обновить [[druid-glossary#^dot|DoT]]-ы заранее, чтобы не тратить [[druid-glossary#^gcd|GCD]] в [[druid-glossary#^burst|бёрст]]-окне. [[druid-glossary#^mastery-balance|Искусность: астральные чары]] больше не усиливает [[druid-glossary#^dot|DoT]]-ы - но [[druid-glossary#^dot|DoT]]-ы важны через [[druid-glossary#^shooting-stars|Падающие звезды]]
3. **[[druid-glossary#^starlord|Звездный лорд]]** - стакающийся бафф хасты от [[druid-glossary#^spender|спендеров]] (3 стака). Входить в [[druid-glossary#^eclipse|Затмение]] когда стаки спадают - оптимальный ритм
4. **[[druid-glossary#^cd|КД]]-синхронизация** - [[druid-glossary#^force-of-nature|Сила природы]] + [[druid-glossary#^celestial-alignment|Парад планет]] + [[druid-glossary#^convoke|Созыв духов]]/[[druid-glossary#^incarnation|Воплощение]] каждые 2 минуты. Тринкеты и зелья на [[druid-glossary#^burst|бёрст]]-окно
5. **[[druid-glossary#^total-eclipse|Полное затмение]]** - 10% шанс получить оба [[druid-glossary#^eclipse|Затмение]] одновременно. Не играть вокруг этого - просто бонус
6. **Движение** - планировать на 10-15 сек вперёд. Инстант-касты ([[druid-glossary#^moonfire|Лунный огонь]], [[druid-glossary#^sunfire|Солнечный огонь]], [[druid-glossary#^starsurge|Звездный поток]]/[[druid-glossary#^starfall|Звездопад]] [[druid-glossary#^proc|проки]] [[druid-glossary#^starweaver|Ткач Звезд]]) на движении

### Когда переключаться на AoE

- **1-3 цели** - Solar [[druid-glossary#^eclipse|Затмение]], [[druid-glossary#^wrath|Гнев]] как [[druid-glossary#^filler|филлер]], [[druid-glossary#^starsurge|Звездный поток]] как [[druid-glossary#^spender|спендер]]
- **4+ целей** - Lunar [[druid-glossary#^eclipse|Затмение]], [[druid-glossary#^starfire|Звездный огонь]] как [[druid-glossary#^filler|филлер]] (кливит внутри Lunar [[druid-glossary#^eclipse|Затмение]]), [[druid-glossary#^starfall|Звездопад]] как [[druid-glossary#^spender|спендер]]

---

## Opener

### ST Opener (рейд, Keeper of the Grove)

1. [[druid-glossary#^wrath|Гнев]] x2-3 (прекаст за 3-4 сек до пулла)
2. [[druid-glossary#^moonfire|Лунный огонь]] + [[druid-glossary#^sunfire|Солнечный огонь]] (нанести [[druid-glossary#^dot|DoT]]-ы)
3. Solar [[druid-glossary#^eclipse|Затмение]] (войти в [[druid-glossary#^eclipse|Затмение]])
4. Потратить стаки [[druid-glossary#^ascendant-eclipses|Возвышенные затмения]] через [[druid-glossary#^starsurge|Звездный поток]] (3 усиленных [[druid-glossary#^spender|спендера]])
5. [[druid-glossary#^fury-of-elune|Ярость Элуны]]
6. Обновить [[druid-glossary#^sunfire|Солнечный огонь]] (перед [[druid-glossary#^cd|КД]])
7. [[druid-glossary#^force-of-nature|Сила природы]]
8. [[druid-glossary#^celestial-alignment|Парад планет]] + тринкет + зелье
9. [[druid-glossary#^convoke|Созыв духов]] (если талант)
10. [[druid-glossary#^starsurge|Звездный поток]] до опустошения [[druid-glossary#^ap|AP]] → обычная ротация

### AoE Opener (M+)

1. [[druid-glossary#^moonfire|Лунный огонь]] по целям пока мобы собираются
2. [[druid-glossary#^sunfire|Солнечный огонь]] когда мобы сгруппированы ([[druid-glossary#^aoe|AoE]])
3. [[druid-glossary#^eclipse|Затмение]] (Solar до 3 целей, Lunar на 4+)
4. [[druid-glossary#^force-of-nature|Сила природы]] / [[druid-glossary#^incarnation|Воплощение]]
5. [[druid-glossary#^fury-of-elune|Ярость Элуны]]
6. [[druid-glossary#^starfall|Звездопад]] (основной [[druid-glossary#^aoe|AoE]]-[[druid-glossary#^spender|спендер]])
7. Продолжать [[druid-glossary#^starfire|Звездный огонь]] как [[druid-glossary#^filler|филлер]] → [[druid-glossary#^starfall|Звездопад]] по [[druid-glossary#^cd|КД]]

---

## ST приоритет (рейды)

1. **[[druid-glossary#^moonfire|Лунный огонь]] / [[druid-glossary#^sunfire|Солнечный огонь]]** - поддерживать 100% [[druid-glossary#^uptime|аптайм]], обновлять в [[druid-glossary#^pandemic|пандемик]]-окно
2. **[[druid-glossary#^force-of-nature|Сила природы]]** - по [[druid-glossary#^cd|КД]], кастовать вне [[druid-glossary#^eclipse|Затмение]] (чтобы войти в [[druid-glossary#^eclipse|Затмение]] с треантами)
3. **[[druid-glossary#^fury-of-elune|Ярость Элуны]]** - по [[druid-glossary#^cd|КД]], во время [[druid-glossary#^eclipse|Затмение]] или перед [[druid-glossary#^force-of-nature|Сила природы]]
4. **[[druid-glossary#^convoke|Созыв духов]]** - с активными [[druid-glossary#^celestial-alignment|Парад планет]] + [[druid-glossary#^force-of-nature|Сила природы]]
5. **[[druid-glossary#^celestial-alignment|Парад планет]]** - по [[druid-glossary#^cd|КД]], синхронить с [[druid-glossary#^force-of-nature|Сила природы]]
6. **Solar [[druid-glossary#^eclipse|Затмение]]** - входить когда [[druid-glossary#^starlord|Звездный лорд]] спадает и есть [[druid-glossary#^proc|проки]] [[druid-glossary#^starweaver|Ткач Звезд]]
7. **[[druid-glossary#^starfall|Звездопад]]** - тратить [[druid-glossary#^proc|проки]] [[druid-glossary#^starweaver|Ткач Звезд]] Warp вне стаков [[druid-glossary#^ascendant-eclipses|Возвышенные затмения]]
8. **[[druid-glossary#^starsurge|Звездный поток]]** - тратить [[druid-glossary#^ap|AP]] чтобы не [[druid-glossary#^overcap|оверкапить]], тратить [[druid-glossary#^starweaver|Ткач Звезд]] Weft [[druid-glossary#^proc|проки]]
9. **[[druid-glossary#^wrath|Гнев]]** - генерация [[druid-glossary#^ap|AP]] (основной [[druid-glossary#^filler|филлер]])

---

## AoE приоритет (M+)

1. **[[druid-glossary#^sunfire|Солнечный огонь]]** - держать на сгруппированных целях ([[druid-glossary#^aoe|AoE]]-эффект)
2. **[[druid-glossary#^moonfire|Лунный огонь]]** - развесить по целям (каждый даёт [[druid-glossary#^shooting-stars|Падающие звезды]] [[druid-glossary#^proc|проки]])
3. **[[druid-glossary#^force-of-nature|Сила природы]]** - по [[druid-glossary#^cd|КД]]
4. **[[druid-glossary#^incarnation|Воплощение]] / [[druid-glossary#^celestial-alignment|Парад планет]]** - по [[druid-glossary#^cd|КД]]
5. **[[druid-glossary#^fury-of-elune|Ярость Элуны]]** - по [[druid-glossary#^cd|КД]]
6. **[[druid-glossary#^eclipse|Затмение]]** - Solar до 3 целей, Lunar на 4+ целей
7. **[[druid-glossary#^starfall|Звездопад]]** - основной [[druid-glossary#^aoe|AoE]]-[[druid-glossary#^spender|спендер]], тратить [[druid-glossary#^ap|AP]]
8. **[[druid-glossary#^starsurge|Звездный поток]]** - на приоритетную цель если [[druid-glossary#^starfall|Звездопад]] активен и [[druid-glossary#^ap|AP]] высокий
9. **[[druid-glossary#^starfire|Звездный огонь]]** - основной [[druid-glossary#^aoe|AoE]]-[[druid-glossary#^filler|филлер]] (внутри Lunar [[druid-glossary#^eclipse|Затмение]] - кливит)
10. **[[druid-glossary#^wrath|Гнев]]** - только на 1-2 целях или для входа в Solar [[druid-glossary#^eclipse|Затмение]]

### Избранник Элуны (Elune's Chosen) (M+, альтернатива)

- Оставаться в Lunar [[druid-glossary#^eclipse|Затмение]] и спамить [[druid-glossary#^starfire|Звездный огонь]]
- [[druid-glossary#^incarnation|Воплощение]] кастовать вне [[druid-glossary#^eclipse|Затмение]] когда [[druid-glossary#^fury-of-elune|Ярость Элуны]] готов
- [[druid-glossary#^fury-of-elune|Ярость Элуны]] по [[druid-glossary#^cd|КД]] - снижать его через [[druid-glossary#^lunation|Лунация]] (касты [[druid-glossary#^starfire|Звездный огонь]])
- [[druid-glossary#^starfall|Звездопад]] как основной [[druid-glossary#^spender|спендер]], [[druid-glossary#^starsurge|Звездный поток]] на 1 цель

---

## Дефенсивы и утилити

### Дефенсивы

| Способность | Эффект | КД | Примечание |
|---|---|---|---|
| **Дубовая кожа** (Barkskin) | 30% **DR** на 12 сек | 60 сек (45 с талантом) | Основной дефенсив, off-**GCD**! Нет оправданий не жать |
| **Инстинкты выживания** (Survival Instincts) | 50% **DR** на 6 сек | 3 мин (2 заряда) | Тяжёлый дефенсив для смертельных механик |
| **Сердце дикой природы** (Heart of the Wild) (Bear Form) | +30% макс. HP на 20 сек | 2 мин | Огромный бафф HP, сохраняется при возврате в Moonkin |
| **Сердце дикой природы** (Heart of the Wild) (Human Form) | Усиленный Буйный рост (Wild Growth) (~15% HP группы) | 2 мин | Скорая помощь для группы |
| **Облик медведя** (Bear Form) | +20% HP + армор | - | Экстренный макро для выживания |

> [!important] Не перекрывать дефенсивы!
> [[druid-glossary#^barkskin|Дубовая кожа]] и [[druid-glossary#^survival-instincts|Инстинкты выживания]] стакаются **мультипликативно**, а не аддитивно. Перекрытие = потеря эффективности. Чередуйте их.

### Утилити

- **[[druid-glossary#^solar-beam|Столп солнечного света]]** - [[druid-glossary#^aoe|AoE]] прерывание + сайленс-зона (8 сек). Один из лучших кикков в M+
- **[[druid-glossary#^typhoon|Тайфун]]** - нокбэк + замедление, контроль пака
- **[[druid-glossary#^ursols-vortex|Вихрь Урсола]]** - зона затягивания врагов, отличная синергия с [[druid-glossary#^typhoon|Тайфун]]
- **[[druid-glossary#^incapacitating-roar|Парализующий рык]]** - [[druid-glossary#^aoe|AoE]] инкапаситейт
- **[[druid-glossary#^stampeding-roar|Тревожный рев]]** - групповой бафф скорости
- **[[druid-glossary#^innervate|Озарение]]** - 8 сек бесплатных заклинаний для хилера
- **[[druid-glossary#^soothe|Умиротворение]]** - снятие Enrage (важно в M+)
- **Remove Corruption** - диспел яда/проклятия
- **Cyclone** - CC на одну цель (PvP/ситуативно)
- **Знак дикой природы** (Mark of the Wild) - групповой бафф статов

---

## Статы

### Приоритет

**Рейд ([[druid-glossary#^keeper-of-the-grove|Хранитель рощи]]):**

**Intellect >> Mastery > Haste ≈ Crit > Versatility**

**M+ ([[druid-glossary#^keeper-of-the-grove|Хранитель рощи]]):**

**Intellect >> Mastery > Haste > Versatility > Crit**

**M+ ([[druid-glossary#^elunes-chosen|Избранник Элуны]]):**

**Intellect >> Haste ≈ Mastery > Crit > Versatility**

> [!note] Статы: сим обязателен
> [[druid-glossary#^mastery-balance|Искусность: астральные чары]] (Mastery) - топ-стат для большинства билдов: усиливает урон Nature и Arcane способностей. Haste и Crit близки за ним. Для [[druid-glossary#^elunes-chosen|Избранник Элуны]] Haste ценнее (из-за [[druid-glossary#^lunation|Лунация]] и снижения [[druid-glossary#^cd|КД]] [[druid-glossary#^fury-of-elune|Ярость Элуны]]). Перед заменой камней/зачарований сделай сим.

Нюансы:
- **[[druid-glossary#^mastery-balance|Искусность: астральные чары]]** - увеличивает урон Nature и Arcane заклинаний. Не усиливает [[druid-glossary#^dot|DoT]]-ы в Midnight (реворк)
- **Haste** - ускоряет касты, снижает [[druid-glossary#^gcd|GCD]], увеличивает генерацию [[druid-glossary#^ap|AP]]
- **Crit** - рандомный стат, но синергирует с [[druid-glossary#^ascendant-eclipses|Возвышенные затмения]] Rank 2 (Languish дебафф от критов)
- **Versatility** - плоский бонус урона + [[druid-glossary#^damage-reduction|DR]]. Наименее ценный для DPS
- **Item Level > вторичные статы** - более высокий ilvl почти всегда лучше
- **[[druid-glossary#^dr|DR]] (Diminishing Returns)** - статы начинают деградировать после ~35%

### Самоцветы и зачарования

- **Мета-гем:** Indecipherable Eversong Diamond
- **Остальные слоты:** Flawless Masterful Garnet (Mastery) или сим для точного подбора
- **Оружие:** Authority of the Depths (или Artisanal Flourish для Mastery)
- **Кольца:** Mastery (Beledar's Radiance или аналог)
- **Грудь:** Mark of the Worldsoul
- **Ноги:** Sunfire Silk Spellthread

---

## Гир и тринкеты

### Тир-сет: Midnight Season 1

- **2-Set:** [[druid-glossary#^shooting-stars|Падающие звезды]] наносят на **50% больше урона** и генерируют **3 доп. [[druid-glossary#^ap|AP]]** вне [[druid-glossary#^eclipse|Затмение]]
- **4-Set:** [[druid-glossary#^starfall|Звездопад]] и [[druid-glossary#^starsurge|Звездный поток]] урон **+5%**, и их каст имеет **40% шанс** ударить цель взрывающейся [[druid-glossary#^shooting-stars|Падающие звезды]] (Astral-урон по ближайшим врагам)

> [!note] Влияние тир-сета
> 2pc ≈ +7% DPS на [[druid-glossary#^st|ST]], 4pc ≈ +14% DPS на [[druid-glossary#^st|ST]]. Тир-сет не меняет геймплей, просто усиливает [[druid-glossary#^shooting-stars|Падающие звезды]] и [[druid-glossary#^spender|спендеры]]. **Приоритет - собрать 4 части ASAP.**

### BiS тринкеты

| Тринкет | Тип | Рейтинг | Источник |
|---|---|---|---|
| **Vaelgor's Final Stare** | On-use Mastery (2 мин **КД**) | S | Рейд (синхронить с **CA** + **FoN**) |
| **Gaze of the Alnseer** | Passive Int стак | S | Рейд |
| **Locus-Walker's Ribbon** | Passive Int (растёт в бою) | A+ | Рейд |
| **Emberwing Feather** | On-use Haste (2 мин **КД**) | A | Данж: Windrunner Spire |
| **Crucible of Erratic Energies** | Passive | A | M+ популярный |
| **Vessel of Tortured Souls** | Passive Int стак | A | Данж |

> [!note] Рейд vs M+
> Рейд: **Vaelgor's Final Stare** + **Gaze of the Alnseer**
> M+: **Crucible of Erratic Energies** - топовый выбор

### Оружие

- **Рейд BiS:** Brazier of the Dissonant Dirge (Midnight Falls)
- **Крафт:** Aln'hara Cane (стафф с эмбелишментом) - хорош в начале сезона
- **MH/OH альтернатива:** Voidglass Spire (MH) + Vagabond's Torch (OH)

### Эмбелишменты

- **Darkmoon Sigil: Hunt** - на крафт-оружие (Aln'hara Cane). Приоритетный эмбелишмент в начале сезона
- **Arcanoweave Lining** - на низкостатовый слот (запястья, пояс, плащ). Даёт primary stat тебе и союзнику
- **Devouring Banding** - альтернатива

> [!note] Стратегия крафта
> Первый крафт: **Aln'hara Cane** + **Darkmoon Sigil: Hunt** (огромный буст DPS без оружия). Второй крафт: **Arcanoweave Lining** на запястья/пояс. По мере прогресса - пересматривать в зависимости от дропа.

### Расходники

| Тип | Название | Примечание |
|---|---|---|
| Фласк | Flask of the Magisters | DPS; Flask of the Shattered Sun - альтернатива |
| Еда | Harandar Celebration | Silvermoon Parade - альтернатива |
| Боевое зелье | Potion of Recklessness | Light's Potential - альтернатива |
| Хил-зелье | Silvermoon Health Potion | На экстренный случай |
| Оружейное масло | Thalassian Phoenix Oil | |
| Augment Rune | Void-Touched Augment Rune | |

> [!warning] Спорный момент
> Flask of the Magisters vs Flask of the Shattered Sun - разница минимальна (~0.1-0.2% DPS), оба валидны. **Сделай сим под свой гир.**

---

## Расы

**Оптимальные для M+:**
- **Night Elf** - **лучший выбор для Druid в M+**. Shadowmeld позволяет сбрасывать мобов и пропускать механики. Единственный логичный выбор для пуша ключей
- **Tauren** - Громовая поступь (War Stomp) для ситуативного стана
- **Highmountain Tauren** - Bull Rush + 1% Versatility пассивно

**Оптимальные для рейда:**
- **Night Elf** - Shadowmeld полезен и в рейде (сброс боевого состояния)
- **Tauren** - минимальный DPS-бонус через Brawn (+2% крит-урон)

**Универсальные:**
- **Troll** - Berserking (Haste [[druid-glossary#^cd|КД]]) + slow-резист

> [!note] Расы для друида
> Друид ограничен в выборе рас. Для Alliance: Night Elf или Kul Tiran. Для Horde: Tauren, Highmountain Tauren, Troll, Zandalari Troll. **Night Elf доминирует** из-за Shadowmeld - это не просто DPS бонус, а утилити, спасающая ключи.
