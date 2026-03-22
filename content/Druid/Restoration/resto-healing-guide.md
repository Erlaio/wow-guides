---
tags:
  - wow
  - restoration
  - druid
  - healing
  - guide
created: 2026-03-15
---

Термины и сокращения → [[druid-glossary|Глоссарий]]

> **Patch:** 12.0.1 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

> [!important] Midnight — крупнейшая переработка Resto Druid за несколько дополнений
> Спек стал проще: меньше кнопок, меньше активных [[druid-glossary#^cd|КД]], фокус на [[druid-glossary#^hot|HoT]]-менеджменте и [[druid-glossary#^ramp|рампах]].

### Удалённые способности
- Cenarion Ward, Overgrowth, Spring Blossoms, Nourish, Skull Bash, Renewal, Nature's Vigil, Flash of Clarity

### Переработанные механики
- **[[druid-glossary#^flourish|Flourish]]** — слит в [[druid-glossary#^tranquility|Tranquility]] (пассивный эффект, продлевает все [[druid-glossary#^hot|HoT]] на 10 сек при касте Tranquility). Мощнее, но реже доступен.
- **[[druid-glossary#^grove-guardians|Grove Guardians]]** — стали пассивными: спавнятся автоматически от [[druid-glossary#^swiftmend|Swiftmend]] и [[druid-glossary#^wild-growth|Wild Growth]] вместо активного каста
- **[[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]]** — теперь баффает только [[druid-glossary#^rejuvenation|Rejuvenation]] и [[druid-glossary#^regrowth|Regrowth]] (убрана синергия с [[druid-glossary#^wild-growth|Wild Growth]])
- **[[druid-glossary#^heart-of-the-wild|Heart of the Wild]]** — стал инстант-абилкой на основе текущей формы
- **[[druid-glossary#^efflorescence|Efflorescence]]** — может привязываться к цели [[druid-glossary#^lifebloom|Lifebloom]] через талант Lifetreading
- **Cultivation** — переработан: триггерит дополнительный хил, когда цель падает ниже 60% HP

### Новое
- **[[druid-glossary#^everbloom|Everbloom]]** (Apex-талант) — кардинально усиливает [[druid-glossary#^lifebloom|Lifebloom]] (подробности ниже)
- **[[druid-glossary#^power-of-the-archdruid|Power of the Archdruid]]** — переработан: привязан к [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]], 100% шанс, 2 доп. хила
- **[[druid-glossary#^natures-bounty|Nature's Bounty]]** — 20% хила [[druid-glossary#^regrowth|Regrowth]] сплэшится на других союзников с активным Regrowth
- **[[druid-glossary#^mastery-resto|Mastery: Harmony]]** — усилен: 9% за [[druid-glossary#^hot|HoT]] (вместо 6%), макс 5 HoT-ов = до +45%

### Изменения Hero Talents
- **[[druid-glossary#^keeper-of-the-grove-resto|Keeper of the Grove]]:** Dream Surge нерфнут (2 лепестка вместо 3), добавлены Cenarius' Might (+20% [[druid-glossary#^swiftmend|Swiftmend]]), Sylvan Beckoning, Spirit of the Thicket
- **[[druid-glossary#^wildstalker-resto|Wildstalker]]:** Strategic Infusion (+4% крит [[druid-glossary#^hot|HoT]]), Patient Custodian (+6% эффективность HoT), Rampancy (новая механика [[druid-glossary#^symbiotic-bloom|Symbiotic Blooms]])

---

## Сильные и слабые стороны

### Сильные стороны
- Множество мощных [[druid-glossary#^cd|кулдаунов]] для бёрст-хила
- Отличная мобильность — большинство заклинаний можно кастовать на ходу ([[druid-glossary#^hot|HoT]]-ы инстант)
- Сильный проактивный хил через [[druid-glossary#^ramp|рамп]]-механику
- Концентрированный [[druid-glossary#^st|ST]] хил через [[druid-glossary#^lifebloom|Lifebloom]] + [[druid-glossary#^everbloom|Everbloom]]
- Высокая выживаемость для хилера ([[druid-glossary#^barkskin|Barkskin]], [[druid-glossary#^survival-instincts|Survival Instincts]], [[druid-glossary#^protective-growth|Protective Growth]])
- Полезная утилити: [[druid-glossary#^innervate|Innervate]], [[druid-glossary#^stampeding-roar|Stampeding Roar]], [[druid-glossary#^soothe|Soothe]], [[druid-glossary#^typhoon|Typhoon]]

### Слабые стороны
- Требует точного тайминга [[druid-glossary#^cd|КД]] и подготовки [[druid-glossary#^ramp|рампов]]
- Слабый реактивный хил на непредсказуемый [[druid-glossary#^burst|бёрст]]-урон
- Сравнительно низкий урон в рейде (компенсируется в M+ через [[druid-glossary#^catweaving|cat-weaving]])
- [[druid-glossary#^mana|Мана]]-зависимость — неэффективный спам быстро опустошает ману

---

## Таланты

### Hero Talent

- **Рейд: [[druid-glossary#^keeper-of-the-grove-resto|Keeper of the Grove]]** — [[druid-glossary#^grove-guardians|Grove Guardians]] спавнятся пассивно при касте [[druid-glossary#^swiftmend|Swiftmend]] и [[druid-glossary#^wild-growth|Wild Growth]], дают [[druid-glossary#^burst|бёрст]]-хил и дефенсив [[druid-glossary#^protective-growth|Protective Growth]] (−8% урона при активном [[druid-glossary#^regrowth|Regrowth]]). Лучший выбор для рейдового контента.
- **M+: [[druid-glossary#^wildstalker-resto|Wildstalker]]** — [[druid-glossary#^symbiotic-bloom|Symbiotic Bloom]] (уникальный [[druid-glossary#^hot|HoT]]) усиливает хил на цели и добавляет стак [[druid-glossary#^mastery-resto|Mastery]]. Доминирует в M+ (48 из 50 топ-хилеров по данным Murlok.io). Поддерживает [[druid-glossary#^catweaving|cat-weaving]] для дополнительного урона, но не обязателен.

### Apex-талант

- **[[druid-glossary#^everbloom|Everbloom]]** (новинка Midnight) — усиливает [[druid-glossary#^lifebloom|Lifebloom]]:
  - Ранг 1: [[druid-glossary#^lifebloom|Lifebloom]] автоматически стакается до 3 раз (каждые 5 сек)
  - Ранг 2-3: 15/30% хила [[druid-glossary#^lifebloom|Lifebloom]] сплэшится на 2 ближайших союзников
  - Ранг 4: при потреблении [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]] — [[druid-glossary#^lifebloom|Lifebloom]] блумится 5 раз подряд
  - В данжах делает танка практически бессмертным. Берём всегда.

### Ключевые таланты

Всегда берём:
- **[[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]]** — [[druid-glossary#^swiftmend|Swiftmend]] усиливает следующий [[druid-glossary#^regrowth|Regrowth]] или [[druid-glossary#^rejuvenation|Rejuvenation]] на 60%, применяется к нескольким союзникам через [[druid-glossary#^power-of-the-archdruid|Power of the Archdruid]]
- **[[druid-glossary#^power-of-the-archdruid|Power of the Archdruid]]** — после потребления [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]] применяет 2 дополнительных целевых хила (100% шанс)
- **[[druid-glossary#^wild-growth|Wild Growth]]** — основной [[druid-glossary#^aoe|AoE]] [[druid-glossary#^hot|HoT]], триггерит [[druid-glossary#^grove-guardians|Grove Guardians]] (Keeper)
- **[[druid-glossary#^swiftmend|Swiftmend]]** — ключевой [[druid-glossary#^cd|КД]], триггерит [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]] и [[druid-glossary#^grove-guardians|Grove Guardians]]
- **[[druid-glossary#^lifebloom|Lifebloom]]** — должен быть активен постоянно, основа [[druid-glossary#^everbloom|Everbloom]]
- **[[druid-glossary#^efflorescence|Efflorescence]]** — 100% [[druid-glossary#^uptime|аптайм]] на группе/рейде
- **[[druid-glossary#^innervate|Innervate]]** — 8 сек бесплатных заклинаний, юзать во время [[druid-glossary#^ramp|рампа]]

Рейд ([[druid-glossary#^keeper-of-the-grove-resto|Keeper of the Grove]]):
- **[[druid-glossary#^incarnation-resto|Incarnation: Tree of Life]]** — основной [[druid-glossary#^burst|бёрст]]-кулдаун (~1:40 [[druid-glossary#^cd|КД]]): +10% хила, +40% [[druid-glossary#^rejuvenation|Rejuvenation]], −30% маны на Rejuv, инстант [[druid-glossary#^regrowth|Regrowth]]. Менее требователен к таймингу чем [[druid-glossary#^convoke|Convoke]]. Активировать за 10-12 сек до бёрст-урона.
- **[[druid-glossary#^abundance|Abundance]]** — каждый активный [[druid-glossary#^rejuvenation|Rejuvenation]] даёт 8% крита [[druid-glossary#^regrowth|Regrowth]] (при 10-12 Rejuv = почти 100% крит)
- **[[druid-glossary#^tranquility|Tranquility]]** — автоматически применяет [[druid-glossary#^flourish|Flourish]] (продлевает все [[druid-glossary#^hot|HoT]] на 10 сек). ~2.5 мин [[druid-glossary#^cd|КД]].
- **[[druid-glossary#^natures-bounty|Nature's Bounty]]** — 20% хила [[druid-glossary#^regrowth|Regrowth]] сплэшится на других союзников с активным Regrowth
- **[[druid-glossary#^master-shapeshifter|Master Shapeshifter]]** — генерация [[druid-glossary#^mana|маны]] через [[druid-glossary#^wrath|Wrath]]/[[druid-glossary#^starfire|Starfire]] в даунтайме

M+ ([[druid-glossary#^wildstalker-resto|Wildstalker]]):
- **[[druid-glossary#^convoke|Convoke the Spirits]]** — [[druid-glossary#^burst|бёрст]]-хил (~1 мин [[druid-glossary#^cd|КД]]), кастует 12-16 случайных способностей друида, ~50% шанс мини-Flourish, можно кастовать в Cat Form
- **[[druid-glossary#^symbiotic-relationship|Symbiotic Relationship]]** — ставить на танка перед пулом
- **[[druid-glossary#^catweaving|Cat-weaving]] таланты** — [[druid-glossary#^moonfire|Moonfire]], [[druid-glossary#^sunfire|Sunfire]], переход в Cat Form для дополнительного DPS между хилом (опционально, но сильно повышает урон)
- **[[druid-glossary#^ursols-vortex|Ursol's Vortex]] / [[druid-glossary#^typhoon|Typhoon]] / [[druid-glossary#^incapacitating-roar|Incapacitating Roar]]** — утилити для контроля без потери хила

---

## Готовые билды (импорт)

> [!note] Импорт строки для Patch 12.0.1 (Midnight Season 1)
> Скопируйте строку и вставьте в окно талантов в игре (кнопка "Импорт").

### Рейд (Keeper of the Grove)

```
CkGAAAAAAAAAAAAAAAAAAAAAAMjxMbz2MmZGzywDMmxmxCzAAAAAAAAAAgtBNbMmmhxMmlZmZmhhZGAAAAAAAAstM2w0MzyAAAEwCjZGMzA0MAYmBAMA
```

> [!note] Почему Incarnation вместо Convoke?
> [[druid-glossary#^incarnation-resto|Incarnation: Tree of Life]] требует значительно меньше тайминга и освобождает [[druid-glossary#^mana|ману]] для использования тир-сета Season 1.

### M+ (Wildstalker)

```
CkGAAAAAAAAAAAAAAAAAAAAAAMMmZZMjZmxsN8AMzsMjNbzAAAAAAAAAAglBNbw0MMjxsYmZmZZGegZAAAAAAAwAAQAAAz2MbNLzsYjxMDMzCoZAAmZAYA
```

> [!note] Cat-weaving не обязателен
> [[druid-glossary#^wildstalker-resto|Wildstalker]] не требует играть в Cat Form, но дефолтный билд включает [[druid-glossary#^catweaving|cat-weaving]] т.к. значительно повышает [[druid-glossary#^st|ST]] урон.

### Delves (Wildstalker)

```
CkGAAAAAAAAAAAAAAAAAAAAAAMMmxYGzMjZbmZYYhZx2MAAAAAAAAAAYbQzmhpZMzYMLmZmZWmhxAAAAAAAYMAAEAAwws1sMWsBz8AYGLgmBAYmBgB
```

---

## Ключевые правила

**[[druid-glossary#^ramp|Рамп]]-хилер** — Рестор друид это проактивный хилер. Предварительное наложение [[druid-glossary#^hot|HoT]]-ов до входящего урона значительно эффективнее реактивного хила. Планировать [[druid-glossary#^ramp|рампы]] под опасные фазы босса.

**[[druid-glossary#^lifebloom|Lifebloom]] — главный приоритет** — с [[druid-glossary#^everbloom|Everbloom]] стакается до 3 раз и сплэшит хил. Никогда не дропать. Рефрешить в последние 4.5 сек для блума + обновления.

**[[druid-glossary#^abundance|Abundance]]-механика (рейд)** — каждый активный [[druid-glossary#^rejuvenation|Rejuvenation]] = +8% крита на [[druid-glossary#^regrowth|Regrowth]]. При 10-12 активных Rejuv Regrowth критует почти всегда. Крит как стат поэтому слабый — он уже встроен в геймплей.

**[[druid-glossary#^swiftmend|Swiftmend]] — ключевое заклинание** — не просто хил, а триггер для [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]], [[druid-glossary#^power-of-the-archdruid|Power of the Archdruid]], [[druid-glossary#^grove-guardians|Grove Guardians]] (Keeper) и [[druid-glossary#^everbloom|Everbloom]] блума. Юзать строго по [[druid-glossary#^cd|КД]].

**Управление [[druid-glossary#^mana|маной]]:**
- Не спамить [[druid-glossary#^regrowth|Regrowth]] с низкими стаками [[druid-glossary#^abundance|Abundance]] — это главная причина слива маны
- В даунтайме кастовать [[druid-glossary#^wrath|Wrath]] для реген маны через [[druid-glossary#^master-shapeshifter|Master Shapeshifter]]
- [[druid-glossary#^innervate|Innervate]] юзать рано и часто — первый каст при ~80% маны, во время [[druid-glossary#^ramp|рампов]]
- Непрерывный кастинг: любой простой = потерянные касты [[druid-glossary#^wrath|Wrath]] для реген маны
- С [[druid-glossary#^master-shapeshifter|Master Shapeshifter]] спек никогда полностью не теряет ману, но эффективность критически важна

**[[druid-glossary#^cd|Кулдауны]]:**
- [[druid-glossary#^tranquility|Tranquility]] (~2.5 мин) — автоматически применяет [[druid-glossary#^flourish|Flourish]], самый мощный рейд-[[druid-glossary#^cd|КД]]. Комбинировать с [[druid-glossary#^incarnation-resto|Incarnation]] для макс. эффекта.
- [[druid-glossary#^incarnation-resto|Incarnation: Tree of Life]] (~1:40) — активировать за 10-12 сек до урона для максимума скидки на [[druid-glossary#^rejuvenation|Rejuvenation]]
- [[druid-glossary#^convoke|Convoke the Spirits]] (~1 мин) — в рейде кастовать в Caster Form, в M+ можно из Cat Form для DPS
- [[druid-glossary#^natures-swiftness|Nature's Swiftness]] + [[druid-glossary#^regrowth|Regrowth]] = экстренный мгновенный хил

---

## Приоритет исцеления (рейды)

### [[druid-glossary#^ramp|Рамп]] (10-15 сек перед [[druid-glossary#^burst|бёрстом]] урона)

1. Раскидать 10-12 [[druid-glossary#^rejuvenation|Rejuvenation]] по рейду (набрать стаки [[druid-glossary#^abundance|Abundance]])
2. [[druid-glossary#^swiftmend|Swiftmend]] → [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]] распространяет усиленные хилы через [[druid-glossary#^power-of-the-archdruid|Power of the Archdruid]]
3. [[druid-glossary#^wild-growth|Wild Growth]] по [[druid-glossary#^cd|КД]]
4. Основной кулдаун: [[druid-glossary#^incarnation-resto|Incarnation: Tree of Life]] или [[druid-glossary#^tranquility|Tranquility]] (с автоматическим [[druid-glossary#^flourish|Flourish]])
5. Спам [[druid-glossary#^regrowth|Regrowth]] при высоких стаках [[druid-glossary#^abundance|Abundance]] (почти 100% крит, низкая стоимость [[druid-glossary#^mana|маны]])

### Поддержание

1. **[[druid-glossary#^lifebloom|Lifebloom]]** — держать постоянно, рефрешить в последние 4.5 сек (чтобы сработал блум)
2. **[[druid-glossary#^efflorescence|Efflorescence]]** — 100% [[druid-glossary#^uptime|аптайм]] на стакнутой группе (обычно мили)
3. **[[druid-glossary#^wild-growth|Wild Growth]]** — по [[druid-glossary#^cd|КД]] при групповом уроне
4. **[[druid-glossary#^swiftmend|Swiftmend]]** — по [[druid-glossary#^cd|КД]], ключевой для [[druid-glossary#^soul-of-the-forest-resto|Soul of the Forest]] + [[druid-glossary#^everbloom|Everbloom]]
5. **[[druid-glossary#^regrowth|Regrowth]]** — приоритет на [[druid-glossary#^clearcasting|Clearcasting]] [[druid-glossary#^proc|проках]] и при высоких стаках [[druid-glossary#^abundance|Abundance]]
6. **[[druid-glossary#^rejuvenation|Rejuvenation]]** — поддерживать на целях, получающих урон

### Даунтайм

- **[[druid-glossary#^wrath|Wrath]]** — генерация [[druid-glossary#^mana|маны]] через [[druid-glossary#^master-shapeshifter|Master Shapeshifter]]
- **[[druid-glossary#^moonfire|Moonfire]]** — поддерживать [[druid-glossary#^dot|DoT]] на боссе
- Не спамить [[druid-glossary#^regrowth|Regrowth]] без [[druid-glossary#^abundance|Abundance]] стаков — тратит много маны

---

## Приоритет исцеления (M+)

### Перед пулом

1. [[druid-glossary#^symbiotic-relationship|Symbiotic Relationship]] на танка ([[druid-glossary#^wildstalker-resto|Wildstalker]])
2. [[druid-glossary#^gift-of-the-wild|Mark of the Wild]] на группу (+3% Versatility)

### Во время пула

1. Прехотить [[druid-glossary#^rejuvenation|Rejuvenation]] 5-6 сек до входящего урона
2. [[druid-glossary#^swiftmend|Swiftmend]] + [[druid-glossary#^wild-growth|Wild Growth]] когда урон начинается
3. [[druid-glossary#^regrowth|Regrowth]] на критически низких союзников
4. [[druid-glossary#^efflorescence|Efflorescence]] на максимальное покрытие группы
5. [[druid-glossary#^innervate|Innervate]] рано и часто на тяжёлых пулах

### Спот-хил (приоритет)

1. [[druid-glossary#^swiftmend|Swiftmend]] + [[druid-glossary#^regrowth|Regrowth]] — на низкого союзника
2. [[druid-glossary#^natures-swiftness|Nature's Swiftness]] + [[druid-glossary#^regrowth|Regrowth]] — мгновенный экстренный хил
3. Обычный [[druid-glossary#^regrowth|Regrowth]] — если остальное на [[druid-glossary#^cd|КД]]

### Поддержание

1. **[[druid-glossary#^lifebloom|Lifebloom]]** — постоянно на танке (рефреш в последние 4.5 сек)
2. **[[druid-glossary#^efflorescence|Efflorescence]]** — 100% [[druid-glossary#^uptime|аптайм]] (через Lifetreading привязывается к [[druid-glossary#^lifebloom|Lifebloom]])
3. **[[druid-glossary#^swiftmend|Swiftmend]]** и **[[druid-glossary#^wild-growth|Wild Growth]]** — юзать по [[druid-glossary#^cd|КД]]
4. **[[druid-glossary#^rejuvenation|Rejuvenation]]** — на целях с [[druid-glossary#^symbiotic-bloom|Symbiotic Bloom]] (триггерит Bursting Growth)

### DPS-фаза ([[druid-glossary#^catweaving|cat-weaving]], опционально)

- Между хилами: [[druid-glossary#^moonfire|Moonfire]]/[[druid-glossary#^sunfire|Sunfire]] → Cat Form → урон → обратно в Caster Form
- Не обязательно, но значительно повышает общий урон группы

---

## Дефенсивы и утилити

### Личные дефенсивы

| Способность | Эффект | **КД** |
|---|---|---|
| **Barkskin** | −20% входящего урона, 12 сек | 1 мин |
| **Survival Instincts** | −50% входящего урона, 6 сек | 3 мин (2 заряда) |
| **Protective Growth** (Keeper) | −8% урона при активном **Regrowth** | пассивно |
| Bear Form | +25% HP, +200% броня (экстренный shift) | — |

### Утилити

| Способность | Эффект |
|---|---|
| **Innervate** | 8 сек бесплатных заклинаний (можно дать другому хилеру) |
| **Stampeding Roar** | +60% скорости передвижения для рейда, 8 сек |
| **Typhoon** | **AoE** нокбэк + замедление |
| **Ursol's Vortex** | **AoE** притягивание + замедление |
| **Incapacitating Roar** | **AoE** инкап на 3 сек |
| **Soothe** | снятие Enrage с врага |
| **Solar Beam** | **AoE** сайленс |
| **Prowl** | стелс (скип мобов, саппинг) |

> [!warning] В M+ утилити = хил
> Грамотное использование [[druid-glossary#^typhoon|Typhoon]], [[druid-glossary#^ursols-vortex|Ursol's Vortex]] и [[druid-glossary#^incapacitating-roar|Incapacitating Roar]] предотвращает больше урона, чем лишний каст [[druid-glossary#^regrowth|Regrowth]].

---

## Статы

**Рейд:** Item Level > Haste > Mastery > Versatility > Crit

**M+:** Item Level > Haste ≈ Mastery > Versatility > Crit

> [!note] Item Level почти всегда важнее вторичных статов
> Прирост Intellect от более высокого ilvl перевешивает оптимизацию вторичек. Для точной настройки используйте QE Live.

### Подробности

| Стат | Значение |
|---|---|
| **Haste** | Топ-стат: ускоряет **GCD**, увеличивает частоту тиков **HoT**-ов. Нет брейкпоинтов в современной игре. Следить за порогом diminishing returns. |
| **Mastery (Harmony)** | +9% доп. хила за каждый активный **HoT** на цели (до 5 стаков = +45%). Усилен в Midnight. Особенно хорош в M+ где меньше целей. |
| **Versatility** | В M+ ценнее крита: бонус к урону + **снижение входящего урона**. |
| **Crit** | Наименее ценный стат — **Regrowth** уже получает ~100% крита через **Abundance**. |

### Статы топ-игроков M+ (Murlok.io)
- Mastery: ~21% (+498)
- Crit: ~13% (+348)
- Haste: ~11% (+487)
- Versatility: ~5% (+276)

---

## Гир и тринкеты

### Тир-сет (Midnight Season 1) — Sprouts of the Luminous Bloom

- **2-Set:** [[druid-glossary#^wild-growth|Wild Growth]] healing increased by **25%**
- **4-Set:** [[druid-glossary#^wild-growth|Wild Growth]] cooldown reduced by **2 сек**, mana cost reduced by **10%**

> Тир-сет усиливает основное AoE-заклинание. Не меняет геймплей — просто делает [[druid-glossary#^wild-growth|Wild Growth]] мощнее, чаще и дешевле. **Приоритет — собрать 4 части ASAP.**

> [!important] Приоритет #1 — экипировать 4 части тир-сета
> Слоты: голова, плечи, перчатки, ноги. Альтернатива: грудь вместо головы + Mask of Darkest Intent (лич-хелм), но это слабее и сложнее собрать.

| Часть | Название |
|---|---|
| Голова | Branches of the Luminous Bloom |
| Плечи | Seedpods of the Luminous Bloom |
| Перчатки | Arbortenders of the Luminous Bloom |
| Ноги | Phloemwraps of the Luminous Bloom |

> [!note] Бонус тир-сета поддерживает [[druid-glossary#^ramp|рамп]]-стиль игры
> [[druid-glossary#^incarnation-resto|Incarnation: Tree of Life]] предпочтительнее [[druid-glossary#^convoke|Convoke]] в рейде — экономит [[druid-glossary#^mana|ману]] и лучше синергирует с тир-сетом (больше [[druid-glossary#^wild-growth|Wild Growth]] кастов за окно).

### Тринкеты

**Throughput (рейд + M+):**

| Тринкет                      | Источник                   | Описание                               |
| ---------------------------- | -------------------------- | -------------------------------------- |
| Gaze of the Alnseer          | Chimaerus (рейд)           | Лучший пассивный тринкет в игре        |
| Locus-Walker's Ribbon        | Crown of the Cosmos (рейд) | Топ-тир альтернатива                   |
| Crucible of Erratic Energies | данж                       | Самый популярный в M+ (37 из 50 топов) |

**Ситуативные:**

| Тринкет | Источник | Описание |
|---|---|---|
| Heart of Wind | Windrunner Spire (данж) | Отличный данж-тринкет, стоит фармить |
| Emberwing Feather | данж | Хороший вариант для M+ |
| Gift of Light | данж | Альтернатива |

### Оружие

| Оружие | Источник |
|---|---|
| Nibbles' Training Rod | данж — самое популярное среди M+ топов |

> [!note] Проверяйте актуальные рейтинги
> Тринкеты и оружие могут меняться с хотфиксами. Используйте QE Live для точного сравнения.

### Расходники и зачарования

| Слот | Предмет |
|---|---|
| Фласка | Flask of the Blood Knights |
| Еда (пир) | Harandar Celebration |
| Еда (личная) | Royal Roast |
| Боевой пот | Potion of Recklessness (основной) / Lightfused Mana Potion (мана) |
| Хил-пот | Silvermoon Health Potion |
| Масло на оружие | Thalassian Phoenix Oil |
| Augment Rune | Void-Touched Augment Rune (дорогой, опционально) |
| Мета-гем | Indecipherable Eversong Diamond (Intellect) |
| Гемы | Flawless Masterful Peridot (Mastery) |

| Зачарование | Слот |
|---|---|
| Acuity of the Ren'dorei | Оружие |
| Empowered Hex of Leeching | Шлем |
| Mark of the Worldsoul | Нагрудник |
| Shaladrassil's Roots | Ботинки |
| Silvermoon's Alacrity | Кольца |

---

## Расы

> [!note] Выбор расы минимально влияет на производительность
> Разница между лучшей и худшей расой составляет <1% хила. Играйте что нравится.

### Топ-расы для Resto Druid

| Раса | Преимущество |
|---|---|
| **Night Elf** | Доминирует в M+ (40 из 50 топов). Shadowmeld = дроп аггро + стелс-рез, +1% Haste (ночью) / +1% Crit (днём). Quickness: +2% скорости. |
| **Tauren** | War Stomp — **AoE** стан 2 сек (доп. контроль). Endurance: +бонус HP. |
| **Troll** | Berserking — +10% Haste на 12 сек (отличный для **рампа**). |
| **Highmountain Tauren** | Bull Rush — дополнительный **AoE** стан. Rugged Tenacity: +**DR**. |
| **Zandalari Troll** | Embrace of Bwonsamdi — доп. хил при низком HP. Гибкий выбор Loa. |
