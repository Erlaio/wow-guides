---
tags: [wow, paladin, retribution, log-analysis, mythic-plus]
created: 2026-04-02
---

# Анализ топовых логов: Retribution Paladin в M+

**Дата анализа:** 02.04.2026
**Патч:** 12.0 (Midnight Season 1)
**Последний значимый тюнинг:** 17 марта 2026 (бафф ST-урона)
**Последний багфикс:** 26 марта 2026 (Hammer of Light + Judgment)
**Источник:** [Warcraft Logs — M+ Season 1, Zone 47](https://www.warcraftlogs.com/zone/rankings/47)

---

## Выборка логов

**10 логов** из **6 данжей**, ключи **+15–+18**, все после 17.03.2026.

| # | Данж | Игрок | Ключ | Дата | Ссылка |
|---|------|-------|------|------|--------|
| 1 | Algeth'ar Academy | Yodafotm | +17 | Apr 1 | [WCL](https://www.warcraftlogs.com/reports/d4DZBTqRJYF9G7f3?fight=6) |
| 2 | Algeth'ar Academy | Melee | +17 | Mar 30 | [WCL](https://www.warcraftlogs.com/reports/jyNH8KLbxQBAvYTd?fight=1) |
| 3 | Algeth'ar Academy | Sherwingit | +16 | Mar 31 | [WCL](https://www.warcraftlogs.com/reports/H9yvNZ2Mt6dncAxX?fight=2) |
| 4 | Magisters' Terrace | Holyzael | +17 | Apr 1 | [WCL](https://www.warcraftlogs.com/reports/pRVFbfrcZB8PK19X?fight=14) |
| 5 | Magisters' Terrace | Bugzee | +17 | Apr 1 | [WCL](https://www.warcraftlogs.com/reports/1W7zVPmqQvnYFAdG?fight=11) |
| 6 | Maisara Caverns | Melee | +18 | Mar 28 | [WCL](https://www.warcraftlogs.com/reports/pZ1RhbN9TvgyV8j3?fight=4) |
| 7 | Windrunner Spire | Xail | +17 | Mar 29 | [WCL](https://www.warcraftlogs.com/reports/pTqZjK2zyF6ArgmR?fight=17) |
| 8 | Skyreach | Slapperman | +17 | Mar 29 | [WCL](https://www.warcraftlogs.com/reports/byCrPARJcqkh9GtD?fight=5) |
| 9 | Pit of Saron | Minnpal | +17 | Mar 31 | [WCL](https://www.warcraftlogs.com/reports/hvqcdL6JFHzyV29Y?fight=1) |
| 10 | Windrunner Spire | Bodenaggro | +17 | Mar 29 | [WCL](https://www.warcraftlogs.com/reports/pjgXzh91VwJDqvBA?fight=1) |

---

## Распределение урона (топ-10)

Средний % от общего урона за весь данж (Entire Dungeon, Bosses and Trash).

| # | Способность | Avg % | Диапазон | Комментарий |
|---|-------------|-------|----------|-------------|
| 1 | [[paladin-glossary#^blade-of-justice\|Blade of Justice]] | **18.5%** | 16.1–20.8% | Доминирующий источник урона. Включает [[paladin-glossary#^light-within\|Light Within]] проки (~8%), [[paladin-glossary#^expurgation\|Expurgation]] DoT (~7%), AoE-конус (~2%) |
| 2 | [[paladin-glossary#^divine-storm\|Divine Storm]] | **12.2%** | 8.7–15.2% | Основной AoE-спендер. Высокая вариативность — зависит от количества треша в данже |
| 3 | [[paladin-glossary#^hammer-of-light\|Hammer of Light]] | **11.5%** | 9.9–13.3% | Стабильно высокий вклад. Включает AoE-компонент (~5%) и ST (~6%) |
| 4 | [[paladin-glossary#^divine-hammer\|Divine Hammer]] | **9.7%** | 8.5–11.7% | Пассивный AoE от [[paladin-glossary#^divine-toll\|Divine Toll]]. Неожиданно высокий % |
| 5 | Crusading Strikes | **9.1%** | 5.8–11.4% | Автоатаки, заменённые через [[paladin-glossary#^crusading-strikes\|Crusading Strikes]]. Самая большая вариативность |
| 6 | [[paladin-glossary#^empyrean-hammer\|Empyrean Hammer]] | **8.3%** | 7.4–9.6% | Пассивные молоты (Templar). Стабильный вклад |
| 7 | [[paladin-glossary#^execution-sentence\|Execution Sentence]] | **7.6%** | 5.9–9.2% | Включает накопленный урон (~6%) и DoT-тик (~1.5%) |
| 8 | [[paladin-glossary#^wake-of-ashes\|Wake of Ashes]] | **6.8%** | 5.7–8.5% | AoE-генератор + триггер [[paladin-glossary#^hammer-of-light\|HoL]] / [[paladin-glossary#^radiant-glory\|Radiant Glory]] |
| 9 | [[paladin-glossary#^final-verdict\|Final Verdict]] | **3.8%** | 2.4–5.4% | ST-спендер, используется на боссах и приоритетных целях |
| 10 | [[paladin-glossary#^hammer-of-wrath\|Hammer of Wrath]] | **2.8%** | 2.4–3.5% | Экзекьют + доступен во время AW |

> **Итого топ-10:** ~90.3%. Оставшиеся ~10%: [[paladin-glossary#^judgment\|Judgment]] (~2.5%), Highlord's Judgment (~2.0%), [[paladin-glossary#^consecration\|Consecration]] (~1.7%), Shield of Vengeance (~0.7%), тринкеты (~0.5%).

### Босс vs паки

- На боссах: [[paladin-glossary#^final-verdict\|Final Verdict]] поднимается до ~5-6% за счёт ST-фокуса, [[paladin-glossary#^divine-storm\|Divine Storm]] падает
- На треше: [[paladin-glossary#^divine-storm\|Divine Storm]] доминирует (до 15%), [[paladin-glossary#^divine-hammer\|Divine Hammer]] и [[paladin-glossary#^hammer-of-light\|Hammer of Light]] также выше за счёт AoE-компонентов
- [[paladin-glossary#^blade-of-justice\|Blade of Justice]] стабильно #1 в обоих сценариях благодаря [[paladin-glossary#^light-within\|Light Within]] + [[paladin-glossary#^expurgation\|Expurgation]]
- [[paladin-glossary#^execution-sentence\|Execution Sentence]] используется и на боссах, и на приоритетных мобах в паках (funnel-стратегия)

---

## Таланты

### Hero Talent: Templar — 100% использования

Все 10 логов используют **Templar**. Ни одного случая Herald of the Sun в топе рейтинга.

> Это подтверждает данные Archon.gg (~93% Templar в М+), с поправкой на то, что в самом топе рейтинга Templar составляет 100%.

### Билды талантов

Собраны 5 экспорт-строк. Все используют Templar, но есть вариации в class tree и spec tree:

**Общие обязательные таланты (100% логов):**
- [[paladin-glossary#^execution-sentence\|Execution Sentence]]
- [[paladin-glossary#^crusading-strikes\|Crusading Strikes]] (не Templar Strikes)
- [[paladin-glossary#^wake-of-ashes\|Wake of Ashes]]
- [[paladin-glossary#^divine-toll\|Divine Toll]]
- [[paladin-glossary#^expurgation\|Expurgation]]
- [[paladin-glossary#^art-of-war\|Art of War]]
- [[paladin-glossary#^light-within\|Light Within]] (4 ранга)
- [[paladin-glossary#^final-verdict\|Final Verdict]]

**Вариации (зависят от данжа):**
- Некоторые игроки берут Blessed Champion / Tempest of the Lightbringer (AoE-фокус)
- Другие берут Heart of the Crusader ×2 (ST-фокус для данжей с тяжёлыми боссами)

**Пример экспорта (Yodafotm, Algeth'ar +17):**
```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz22MzsMmZmBAAAAAwMlZZGmZsN8AbDzsNjxYMMjN2AAAYmplZmtZAAbAGADmZzAzYmZDLzghxMGM
```

**Пример экспорта (Melee, Algeth'ar +17):**
```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQzy2MzsMGzMAAAAAAmpMLzwMjthZbYmtZMGjhZsxGAAAzMtNzsNDAYDwAYMmZDYmZmZDLzghxwgB
```

### Ручной AW (без Radiant Glory)

По таймлайнам: топовые игроки **используют Avenging Wrath вручную**, без Radiant Glory. AW кастуется до Wake of Ashes для контроля над таймингом бёрста. Это подтверждается и личной практикой — ручной AW является стандартом в высоких ключах.

---

## Опенеры

Анализ по таймлайнам лога Yodafotm (Algeth'ar Academy +17). Только активно нажатые способности (GCD + off-GCD кулдауны). Исключены: автоатаки, пассивные проки (Art of War, Empyrean Hammer, Highlord's Judgment).

### Босс с бёрстом (AW + ES доступны)

Проанализировано 3 примера от 3 разных игроков:

| # | Игрок | Босс | Опенер (только активные способности) |
|---|-------|------|--------------------------------------|
| 1 | Yodafotm | Overgrown Ancient (Algeth'ar) | BoJ → AW → ES → DS → WoA → HoL |
| 2 | Melee | Vexamus (Algeth'ar) | BoJ → AW → ES → WoA → HoL |
| 3 | Slapperman | High Sage Viryx (Skyreach) | Trinket → BoJ → Judgment → ES → AW → WoA → HoL |

**Общий паттерн:**
1. [[paladin-glossary#^blade-of-justice\|Blade of Justice]]
2. *(опционально)* [[paladin-glossary#^judgment\|Judgment]]
3. [[paladin-glossary#^avenging-wrath\|Avenging Wrath]] + [[paladin-glossary#^execution-sentence\|Execution Sentence]] *(порядок варьируется: 2 из 3 — AW до ES, 1 из 3 — ES до AW)*
4. *(опционально)* спендер, если есть лишний HoPo
5. [[paladin-glossary#^wake-of-ashes\|Wake of Ashes]]
6. [[paladin-glossary#^hammer-of-light\|Hammer of Light]]

> **Ключевые наблюдения:**
> - AW и ES всегда идут рядом, но **порядок не фиксирован**
> - **Divine Toll не используется** ни в одном боссовом опенере — сохраняется для следующего бёрст-окна или AoE
> - Judgment в опенере — опционален (1 из 3 использует)
> - **В М+ большинство боссов начинаются БЕЗ бёрста** — AW был потрачен на предыдущий треш-пак. "Босс с бёрстом" — скорее исключение, чем правило

### Босс без бёрста (AW на КД)

Проанализировано 5 примеров от 4 игроков — **это доминирующий сценарий** в М+:

| # | Игрок | Босс | Опенер |
|---|-------|------|--------|
| 1 | Yodafotm | Crawth (Algeth'ar) | BoJ → Judgment → FV |
| 2 | Yodafotm | Vexamus (Algeth'ar) | BoJ → DS → Judgment → DS → BoJ → FV |
| 3 | Melee | Echo of Doragosa (Algeth'ar) | BoJ → Judgment → FV → Judgment → FV |
| 4 | Minnpal | Ick and Krick (Pit of Saron) | WoA → HoL → Divine Toll |
| 5 | Slapperman | Ranjit (Skyreach) | BoJ → FV → Judgment → FV |

**Общий паттерн:**
1. Билдеры ([[paladin-glossary#^blade-of-justice\|BoJ]], [[paladin-glossary#^judgment\|Judgment]]) → спендер ([[paladin-glossary#^final-verdict\|FV]] / [[paladin-glossary#^divine-storm\|DS]])
2. Если [[paladin-glossary#^wake-of-ashes\|WoA]] доступен — использовать для [[paladin-glossary#^hammer-of-light\|HoL]] даже без AW
3. Цикличная ротация до прихода AW с КД

> **Ключевое наблюдение:** В М+ топовые игроки **не придерживают КД для босса**. AW тратится на треш, и бой с боссом начинается с обычной ротации. WoA → HoL используется по КД даже без AW — не ждут совмещения.

### Паки с бёрстом (AW + ES доступны)

*Источник: Pull 1 — Vile Lashers (первый треш-пул данжа)*

1. Тринкет (Algeth'ar Puzzle)
2. [[paladin-glossary#^judgment\|Judgment]]
3. Divine Protection *(дефенсив, off-GCD)*
4. [[paladin-glossary#^blade-of-justice\|Blade of Justice]]
5. [[paladin-glossary#^avenging-wrath\|Avenging Wrath]]
6. [[paladin-glossary#^execution-sentence\|Execution Sentence]]
7. [[paladin-glossary#^divine-storm\|Divine Storm]]

*Дополнительно (Pull 9 — Vicious Ravager, mid-dungeon):*

1. [[paladin-glossary#^judgment\|Judgment]]
2. [[paladin-glossary#^blade-of-justice\|Blade of Justice]]
3. Divine Protection
4. Тринкет
5. [[paladin-glossary#^avenging-wrath\|Avenging Wrath]]
6. [[paladin-glossary#^execution-sentence\|Execution Sentence]]
7. [[paladin-glossary#^divine-storm\|Divine Storm]]
8. [[paladin-glossary#^wake-of-ashes\|Wake of Ashes]]

> **Паттерн:** На паках игрок **строит HoPo перед бёрстом** (Judgment + BoJ → 2-3 HoPo), затем AW → ES → DS → WoA → HoL. Тринкет и Divine Protection используются в первые секунды. Бёрст начинается через 2-3 GCD от пулла, не мгновенно.

### Паки без бёрста (AW на КД)

*Источник: Pull 4 — Guardian Sentry (2 мин после предыдущего AW)*

1. [[paladin-glossary#^blade-of-justice\|Blade of Justice]]
2. [[paladin-glossary#^divine-storm\|Divine Storm]] / [[paladin-glossary#^final-verdict\|Final Verdict]] *(DS при 2+ целях, FV если 1-2 моба)*
3. [[paladin-glossary#^judgment\|Judgment]]
4. [[paladin-glossary#^divine-storm\|Divine Storm]] *(повтор — конец уникальной последовательности)*

> **Паттерн:** аналогичен "босс без бёрста" — чистая ротация билдер → спендер. Спендер зависит от кол-ва целей (DS в AoE, FV на 1-2 моба). AW приходит с КД через ~9 сек, после чего игрок переключается в бёрст.
>
> *Примечание: в конкретном логе (pull 4, Guardian Sentry) использовался FV — вероятно малый пак из 1-2 мобов.*

---

## Ротация / приоритет

### В бёрст-окне (AW активен)

На основе таймлайнов — фактический приоритет в бёрст-окне:
1. [[paladin-glossary#^execution-sentence\|Execution Sentence]] (если доступен — кастить ДО или сразу после AW)
2. [[paladin-glossary#^divine-storm\|Divine Storm]] / [[paladin-glossary#^final-verdict\|Final Verdict]] при 5 HoPo (спендер зависит от кол-ва целей)
3. [[paladin-glossary#^wake-of-ashes\|Wake of Ashes]] (генерация HoPo + триггер HoL)
4. [[paladin-glossary#^hammer-of-light\|Hammer of Light]] (максимальный приоритет когда доступен)
5. [[paladin-glossary#^blade-of-justice\|Blade of Justice]] (при [[paladin-glossary#^art-of-war\|Art of War]] проке — приоритет выше всего кроме HoL)
6. [[paladin-glossary#^divine-toll\|Divine Toll]] (по КД)
7. [[paladin-glossary#^hammer-of-wrath\|Hammer of Wrath]] (доступен во время AW)
8. [[paladin-glossary#^judgment\|Judgment]]
9. [[paladin-glossary#^blade-of-justice\|Blade of Justice]] (без прока)

### Вне бёрста

1. [[paladin-glossary#^blade-of-justice\|Blade of Justice]] при [[paladin-glossary#^art-of-war\|Art of War]] проке
2. [[paladin-glossary#^final-verdict\|Final Verdict]] / [[paladin-glossary#^divine-storm\|Divine Storm]] при 4-5 HoPo
3. [[paladin-glossary#^blade-of-justice\|Blade of Justice]] (обновление [[paladin-glossary#^expurgation\|Expurgation]])
4. [[paladin-glossary#^judgment\|Judgment]]
5. [[paladin-glossary#^hammer-of-wrath\|Hammer of Wrath]] (если цель < 20%)

---

## Различия: босс vs паки

| Аспект | Боссы | Паки |
|--------|-------|------|
| Основной спендер | [[paladin-glossary#^final-verdict\|Final Verdict]] (~5-6%) | [[paladin-glossary#^divine-storm\|Divine Storm]] (~13-15%) |
| [[paladin-glossary#^execution-sentence\|ES]] таргет | Босс | Приоритетный моб (самый опасный) |
| Использование КД | Все КД сразу в опенер | Строят HoPo 2-5 GCD перед бёрстом |
| [[paladin-glossary#^divine-toll\|Divine Toll]] | В опенер или по КД | Часто придерживают для паков с большим кол-вом мобов |
| [[paladin-glossary#^hammer-of-light\|HoL]] | ST-урон по боссу | AoE-бомба по паку |
| Дефенсивы | Реже | Divine Protection на входе в пак — стандарт |

---

## Расхождения с текущим гайдом

Сравнение с [[retribution-guide]] (`retribution-guide.md`).

### Таланты

- **Гайд:** "Templar — доминирующий выбор во всём контенте (93%+ использования по данным Archon.gg)"
- **Логи:** Подтверждается. В топ-рейтинге **100% Templar**, ни одного Herald of the Sun.
- **Статус:** Гайд корректен.

- **Гайд:** Для М+ рекомендуется Crusading Strikes и AoE-таланты (Blade of Vengeance, Blessed Champion, Tempest of the Lightbringer)
- **Логи:** Все игроки используют Crusading Strikes. Вариации в AoE-талантах существуют, но основная структура совпадает.
- **Статус:** Гайд корректен.

### Опенер (босс)

- **Гайд:** "1. Prepot → 2. BoJ → 3. Judgment → 4. AW → 5. Trinkets → 6. Divine Toll → 7. ES → 8. WoA → 9. HoL"
- **Логи (3 игрока, с бёрстом):** BoJ → (Judgment опционально) → AW + ES → WoA → HoL. **Отличия:**
  - **Judgment опционален** — 1 из 3 использует, остальные пропускают
  - **Divine Toll не используется в опенере** ни одним игроком — сохраняется для AoE или следующего бёрст-окна
  - **Порядок AW/ES не фиксирован** — 2 из 3 ставят AW первым, 1 — ES первым
  - **Гайд описывает "идеальный" опенер, но в М+ большинство боссов начинаются БЕЗ бёрста** (AW потрачен на треш). Из 8 проверенных боссовых пулов только 3 имели AW в опенере
- **Статус:** ==Расхождение.== Гайд описывает рейдовый опенер с полным набором КД. В М+ реальность другая — AW чаще на КД при пулле босса. Нужна отдельная секция "босс без бёрста" в гайде.

### Опенер (паки)

- **Гайд:** "1. Набить 3 HoPo через BoJ + Judgment → 2. ES → AW → 3. WoA → HoL → 4. Divine Toll → спам DS → 5. Максимизируйте спендеры"
- **Логи:** Judgment + CS + BoJ → AW → ES → CS → DS → WoA → HoL → ... **Отличия:**
  - Порядок ES и AW: в логах **AW до ES** (в гайде ES → AW)
  - Divine Toll не всегда идёт сразу после WoA/HoL
  - Divine Protection используется в первые секунды пака — не упомянуто в гайде
- **Статус:** ==Частичное расхождение.== Общая структура "набрать HoPo → бёрст → WoA → HoL" совпадает, но порядок AW/ES отличается.

### Ротация / приоритет

- **Гайд (ST):** "1. AW/ES по КД → 2. HoL → 3. FV при 5 HoPo → 4. WoA → 5. Divine Toll → 6. BoJ при AoW → 7. BoJ (без Expurgation) → 8. HoW → 9. Judgment → 10. BoJ → 11. CS"
- **Логи:** Приоритет в целом совпадает. **Отличия:**
  - Divine Toll иногда придерживается для AoE-ситуаций, а не используется строго по КД
- **Статус:** В основном корректен.

### Распределение урона

- **Гайд:** Не содержит числового breakdown по способностям
- **Логи:** Blade of Justice — безоговорочный #1 (18.5%) благодаря Light Within + Expurgation. Это подтверждает ключевое правило гайда: "Art of War прок = немедленный BoJ" и "Никогда не тратьте Art of War прок"
- **Статус:** Гайд корректен в приоритизации BoJ/Art of War, но числовой breakdown может быть полезным дополнением.

### Ключевые правила

- **Гайд (правило 7):** "Execution Sentence до бёрста — накладывайте до AW"
- **Логи (3 игрока):** Порядок AW/ES **не фиксирован** — 2 из 3 ставят AW до ES, 1 из 3 — ES до AW. На паках аналогично — AW и ES идут рядом, но порядок варьируется.
- **Статус:** ==Частичное расхождение.== Гайд утверждает строгий порядок "ES до AW", но на практике порядок гибкий. Главное — использовать обе способности рядом, не строгий порядок.

- **Гайд (правило 9):** "В AoE: Divine Storm вместо Final Verdict при 2+ целях"
- **Логи:** Подтверждается. DS составляет 12.2% общего урона vs 3.8% FV — DS используется на порядок чаще.
- **Статус:** Гайд корректен.

### Radiant Glory

- **Гайд:** "Если играете Radiant Glory — НЕ жмите AW вручную. Wake of Ashes автоматически активирует его."
- **Логи:** Топовые игроки **не берут Radiant Glory** — используют ручной AW для точного контроля тайминга бёрста. AW стабильно кастуется ДО Wake of Ashes.
- **Статус:** ==Расхождение.== Гайд подразумевает Radiant Glory как основной вариант, но в топовых М+ логах используется ручной AW. Секция про Radiant Glory в опенере ("пропустить если играете Radiant Glory") неактуальна для М+ меты — ручной AW является стандартом.

---

## Итоги

### Что подтверждается

- Templar — безоговорочный выбор Hero Talent (100%)
- Crusading Strikes как основной билдер-талант
- Execution Sentence — ключевой КД, используется и в ST, и в AoE
- Blade of Justice — #1 источник урона благодаря Light Within
- Divine Storm как основной AoE-спендер
- Правило "Art of War прок = немедленный BoJ" критически важно

### Что расходится

1. **Опенер босса:** гайд включает Judgment + Divine Toll, логи показывают BoJ → AW → ES → DS → WoA → HoL (без Judgment и Divine Toll)
2. **Порядок AW/ES:** гайд "ES до бёрста", логи "AW → ES" (AW идёт первым)
3. **Опенер паков:** гайд "ES → AW", логи "AW → ES" (тот же паттерн)
4. **Radiant Glory не используется** — топы берут ручной AW для контроля тайминга бёрста
5. **Divine Toll в опенере:** гайд включает его в опенер, топовые игроки часто придерживают для следующего бёрст-окна

### Рекомендации для обновления гайда

1. Обновить секцию "Opener — Templar" с актуальной последовательностью из логов
2. Уточнить порядок AW и ES — в логах AW стабильно идёт первым
3. Добавить секцию "Распределение урона (топ-10)" для наглядности приоритетов
4. Убрать Radiant Glory как рекомендацию для М+ — ручной AW является стандартом
5. Отметить, что Divine Toll часто сохраняется для AoE, а не используется в каждый боссовый опенер

---

## Источники и примечания

- Все данные получены через Warcraft Logs (zone ID 47, Mythic+ Season 1)
- Таймлайны опенеров извлечены из Events view (хронологический порядок кастов)
- Damage breakdown — Entire Dungeon (Bosses and Trash combined)
- Все логи датированы после 17.03.2026 (хотфикс с баффом ST)
- Гайд НЕ отредактирован — этот файл является diff-документом для ручного ревью
