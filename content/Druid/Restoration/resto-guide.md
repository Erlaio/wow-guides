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

> **Patch:** 12.0.5 (Midnight Season 1)

---

## Что изменилось в Midnight (12.0)

> [!important] Midnight - крупнейшая переработка Resto Druid за несколько дополнений
> Спек стал проще: меньше кнопок, меньше активных [[druid-glossary#^cd|КД]], фокус на [[druid-glossary#^hot|HoT]]-менеджменте и [[druid-glossary#^ramp|рампах]].

### Удалённые способности
- Cenarion Ward, Overgrowth, Spring Blossoms, Renewal, Nature's Vigil, Flash of Clarity
- **Nourish** - возвращён в переработанном виде (талант, ~4-5% хила в M+ у топ-игроков)

### Переработанные механики
- **[[druid-glossary#^flourish|Расцвет]]** - слит в [[druid-glossary#^tranquility|Спокойствие]] (пассивный эффект, продлевает все [[druid-glossary#^hot|HoT]] на 10 сек при касте Tranquility). Мощнее, но реже доступен.
- **[[druid-glossary#^grove-guardians|Стражи рощи]]** - стали пассивными: спавнятся автоматически от [[druid-glossary#^swiftmend|Быстрое восстановление]] и [[druid-glossary#^wild-growth|Буйный рост]] вместо активного каста
- **[[druid-glossary#^soul-of-the-forest-resto|Душа леса]]** - теперь баффает только [[druid-glossary#^rejuvenation|Омоложение]] и [[druid-glossary#^regrowth|Восстановление]] (убрана синергия с [[druid-glossary#^wild-growth|Буйный рост]])
- **[[druid-glossary#^heart-of-the-wild|Сердце дикой природы]]** - стал инстант-абилкой на основе текущей формы
- **[[druid-glossary#^efflorescence|Период цветения]]** - может привязываться к цели [[druid-glossary#^lifebloom|Жизнецвет]] через талант Lifetreading
- **Cultivation** - переработан: триггерит дополнительный хил, когда цель падает ниже 60% HP

### Новое
- **[[druid-glossary#^everbloom|Вечное цветение]]** (Apex-талант) - кардинально усиливает [[druid-glossary#^lifebloom|Жизнецвет]] (подробности ниже)
- **[[druid-glossary#^power-of-the-archdruid|Сила верховного друида]]** - переработан: привязан к [[druid-glossary#^soul-of-the-forest-resto|Душа леса]], 100% шанс, 2 доп. хила
- **[[druid-glossary#^natures-bounty|Щедрость природы]]** - 20% хила [[druid-glossary#^regrowth|Восстановление]] сплэшится на других союзников с активным Regrowth
- **[[druid-glossary#^mastery-resto|Искусность: гармония]]** - усилен: 9% за [[druid-glossary#^hot|HoT]] (вместо 6%), макс 5 HoT-ов = до +45%

### Изменения Hero Talents
- **[[druid-glossary#^keeper-of-the-grove-resto|Хранитель рощи]]:** Dream Surge нерфнут (2 лепестка вместо 3), добавлены Cenarius' Might (+20% [[druid-glossary#^swiftmend|Быстрое восстановление]]), Sylvan Beckoning, Spirit of the Thicket
- **[[druid-glossary#^wildstalker-resto|Следопыт]]:** Strategic Infusion (+4% крит [[druid-glossary#^hot|HoT]]), Patient Custodian (+6% эффективность HoT), Rampancy (новая механика [[druid-glossary#^symbiotic-bloom|Симбиотический цветок]])

---

## Сильные и слабые стороны

### Сильные стороны
- Множество мощных [[druid-glossary#^cd|кулдаунов]] для бёрст-хила
- Отличная мобильность - большинство заклинаний можно кастовать на ходу ([[druid-glossary#^hot|HoT]]-ы инстант)
- Сильный проактивный хил через [[druid-glossary#^ramp|рамп]]-механику
- Концентрированный [[druid-glossary#^st|ST]] хил через [[druid-glossary#^lifebloom|Жизнецвет]] + [[druid-glossary#^everbloom|Вечное цветение]]
- Высокая выживаемость для хилера ([[druid-glossary#^barkskin|Дубовая кожа]], [[druid-glossary#^survival-instincts|Инстинкты выживания]], [[druid-glossary#^protective-growth|Защитный рост]])
- Полезная утилити: [[druid-glossary#^innervate|Озарение]], [[druid-glossary#^stampeding-roar|Тревожный рев]], [[druid-glossary#^soothe|Умиротворение]], [[druid-glossary#^typhoon|Тайфун]]

### Слабые стороны
- Требует точного тайминга [[druid-glossary#^cd|КД]] и подготовки [[druid-glossary#^ramp|рампов]]
- Слабый реактивный хил на непредсказуемый [[druid-glossary#^burst|бёрст]]-урон
- Сравнительно низкий урон в рейде (в M+ компенсируется мощным [[druid-glossary#^catweaving|cat-weaving]] - топ-друиды делают конкурентный DPS)
- [[druid-glossary#^mana|Мана]]-зависимость - неэффективный спам быстро опустошает ману

---

## Таланты

### Hero Talent

- **Рейд: [[druid-glossary#^keeper-of-the-grove-resto|Хранитель рощи]]** - [[druid-glossary#^grove-guardians|Стражи рощи]] спавнятся пассивно при касте [[druid-glossary#^swiftmend|Быстрое восстановление]] и [[druid-glossary#^wild-growth|Буйный рост]], дают [[druid-glossary#^burst|бёрст]]-хил и дефенсив [[druid-glossary#^protective-growth|Защитный рост]] (−8% урона при активном [[druid-glossary#^regrowth|Восстановление]]). Лучший выбор для рейдового контента.
- **M+: [[druid-glossary#^wildstalker-resto|Следопыт]]** - [[druid-glossary#^symbiotic-bloom|Симбиотический цветок]] (уникальный [[druid-glossary#^hot|HoT]]) усиливает хил на цели и добавляет стак [[druid-glossary#^mastery-resto|Искусность: гармония]]. Абсолютно доминирует в M+. Синергия с [[druid-glossary#^catweaving|cat-weaving]]: Bloodseeker Vines и Bursting Growth дают значительный пассивный урон.
- **M+ альтернатива: [[druid-glossary#^keeper-of-the-grove-resto|Хранитель рощи]]** - играбелен на ключах 11-13. Больше Caster DPS (Moonfire/Wrath) вместо catweaving. DPS-профиль: Moonfire ~50%, Дикое бешенство (Feral Frenzy) ~20%, Wrath ~18%. Проще в исполнении, но потолок урона ниже.

### Apex-талант

- **[[druid-glossary#^everbloom|Вечное цветение]]** (новинка Midnight) - усиливает [[druid-glossary#^lifebloom|Жизнецвет]]:
  - Ранг 1: [[druid-glossary#^lifebloom|Жизнецвет]] автоматически стакается до 3 раз (каждые 5 сек)
  - Ранг 2-3: 15/30% хила [[druid-glossary#^lifebloom|Жизнецвет]] сплэшится на 2 ближайших союзников
  - Ранг 4: при потреблении [[druid-glossary#^soul-of-the-forest-resto|Душа леса]] - [[druid-glossary#^lifebloom|Жизнецвет]] блумится 5 раз подряд
  - В данжах делает танка практически бессмертным. Берём всегда.

### Ключевые таланты

Всегда берём:
- **[[druid-glossary#^soul-of-the-forest-resto|Душа леса]]** - [[druid-glossary#^swiftmend|Быстрое восстановление]] усиливает следующий [[druid-glossary#^regrowth|Восстановление]] или [[druid-glossary#^rejuvenation|Омоложение]] на 60%, применяется к нескольким союзникам через [[druid-glossary#^power-of-the-archdruid|Сила верховного друида]]
- **[[druid-glossary#^power-of-the-archdruid|Сила верховного друида]]** - после потребления [[druid-glossary#^soul-of-the-forest-resto|Душа леса]] применяет 2 дополнительных целевых хила (100% шанс)
- **[[druid-glossary#^wild-growth|Буйный рост]]** - основной [[druid-glossary#^aoe|AoE]] [[druid-glossary#^hot|HoT]], триггерит [[druid-glossary#^grove-guardians|Стражи рощи]] (Keeper)
- **[[druid-glossary#^swiftmend|Быстрое восстановление]]** - ключевой [[druid-glossary#^cd|КД]], триггерит [[druid-glossary#^soul-of-the-forest-resto|Душа леса]] и [[druid-glossary#^grove-guardians|Стражи рощи]]
- **[[druid-glossary#^lifebloom|Жизнецвет]]** - должен быть активен постоянно, основа [[druid-glossary#^everbloom|Вечное цветение]]
- **[[druid-glossary#^efflorescence|Период цветения]]** - 100% [[druid-glossary#^uptime|аптайм]] на группе/рейде
- **[[druid-glossary#^innervate|Озарение]]** - 8 сек бесплатных заклинаний, юзать во время [[druid-glossary#^ramp|рампа]]

Рейд ([[druid-glossary#^keeper-of-the-grove-resto|Хранитель рощи]]):
- **[[druid-glossary#^incarnation-resto|Воплощение: древо жизни]]** - основной [[druid-glossary#^burst|бёрст]]-кулдаун (~1:40 [[druid-glossary#^cd|КД]]): +10% хила, +40% [[druid-glossary#^rejuvenation|Омоложение]], −30% маны на Rejuv, инстант [[druid-glossary#^regrowth|Восстановление]]. Менее требователен к таймингу чем [[druid-glossary#^convoke|Созыв духов]]. Активировать за 10-12 сек до бёрст-урона.
- **[[druid-glossary#^abundance|Изобилие]]** - каждый активный [[druid-glossary#^rejuvenation|Омоложение]] даёт 8% крита [[druid-glossary#^regrowth|Восстановление]] (при 10-12 Rejuv = почти 100% крит)
- **[[druid-glossary#^tranquility|Спокойствие]]** - автоматически применяет [[druid-glossary#^flourish|Расцвет]] (продлевает все [[druid-glossary#^hot|HoT]] на 10 сек). ~2.5 мин [[druid-glossary#^cd|КД]].
- **[[druid-glossary#^natures-bounty|Щедрость природы]]** - 20% хила [[druid-glossary#^regrowth|Восстановление]] сплэшится на других союзников с активным Regrowth
- **[[druid-glossary#^master-shapeshifter|Ловкий оборотень]]** - генерация [[druid-glossary#^mana|маны]] через [[druid-glossary#^wrath|Гнев]]/[[druid-glossary#^starfire|Звездный огонь]] в даунтайме

M+ ([[druid-glossary#^wildstalker-resto|Следопыт]]):
- **[[druid-glossary#^convoke|Созыв духов]]** - [[druid-glossary#^burst|бёрст]]-хил (~1 мин [[druid-glossary#^cd|КД]]), кастует 12-16 случайных способностей друида, ~50% шанс мини-Flourish, можно кастовать в Облик кошки (Cat Form)
- **[[druid-glossary#^symbiotic-relationship|Симбиотическая связь]]** - ставить на танка перед пулом
- **Nourish** - талант, ~4-5% общего хила, заметный вклад в M+
- **[[druid-glossary#^catweaving|Cat-weaving]]** - **ключевая** часть геймплея M+, не опциональная. Топ-игроки проводят значительное время в Облик кошки (Cat Form):
  - **Дикое бешенство** (Feral Frenzy) - главный DPS-кулдаун (17-25% общего урона)
  - **Разорвать** (Rip) - основной DoT (12-19% урона)
  - **Глубокая рана** (Rake) - DoT + opener (8-14% урона)
  - **Полоснуть** (Shred) - филлер в Облик кошки (Cat Form)
  - **Sunfire/Moonfire/Thrash** - AoE DoT-ы (на больших пулах)
  - **Bloodseeker Vines** - пассивный урон Wildstalker (5-8%)
- **[[druid-glossary#^ursols-vortex|Вихрь Урсола]] / [[druid-glossary#^typhoon|Тайфун]] / [[druid-glossary#^incapacitating-roar|Парализующий рык]]** - утилити для контроля без потери хила

---

## Готовые билды (импорт)

> [!note] Импорт строки для Patch 12.0.5 (Midnight Season 1)
> Скопируйте строку и вставьте в окно талантов в игре (кнопка "Импорт").

### Рейд (Keeper of the Grove)

```
CkGAAAAAAAAAAAAAAAAAAAAAAMjxMbz2MmZGzywDMmxmxCzAAAAAAAAAAgtBNbMmmhxMmlZmZmhhZGAAAAAAAAstM2w0MzyAAAEwCjZGMzA0MAYmBAMA
```

> [!note] Почему Incarnation вместо Convoke?
> [[druid-glossary#^incarnation-resto|Воплощение: древо жизни]] требует значительно меньше тайминга и освобождает [[druid-glossary#^mana|ману]] для использования тир-сета Season 1.

### M+ (Wildstalker)

```
CkGA8cL7tpvige+kkmGM9zUPWPMmZZMjZmxsNMMmFmNbzAAAAAAAAAAglBNbzw0MjhHwsYmZGmhHYGAAAAADAwMALjFMNzsAAwsNzWzyML2YMDMzsYQzAAzMzAwA
```

> [!important] Cat-weaving - неотъемлемая часть M+ меты
> Билд включает полную [[druid-glossary#^catweaving|cat-weaving]] ротацию (Feral Frenzy, Rip, Rake, Shred). Топ-игроки тратят значительное время в Облик кошки (Cat Form) между хилом. Это **не опционально** для высоких ключей - catweaving даёт 40-60% общего урона друида.

### Delves (Wildstalker)

```
CkGAAAAAAAAAAAAAAAAAAAAAAMMmxYGzMjZbmZYYhZx2MAAAAAAAAAAYbQzmhpZMzYMLmZmZWmhxAAAAAAAYMAAEAAwws1sMWsBz8AYGLgmBAYmBgB
```

---

## Ключевые правила

**[[druid-glossary#^ramp|Рамп]]-хилер** - Рестор друид это проактивный хилер. Предварительное наложение [[druid-glossary#^hot|HoT]]-ов до входящего урона значительно эффективнее реактивного хила. Планировать [[druid-glossary#^ramp|рампы]] под опасные фазы босса.

**[[druid-glossary#^lifebloom|Жизнецвет]] - главный приоритет** - с [[druid-glossary#^everbloom|Вечное цветение]] стакается до 3 раз и сплэшит хил. Никогда не дропать. Рефрешить в последние 4.5 сек для блума + обновления.

**[[druid-glossary#^abundance|Изобилие]]-механика (рейд)** - каждый активный [[druid-glossary#^rejuvenation|Омоложение]] = +8% крита на [[druid-glossary#^regrowth|Восстановление]]. При 10-12 активных Rejuv Regrowth критует почти всегда. Крит как стат поэтому слабый - он уже встроен в геймплей.

**[[druid-glossary#^swiftmend|Быстрое восстановление]] - ключевое заклинание** - не просто хил, а триггер для [[druid-glossary#^soul-of-the-forest-resto|Душа леса]], [[druid-glossary#^power-of-the-archdruid|Сила верховного друида]], [[druid-glossary#^grove-guardians|Стражи рощи]] (Keeper) и [[druid-glossary#^everbloom|Вечное цветение]] блума. Юзать строго по [[druid-glossary#^cd|КД]].

**Управление [[druid-glossary#^mana|маной]]:**
- Не спамить [[druid-glossary#^regrowth|Восстановление]] с низкими стаками [[druid-glossary#^abundance|Изобилие]] - это главная причина слива маны
- В даунтайме кастовать [[druid-glossary#^wrath|Гнев]] для реген маны через [[druid-glossary#^master-shapeshifter|Ловкий оборотень]]
- [[druid-glossary#^innervate|Озарение]] юзать рано и часто - первый каст при ~80% маны, во время [[druid-glossary#^ramp|рампов]]
- Непрерывный кастинг: любой простой = потерянные касты [[druid-glossary#^wrath|Гнев]] для реген маны
- С [[druid-glossary#^master-shapeshifter|Ловкий оборотень]] спек никогда полностью не теряет ману, но эффективность критически важна

**[[druid-glossary#^cd|Кулдауны]]:**
- [[druid-glossary#^tranquility|Спокойствие]] (~2.5 мин) - автоматически применяет [[druid-glossary#^flourish|Расцвет]], самый мощный рейд-[[druid-glossary#^cd|КД]]. Комбинировать с [[druid-glossary#^incarnation-resto|Воплощение: древо жизни]] для макс. эффекта.
- [[druid-glossary#^incarnation-resto|Воплощение: древо жизни]] (~1:40) - активировать за 10-12 сек до урона для максимума скидки на [[druid-glossary#^rejuvenation|Омоложение]]
- [[druid-glossary#^convoke|Созыв духов]] (~1 мин) - в рейде кастовать в Caster Form, в M+ можно из Облик кошки (Cat Form) для DPS
- [[druid-glossary#^natures-swiftness|Природная стремительность]] + [[druid-glossary#^regrowth|Восстановление]] = экстренный мгновенный хил

---

## Приоритет исцеления (рейды)

### [[druid-glossary#^ramp|Рамп]] (10-15 сек перед [[druid-glossary#^burst|бёрстом]] урона)

1. Раскидать 10-12 [[druid-glossary#^rejuvenation|Омоложение]] по рейду (набрать стаки [[druid-glossary#^abundance|Изобилие]])
2. [[druid-glossary#^swiftmend|Быстрое восстановление]] → [[druid-glossary#^soul-of-the-forest-resto|Душа леса]] распространяет усиленные хилы через [[druid-glossary#^power-of-the-archdruid|Сила верховного друида]]
3. [[druid-glossary#^wild-growth|Буйный рост]] по [[druid-glossary#^cd|КД]]
4. Основной кулдаун: [[druid-glossary#^incarnation-resto|Воплощение: древо жизни]] или [[druid-glossary#^tranquility|Спокойствие]] (с автоматическим [[druid-glossary#^flourish|Расцвет]])
5. Спам [[druid-glossary#^regrowth|Восстановление]] при высоких стаках [[druid-glossary#^abundance|Изобилие]] (почти 100% крит, низкая стоимость [[druid-glossary#^mana|маны]])

### Поддержание

1. **[[druid-glossary#^lifebloom|Жизнецвет]]** - держать постоянно, рефрешить в последние 4.5 сек (чтобы сработал блум)
2. **[[druid-glossary#^efflorescence|Период цветения]]** - 100% [[druid-glossary#^uptime|аптайм]] на стакнутой группе (обычно мили)
3. **[[druid-glossary#^wild-growth|Буйный рост]]** - по [[druid-glossary#^cd|КД]] при групповом уроне
4. **[[druid-glossary#^swiftmend|Быстрое восстановление]]** - по [[druid-glossary#^cd|КД]], ключевой для [[druid-glossary#^soul-of-the-forest-resto|Душа леса]] + [[druid-glossary#^everbloom|Вечное цветение]]
5. **[[druid-glossary#^regrowth|Восстановление]]** - приоритет на [[druid-glossary#^clearcasting|Ясность мысли]] [[druid-glossary#^proc|проках]] и при высоких стаках [[druid-glossary#^abundance|Изобилие]]
6. **[[druid-glossary#^rejuvenation|Омоложение]]** - поддерживать на целях, получающих урон

### Даунтайм

- **[[druid-glossary#^wrath|Гнев]]** - генерация [[druid-glossary#^mana|маны]] через [[druid-glossary#^master-shapeshifter|Ловкий оборотень]]
- **[[druid-glossary#^moonfire|Лунный огонь]]** - поддерживать [[druid-glossary#^dot|DoT]] на боссе
- Не спамить [[druid-glossary#^regrowth|Восстановление]] без [[druid-glossary#^abundance|Изобилие]] стаков - тратит много маны

---

## Приоритет исцеления (M+)

### Перед пулом

1. [[druid-glossary#^symbiotic-relationship|Симбиотическая связь]] на танка ([[druid-glossary#^wildstalker-resto|Следопыт]])
2. [[druid-glossary#^gift-of-the-wild|Дар дикой природы]] на группу (+3% Versatility)

### Во время пула

1. Прехотить [[druid-glossary#^rejuvenation|Омоложение]] 5-6 сек до входящего урона
2. [[druid-glossary#^swiftmend|Быстрое восстановление]] + [[druid-glossary#^wild-growth|Буйный рост]] когда урон начинается
3. [[druid-glossary#^regrowth|Восстановление]] на критически низких союзников
4. [[druid-glossary#^efflorescence|Период цветения]] на максимальное покрытие группы
5. [[druid-glossary#^innervate|Озарение]] рано и часто на тяжёлых пулах

### Спот-хил (приоритет)

1. [[druid-glossary#^swiftmend|Быстрое восстановление]] + [[druid-glossary#^regrowth|Восстановление]] - на низкого союзника
2. [[druid-glossary#^natures-swiftness|Природная стремительность]] + [[druid-glossary#^regrowth|Восстановление]] - мгновенный экстренный хил
3. Обычный [[druid-glossary#^regrowth|Восстановление]] - если остальное на [[druid-glossary#^cd|КД]]

### Поддержание

1. **[[druid-glossary#^lifebloom|Жизнецвет]]** - постоянно на танке (рефреш в последние 4.5 сек)
2. **[[druid-glossary#^efflorescence|Период цветения]]** - 100% [[druid-glossary#^uptime|аптайм]] (через Lifetreading привязывается к [[druid-glossary#^lifebloom|Жизнецвет]]; +Verdancy ~3-5% хила)
3. **[[druid-glossary#^swiftmend|Быстрое восстановление]]** и **[[druid-glossary#^wild-growth|Буйный рост]]** - юзать по [[druid-glossary#^cd|КД]]
4. **[[druid-glossary#^rejuvenation|Омоложение]]** - на целях с [[druid-glossary#^symbiotic-bloom|Симбиотический цветок]] (триггерит Bursting Growth)

### Healing Breakdown

> [!note] Типичное распределение хила (Wildstalker)

| Способность | Доля хила | Заметки |
|---|---|---|
| **Восстановление** (Regrowth) | 16-23% | Основной прямой хил |
| **Омоложение** (Rejuvenation) (total) | 10-17% | Включая Germination и Thriving Vegetation |
| **Жизнецвет** (Lifebloom) (total) | 10-13% | Тики + блумы + Everbloom splash |
| **Буйный рост** (Wild Growth) | 7-9% | AoE HoT |
| **Период цветения** (Efflorescence) + Verdancy | 7-9% | Пассивный AoE хил |
| **Вечное цветение** (Everbloom) | 6-8% | Splash от Lifebloom |
| **Стражи рощи** (Grove Guardians) | 5-7% | Пассивные от Swiftmend/WG |
| **Симбиотический цветок** (Symbiotic Blooms) | 5-6% | Wildstalker HoT |
| **Быстрое восстановление** (Swiftmend) | 5-7% | Прямой хил + триггер SotF |
| **Nourish** | 4-5% | Талант, заметный вклад |
| **Спокойствие** (Tranquility) | 2-4% | Бёрст-КД |
| **Симбиотическая связь** (Symbiotic Relationship) | 3-4% | Хил на привязанной цели |
| **Bursting Growth** | 2-3% | Пассивный хил Wildstalker |
| **Щедрость природы** (Nature's Bounty) | 2-3% | Splash от Regrowth |

### DPS-фаза ([[druid-glossary#^catweaving|cat-weaving]])

> [!important] Cat-weaving - ключевая механика M+ друида
> Catweaving даёт 40-60% общего урона друида - это не опциональное дополнение, а основная DPS-ротация между хилом.

**Приоритет урона:**

1. **[[druid-glossary#^sunfire|Солнечный огонь]]** / **[[druid-glossary#^moonfire|Лунный огонь]]** - поддерживать DoT-ы на мобах из Caster Form
2. → переход в **Облик кошки** (Cat Form)
3. **Дикое бешенство** (Feral Frenzy) - по [[druid-glossary#^cd|КД]], главный DPS-кулдаун (17-25% общего урона)
4. **Глубокая рана** (Rake) - DoT на основную цель
5. **Разорвать** (Rip) - DoT на основную цель (12-19% урона)
6. **Взбучка** (Thrash) - AoE на больших пулах
7. **Полоснуть** (Shred) - филлер для генерации комбо-поинтов
8. **Свирепый укус** (Ferocious Bite) - при 5 комбо-поинтах и активных DoT-ах
9. → обратно в **Caster Form** когда нужен хил

**Пассивный урон (Wildstalker):**
- **Bloodseeker Vines** - 5-8% урона, срабатывает от [[druid-glossary#^hot|HoT]]-ов
- **Bursting Growth** - 9-19% урона, срабатывает при истечении [[druid-glossary#^symbiotic-bloom|Симбиотический цветок]]

> [!note] Реальный healing/damage split
> Топ-друиды на ключах 17-18: ~50% хила группы + значительный DPS. Ключ к успеху - минимизация простоя: всегда либо хилишь, либо наносишь урон.

---

## Дефенсивы и утилити

### Личные дефенсивы

| Способность | Эффект | **КД** |
|---|---|---|
| **Дубовая кожа** (Barkskin) | −20% входящего урона, 12 сек | 1 мин |
| **Инстинкты выживания** (Survival Instincts) | −50% входящего урона, 6 сек | 3 мин (2 заряда) |
| **Защитный рост** (Protective Growth) (Keeper) | −8% урона при активном **Восстановление** (Regrowth) | пассивно |
| Облик медведя (Bear Form) | +25% HP, +200% броня (экстренный shift) | - |

### Утилити

| Способность | Эффект |
|---|---|
| **Озарение** (Innervate) | 8 сек бесплатных заклинаний (можно дать другому хилеру) |
| **Тревожный рев** (Stampeding Roar) | +60% скорости передвижения для рейда, 8 сек |
| **Тайфун** (Typhoon) | **AoE** нокбэк + замедление |
| **Вихрь Урсола** (Ursol's Vortex) | **AoE** притягивание + замедление |
| **Парализующий рык** (Incapacitating Roar) | **AoE** инкап на 3 сек |
| **Умиротворение** (Soothe) | снятие Enrage с врага |
| **Столп солнечного света** (Solar Beam) | **AoE** сайленс |
| **Крадущийся зверь** (Prowl) | стелс (скип мобов, саппинг) |

> [!warning] В M+ утилити = хил
> Грамотное использование [[druid-glossary#^typhoon|Тайфун]], [[druid-glossary#^ursols-vortex|Вихрь Урсола]] и [[druid-glossary#^incapacitating-roar|Парализующий рык]] предотвращает больше урона, чем лишний каст [[druid-glossary#^regrowth|Восстановление]].

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
| **Crit** | Наименее ценный стат - **Восстановление** (Regrowth) уже получает ~100% крита через **Изобилие** (Abundance). |

---

## Гир и тринкеты

### Тир-сет (Midnight Season 1) - Sprouts of the Luminous Bloom

- **2-Set:** [[druid-glossary#^wild-growth|Буйный рост]] healing increased by **25%**
- **4-Set:** [[druid-glossary#^wild-growth|Буйный рост]] cooldown reduced by **2 сек**, mana cost reduced by **10%**

> Тир-сет усиливает основное AoE-заклинание. Не меняет геймплей - просто делает [[druid-glossary#^wild-growth|Буйный рост]] мощнее, чаще и дешевле. **Приоритет - собрать 4 части ASAP.**

> [!important] Приоритет #1 - экипировать 4 части тир-сета
> Слоты: голова, плечи, перчатки, ноги. Альтернатива: грудь вместо головы + Mask of Darkest Intent (лич-хелм), но это слабее и сложнее собрать.

| Часть | Название |
|---|---|
| Голова | Branches of the Luminous Bloom |
| Плечи | Seedpods of the Luminous Bloom |
| Перчатки | Arbortenders of the Luminous Bloom |
| Ноги | Phloemwraps of the Luminous Bloom |

> [!note] Бонус тир-сета поддерживает [[druid-glossary#^ramp|рамп]]-стиль игры
> [[druid-glossary#^incarnation-resto|Воплощение: древо жизни]] предпочтительнее [[druid-glossary#^convoke|Созыв духов]] в рейде - экономит [[druid-glossary#^mana|ману]] и лучше синергирует с тир-сетом (больше [[druid-glossary#^wild-growth|Буйный рост]] кастов за окно).

### Тринкеты

**Throughput (рейд + M+):**

| Тринкет                      | Источник                   | Описание                               |
| ---------------------------- | -------------------------- | -------------------------------------- |
| Gaze of the Alnseer          | Chimaerus (рейд)           | Лучший пассивный тринкет в игре        |
| Locus-Walker's Ribbon        | Crown of the Cosmos (рейд) | Топ-тир альтернатива                   |
| Crucible of Erratic Energies | данж                       | Самый популярный в M+ |

**Лучшие тринкеты:**

| Тринкет | Источник | Описание |
|---|---|---|
| **Emberwing Feather** | данж | Топовый выбор (266 ilvl) |
| **Heart of Wind** | Windrunner Spire (данж) | Топовый выбор (266 ilvl) |

**Ситуативные:**

| Тринкет | Источник | Описание |
|---|---|---|
| Crucible of Erratic Energies | данж | Популярный выбор |
| Gift of Light | данж | Альтернатива |

### Оружие

| Оружие | Источник |
|---|---|
| **Aln'hara Cane** | крафт (Inscription) - стафф, лучший вариант |
| Magister's Valediction | крафт (Blacksmithing) - 2H мейс, альтернатива |

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
| **Night Elf** | Доминирует в M+. Shadowmeld = дроп аггро + стелс-рез, +1% Haste (ночью) / +1% Crit (днём). Quickness: +2% скорости. |
| **Tauren** | Громовая поступь (War Stomp) - **AoE** стан 2 сек (доп. контроль). Endurance: +бонус HP. |
| **Troll** | Berserking - +10% Haste на 12 сек (отличный для **рампа**). |
| **Highmountain Tauren** | Bull Rush - дополнительный **AoE** стан. Rugged Tenacity: +**DR**. |
| **Zandalari Troll** | Embrace of Bwonsamdi - доп. хил при низком HP. Гибкий выбор Loa. |
