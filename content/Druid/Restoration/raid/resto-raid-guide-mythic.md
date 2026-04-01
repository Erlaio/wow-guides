---
tags: [wow, druid, restoration, raid, guide, mythic]
created: 2026-03-22
---

## Resto Druid Raid Healing Guide — Mythic

Patch 12.0.1 Midnight | Рейд: VS / DR / MQD | На основе анализа топовых логов (99+ парсы)

> **Критически важно:** топ-1 игроки **меняют билд под каждого босса**. Не играй один билд на всём рейде.

---

### Выбор билда по боссам

| Босс | Рекомендуемый билд | Почему |
|---|---|---|
| Imperator Averzian | **Incarnation** | Предсказуемые фазы ~90 сек |
| Vorasius | **Incarnation** | Длинные окна дамага |
| Fallen-King Salhadaar | **Convoke** | Частые пики ~30-45 сек |
| Vaelgor & Ezzorak | **Incarnation** | Длинный бой, фазы |
| Lightblinded Vanguard | **Convoke** | Частые пики, тяжёлый финал |
| Crown of the Cosmos | **Incarnation** | Очень длинный бой |
| Chimaerus | **Convoke** | Постоянные частые пики |

**Правило выбора:**
- Пики каждые ~30-45 сек → **Convoke** (с Cenarius' Guidance CD = 60 сек)
- Пики каждые ~90 сек, длинные фазы дамага → **Incarnation**

---

### Общая ротация (оба билда)

```
Каждые 12 сек: Swiftmend → Wild Growth → Rejuvenation (SotF)
Постоянно: Lifebloom (95%+ аптайм), Efflorescence
Филлер: Rejuvenation → Regrowth spam
Если нет дамага: Starsurge > Wrath > Moonfire
Целевой CPM: 55+
```

**Статистика от топов:**

| Метрика | Incarnation-билд | Convoke-билд |
|---|---|---|
| Regrowth за бой | 90-105 | 80-100 |
| Rejuvenation за бой | 90-100 | 80-95 |
| Swiftmend за бой | 20-40 | 25-40 |
| Wild Growth за бой | 20-30 | 20-30 |

---

### Билд 1: Incarnation: Tree of Life — детали

#### Рамп-последовательность (точная)

```
T-5.0  Innervate (если доступен)
T-3.0  Rejuvenation blanket (5-8 целей)
T-1.0  Swiftmend → Wild Growth
T-0.0  Incarnation: Tree of Life [ДАМАГ]
T+0.5  Rejuvenation (SotF)
T+1.5  Regrowth spam (усиленный деревом)
T+12   Swiftmend → Wild Growth (внутри Incarnation!)
T+24   Swiftmend → Wild Growth
```

#### CD расписание

| Длина боя | Incarnation | Tranquility | Innervate |
|---|---|---|---|
| ~4:30 | 3 | 2 | 2 |
| ~6:00 | 4 | 2 | 2 |
| ~9:00 | 5-6 | 3 | 3 |

**Паттерн:** `Innervate → Incarnation → Regrowth spam → 30 сек → Tranquility`

**НЕ стакать** Incarnation + Tranquility одновременно — разнести на 30+ сек

---

### Билд 2: Convoke the Spirits — детали

> **Cenarius' Guidance** снижает CD Convoke на 50% (= **60 сек**), но укорачивает длительность и кол-во спеллов на 25%. Частый короткий burst.

#### Рамп-последовательность (точная)

```
T-3.0  Rejuvenation blanket (3-5 целей)
T-1.0  Swiftmend → Wild Growth
T-0.5  Nature's Swiftness (опционально)
T-0.0  Convoke the Spirits (~3 сек ченнел, укороченный) [ДАМАГ]
T+3.0  Regrowth spam
```

#### CD расписание

| Длина боя | Convoke (CD 60 сек) | Tranquility | Innervate |
|---|---|---|---|
| ~5:00 | 4-5 | 2 | 2 |
| ~6:00 | 5-6 | 2 | 2 |
| ~9:00 | 7-8 | 2-3 | 2-3 |

**Паттерн:** `Convoke каждые ~30-45 сек` + `Tranquility после каждого 3-4-го Convoke`

**Комбо:** NS + Convoke — Nature's Swiftness даёт инстант-Regrowth перед ченнелом

---

### Soul of the Forest

| Потребитель | Частота | Когда |
|---|---|---|
| **Rejuvenation** | 70-92% | Стандарт |
| **Regrowth** | 8-31% | Экстренный хил |

SM жми каждые 12 сек без пропусков.

---

### Мана менеджмент

**Incarnation-билд:**
- Innervate #1 перед Incarnation #1 (~0:07)
- Innervate #2 перед Incarnation #3 или #4 (~3:00+)
- Mana Potion ~1:30-2:00

**Convoke-билд:**
- Innervate после 2-3-го Convoke (~1:00-1:30)
- Innervate #2 перед финалом (~3:00+)
- Mana Potion ~2:00-3:00

---

### Дефенсивы

| CD | Частота | Тайминг |
|---|---|---|
| **Ironbark** | 3-4 за бой | На танка перед бастером, ~каждые 2 мин |
| **Barkskin** | 2-4 за бой | На себя перед AoE |
| **Nature's Swiftness** | 2-5 за бой | Экстренный инстант-Regrowth |
| **Stampeding Roar** | 1 за бой | Координировать с рейдом |

---

### Типичные ошибки на мифике

| Ошибка | Потеря | Решение |
|---|---|---|
| Один билд на все боссы | Потеря 5-15% HPS | Меняй билд под босса |
| Lifebloom <90% | Потеря OoC проков | WeakAura |
| Пропущенные SM → WG | Потеря SotF + AoE хила | Каждые 12 сек |
| CD после пика | Burst в оверхил | Рамп за 3-5 сек ДО дамага |
| Incarn + Tranq одновременно | Перерасход CD | Разноси на 30+ сек |
| Innervate не перед CD | OOM во время рампа | Innervate → CD |
| Оверхил >35% | Потеря маны/GCD | Предиктивный хил |

---

### Боссы Mythic: CD тайминги

Детальные CD планы на каждого босса:

| Босс | Билд | Заметка |
|---|---|---|
| Imperator Averzian | Incarnation | [[imperator-averzian]] |
| Vorasius | Incarnation | [[vorasius]] |
| Fallen-King Salhadaar | Convoke | [[fallen-king-salhadaar]] |
| Vaelgor & Ezzorak | Incarnation | [[vaelgor-ezzorak]] |
| Lightblinded Vanguard | Convoke | [[lightblinded-vanguard]] |
| Crown of the Cosmos | Incarnation | [[crown-of-the-cosmos]] |
| Chimaerus | Convoke | [[chimaerus-the-undreamt-god]] |

---

### Чеклист перед пуллом

- [ ] Правильный билд на этого босса (Incarnation vs Convoke)
- [ ] Lifebloom WeakAura настроена
- [ ] CD тайминги на этого босса изучены
- [ ] Innervate синхронизирован с основным CD
- [ ] Зелья маны в инвентаре

---

### Ссылки

- [[resto-raid-guide-heroic]] — героик гайд
- [[resto-raid-guide-normal]] — нормал гайд
- [[resto-healing-guide]] — подробный гайд по способностям




у нас такая задача, нужно проанализировать логи 
https://www.warcraftlogs.com/zone/rankings/47?leaderboards=1&class=Paladin&spec=Retribution&region=-1 - мы ищем        
retribution паладинов, нужны логи из высоких ключей, анализируем ветки талантов, как они наносят урон, опенер, что за чем нажимают, на босса/паки  
по приоритету урон - ветка талантов. Нам нужно понять как сейчас играет и дамажит паладин изучив как играют топовые 
 игроки. У нас уже есть retribution-guide нужно будет исправить то что в нем неправильно относительно меты. Используй плагин superpower и давай устроим брейншторм