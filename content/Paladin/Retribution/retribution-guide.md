---
tags: [wow, paladin, retribution, dps, guide]
created: 2026-03-18
---

Термины и сокращения → [[paladin-glossary|Глоссарий]]

> **Patch:** 12.0.7 (Midnight Season 1)

> [!note] Про названия
> Способности названы по-русски (как в игре), в скобках - оригинал на английском (он нужен для аддонов, симулятора и Wowhead). Гир, тринкеты, гемы, расходники, статы и энчанты - в формате `Русское (English)`.

---

*Минуту ты копишь Свет, а потом разом обрушиваешь его: крылья за спиной, молот с неба - и пак складывается.*

## Главное за минуту

Минимум, чтобы сразу выдавать урон - тонкости потом:

1. **Героическое древо - [[paladin-glossary#^hammer-of-light|Темплар (Templar)]]** во всём PvE. Оружие - двуручник. Это мета и в рейде, и в ключах.
2. **Раз в ~30 сек жми [[paladin-glossary#^wake-of-ashes|Испепеляющий след]]** - он даёт 3 Энергии Света и открывает [[paladin-glossary#^hammer-of-light|Молот Света]] (огромный удар по площади за 5 [[paladin-glossary#^holy-power|HoPo]]). Не сиди на нём.
3. **Не давай [[paladin-glossary#^holy-power|Энергии Света]] переполниться (максимум 5).** Дошёл до 4-5 - трать спендером ([[paladin-glossary#^final-verdict|Окончательный приговор]] по одной цели, [[paladin-glossary#^divine-storm|Божественная буря]] по нескольким).
4. **[[paladin-glossary#^art-of-war|Искусство войны]] прокнуло - немедленно жми [[paladin-glossary#^blade-of-justice|Клинок справедливости]].** Этот прок - твой главный источник урона, не трать его впустую.
5. **Бёрст-окно - [[paladin-glossary#^avenging-wrath|Гнев карателя]] + [[paladin-glossary#^execution-sentence|Смертный приговор]] вместе.** Сюда же боевое зелье и активируемый тринкет.

## Как играть за Retribution (в двух словах)

Ret - простой по входу мили-DPS с мощными бёрст-окнами. Ты копишь ресурс (**Энергия Света**, она же Holy Power) билдерами и сливаешь его в сильные удары-спендеры, а раз в минуту раскрываешь крылья ([[paladin-glossary#^avenging-wrath|Гнев карателя]]) и выдаёшь всплеск. Не вникай в каждую кнопку сразу - сначала поймай ритм.

Мысленная модель такая:

- **Билдеры копят [[paladin-glossary#^holy-power|Энергию Света]]** - [[paladin-glossary#^blade-of-justice|Клинок справедливости]], [[paladin-glossary#^judgment|Правосудие]], [[paladin-glossary#^wake-of-ashes|Испепеляющий след]], автоудары ([[paladin-glossary#^crusading-strikes|Удары Света]]).
- **Спендеры тратят её на урон** - [[paladin-glossary#^final-verdict|Окончательный приговор]] (одна цель), [[paladin-glossary#^divine-storm|Божественная буря]] (несколько), а в Темпларе ещё и [[paladin-glossary#^hammer-of-light|Молот Света]].
- **[[paladin-glossary#^art-of-war|Искусство войны]] - твой прок:** автоудары случайно сбрасывают КД Клинка справедливости. Прокнуло - сразу жми BoJ.
- **Раз в минуту - бёрст-окно:** [[paladin-glossary#^avenging-wrath|Гнев карателя]] + [[paladin-glossary#^execution-sentence|Смертный приговор]], сюда сливаешь всё самое мощное.

Уложишь в голове эти четыре пункта - костяк ротации твой; чистота исполнения придёт с практикой.

> [!info] Словарик терминов
> - **ДД** - наносящий урон. **ST** - по одной цели, **AoE** (или **клив**) - по нескольким сразу.
> - **HoPo** - Энергия Света (Holy Power), твой основной ресурс. Максимум 5.
> - **Билдер** - копит Энергию Света. **Спендер** - тратит её на удар.
> - **Прок** - случайное срабатывание бонуса ("прокнуло").
> - **Оверкап** - переполнить ресурс, когда он уже на максимуме. Лишнее теряется впустую.
> - **Бёрст** - всплеск урона в короткое окно (под [[paladin-glossary#^avenging-wrath|Гневом карателя]]).
> - **Стак** - накопленный заряд эффекта; «держать стак» - не давать ему спасть.
> - **КД** - кулдаун, перезарядка способности. **Опенер** - заученное начало боя.
> - **Симить** - прогнать персонажа в [Raidbots](https://www.raidbots.com), чтобы узнать, что лучше **именно для твоего** комплекта шмота.
> - **BiS** - best in slot, лучший предмет в слот. **ilvl** - уровень предмета (чем выше, тем сильнее).
> - **Тринкет** - предмет в особом слоте. Бывает **on-use** (активируемый - жмёшь ради всплеска) и **passive** (работает сам).
> - **M+ / ключи** - Mythic+, сложные подземелья на 5 человек.

---

## Что изменилось в Midnight (12.0)

> Можно пропустить, если не возвращаешься из прошлых сезонов. Если играл раньше - кое-что переехало.

Ядро геймплея осталось узнаваемым, но дерево перетряхнули.

**Объединено / убрано из дерева:**
- **[[paladin-glossary#^execution-sentence|Смертный приговор]]** теперь сам по себе работает и в ST, и в AoE (бывший отдельный талант Final Reckoning встроен в него) - больше не нужно выбирать "ST или AoE".
- **[[paladin-glossary#^crusade|Священная война]]** теперь не отдельная кнопка, а талант-выбор, который перекраивает [[paladin-glossary#^avenging-wrath|Гнев карателя]] (вместо чистого +урона он стакает Скорость от потраченной Энергии Света).
- **Опаляющий Свет** (Searing Light), **Небесный арбитр** (Divine Arbiter), **Отмщение вершителя правосудия** (Justicar's Vengeance) убраны из дерева Ret.

**Добавлено / переработано:**
- **Apex-талант [[paladin-glossary#^light-within|Свет в душе]]** - 4 ранга, завязан на [[paladin-glossary#^art-of-war|Искусство войны]] и бёрст-окно: усиливает [[paladin-glossary#^blade-of-justice|Клинок справедливости]] с прока и спендеры под [[paladin-glossary#^avenging-wrath|Гневом карателя]].
- **[[paladin-glossary#^mastery-ret|Искусность: вердикт верховного лорда]]** переработана - теперь [[paladin-glossary#^judgment|Правосудие]] не только баффает спендер по цели, но и имеет шанс прокнуть дополнительный Holy-урон. Искусность стала заметно вкуснее.
- **Героические древа [[paladin-glossary#^hammer-of-light|Темплар (Templar)]] и [[paladin-glossary#^dawnlight|Вестник Солнца (Herald of the Sun)]]** доступны с Midnight.

**Суть:** спек стал гибче (Смертный приговор закрыл выбор "ST или AoE"), Apex-талант добавил скейл через прок Искусства войны, а переработка Искусности подняла ценность стата. Геймплей остался простым, но потолок мастерства вырос за счёт аккуратного менеджмента проков и бёрст-окон.

---

## Сильные и слабые стороны

Полезно знать заранее: где играть в удовольствие, а где быть внимательнее.

**В чём Retribution хорош:**
- **Частые бёрст-окна.** [[paladin-glossary#^avenging-wrath|Гнев карателя]] раз в минуту, [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] → [[paladin-glossary#^hammer-of-light|Молот Света]] раз в ~30 сек - урон всплесками, но всплески частые.
- **Сильный фаннел** - умеет слить урон в приоритетную цель ([[paladin-glossary#^execution-sentence|Смертный приговор]]) и параллельно кливать остальных ([[paladin-glossary#^divine-storm|Божественная буря]], [[paladin-glossary#^hammer-of-light|Молот Света]]).
- **Лучшая утилита среди DPS.** [[paladin-glossary#^lay-on-hands|Возложение рук]], [[paladin-glossary#^bop|BoP]], [[paladin-glossary#^bos|BoS]], [[paladin-glossary#^bof|BoF]], [[paladin-glossary#^divine-shield|Божественный щит]], боевой рез (Заступничество / Intercession).
- **Крепкие личные дефенсивы** и низкий порог входа - комфортно учить.

**Слабые места:**
- **Ограниченная мобильность** - только [[paladin-glossary#^divine-steed|Божественный скакун]].
- **Зависимость от бёрст-окон** - вне [[paladin-glossary#^avenging-wrath|Гнева карателя]] урон ровный, без всплесков.
- **Пенальти при смене цели** - надо заново накладывать [[paladin-glossary#^expurgation|Огонь очищения]] и дебафф [[paladin-glossary#^judgment|Правосудия]].

> [!note] Тир в мете
> Крепкий **A-тир** в M+ (Midnight Season 1). Часто берут за непревзойдённую утилиту; по чистому урону уступает самым топовым DPS, но самодостаточен в любом контенте.

---

## Таланты

Таланты - это твоя сборка. Не разбирайся в каждом узле сразу: ниже есть готовые строки для копирования.

### Героическое древо: Templar (основной)

[[paladin-glossary#^hammer-of-light|Темплар (Templar)]] - выбор по умолчанию во **всём PvE** и немного впереди Вестника Солнца. Бери его и в рейд, и в M+.

- **[[paladin-glossary#^hammer-of-light|Молот Света]]** - после [[paladin-glossary#^wake-of-ashes|Испепеляющего следа]] он на 20 сек заменяет его собой; стоит 5 [[paladin-glossary#^holy-power|HoPo]], бьёт огромный AoE и хилит группу.
- **[[paladin-glossary#^shake-the-heavens|Сотрясение небес]]** - билдеры копят стаки, чтобы активировать [[paladin-glossary#^hammer-of-light|Молот Света]].
- **[[paladin-glossary#^empyrean-hammer|Небесный молот]]** - молоты падают с неба сами при использовании ключевых способностей.
- **[[paladin-glossary#^divine-hammer|Божественный молот]]** - после [[paladin-glossary#^divine-toll|Божественного благовеста]] вокруг тебя кружат молоты.
- **[[paladin-glossary#^lights-deliverance|Избавление Света]]** - [[paladin-glossary#^hammer-of-light|Молот Света]] дополнительно хилит группу.

### Героическое древо: Herald of the Sun (альтернатива)

[[paladin-glossary#^dawnlight|Вестник Солнца (Herald of the Sun)]] - рабочая альтернатива с упором на проки и офф-хил:

- **[[paladin-glossary#^dawnlight|Светозар]]** - [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] оставляет на целях Светозар (HoT/DoT).
- **[[paladin-glossary#^eternal-flame|Вечное пламя]]** - [[paladin-glossary#^wog|Торжество]] оставляет HoT.
- **[[paladin-glossary#^second-sunrise|Второй рассвет]]** - шанс повторить способность.
- **[[paladin-glossary#^suns-avatar|Аватара солнца]]** - усиленная версия [[paladin-glossary#^avenging-wrath|Гнева карателя]].

Главный плюс - больше офф-хила через Светозар (Dawnlight) и Вечное пламя (Eternal Flame). Имеет смысл там, где группе нужна дополнительная живучесть.

> [!note] Что брать
> Для чистого урона - **Templar** во всех ситуациях. **Herald** бери, если хочешь больше группового хила (или просто по вайбам - он играбелен).

### Apex: Свет в душе (Light Within)

[[paladin-glossary#^light-within|Свет в душе]] - единственный Apex-талант Ret. 4 ранга, каждый добавляет эффект:

| Ранг | Эффект |
|------|--------|
| 1 | [[paladin-glossary#^blade-of-justice\|Клинок справедливости]] с прока [[paladin-glossary#^art-of-war\|Искусства войны]] наносит на **150% больше урона** |
| 2 | [[paladin-glossary#^final-verdict\|Окончательный приговор]] и [[paladin-glossary#^divine-storm\|Божественная буря]] бьют на **10% сильнее** под [[paladin-glossary#^avenging-wrath\|Гневом карателя]] |
| 3 | Те же спендеры - ещё **+10%** под Гневом карателя (итого 20%) |
| 4 | [[paladin-glossary#^blade-of-justice\|Клинок справедливости]] с прока бьёт Holy-уроном в конусе между тобой и целью |

> [!important] Ключевой момент
> Свет в душе (Light Within) делает прок [[paladin-glossary#^art-of-war|Искусства войны]] критически важным: с ним [[paladin-glossary#^blade-of-justice|Клинок справедливости]] - твой самый больно бьющий удар. Никогда не «перекрывай» прок другой кнопкой - сразу жми BoJ.

### Провальные / нишевые таланты

> [!warning] С чем осторожнее
> **[[paladin-glossary#^radiant-glory|Блистательная слава]]** - автоматически активирует [[paladin-glossary#^avenging-wrath|Гнев карателя]] от [[paladin-glossary#^wake-of-ashes|Испепеляющего следа]]. Звучит удобно, но **в M+-мете её не берут** - ручной Гнев карателя даёт контроль над таймингом бёрста. Бери её только если тебе тяжело вручную выстраивать окна.

> [!note] Священная война - стандарт меты
> **[[paladin-glossary#^crusade|Священная война]] (Crusade)** перекраивает [[paladin-glossary#^avenging-wrath|Гнев карателя]]: вместо чистого +урона он копит Скорость от потраченной [[paladin-glossary#^holy-power|Энергии Света]]. Это выбор по умолчанию в топе M+ - бери его. Обычный Гнев карателя проще на старте, но Crusade сильнее: переходи на него, освоив тайминги бёрста.

Нишевое, но полезное знать: разница между **ST-** и **AoE-сборкой** в Темпларе - это в основном выбор основного спендера ([[paladin-glossary#^final-verdict|Окончательный приговор]] против [[paladin-glossary#^divine-storm|Божественной бури]]) и пара кливных талантов (Клинок возмездия / Blade of Vengeance, Благословенный защитник / Blessed Champion, Буря Светоносного / Tempest of the Lightbringer). [[paladin-glossary#^execution-sentence|Смертный приговор]] берут всегда.

---

## Готовые билды (импорт)

> Не хочешь разбираться - скопируй строку и вставь в игре: открой таланты (**N**) → Loadouts → Import Loadout → вставь → Import. ST-строка для боссов, M+ - для пачек врагов.

### Templar - Рейд (ST)

```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz22MzsMMzAAAAAAwoMmhZGbDz2wMbzYMmZYGbsNMAAkZm2mZ2mBAsBYAwYGmBzYMbYZGMMmxgB
```

### Templar - M+ (AoE)

```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAMa22mZmlxMzMDAAAAAwMlhhZGbDz2wMbzYMGDzYjNMAAkZm2mZ2mBAsBYAwYGGYmZYDLzghxMGM
```

### Herald of the Sun - Рейд (ST)

```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQzy2MzsMMzAAAAAAwoMmhZGbDz2wMbzYMmZYGLsNMgZZ2mZmtGEAAwCgBAjZYGMjxsAMzMMmxgB
```

### Herald of the Sun - M+ (AoE)

```
CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAMa22mZmlxMzMAAAAAAmpMMMzYbY2GmZbGjxYYGLshBMLz2Mzs1gAAAWAMAYMDDMjZmNgZmhxMGM
```

> [!note] Свежие билды
> Под свой контент и актуальные правки патча сверяйся с [Wowhead](https://www.wowhead.com/guide/classes/paladin/retribution/talent-builds-pve-dps), Archon.gg или murlok.io.

---

## Ключевые правила

То, что отличает ровный урон от рваного. Каждое - с объяснением, **почему**.

1. **Не оверкапай [[paladin-glossary#^holy-power|Энергию Света]] (максимум 5).** Дошёл до 4-5 - трать спендером. Лишняя генерация сгорает = потерянный урон.
2. **Билдеры важнее спендеров, пока не рискуешь оверкапнуть.** Больше билдеров = больше проков [[paladin-glossary#^art-of-war|Искусства войны]] = больше бесплатных Клинков справедливости.
3. **Прокнуло [[paladin-glossary#^art-of-war|Искусство войны]] - сразу [[paladin-glossary#^blade-of-justice|Клинок справедливости]].** С [[paladin-glossary#^light-within|Светом в душе]] это +150% урона (и AoE-конус на Rank 4). Не перекрывай прок.
4. **Держи [[paladin-glossary#^expurgation|Огонь очищения]] на цели.** [[paladin-glossary#^blade-of-justice|Клинок справедливости]] вешает DoT, тир-сет усиливает его. Обновляй через BoJ.
5. **Спендер - по цели с дебаффом [[paladin-glossary#^judgment|Правосудия]].** Спендер в это окно бьёт заметно больнее.
6. **Не сиди на [[paladin-glossary#^wake-of-ashes|Испепеляющем следе]].** 30 сек КД, 3 [[paladin-glossary#^holy-power|HoPo]], открывает [[paladin-glossary#^hammer-of-light|Молот Света]]. Каждая секунда задержки = потеря урона. В M+ жми WoA → HoL по КД даже без [[paladin-glossary#^avenging-wrath|Гнева карателя]].
7. **[[paladin-glossary#^avenging-wrath|Гнев карателя]] и [[paladin-glossary#^execution-sentence|Смертный приговор]] - вместе.** Активируй обе в начале бёрст-окна (порядок гибкий). Держи 3 [[paladin-glossary#^holy-power|HoPo]] перед Смертным приговором.
8. **В AoE: [[paladin-glossary#^divine-storm|Божественная буря]] вместо [[paladin-glossary#^final-verdict|Окончательного приговора]]** при 2+ целях.
9. **Утилита = ДД.** Мёртвый хилер или танк = вайп. [[paladin-glossary#^lay-on-hands|Возложение рук]], [[paladin-glossary#^bop|BoP]], [[paladin-glossary#^wog|Торжество]] - используй проактивно, это твоё конкурентное преимущество.

---

## Опенер

### Templar - босс с готовым бёрстом

Гнев карателя и Смертный приговор доступны (КД не потрачены на предыдущий пак).

1. **Зелье до боя** - Зелье безрассудства (Potion of Recklessness), выпей перед пуллом.
2. [[paladin-glossary#^blade-of-justice|Клинок справедливости]] (наложить [[paladin-glossary#^expurgation|Огонь очищения]]).
3. *(опционально)* [[paladin-glossary#^judgment|Правосудие]].
4. [[paladin-glossary#^avenging-wrath|Гнев карателя]] + [[paladin-glossary#^execution-sentence|Смертный приговор]] (порядок гибкий) + активируемый тринкет.
5. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] → открывается [[paladin-glossary#^hammer-of-light|Молот Света]].
6. [[paladin-glossary#^hammer-of-light|Молот Света]] (5 [[paladin-glossary#^holy-power|HoPo]]).
7. Дальше - по приоритету ST.

> [!important] Божественный благовест в опенере
> [[paladin-glossary#^divine-toll|Божественный благовест]] в боссовом ST-опенере **придерживают** - он эффективнее в AoE-ситуациях или в следующем бёрст-окне.

### Templar - босс без бёрста

Гнев карателя и/или Смертный приговор на КД - **частый сценарий в M+**, где КД ушли на предыдущий треш.

1. [[paladin-glossary#^blade-of-justice|Клинок справедливости]].
2. [[paladin-glossary#^judgment|Правосудие]].
3. [[paladin-glossary#^final-verdict|Окончательный приговор]] / [[paladin-glossary#^divine-storm|Божественная буря]] (по числу целей).
4. Цикл: билдеры → спендеры по приоритету.
5. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] → [[paladin-glossary#^hammer-of-light|Молот Света]] по КД, даже без [[paladin-glossary#^avenging-wrath|Гнева карателя]].

> [!note] Реальность M+
> В ключах большинство боссов начинаются без бёрста - и это нормально. Не копи Гнев карателя «для босса»: трать его на треш, а WoA → HoL гони по КД.

### Herald of the Sun - опенер

1. Зелье до боя.
2. [[paladin-glossary#^avenging-wrath|Гнев карателя]] + тринкеты.
3. [[paladin-glossary#^hammer-of-wrath|Молот гнева]].
4. [[paladin-glossary#^execution-sentence|Смертный приговор]].
5. [[paladin-glossary#^final-verdict|Окончательный приговор]].
6. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] → проки Светозара (Dawnlight).
7. [[paladin-glossary#^final-verdict|Окончательный приговор]].
8. [[paladin-glossary#^divine-toll|Божественный благовест]], дальше по приоритету ST.

---

## Приоритет (ротация)

Идёшь сверху вниз: верхнее доступно - жмёшь, нет - спускаешься ниже.

### ST - Templar

1. [[paladin-glossary#^avenging-wrath|Гнев карателя]] / [[paladin-glossary#^execution-sentence|Смертный приговор]] (по КД).
2. [[paladin-glossary#^hammer-of-light|Молот Света]] (когда доступен).
3. [[paladin-glossary#^final-verdict|Окончательный приговор]] при 5 [[paladin-glossary#^holy-power|HoPo]].
4. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] (по КД).
5. [[paladin-glossary#^divine-toll|Божественный благовест]] (по КД).
6. [[paladin-glossary#^blade-of-justice|Клинок справедливости]] при проке [[paladin-glossary#^art-of-war|Искусства войны]].
7. [[paladin-glossary#^blade-of-justice|Клинок справедливости]] (если нет [[paladin-glossary#^expurgation|Огня очищения]] на цели).
8. [[paladin-glossary#^hammer-of-wrath|Молот гнева]] (под [[paladin-glossary#^avenging-wrath|Гневом карателя]] или цель < 20% HP).
9. [[paladin-glossary#^judgment|Правосудие]].
10. [[paladin-glossary#^blade-of-justice|Клинок справедливости]] (филлер).
11. [[paladin-glossary#^templar-strikes|Удары храмовника]] / [[paladin-glossary#^crusading-strikes|Удары Света]].

### ST - Herald of the Sun

1. [[paladin-glossary#^avenging-wrath|Гнев карателя]] / [[paladin-glossary#^execution-sentence|Смертный приговор]].
2. [[paladin-glossary#^hammer-of-wrath|Молот гнева]] (приоритет выше, чем у Templar).
3. [[paladin-glossary#^final-verdict|Окончательный приговор]] при 5 [[paladin-glossary#^holy-power|HoPo]].
4. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] → проки Светозара (Dawnlight).
5. [[paladin-glossary#^divine-toll|Божественный благовест]].
6. [[paladin-glossary#^blade-of-justice|Клинок справедливости]] при проке [[paladin-glossary#^art-of-war|Искусства войны]].
7. [[paladin-glossary#^blade-of-justice|Клинок справедливости]].
8. [[paladin-glossary#^judgment|Правосудие]].
9. [[paladin-glossary#^crusading-strikes|Удары Света]] / [[paladin-glossary#^templar-strikes|Удары храмовника]].

### AoE (2+ цели)

Приоритет тот же, но с заменами:

1. [[paladin-glossary#^divine-storm|Божественная буря]] при 5 [[paladin-glossary#^holy-power|HoPo]] (основной спендер вместо [[paladin-glossary#^final-verdict|Окончательного приговора]]).
2. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] (приоритетнее - AoE-генерация HoPo).
3. [[paladin-glossary#^hammer-of-light|Молот Света]] (Темплар) - огромный AoE, максимальный приоритет.
4. [[paladin-glossary#^blade-of-justice|Клинок справедливости]] ([[paladin-glossary#^expurgation|Огонь очищения]] + Священное пламя (Holy Flames)).
5. [[paladin-glossary#^divine-toll|Божественный благовест]].
6. [[paladin-glossary#^judgment|Правосудие]].
7. [[paladin-glossary#^divine-storm|Божественная буря]] при 3+ [[paladin-glossary#^holy-power|HoPo]].

> [!important] Правило оверкапа
> Не кастуй билдер, если это переполнит [[paladin-glossary#^holy-power|Энергию Света]]. [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] даёт +3 - не жми его на 3+ HoPo. [[paladin-glossary#^crusading-strikes|Удары Света]] НЕ генерируют HoPo, весь ресурс идёт от активных билдеров.

---

## Урон: бёрст-окно Темплара (Avenging Wrath + Молот Света)

Главная урон-механика Темплара - связка **[[paladin-glossary#^avenging-wrath|Гнев карателя]] + [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] → [[paladin-glossary#^hammer-of-light|Молот Света]]**. Это твоё «золотое окно»: сюда сливаешь спендеры, зелье и тринкет.

Как оно работает:

1. **[[paladin-glossary#^wake-of-ashes|Испепеляющий след]]** даёт 3 [[paladin-glossary#^holy-power|HoPo]] и на 20 сек заменяется на **[[paladin-glossary#^hammer-of-light|Молот Света]]** (через стаки [[paladin-glossary#^shake-the-heavens|Сотрясения небес]] от билдеров).
2. **[[paladin-glossary#^hammer-of-light|Молот Света]]** за 5 [[paladin-glossary#^holy-power|HoPo]] бьёт огромный AoE и хилит группу. Поэтому перед его окном копи HoPo.
3. **[[paladin-glossary#^empyrean-hammer|Небесный молот]]** и **[[paladin-glossary#^divine-hammer|Божественный молот]]** добавляют фоновый урон молотами с неба и вокруг тебя.
4. **[[paladin-glossary#^avenging-wrath|Гнев карателя]]** сверху усиливает весь урон и (с [[paladin-glossary#^light-within|Светом в душе]]) добавляет до +20% к спендерам.

Цикл бёрста: [[paladin-glossary#^avenging-wrath|Гнев карателя]] (60 сек) + [[paladin-glossary#^execution-sentence|Смертный приговор]] (60 сек) + [[paladin-glossary#^wake-of-ashes|Испепеляющий след]] (30 сек). Выстраивай их вместе на каждом крупном паке; WoA → HoL гони по КД даже в «холодную». Никогда не сиди на Испепеляющем следе - каждая задержка съедает бёрст.

---

## Дефенсивы и утилита

> [!tip] Главное про выживание
> **Божественная защита (Divine Protection) / Щит возмездия (Shield of Vengeance)** - рабочий деф на каждый средний замес (1 мин КД, жми свободно). **[[paladin-glossary#^divine-shield|Божественный щит]]** - последнее средство и способ игнорировать смертельные механики.

| Способность | Эффект | КД | Примечание |
|-------------|--------|-----|------------|
| **[[paladin-glossary#^divine-shield\|Божественный щит]]** | Полная неуязвимость 8 сек | 5 мин | Визитка паладина. Сбрасывает аггро! |
| **Божественная защита** (Divine Protection) | Снижение урона + щит | 1 мин | Основной деф, апгрейдится в Щит возмездия |
| **Щит возмездия** (Shield of Vengeance) | Апгрейд: абсорб-щит, взрывается при истечении | 1 мин | Через талант |
| **[[paladin-glossary#^bos\|Жертвенное благословение]]** | Переносит 30% урона союзника на тебя, 12 сек | 2 мин | Внешний деф на танка |
| **[[paladin-glossary#^lay-on-hands\|Возложение рук]]** | Мгновенный хил цели на 100% HP | 10 мин | Экстренное спасение |
| **[[paladin-glossary#^wog\|Торжество]]** | Хил за 3 [[paladin-glossary#^holy-power\|HoPo]] | - | Офф-хил, потеря урона, но спасает жизни |

**Утилита:**
- **[[paladin-glossary#^bop|Благословение защиты]]** - неуязвимость к физ. урону + снимает физические дебаффы. 5 мин КД.
- **[[paladin-glossary#^bof|Благословенная свобода]]** - снимает и предотвращает замедления/руты на 8 сек.
- **[[paladin-glossary#^hoj|Молот правосудия]]** - стан на 6 сек; **Укор (Rebuke)** - прерывание каста.
- **[[paladin-glossary#^blinding-light|Слепящий свет]]** - AoE-дизориент (талант); **[[paladin-glossary#^turn-evil|Изгнание зла]]** - фир на нежить/демонов.
- **[[paladin-glossary#^cleanse|Очищение от токсинов]]** - диспел яда/болезни; **Заступничество (Intercession)** - боевой рез (3 [[paladin-glossary#^holy-power|HoPo]]).
- **[[paladin-glossary#^devotion-aura|Аура благочестия]]** (-3% урона группе) + **[[paladin-glossary#^aura-mastery|Владение аурами]]** (усиление ауры на 6 сек, до -30% DR рейду).

---

## Гир и тринкеты

Хороший комплект собирается не за вечер - это долгий фарм. Короткая шпаргалка, таблицы ниже - на потом.

> [!tip] Кратко про шмот
> - **Тринкеты:** в M+ - Алгет'арская шкатулка с секретом (Algeth'ar Puzzle Box) + Взор ясновидца Альн (Gaze of the Alnseer); в рейде - Gaze + Сердце древнего голода (Heart of Ancient Hunger).
> - **Главный стат - Сила, ilvl важнее вторичных.**
> - **Тир-сет** пассивно усиливает [[paladin-glossary#^expurgation|Огонь очищения]] - собирай 4 части по возможности.

### Тир-сет (Midnight Season 1)

| Бонус | Эффект |
|-------|--------|
| **2-Set** | [[paladin-glossary#^expurgation\|Огонь очищения]] наносит на **20% больше урона** |
| **4-Set** | [[paladin-glossary#^final-verdict\|Окончательный приговор]] накладывает [[paladin-glossary#^expurgation\|Огонь очищения]] на **100%** эффективности; [[paladin-glossary#^divine-storm\|Божественная буря]] - на **50%** |

> [!note] Влияние на геймплей
> Тир-сет ротацию **не меняет** - пассивно усиливает [[paladin-glossary#^expurgation|Огонь очищения]]. Приоритет [[paladin-glossary#^blade-of-justice|Клинка справедливости]] и проков [[paladin-glossary#^art-of-war|Искусства войны]] остаётся тем же.

Приоритет слотов тир-сета: голова, плечи, грудь, ноги; перчатки - 5-й слот, если нет лучшей альтернативы.

### Тринкеты

Правило: один сильный пассивный + один под бёрст-окно. Оптимум под свой шмот - **сделай сим**.

| Тринкет | Тир | Источник | Примечание |
|---------|-----|----------|------------|
| **Алгет'арская шкатулка с секретом** (Algeth'ar Puzzle Box) | S (M+) | Algeth'ar Academy, M+ | Топ-1 в ключах, в паре с Gaze |
| **Взор ясновидца Альн** (Gaze of the Alnseer) | S | Химерий (Chimaerus), рейд | Топ-тринкет сезона, и в M+, и в рейде |
| **Сердце древнего голода** (Heart of Ancient Hunger) | S (рейд) | Ненасытникус (Vorasius), рейд | Рейдовый BiS в пару к Gaze |
| **Темное перо** (Umbral Plume) | A | M+ | Ситуативная M+ альтернатива |
| **Призма солнечной вспышки** (Solarflare Prism) | B | Skyreach, M+ | Запасной вариант |
| **Стяг отряда Света** (Light Company Guidon) | B | M+ | Бюджетный активируемый |

### Оружие

- **Окончательный приговор Беллами** (Bellamy's Final Judgement, 2H Sword) - Ослепленный авангард (Lightblinded Vanguard), рейд.
- **Милосердие рыцаря крови** (Blood Knight's Mercy, 2H Sword) - крафт (Blacksmithing).

> [!note]
> Точный BiS зависит от ilvl - сверяйся с симом. Оружие - один из крупнейших апгрейдов по урону, апай его в приоритете.

### Эмбелишменты

> [!note] Опционально (эндгейм)
> Крафт и эмбелишменты - поздний фарм; на старте можно пропустить и вернуться позже.

- Ранний рывок - крафтовый предмет с **Символ Новолуния «Охота»** (Darkmoon Sigil: Hunt).
- Ближе к BiS - **Подкладка из тайной ткани** (Arcanoweave Lining), на плащ/запястья.

### Расходники

| Тип | Название |
|-----|----------|
| Фласка | Настой магистров (Flask of the Magisters) |
| Еда | Праздник Харандара (Harandar Celebration) |
| Зелье (бёрст) | Зелье безрассудства (Potion of Recklessness) |
| Хил-зелье | Луносветское лечебное зелье (Silvermoon Health Potion) |
| Масло на оружие | Талассийское масло феникса (Thalassian Phoenix Oil) |
| Augment Rune | Меченная Бездной руна усиления (Void-Touched Augment Rune) |

---

## Статы

Порядок зависит от контента и гира - точный набор узнаёшь через сим.

**Сила > Искусность ≥ Скорость > Критический удар > Универсальность**

> [!tip] Кратко
> Гонись за **Силой** (ilvl важнее вторичных), дальше **Искусность**, затем баланс Скорость/Крит. У всех вторичных - убывающая отдача, стакать один невыгодно. Точный приоритет под свой шмот - сделай сим в [Raidbots](https://www.raidbots.com).

> [!note] Спорный момент
> Порядок вторичных не строгий: Искусность ведущий, дальше Скорость и Крит очень близки. Разница минимальна - сделай сим.

- **Сила** (Strength) - главный стат, прибавляет урон всему; всегда первый.
- **Искусность** (Mastery) - [[paladin-glossary#^mastery-ret|Искусность: вердикт верховного лорда]]: усиливает весь Holy-урон и шанс прока от [[paladin-glossary#^judgment|Правосудия]]. Переработана в Midnight, стала заметно сильнее.
- **Скорость** (Haste) - скорость автоатак, ниже GCD и КД билдеров. Больше автоатак = больше проков [[paladin-glossary#^art-of-war|Искусства войны]].
- **Критический удар** (Critical Strike) - криты всех способностей; синергия с Темпларом (AoE-урон от критов).
- **Универсальность** (Versatility) - +урон / -получаемый урон. Слабейший вторичный для Ret.

### Раса

> [!note] Разница минимальна
> Между расами < 1% урона. Выбирай по утилите и эстетике, а не по DPS. По чистым цифрам формально впереди Dwarf (Альянс, Stoneform) и Blood Elf (Орда, Arcane Torrent даёт 1 [[paladin-glossary#^holy-power|HoPo]]).

### Энчанты и гемы

**Энчанты:** Усиленный сглаз самоисцеления (Empowered Hex of Leeching, голова), Луносветское исцеление (Silvermoon's Mending, плечи), Метка души мира (Mark of the Worldsoul, грудь), Накладки для доспехов лесного охотника (Forest Hunter's Armor Kit, ноги), Корни Шаладрассила (Shaladrassil's Roots, ботинки), Луносветская расторопность (Silvermoon's Alacrity, кольца), Ярость берсерка (Berserker's Rage, оружие).

**Гемы:** Могучий алмаз Вечной Песни (Powerful Eversong Diamond) - мета-гем, 1 шт + двухстатные камни (Искусность/Скорость) в остальные слоты по результатам сима.

---

## Частые ошибки

Эти ошибки на старте делают почти все - это нормально и легко правится. Если урон буксует, загляни в список:

- **Оверкапаешь [[paladin-glossary#^holy-power|Энергию Света]].** Сидишь на 5 HoPo, генерация сгорает. Диагностика: индикатор HoPo подолгу стоит на максимуме - трать спендером раньше.
- **Перекрываешь прок [[paladin-glossary#^art-of-war|Искусства войны]].** Прокнуло, а ты жмёшь не [[paladin-glossary#^blade-of-justice|Клинок справедливости]], а что-то другое. С [[paladin-glossary#^light-within|Светом в душе]] это самый больной удар - не теряй прок.
- **Сидишь на [[paladin-glossary#^wake-of-ashes|Испепеляющем следе]].** Он лежит готовый, а ты тянешь. Каждая секунда задержки откладывает [[paladin-glossary#^hammer-of-light|Молот Света]] и бёрст.
- **Разносишь [[paladin-glossary#^avenging-wrath|Гнев карателя]] и [[paladin-glossary#^execution-sentence|Смертный приговор]] по времени.** Они должны идти вместе - иначе бёрст-окно слабее.
- **Не держишь дебафф [[paladin-glossary#^judgment|Правосудия]] перед спендером.** Спендер без дебаффа бьёт ощутимо слабее.
- **Копишь Гнев карателя «для босса» в M+.** Чаще выгоднее тратить КД на текущий пак, чем держать к боссу.

---

## Напоследок

Ret прощает многое: даже неидеальная ротация выдаёт достойный урон, а утилита вытаскивает группу из ситуаций, где другие DPS бессильны. Но потолок открывается, когда крылья ([[paladin-glossary#^avenging-wrath|Гнев карателя]]), [[paladin-glossary#^execution-sentence|Смертный приговор]] и [[paladin-glossary#^hammer-of-light|Молот Света]] начинают совпадать с зельем и тринкетом. Дай себе несколько пуллов поймать этот ритм - и бёрст-окна заиграют сами.
