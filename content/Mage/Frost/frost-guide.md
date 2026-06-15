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

> **Patch:** 12.0.5 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

> Frost Mage получил крупнейшую переработку за всю историю спека.

**Удалено:**
- **Icy Veins** (способность) - заменена на [[mage-glossary#^ray-of-frost|Морозный луч]]
- **Mass Barrier** - удалена
- **Shifting Power** - удалена у всех спеков мага
- **Temporal Shield** - удалена
- **Coldest Snap** - удалена (есть [[mage-glossary#^cold-snap|Холодная хватка]] на чойс-ноде)

**Урезано (не удалено):**
- **[[mage-glossary#^mirror-image|Зеркальное изображение]]** и **[[mage-glossary#^greater-invis|Великая невидимость]]** остались как таланты класс-дерева, но потеряли дефенсивную ценность: Зеркальное изображение (3 копии, ~15 сек) больше не снижает урон, Великая невидимость (инвиз 20 сек) - без прежней защиты. Теперь это утилити, а не дефенсивы.

**Добавлено/переработано:**
- **[[mage-glossary#^freezing|Замерзание]]** - новый стакающийся дебафф (до 20), накладывается [[mage-glossary#^frostbolt|Ледяной стрелой]], [[mage-glossary#^flurry|Шквалом]], [[mage-glossary#^ray-of-frost|Морозным лучом]]. Потребляется через [[mage-glossary#^ice-lance|Ледяное копьё]] или [[mage-glossary#^comet-storm|Кометную бурю]], вызывая [[mage-glossary#^shatter|Раскалывание]] - основной источник урона
- **[[mage-glossary#^shatter|Раскалывание]] переработано** - больше не бонус к криту. Теперь это потребление стаков [[mage-glossary#^freezing|Замерзания]], каждый стак = урон
- **[[mage-glossary#^ray-of-frost|Морозный луч]]** - новый основной бёрст-КД (до 2 зарядов), ченнел, билдит 8 стаков [[mage-glossary#^freezing|Замерзания]]
- **[[mage-glossary#^glacial-bulwark|Ледниковый бастион]]** - новый пассив: доп. заряд [[mage-glossary#^ice-block|Ледяной глыбы]] + [[mage-glossary#^ice-barrier|Ледяной преграды]]
- **Apex Talents** - новая система из 4 очков талантов
- **[[mage-glossary#^comet-storm|Кометная буря]]** заменяет [[mage-glossary#^ray-of-frost|Морозный луч]] на панели после ченнела
- **[[mage-glossary#^glacial-spike|Ледовый шип]]** заменяет [[mage-glossary#^frostbolt|Ледяную стрелу]] при 5 [[mage-glossary#^icicles|Кристаллах льда]]
- Крит больше не имеет "Shatter cap" - обычный стат наравне с другими

**Итог:** спек стал проще механически (меньше баффов отслеживать), но новая система [[mage-glossary#^freezing|Замерзания]] добавляет свою глубину.

---

## Сильные и слабые стороны

**Сильные:**
- Лучший 2-target клив в игре (Ледяные осколки)
- Мощный on-demand AoE бёрст ([[mage-glossary#^ray-of-frost|Морозный луч]] + [[mage-glossary#^comet-storm|Кометная буря]])
- Отличный контроль передвижения врагов (замедления, руты)
- С [[mage-glossary#^glacial-bulwark|Ледниковым бастионом]] - один из самых живучих спеков
- Простой для изучения (система [[mage-glossary#^freezing|Замерзания]] интуитивна)

**Слабые:**
- Урезаны дефенсивы: Mass Barrier удалён, а [[mage-glossary#^mirror-image|Зеркальное изображение]] и [[mage-glossary#^greater-invis|Великая невидимость]] остались, но без дефенсивной ценности (теперь утилити)
- Без [[mage-glossary#^glacial-bulwark|Ледникового бастиона]] - очень хрупкий ("aggressively squishy")
- [[mage-glossary#^ray-of-frost|Морозный луч]] требует стоять на месте
- Менее гибкий, чем Fire/Arcane, на некоторых боссах с высокой мобильностью

---

## Таланты

### Hero Talent

- **Spellslinger** - основной выбор для ST и AoE
  - Frost Splinter - пассивные снаряды, наносят урон автоматически
  - Потребление [[mage-glossary#^freezing|Замерзания]] при **6+ стаках**
  - Ключевые таланты: Shifting Shards, Reactive Barrier, Slippery Slinging

- **Frostfire** - ситуативный выбор, уступает по DPS
  - Frostfire Bolt заменяет [[mage-glossary#^frostbolt|Ледяную стрелу]], добавляет Ignite
  - Потребление [[mage-glossary#^freezing|Замерзания]] при **10+ стаках**
  - Isothermic Core - [[mage-glossary#^comet-storm|Кометная буря]] вызывает дополнительные метеоры
  - Может быть "fun choice", но не оптимален для парсинга

> [!note] Что брать
> **Spellslinger - лучший выбор для обоих типов контента.** Frostfire рассматривают разве что под чистый рейд ST, но и там Spellslinger обычно впереди.

### Apex талант

- **[[mage-glossary#^hand-of-frost|Леденящая длань]]** (Hand of Frost) - единственный Apex талант для Frost
  - **Rank 1:** шанс призвать Леденящую длань при [[mage-glossary#^shatter|Раскалывании]], наносит Frost-урон + стаки [[mage-glossary#^freezing|Замерзания]]
  - **Rank 2:** повышает шанс + бонус к урону заклинаний
  - **Rank 3:** [[mage-glossary#^ray-of-frost|Морозный луч]] получает **дополнительный заряд** + усиленный урон + призывает 4 Леденящих длани во время ченнела
  - Rank 3 = ~+25% общего урона. **Берём всегда, все 4 очка.**

### Ключевые таланты

Всегда берём:
- **[[mage-glossary#^glacial-bulwark|Ледниковый бастион]]** - доп. заряд [[mage-glossary#^ice-block|Ледяной глыбы]] + [[mage-glossary#^ice-barrier|Ледяной преграды]]. Один из сильнейших дефенсивов в игре
- **Ледяные осколки** (Splitting Ice) - [[mage-glossary#^flurry|Шквал]] и [[mage-glossary#^frostbolt|Ледяная стрела]] бьют 1 доп. цель на 80%
- **[[mage-glossary#^lonely-winter|Одиночная зима]]** (Lonely Winter) - убирает Water Elemental, +урон заклинаниям
- **[[mage-glossary#^comet-storm|Кометная буря]]** - AoE бёрст, потребляет стаки [[mage-glossary#^freezing|Замерзания]]
- **[[mage-glossary#^thermal-void|Ледяная Бездна]]** (Thermal Void) - при проке [[mage-glossary#^bf|Заморозки мозгов]] даёт бафф, усиливающий следующее [[mage-glossary#^ice-lance|Ледяное копьё]] (бонус к урону [[mage-glossary#^shatter|Раскалывания]]). Пока бафф активен - [[mage-glossary#^ice-lance|Ледяное копьё]] в приоритете
- **[[mage-glossary#^icicles|Кристаллы льда]]** (Icicles) - талант; при 5 Кристаллах льда следующая [[mage-glossary#^frostbolt|Ледяная стрела]] превращается в [[mage-glossary#^glacial-spike|Ледовый шип]] (мощный каст). Отдельным талантом Ледовый шип не берётся
- **[[mage-glossary#^ray-of-frost|Морозный луч]]** - основной бёрст-КД
- **[[mage-glossary#^frozen-orb|Ледяной шар]]** - по КД всегда
- **Improved [[mage-glossary#^flurry|Шквал]]** (Improved Flurry) - must-have
- **[[mage-glossary#^fof|Ледяные пальцы]]** (Fingers of Frost) - основной прок
- **[[mage-glossary#^bf|Заморозка мозгов]]** (Brain Freeze) - основной прок

Класс-таланты (универсальные):
- **[[mage-glossary#^ice-barrier|Ледяная преграда]], [[mage-glossary#^alter-time|Манипуляции со временем]], [[mage-glossary#^ice-block|Ледяная глыба]]** - базовые дефенсивы
- **[[mage-glossary#^spatial-manipulation|Власть над пространством]]** (Spatial Manipulation) - доп. заряд [[mage-glossary#^shimmer|Мерцания]]. Всегда выбирать вместо Reflection
- **Flow of Time, [[mage-glossary#^ice-block|Ледяной холод]]** (Ice Cold) - must-have
- **Improved [[mage-glossary#^counterspell|Антимагия]]** (Improved Counterspell) - must-have для M+

Рейд (ST-ориентированные):
- **Wintertide** - бонус к ST-урону
- **Piercing Cold**
- **Deep [[mage-glossary#^shatter|Раскалывание]]** (Deep Shatter) - для ST

M+ (AoE-ориентированные):
- **Fractured Frost** - усиление AoE
- **Hailstones**
- **Rimecaster**
- **[[mage-glossary#^freezing-rain|Леденящий дождь]]** (Freezing Rain) - усиливает [[mage-glossary#^blizzard|Снежную бурю]] в AoE

> [!note] Water Elemental vs Одиночная зима
> Water Elemental вернулся в Midnight как опция. [[mage-glossary#^lonely-winter|Одиночная зима]] доминирует в обоих типах контента. Пет проигрывает на мультитаргете и не лечит через Leech. Elemental - вариант только для open world/соло.

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

1. **Не оверкапить [[mage-glossary#^freezing|Замерзание]] на 20** - потерянные стаки = потерянный урон
2. **Тратить [[mage-glossary#^fof|FoF]] и [[mage-glossary#^bf|BF]] проки немедленно** - не допускать оверкап (2 заряда [[mage-glossary#^fof|Ледяных пальцев]] макс)
3. **[[mage-glossary#^frozen-orb|Ледяной шар]] и [[mage-glossary#^glacial-spike|Ледовый шип]] - по КД**
4. **[[mage-glossary#^ray-of-frost|Морозный луч]] - низкий приоритет** в ротации, ибо он билдер стаков. Сначала потратить стаки, потом билдить
5. **Порог [[mage-glossary#^ice-lance|Ледяного копья]]:** 6+ стаков (Spellslinger) или 10+ стаков (Frostfire)
6. **ST ротация используется и на 2-target клив** - не переключаться на AoE при 2 целях
7. **Не двигаться во время [[mage-glossary#^ray-of-frost|Морозного луча]]** - это ченнел
8. **Бафф [[mage-glossary#^thermal-void|Ледяной Бездны]] - приоритет [[mage-glossary#^ice-lance|Ледяного копья]]**, когда он активен
9. **[[mage-glossary#^frozen-orb|Ледяной шар]] не кастовать при активной [[mage-glossary#^bf|Заморозке мозгов]]** - сначала потратить [[mage-glossary#^bf|BF]]
10. **[[mage-glossary#^alter-time|Манипуляции со временем]]** - использовать проактивно (снапшотить ДО урона), не реактивно

### Когда переключаться на AoE

- **1-2 цели** - ST ротация. Ледяные осколки и так кливают вторую цель
- **3+ целей** - переход на AoE: [[mage-glossary#^frozen-orb|Ледяной шар]] в пак, [[mage-glossary#^comet-storm|Кометная буря]], [[mage-glossary#^blizzard|Снежная буря]] (с [[mage-glossary#^freezing-rain|Леденящим дождём]]), [[mage-glossary#^glacial-spike|Ледовый шип]]
- **Важно:** при 2 целях AoE-ротация - потеря урона. Ледяные осколки делают ST-ротацию лучшим выбором для клива

---

## Опенер

### ST Опенер (рейд / M+ боссы)

1. Summon Water Elemental (если выбран) или подготовка
2. **Pre-cast [[mage-glossary#^frostbolt|Ледяная стрела]]** (Ледовый шип до пулла недоступен - Кристаллы льда копятся только в бою)
3. Trinket (on-use, напр. Vaelgor's Final Stare)
4. **[[mage-glossary#^flurry|Шквал]]** сразу на пулле
5. **[[mage-glossary#^frozen-orb|Ледяной шар]]** (если [[mage-glossary#^bf|Заморозка мозгов]] не активна)
6. **[[mage-glossary#^ray-of-frost|Морозный луч]]** (не двигаться!)
7. При проке **[[mage-glossary#^bf|Заморозки мозгов]]** - комбо [[mage-glossary#^shatter|Раскалывания]]: **[[mage-glossary#^frostbolt|Ледяная стрела]] → [[mage-glossary#^flurry|Шквал]] → [[mage-glossary#^ice-lance|Ледяное копьё]]** (кастовать именно в этом порядке: [[mage-glossary#^flurry|Шквал]] летит быстрее и догоняет [[mage-glossary#^frostbolt|Ледяную стрелу]], накладывая стаки [[mage-glossary#^freezing|Замерзания]] до попадания [[mage-glossary#^ice-lance|Ледяного копья]])
8. При проке **[[mage-glossary#^fof|Ледяных пальцев]]** - сразу **[[mage-glossary#^ice-lance|Ледяное копьё]]** ([[mage-glossary#^fof|FoF]] позволяет шаттерить без набора стаков)
9. **[[mage-glossary#^comet-storm|Кометная буря]]** по КД

### AoE Опенер (M+ треш)

1. **[[mage-glossary#^frozen-orb|Ледяной шар]]** в пак
2. **[[mage-glossary#^comet-storm|Кометная буря]]** по стакнутым целям
3. **[[mage-glossary#^ray-of-frost|Морозный луч]]** (если цели стоят)
4. **[[mage-glossary#^blizzard|Снежная буря]]** (с [[mage-glossary#^freezing-rain|Леденящим дождём]])
5. **[[mage-glossary#^glacial-spike|Ледовый шип]]** по КД
6. **[[mage-glossary#^ice-lance|Ледяное копьё]]** при 6+ [[mage-glossary#^freezing|Замерзания]] или при проке [[mage-glossary#^fof|FoF]]
7. Филлить [[mage-glossary#^frostbolt|Ледяной стрелой]]

---

## ST приоритет (рейды) - Spellslinger

1. **[[mage-glossary#^comet-storm|Кометная буря]]** - по КД (если талант)
2. **[[mage-glossary#^flurry|Шквал]]** - если [[mage-glossary#^bf|Заморозка мозгов]] активна И [[mage-glossary#^thermal-void|Ледяная Бездна]] **не** активна
3. **[[mage-glossary#^frozen-orb|Ледяной шар]]** - по КД (если [[mage-glossary#^bf|Заморозка мозгов]] не активна)
4. **[[mage-glossary#^glacial-spike|Ледовый шип]]** - по КД (доступен при 5 [[mage-glossary#^icicles|Кристаллах льда]])
5. **[[mage-glossary#^ice-lance|Ледяное копьё]]** - при баффе [[mage-glossary#^thermal-void|Ледяной Бездны]]
6. **[[mage-glossary#^ice-lance|Ледяное копьё]]** - при 6+ стаках [[mage-glossary#^freezing|Замерзания]] ИЛИ проке [[mage-glossary#^fof|Ледяных пальцев]]
7. **[[mage-glossary#^flurry|Шквал]]** - филлер без прока [[mage-glossary#^bf|BF]] (кастовать для накопления [[mage-glossary#^freezing|Замерзания]], когда остальные приоритеты закрыты)
8. **[[mage-glossary#^ray-of-frost|Морозный луч]]** - билдер [[mage-glossary#^freezing|Замерзания]] (низкий приоритет, ибо генерирует стаки - использовать когда [[mage-glossary#^freezing|Замерзание]] < порога)
9. **[[mage-glossary#^frostbolt|Ледяная стрела]]** - основной филлер

> [!important] Ключевое правило
> [[mage-glossary#^ray-of-frost|Морозный луч]] стоит низко не потому, что слабый, а потому, что он **генератор** стаков. Лучше сначала потратить накопленные стаки, потом билдить новые через [[mage-glossary#^ray-of-frost|Морозный луч]].

---

## AoE приоритет (M+) - Spellslinger

1. **[[mage-glossary#^comet-storm|Кометная буря]]** - по КД на стакнутых целях
2. **[[mage-glossary#^blizzard|Снежная буря]]** - с баффом [[mage-glossary#^freezing-rain|Леденящего дождя]] (приоритет)
3. **[[mage-glossary#^flurry|Шквал]]** - если [[mage-glossary#^bf|Заморозка мозгов]] активна И [[mage-glossary#^thermal-void|Ледяная Бездна]] не активна
4. **[[mage-glossary#^frozen-orb|Ледяной шар]]** - по КД, ловить несколько целей
5. **[[mage-glossary#^glacial-spike|Ледовый шип]]** - скейлится с количеством врагов
6. **[[mage-glossary#^blizzard|Снежная буря]]** - если Splinterstorm не активен
7. **[[mage-glossary#^ice-lance|Ледяное копьё]]** - при 6+ [[mage-glossary#^freezing|Замерзания]] или при проке [[mage-glossary#^fof|FoF]]
8. **[[mage-glossary#^flurry|Шквал]]** - филлер
9. **[[mage-glossary#^ray-of-frost|Морозный луч]]** - генерация стаков
10. **[[mage-glossary#^frostbolt|Ледяная стрела]]** - филлер

---

## Вариант Frostfire (если выбран)

- [[mage-glossary#^frostbolt|Ледяная стрела]] заменена на **Frostfire Bolt** (Frost + Fire урон, накладывает Ignite)
- Порог потребления [[mage-glossary#^freezing|Замерзания]]: **10+ стаков** (вместо 6)
- **Isothermic Core** - [[mage-glossary#^comet-storm|Кометная буря]] вызывает Meteor дополнительно
- Приоритет аналогичен, но [[mage-glossary#^comet-storm|Кометная буря]] ещё важнее из-за Meteor бонуса
- Frostfire Bolt в качестве филлера вместо [[mage-glossary#^frostbolt|Ледяной стрелы]]

---

## Дефенсивы и утилити

### Дефенсивы

| Способность | Эффект | КД | Примечание |
|---|---|---|---|
| **[[mage-glossary#^ice-block\|Ледяной холод]] (Ice Cold)** | 70% DR на 6 сек, можно кастовать | ~5 мин | Основной дефенсив |
| **[[mage-glossary#^ice-barrier\|Ледяная преграда]]** (Ice Barrier) | Щит ~22% HP + замедление врагов | 30 сек (25 с талантом) | Использовать по КД |
| **[[mage-glossary#^glacial-bulwark\|Ледниковый бастион]]** (Glacial Bulwark) | +1 заряд Ледяной глыбы И Ледяной преграды | пассив | **Must-have талант** |
| **[[mage-glossary#^alter-time\|Манипуляции со временем]]** (Alter Time) | Снапшот позиции + HP, телепорт назад | 1 мин | Лучший дефенсив против предсказуемого урона |
| **[[mage-glossary#^cold-snap\|Холодная хватка]]** (Cold Snap) | Сброс КД барьера/блока/новы | 5 мин | Чойс-нода с Ледниковым бастионом |

> [!warning] Спорный момент: [[mage-glossary#^glacial-bulwark|Ледниковый бастион]] vs [[mage-glossary#^cold-snap|Холодная хватка]]
> [[mage-glossary#^glacial-bulwark|Ледниковый бастион]] (доп. заряд) vs [[mage-glossary#^cold-snap|Холодная хватка]] (полный сброс КД). Большинство гайдов рекомендуют [[mage-glossary#^glacial-bulwark|Ледниковый бастион]] для общего использования. [[mage-glossary#^cold-snap|Холодная хватка]] может быть лучше на специфичных рейд-боссах с редким, но смертельным уроном.

### Утилити

- **[[mage-glossary#^counterspell|Антимагия]]** - прерывание (must-have в M+)
- **[[mage-glossary#^shimmer|Мерцание]]** - блинк без прерывания каста, 2 заряда с [[mage-glossary#^spatial-manipulation|Властью над пространством]]
- **[[mage-glossary#^frost-nova|Кольцо льда]]** - AoE рут
- **Polymorph** - CC на одну цель
- **Remove Curse** - снятие проклятия
- **Spellsteal** - кража баффа с врага
- **Time Warp** - Bloodlust/Heroism

**Изменено в Midnight:** Mass Barrier удалён; [[mage-glossary#^mirror-image|Зеркальное изображение]] и [[mage-glossary#^greater-invis|Великая невидимость]] остались как таланты, но потеряли дефенсивную ценность (спек стал "aggressively squishy" по мнению сообщества).

---

## Статы

### Приоритет

**Intellect >> Mastery >= Haste > Crit > Versatility**

> [!note] Статы зависят от текущего набора
> Mastery - ведущий стат, Haste и Crit близки за ним. Точный порядок плавает от гира - сделай сим (Raidbots Stat Weights).

Важные нюансы:
- **Shatter cap не существует** - Crit обычный стат
- **Haste soft cap** на 100% - недостижим, не париться
- **[[mage-glossary#^dr|DR]] (Diminishing Returns)** - ускоряются после ~35% Haste
- **Третичные:** Avoidance > Leech > Speed (Leech не лечит через пета)

---

## Гир и тринкеты

### Тир-сет: Midnight Season 1

- **2-Set:** [[mage-glossary#^flurry|Шквал]] damage +10%, [[mage-glossary#^flurry|Шквал]] имеет 10% шанс дать [[mage-glossary#^fof|Ледяные пальцы]]
- **4-Set:** [[mage-glossary#^fof|Ледяные пальцы]] увеличивает урон [[mage-glossary#^shatter|Раскалывания]] на 15%

> Тир-сет не меняет геймплей - просто усиливает существующие проки. Но приоритет - собрать 4 части ASAP.

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
> Для M+: Crucible of Erratic Energies - топовый выбор

### Оружие

- **Рейд BiS:** Umbral Spire of Zuraal
- **Крафт альтернатива:** Aln'hara Cane (стафф с эмбелишментом) - хорош в начале сезона

### Эмбелишменты

- **Darkmoon Sigil: Hunt** - на крафт-оружие (Aln'hara Cane). Приоритетный эмбелишмент в начале сезона
- **Prismatic Focusing Iris** - на шею/кольца
- **Stabilizing Gemstone Bandolier** - на запястья/пояс/ботинки
- **Arcanoweave Lining** - альтернатива на низкобюджетные слоты (плащ, запястья)

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
- **Dwarf** - Stoneform (снятие дебаффов + 10% физ [[mage-glossary#^damage-reduction|DR]]). Самая популярная раса среди топ-игроков
- **Night Elf** - Shadowmeld для сброса мобов и пропуска механик

**Оптимальные для рейда:**
- **Mechagnome** - пассивный DPS бонус
- **Pandaren** - бонус от еды

**Сильные универсальные:**
- **Void Elf** - без пуш-бэка при касте
- **Orc** - Blood Fury + стан-резист
- **Troll** - Berserking + slow-резист
