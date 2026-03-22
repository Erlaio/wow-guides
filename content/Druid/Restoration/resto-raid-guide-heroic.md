---
tags: [wow, druid, restoration, raid, guide, heroic]
created: 2026-03-22
---

## Resto Druid Raid Healing Guide — Heroic

Patch 12.0.1 Midnight | Рейд: VS / DR / MQD | На основе анализа топовых логов (99+ парсы)

> **Оба билда жизнеспособны!** Топ-1 игроки меняют билд в зависимости от босса.
> - **Incarnation: Tree of Life** — Imperator Averzian, Vorasius, Vaelgor & Ezzorak, Crown of the Cosmos
> - **Convoke the Spirits** — Fallen-King Salhadaar, Lightblinded Vanguard, Chimaerus

---

### Общая ротация (одинаковая для обоих билдов)

**Приоритет кастов:**
1. **Lifebloom** — на танке ВСЕГДА (целевой аптайм 95%+)
2. **Efflorescence** — под мили-стаком
3. **Swiftmend** — по кулдауну (~каждые 12 сек), триггерит Soul of the Forest
4. **Wild Growth** — сразу после Swiftmend
5. **Rejuvenation** — раскидывать на просевших / перед дамагом
6. **Regrowth** — спамить при активном дамаге (97%+ крит с Abundance стаками)
7. **DPS** (Wrath/Starsurge/Moonfire) — когда рейд на полном ХП

**Ключевая связка:** `Swiftmend → Wild Growth` — каждые 12 сек, как часы. Топы делают это 20-40 раз за бой.

---

### Билд 1: Incarnation: Tree of Life

**Когда брать:** боссы с предсказуемыми фазами тяжёлого дамага каждые ~90 сек.
**Боссы:** Imperator Averzian, Vorasius, Vaelgor & Ezzorak, Crown of the Cosmos

#### Рамп-последовательность

```
1. Innervate (если доступен)
2. Rejuvenation blanket (5-8 целей)
3. Swiftmend → Wild Growth
4. Incarnation: Tree of Life [АКТИВИРУЙ]
5. Regrowth spam (усиленный деревом)
6. Продолжай SM → WG → Regrowth spam всю длительность
```

#### Cooldown Map

| CD | Интервал | За 5-мин бой | За 9-мин бой |
|---|---|---|---|
| Incarnation | ~90 сек | 3 | 5-6 |
| Tranquility | ~3 мин | 2 | 3 |
| Innervate | ~3 мин | 2 | 3 |

**Паттерн:** `Innervate → Incarnation → Regrowth spam → 30 сек → Tranquility`

**Стакать:** Incarnation + Innervate
**НЕ стакать:** Incarnation + Tranquility одновременно — разноси на 30+ сек

---

### Билд 2: Convoke the Spirits

**Когда брать:** боссы с частыми пиками дамага каждые ~60 сек.
**Боссы:** Fallen-King Salhadaar, Lightblinded Vanguard, Chimaerus

#### Рамп-последовательность

```
1. Rejuvenation blanket (3-5 целей)
2. Swiftmend → Wild Growth
3. Nature's Swiftness (опционально, для инстант-Regrowth перед Convoke)
4. Convoke the Spirits (4 сек ченнел)
5. Regrowth spam
```

#### Cooldown Map

| CD | Интервал | За 5-мин бой | За 9-мин бой |
|---|---|---|---|
| Convoke | ~60 сек | 4-5 | 8 |
| Tranquility | ~3 мин | 2 | 2-3 |
| Innervate | ~3 мин | 2 | 2-3 |

**Паттерн:** `Convoke каждые 60 сек по CD` + `Tranquility после 1-го и каждого 3-го Convoke`

**Комбо:** NS + Convoke (Nature's Swiftness перед ченнелом для макс burst)

---

### Soul of the Forest (SotF)

**Баф после Swiftmend**, усиливает следующий Rejuvenation (+100%) или Regrowth (+150%).

- SotF → **Rejuvenation** в ~70-92% — стандарт
- SotF → **Regrowth** в ~8-31% — когда цель в опасности

---

### Дефенсивы

| CD | Использований | Когда |
|---|---|---|
| **Ironbark** | 3-4 за бой | На танка перед бастером |
| **Barkskin** | 2-4 за бой | На себя перед AoE |
| **Nature's Swiftness** | 2-5 за бой | Инстант Regrowth, экстренный хил |
| **Stampeding Roar** | 1 за бой | Рейд-утилити |

---

### Мана менеджмент

**Innervate:** всегда перед основным CD (Incarnation или серией Convoke)
**Mana Potion:** середина боя
**Экономия:** не бланкетируй Rejuv на полном ХП, держи Lifebloom аптайм для OoC проков

---

### Типичные ошибки

| Ошибка | Решение |
|---|---|
| Низкий Lifebloom аптайм (<90%) | WeakAura, цель 95%+ |
| SM не по кулдауну | SM → WG каждые 12 сек, это основа |
| CD в пустоту (на полном ХП) | Используй перед пиком дамага |
| Один билд на все боссы | Меняй билд: Incarnation vs Convoke |
| Оверхил >35% | Хиль предиктивно, не реактивно |

---

### Боссы Heroic: CD тайминги

Каждый босс — отдельная заметка с детальным CD планом:

| Босс | Билд | Длительность | Заметка |
|---|---|---|---|
| Imperator Averzian | Incarnation | ~4:35 | [[imperator-averzian]] |
| Vorasius | Incarnation | ~4:44 | [[vorasius]] |
| Fallen-King Salhadaar | Convoke | ~6:13 | [[fallen-king-salhadaar]] |
| Vaelgor & Ezzorak | Incarnation | ~8:50 | [[vaelgor-ezzorak]] |
| Lightblinded Vanguard | Convoke | ~4:54 | [[lightblinded-vanguard]] |
| Crown of the Cosmos | Incarnation | ~9:14 | [[crown-of-the-cosmos]] |
| Chimaerus, the Undreamt God | Convoke | ~9:11 | [[chimaerus-the-undreamt-god]] |

---

### Ссылки

- [[resto-raid-guide-normal]] — упрощённый гайд для нормала
- [[resto-raid-guide-mythic]] — детальный гайд для мифика
- [[resto-healing-guide]] — подробный гайд по способностям
