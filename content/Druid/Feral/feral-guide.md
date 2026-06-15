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

> **Patch:** 12.0.5 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

Blizzard провели масштабное упрощение спека. Основные изменения:

**Удалено:**
- [[druid-glossary#^bleed|Bloodtalons]] - больше нет окна "3 разных билдера за 4 сек"
- Жестокий удар когтями (Brutal Slash) - заменён на [[druid-glossary#^swipe|Размах]] как основной AoE-[[druid-glossary#^builder|билдер]]
- Thrash - убран полностью, меньше [[druid-glossary#^dot|DoT]]-ов для трекинга
- Adaptive Swarm - убран
- Berserk: Frenzy - убран

**Добавлено:**
- [[druid-glossary#^chomp|Быстрый укус]] - мощная атака без затрат [[druid-glossary#^energy|энергии]] (20с [[druid-glossary#^cd|КД]]), доступна при энергии <30% (+ 2с окно после). Тройной урон при крите. Усиливается [[druid-glossary#^tear-down-the-mighty|Низвержение сильных]] (+25%)
- [[druid-glossary#^unseen-predator|Незримый хищник]] - новый Apex-талант (см. ниже)
- Frantic Frenzy - AoE-версия [[druid-glossary#^feral-frenzy|Дикое бешенство]]
- Hunger for Battle - улучшенная генерация [[druid-glossary#^energy|энергии]] и урон

**Изменения механик:**
- [[druid-glossary#^snapshotting|Снапшоттинг]] упрощён - теперь снапшотят только [[druid-glossary#^tigers-fury|Тигриное неистовство]] и [[druid-glossary#^prowl|Крадущийся зверь]]
- Аддоны ограничены в бою - трекинг снапшотов стал сложнее без аддонов
- Claw Rampage нерфнут до одного [[druid-glossary#^proc|прока]] за каст (не за цель)
- [[druid-glossary#^sudden-ambush|Внезапное нападение]] reworked - больше не снапшотит [[druid-glossary#^rake|Глубокая рана]]
- Все атаки получили +8% урона; [[druid-glossary#^swipe|Размах]] +20%

> [!note] Итог
> Спек стал значительно проще - меньше [[druid-glossary#^builder|билдеров]] и [[druid-glossary#^dot|DoT]]-ов, основной фокус на [[druid-glossary#^shred|Полоснуть]]/[[druid-glossary#^swipe|Размах]] + [[druid-glossary#^finisher|финишеры]]. Меньше кнопок, но ротация остаётся узнаваемой.

---

## Сильные и слабые стороны

### Сильные стороны

- **Мощный [[druid-glossary#^burst|бёрст]]** - [[druid-glossary#^berserk-feral|Берсерк]] + [[druid-glossary#^convoke|Созыв духов]] на 2-мин цикле, плюс [[druid-glossary#^feral-frenzy|Дикое бешенство]] на коротком [[druid-glossary#^cd|КД]]
- **Сильный [[druid-glossary#^st|ST]] урон** - [[druid-glossary#^wildstalker-feral|Следопыт]]-билд показывает отличные цифры на боссах
- **Хороший [[druid-glossary#^aoe|AoE]]** - [[druid-glossary#^primal-wrath|Первобытный гнев]] безлимитный, усиленный [[druid-glossary#^unseen-predator|Незримый хищник]]
- **Утилити** - Знак дикой природы (Mark of the Wild), Rebirth, [[druid-glossary#^innervate|Озарение]], [[druid-glossary#^stampeding-roar|Тревожный рев]]
- **Мобильность** - Dash/Рывок тигра (Tiger Dash), Стремительный рывок (Wild Charge), [[druid-glossary#^stampeding-roar|Тревожный рев]]
- **Упрощённая ротация** - проще входить в спек после Midnight-изменений

### Слабые стороны

- **Упрощение "убило" часть фана** - многие уникальные геймплей-петли удалены или урезаны
- **Ограничения аддонов** - [[druid-glossary#^snapshotting|снапшоттинг]] стал труднее отслеживать без боевых аддонов
- **Медленный геймплей** - бывают пустые [[druid-glossary#^gcd|GCD]], медленнее многих мили-спеков
- **Зависимость от рампа** - нужно время на развёртывание [[druid-glossary#^bleed|блидов]], слабый урон в первые секунды боя

---

## Таланты

### Hero Talent

- **Рейд ([[druid-glossary#^st|ST]]):** [[druid-glossary#^wildstalker-feral|Следопыт]] - упор на [[druid-glossary#^bleed|блиды]] и устойчивый урон по одной цели. Bloodseeker Vines и Thriving Growth усиливают [[druid-glossary#^dot|DoT]]-урон
- **M+ ([[druid-glossary#^aoe|AoE]]):** [[druid-glossary#^druid-of-the-claw-feral|Друид-хищник]] - лучшие AoE инструменты, дефенсивы и [[druid-glossary#^ravage|Терзание]]-[[druid-glossary#^proc|прок]]. Даёт Неистовое восстановление (Frenzied Regeneration) в Облик кошки (Cat Form) через Empowered Shapeshifting

> [!warning] Нюанс
> В высоких ключах, где мобы живут дольше и [[druid-glossary#^bleed|блиды]] успевают отработать, [[druid-glossary#^wildstalker-feral|Следопыт]] может быть лучше. [[druid-glossary#^druid-of-the-claw-feral|Друид-хищник]] - для низких/средних ключей с быстрым AoE.

### Apex талант

- **[[druid-glossary#^unseen-predator|Незримый хищник]]** - [[druid-glossary#^ferocious-bite|Свирепый укус]] имеет 15% шанс за каждый потраченный [[druid-glossary#^cp|CP]] вызвать Unseen Slash ([[druid-glossary#^st|ST]]) или Unseen Swipe ([[druid-glossary#^aoe|AoE]]). При [[druid-glossary#^proc|проке]] - +7.5% ко всему урону на 5 сек (стакается). [[druid-glossary#^tigers-fury|Тигриное неистовство]] заставляет следующие 2 [[druid-glossary#^builder|билдера]] триггерить Unseen Attack. Берём всегда.

### Ключевые таланты

Всегда берём:
- **[[druid-glossary#^feral-frenzy|Дикое бешенство]]** - [[druid-glossary#^st|ST]] [[druid-glossary#^burst|бёрст]] с коротким [[druid-glossary#^cd|КД]]; выбор ноды: Focused Frenzy (30с КД, ST) или Frantic Frenzy (AoE версия)
- **[[druid-glossary#^chomp|Быстрый укус]]** - мощная атака без затрат [[druid-glossary#^energy|энергии]] (20с КД), доступна при энергии <30% (+ 2с окно после). Тройной урон при крите. Усиливается [[druid-glossary#^tear-down-the-mighty|Низвержение сильных]] (+25%)
- **[[druid-glossary#^convoke|Созыв духов]]** - мощный [[druid-glossary#^burst|бёрст]], синхронить с [[druid-glossary#^berserk-feral|Берсерк]] + [[druid-glossary#^tigers-fury|Тигриное неистовство]]
- **[[druid-glossary#^berserk-feral|Берсерк]]** - основной [[druid-glossary#^burst|бёрст]]-кулдаун
- **[[druid-glossary#^predator|Хищник]]** - сброс [[druid-glossary#^tigers-fury|Тигриное неистовство]] при смерти цели
- **[[druid-glossary#^moment-of-clarity|Момент ясности]]** - бесплатные усиленные [[druid-glossary#^builder|билдеры]] (синергия с тир-сетом)
- **[[druid-glossary#^soul-of-the-forest-feral|Душа леса]]** - больше [[druid-glossary#^energy|энергии]] и урона от [[druid-glossary#^finisher|финишеров]]
- **[[druid-glossary#^apex-predators-craving|Жажда сверххищника]]** - бесплатные [[druid-glossary#^ferocious-bite|Свирепый укус]] от тиков [[druid-glossary#^rip|Разорвать]]

Рейд ([[druid-glossary#^wildstalker-feral|Следопыт]]):
- Focused Frenzy - укороченный КД [[druid-glossary#^feral-frenzy|Дикое бешенство]] для [[druid-glossary#^st|ST]]
- [[druid-glossary#^lunar-inspiration|Лунное вдохновение]] - [[druid-glossary#^moonfire|Лунный огонь]] как дополнительный [[druid-glossary#^builder|билдер]]
- [[druid-glossary#^sudden-ambush|Внезапное нападение]] - усиленные [[druid-glossary#^shred|Полоснуть]] (reworked в Midnight - больше не снапшотит [[druid-glossary#^rake|Глубокая рана]])
- [[druid-glossary#^panthers-guile|Хитрость пантеры]] - бонус урона в [[druid-glossary#^st|ST]]
- [[druid-glossary#^circle-of-life-and-death|Круг жизни и смерти]] - ускоренные тики [[druid-glossary#^bleed|блидов]]

M+ ([[druid-glossary#^druid-of-the-claw-feral|Друид-хищник]]):
- Frantic Frenzy - AoE-версия [[druid-glossary#^feral-frenzy|Дикое бешенство]]
- [[druid-glossary#^primal-wrath|Первобытный гнев]] - AoE-[[druid-glossary#^finisher|финишер]], [[druid-glossary#^spread|распространяет]] [[druid-glossary#^rip|Разорвать]]
- [[druid-glossary#^rampant-ferocity|Свирепое буйство]] - [[druid-glossary#^ferocious-bite|Свирепый укус]] наносит [[druid-glossary#^aoe|AoE]]
- [[druid-glossary#^double-clawed-rake|Раздвоенные когти]] - [[druid-glossary#^rake|Глубокая рана]] бьёт второго таргета
- [[druid-glossary#^apex-predators-craving|Жажда сверххищника]] - обязателен для M+

---

## Готовые билды (импорт)

### [[druid-glossary#^druid-of-the-claw-feral|Друид-хищник]]

**Рейд ([[druid-glossary#^st|ST]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAghZ2YmZmZGzmx2MbzMzMmZAAAAYJYWMGmZUzYWMzMzsMmZAAAAAAwADAAAgmZZ2mZmBEYBMzAswgBAAwMbYA
```

**M+ ([[druid-glossary#^aoe|AoE]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmZYmZmZMzsZsNz2MzMzDMzAAAAwSwsYMMzomxsYmZmZZMzAAAAAAgBAAAAoZWmtZmZABWAzMALMYAAAMzGG
```

### [[druid-glossary#^wildstalker-feral|Следопыт]]

**Рейд ([[druid-glossary#^st|ST]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZwMzMzMmtlxyMbzYGzMDAAAALBzihxMjaGziZmZGjZYAAAAAAMwAAAAIAYWmZpZbmlNwMDwiZwAAYmBAD
```

**M+ ([[druid-glossary#^aoe|AoE]]):**
```
CcGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjZYmZmZMmNjtZ2mZmZegZGAAAAWCmFjhZG1MmFzMzMGzMGAAAAAADMAAAACAmlZ2aWmZZDMzAswgBAwMDAG
```

> [!note] Импорт
> В игре: таланты (N) → Loadouts → Import Loadout → вставь строку → Import.

---

## Ключевые правила

### [[druid-glossary#^snapshotting|Снапшоттинг]] (упрощён в Midnight)

Теперь снапшотят только [[druid-glossary#^tigers-fury|Тигриное неистовство]] и [[druid-glossary#^prowl|Крадущийся зверь]]. Bloodtalons удалён. [[druid-glossary#^rip|Разорвать]] и [[druid-glossary#^rake|Глубокая рана]], наложенные во время TF, сохраняют бонус урона на всю длительность.

> [!important] Не перезаписывай TF-снапшот
> Если [[druid-glossary#^rake|Глубокая рана]]/[[druid-glossary#^rip|Разорвать]] наложены с [[druid-glossary#^tigers-fury|Тигриное неистовство]], не обновляй их без активного TF - это даунгрейд урона. Лучше подождать следующий TF или дать [[druid-glossary#^dot|DoT]]-у истечь.

### [[druid-glossary#^pandemic|Пандемик]]-окна

Безопасный рефреш без потери длительности:
- [[druid-glossary#^rip|Разорвать]]: последние **5.8с**
- [[druid-glossary#^rake|Глубокая рана]]: последние **3.6с**
- [[druid-glossary#^moonfire|Лунный огонь]]: последние **4.3с**

### [[druid-glossary#^energy|Энергия]]

- Не [[druid-glossary#^overcap|оверкапить]]. Юзать [[druid-glossary#^tigers-fury|Тигриное неистовство]] при низкой энергии
- Не спамить [[druid-glossary#^shred|Полоснуть]] вхолостую - следить за [[druid-glossary#^panthers-guile|Хитрость пантеры]]/[[druid-glossary#^moment-of-clarity|Момент ясности]] [[druid-glossary#^proc|проками]]
- Перед [[druid-glossary#^chomp|Быстрый укус]] - слить [[druid-glossary#^energy|энергию]] ниже 30%. Есть 2с окно после достижения порога

### [[druid-glossary#^finisher|Финишеры]]

- Всегда кастовать при 5 [[druid-glossary#^cp|CP]]
- Главная цель - максимизировать количество [[druid-glossary#^ferocious-bite|Свирепый укус]] без потери [[druid-glossary#^uptime|аптайма]] [[druid-glossary#^bleed|блидов]]
- [[druid-glossary#^apex-predators-craving|Жажда сверххищника]] [[druid-glossary#^proc|проки]] - тратить сразу, не копить

### [[druid-glossary#^chomp|Быстрый укус]] тайминг

- Можно использовать [[druid-glossary#^tigers-fury|Тигриное неистовство]] → [[druid-glossary#^chomp|Быстрый укус]] сразу (2с grace period позволяет)
- Идеально: слить [[druid-glossary#^energy|энергию]] [[druid-glossary#^shred|Полоснуть]]-ами → TF → [[druid-glossary#^chomp|Быстрый укус]]

### [[druid-glossary#^rake|Глубокая рана]] vs [[druid-glossary#^swipe|Размах]] (AoE)

- С [[druid-glossary#^double-clawed-rake|Раздвоенные когти]] - приоритет [[druid-glossary#^rake|Глубокая рана]] на максимум целей
- Без него - [[druid-glossary#^rake|Глубокая рана]] на 4 и меньше целей, дальше [[druid-glossary#^swipe|Размах]]
- [[druid-glossary#^swipe|Размах]] только когда все цели под [[druid-glossary#^rake|Глубокая рана]]

### [[druid-glossary#^sudden-ambush|Внезапное нападение]] (reworked)

- Приоритет использования на [[druid-glossary#^shred|Полоснуть]] ([[druid-glossary#^st|ST]]) или [[druid-glossary#^swipe|Размах]] ([[druid-glossary#^aoe|AoE]])
- Больше **не** снапшотит [[druid-glossary#^rake|Глубокая рана]] - не тратить на рейк

---

## Opener

### [[druid-glossary#^st|ST]] Opener (рейд)

1. [[druid-glossary#^prowl|Крадущийся зверь]]
2. [[druid-glossary#^rake|Глубокая рана]] (из стелса)
3. [[druid-glossary#^shred|Полоснуть]] + [[druid-glossary#^moonfire|Лунный огонь]] → набрать 5 [[druid-glossary#^cp|CP]]
4. [[druid-glossary#^tigers-fury|Тигриное неистовство]]
5. [[druid-glossary#^rip|Разорвать]] ([[druid-glossary#^snapshotting|снапшотит]] TF)
6. [[druid-glossary#^berserk-feral|Берсерк]]
7. [[druid-glossary#^feral-frenzy|Дикое бешенство]] → [[druid-glossary#^ferocious-bite|Свирепый укус]]
8. [[druid-glossary#^convoke|Созыв духов]]

> [!note] Продвинутый [[druid-glossary#^chomp|Быстрый укус]] Opener
> Перед пулом слить [[druid-glossary#^energy|энергию]] через [[druid-glossary#^swipe|Размах]], затем:
> [[druid-glossary#^prowl|Крадущийся зверь]] → [[druid-glossary#^rake|Глубокая рана]] → [[druid-glossary#^tigers-fury|Тигриное неистовство]] + [[druid-glossary#^berserk-feral|Берсерк]] → [[druid-glossary#^chomp|Быстрый укус]] → [[druid-glossary#^feral-frenzy|Дикое бешенство]] → [[druid-glossary#^rip|Разорвать]] → [[druid-glossary#^convoke|Созыв духов]]

### [[druid-glossary#^aoe|AoE]] Opener (M+)

1. [[druid-glossary#^prowl|Крадущийся зверь]]
2. [[druid-glossary#^rake|Глубокая рана]] (из стелса)
3. [[druid-glossary#^rake|Глубокая рана]]/[[druid-glossary#^swipe|Размах]] → набрать 5 [[druid-glossary#^cp|CP]] (с [[druid-glossary#^double-clawed-rake|Раздвоенные когти]] - приоритет [[druid-glossary#^rake|Глубокая рана]] по нескольким целям)
4. [[druid-glossary#^tigers-fury|Тигриное неистовство]]
5. [[druid-glossary#^primal-wrath|Первобытный гнев]]
6. [[druid-glossary#^berserk-feral|Берсерк]]
7. [[druid-glossary#^feral-frenzy|Дикое бешенство]] → [[druid-glossary#^ferocious-bite|Свирепый укус]]
8. [[druid-glossary#^convoke|Созыв духов]]
9. [[druid-glossary#^primal-wrath|Первобытный гнев]] (обновить [[druid-glossary#^rip|Разорвать]])

---

## [[druid-glossary#^st|ST]] приоритет (рейды)

1. **[[druid-glossary#^berserk-feral|Берсерк]]** - по [[druid-glossary#^cd|КД]], синхронить с [[druid-glossary#^tigers-fury|Тигриное неистовство]]
2. **[[druid-glossary#^tigers-fury|Тигриное неистовство]]** - по КД при низкой [[druid-glossary#^energy|энергии]] (не [[druid-glossary#^overcap|оверкапить]])
3. **[[druid-glossary#^convoke|Созыв духов]]** - с активными [[druid-glossary#^berserk-feral|Берсерк]] + [[druid-glossary#^tigers-fury|Тигриное неистовство]]
4. **[[druid-glossary#^feral-frenzy|Дикое бешенство]]** - при низких [[druid-glossary#^cp|CP]]
5. **[[druid-glossary#^chomp|Быстрый укус]]** - по КД, слить [[druid-glossary#^energy|энергию]] до <30% перед использованием, идеально во время TF
6. **[[druid-glossary#^rake|Глубокая рана]]** - держать, обновлять в [[druid-glossary#^pandemic|пандемик]] (<3.6с), приоритет рефреша при TF (апгрейд [[druid-glossary#^snapshotting|снапшота]])
7. **[[druid-glossary#^rip|Разорвать]]** - держать на цели (5 [[druid-glossary#^cp|CP]]), рефрешить в [[druid-glossary#^pandemic|пандемик]] (<5.8с) если [[druid-glossary#^tigers-fury|Тигриное неистовство]] активен
8. **[[druid-glossary#^ferocious-bite|Свирепый укус]]** - при 5 [[druid-glossary#^cp|CP]] если [[druid-glossary#^rip|Разорвать]] не в [[druid-glossary#^pandemic|пандемике]] или рефреш даунгрейднет (нет TF)
9. **[[druid-glossary#^moonfire|Лунный огонь]]** - держать (если [[druid-glossary#^lunar-inspiration|Лунное вдохновение]])
10. **[[druid-glossary#^shred|Полоснуть]]** - генерация [[druid-glossary#^cp|CP]], следить за [[druid-glossary#^panthers-guile|Хитрость пантеры]] [[druid-glossary#^proc|проками]], не спамить вслепую

---

## [[druid-glossary#^aoe|AoE]] приоритет (M+)

1. **[[druid-glossary#^berserk-feral|Берсерк]]** - по [[druid-glossary#^cd|КД]], синхронить с [[druid-glossary#^tigers-fury|Тигриное неистовство]]
2. **[[druid-glossary#^tigers-fury|Тигриное неистовство]]** - по КД при низкой [[druid-glossary#^energy|энергии]]
3. **[[druid-glossary#^convoke|Созыв духов]]** - с [[druid-glossary#^berserk-feral|Берсерк]] + TF, убедиться что [[druid-glossary#^rip|Разорвать]] доживёт весь ченнел
4. **Frantic Frenzy** - при низких [[druid-glossary#^cp|CP]]
5. **[[druid-glossary#^chomp|Быстрый укус]]** - по КД, слить [[druid-glossary#^energy|энергию]] до <30% перед использованием
6. **[[druid-glossary#^primal-wrath|Первобытный гнев]]** - держать [[druid-glossary#^rip|Разорвать]] на всех целях, рефрешить в [[druid-glossary#^pandemic|пандемик]], [[druid-glossary#^snapshotting|снапшотить]] TF
7. **[[druid-glossary#^ferocious-bite|Свирепый укус]]** - при 5 [[druid-glossary#^cp|CP]] если [[druid-glossary#^rip|Разорвать]] здоровый (5+ сек), триггерит [[druid-glossary#^rampant-ferocity|Свирепое буйство]]
8. **[[druid-glossary#^apex-predators-craving|Жажда сверххищника]]** [[druid-glossary#^proc|проки]] - тратить сразу
9. **[[druid-glossary#^rake|Глубокая рана]]** - по приоритетным целям ([[druid-glossary#^double-clawed-rake|Раздвоенные когти]] упрощает)
10. **[[druid-glossary#^swipe|Размах]]** - генерация [[druid-glossary#^cp|CP]] когда все цели под [[druid-glossary#^rake|Глубокая рана]]
11. **[[druid-glossary#^moonfire|Лунный огонь]]** - на приоритетные цели (если талант)

---

## Дефенсивы и утилити

### Дефенсивы

| Способность | Эффект | **КД** |
|---|---|---|
| **Дубовая кожа** (Barkskin) | **DR** 20%, можно кастовать в любой форме | 60с |
| **Инстинкты выживания** (Survival Instincts) | **DR** 50%, 2 заряда | 2 мин |
| Облик медведя (Bear Form) | Дополнительное HP + armor, использовать если дефы на **КД** | - |
| **Сердце дикой природы** (Heart of the Wild) | Усиленная Облик медведя (Bear Form) для экстренных ситуаций | 5 мин |
| Неистовое восстановление (Frenzied Regeneration) | Доступна в Облик кошки (Cat Form) через Empowered Shapeshifting (**DotC**) | - |

> [!note] Лейеринг
> [[druid-glossary#^barkskin|Дубовая кожа]] → [[druid-glossary#^survival-instincts|Инстинкты выживания]] → Облик медведя (Bear Form) + [[druid-glossary#^heart-of-the-wild|Сердце дикой природы]]. Не стакать дефы без нужды.

### Утилити

| Способность | Назначение |
|---|---|
| Лобовая атака (Skull Bash) | Интеррапт + мини-чардж |
| **Тревожный рев** (Stampeding Roar) | Групповой спринт |
| **Озарение** (Innervate) | Экстернал для хилера |
| Rebirth | Боевое воскрешение |
| **Умиротворение** (Soothe) | Снятие Enrage с врагов |
| **Тайфун** (Typhoon) | Нокбэк |
| **Вихрь Урсола** (Ursol's Vortex) | Контроль мобов, стягивание |
| **Парализующий рык** (Incapacitating Roar) | AoE-инкапаситейт |
| Знак дикой природы (Mark of the Wild) | Рейд-бафф |

---

## Статы

### Приоритет

**Рейд ([[druid-glossary#^st|ST]]):** Agility > [[druid-glossary#^mastery-feral|Искусность: когти-лезвия]] > Crit > Haste > Versatility

**M+ ([[druid-glossary#^aoe|AoE]]):** Agility > [[druid-glossary#^mastery-feral|Искусность: когти-лезвия]] ≈ Haste > Crit > Versatility

> [!note] Статы спорны
> Mastery - топ-стат в обоих режимах; за ним порядок Crit/Haste плавает от гира и контента. Сделай сим под свой набор.

### Что даёт каждый стат

- **[[druid-glossary#^mastery-feral|Искусность: когти-лезвия]] (Razor Claws)** - увеличивает урон [[druid-glossary#^bleed|блидов]] И [[druid-glossary#^finisher|финишеров]]. Топ-стат для большинства билдов
- **Crit** - Primal Fury даёт 2 [[druid-glossary#^cp|CP]] при крите, ускоряет ротацию
- **Haste** - ускоряет генерацию [[druid-glossary#^energy|энергии]] и тики [[druid-glossary#^bleed|блидов]]
- **Versatility** - плоский бонус к урону и хилу + [[druid-glossary#^damage-reduction|DR]]

### Третичные статы

- **Avoidance** - снижает AoE-урон (очень ценно в M+)
- **Leech** - пассивный самохил от урона
- **Speed** - нишево, но полезно на некоторых боссах

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

### Тир-сет (Midnight Season 1 - Luminous Bloom)

- **2-set:** Получение Ясности мысли (Clearcasting) от Omen of Clarity увеличивает шанс крита на 5% на 4 сек
- **4-set:** Урон [[druid-glossary#^rake|Глубокая рана]] +20%. Ясность мысли (Clearcasting) увеличивает урон [[druid-glossary#^shred|Полоснуть]] или [[druid-glossary#^swipe|Размах]] на 15%

> [!note] Синергия
> Берите [[druid-glossary#^moment-of-clarity|Момент ясности]] - больше [[druid-glossary#^proc|проков]] Ясности мысли (Clearcasting) = больше [[druid-glossary#^uptime|аптайм]] бонусов тир-сета.

### Оружие

| Предмет | Источник | Контекст |
|---|---|---|
| Roostwarden's Bough | Windrunner Spire (данж) | M+ BiS |
| Inescapable Reach | Vorasius (рейд) | Рейд BiS |

### Тринкеты

**S-тир (рейд и M+):**
- **Algeth'ar Puzzle Box** - on-use stat тринкет, синхронить с [[druid-glossary#^berserk-feral|Берсерк]]
- **Gaze of the Alnseer** - пассивный stat stick (рейд, Chimaerus)
- **Radiant Plume** - пассивный, сильный в обоих контекстах

**A-тир:**
- Umbral Plume - stat stick для M+
- Sealed Chaos Urn
- Heart of Wind
- Emberwing Feather
- Vaelgor's Final Stare

> [!important] Правило тринкетов
> Всегда носить 1 on-use тринкет (Puzzle Box) + 1 пассивный. On-use синхронить с [[druid-glossary#^berserk-feral|Берсерк]] + [[druid-glossary#^tigers-fury|Тигриное неистовство]].

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

**Night Elf** (лучший выбор) - Shadowmeld даёт:
- Ре-стелс в бою → усиленный [[druid-glossary#^rake|Глубокая рана]] ([[druid-glossary#^prowl|Крадущийся зверь]]-[[druid-glossary#^snapshotting|снапшот]])
- Дроп таргета в M+ (избежание опасных механик)
- Значимый DPS-прирост по сравнению с другими расами

### Horde

**Tauren** (лучший выбор) - Громовая поступь (War Stomp) даёт AoE-стан, полезно в M+ для контроля. Урон немного уступает Night Elf, но разница небольшая.

> [!note] Практический совет
> Разница между расами минимальна (<1% DPS). Night Elf имеет преимущество за счёт Shadowmeld-утилити, но выбирайте что нравится - это не сломает вам рейтинг.
