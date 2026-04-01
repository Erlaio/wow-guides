---
tags: [wow, druid, restoration, log-analysis, healing]
created: 2026-03-22
---

## Разбор лога: Pyrró — Chimaerus the Undreamt God Normal

**Ссылка:** [WarcraftLogs](https://www.warcraftlogs.com/reports/6VHPnJ2wxR4G8fDq?fight=15&type=healing&source=198)
**Дата рейда:** 19.03.2026 | **Сервер:** Wisp - Hyjal (EU)
**Босс:** Chimaerus the Undreamt God Normal | **Время килла:** 5:11
**Итого:** 33.15m хила, ~106k HPS, 36.15% оверхил

---

### Основной стиль игры

Pyrró играет классический **Rejuvenation-blanket** стиль:

- **Rejuvenation** — 135 кастов (26 CPM), 100% аптайм, 46.88% всего времени каста. Абсолютная основа — постоянно раскидывает реджувы по рейду
- **Regrowth** — #1 по хилу (19.65%, 5.52m), 70 кастов (~13.5 CPM). Спамит как основной прямой хил. Крит 97.28% — работает механика Abundance (стаки реджувов повышают крит Regrowth)
- **Wild Growth** — 13.66% хила, 22 каста (~4.2 CPM). Используется практически по кулдауну

**Суть:** игрок заливает рейд HoT-ами (Rejuv blanket), затем усиливает хил через Regrowth спам и Wild Growth по кулдауну.

---

### Распределение хила

| Способность | % | Хил | Кастов | Оверхил |
|---|---|---|---|---|
| Regrowth | 19.65% | 5.52m | 70 | 35.16% |
| Wild Growth | 13.66% | 4.53m | 22 | 25.22% |
| Nature's Bounty | 4.70% | 1.56m | — | 45.14% |
| Efflorescence | 4.60% | 1.53m | — | 20.25% |
| Tranquility | 4.38% | 1.45m | 2 | 7.34% |
| Embrace of the Dream | 4.28% | 1.42m | — | 20.95% |
| Grove Guardians | 4.27% | 1.42m | — | 9.88% |
| Swiftmend | 4.12% | 1.36m | ~25 | 25.77% |
| Dream Bloom | 3.60% | 1.19m | — | 7.91% |
| Sylvan Beckoning | 3.18% | 1.05m | — | 22.23% |
| Leech | 2.55% | 846.8k | — | 9.22% |
| Lifebloom | 1.30% | 431.7k | 13 | 36.58% |
| Spirit of the Thicket | 0.91% | 300.7k | — | 62.21% |
| Symbiotic Relationship | 0.80% | 265.1k | — | 17.17% |
| Aessina's Renewal | 0.69% | 229.1k | — | — |
| Matted Fur | 0.68% | 226.1k | — | — |
| Frenzied Regeneration | 0.45% | 147.9k | — | 20.56% |

---

### Использование кулдаунов

| Способность | Кастов | Оценка |
|---|---|---|
| Convoke the Spirits | 5 | Отлично — по кулдауну (CD ~1 мин) |
| Nature's Swiftness | 5 | Хорошо — инстант Regrowth для экстренного хила |
| Tranquility | 2 | Нормально — рейдовый кулдаун |
| Ironbark | 3 | Хорошо — внешний дефенсив |
| Barkskin | 3 | Хорошо — личная защита |
| Innervate | 2 | Нормально — маначка |

---

### Сочетания способностей (combos)

1. **Rejuv blanket → Wild Growth → Convoke the Spirits** — основной burst-combo. Раскидывает реджувы, Wild Growth, потом Convoke для массового хила
2. **Nature's Swiftness + Regrowth** — мгновенный мощный прямой хил для спасения цели (5 раз за бой)
3. **Swiftmend → Embrace of the Dream** — Swiftmend (~25 кастов) триггерит Embrace of the Dream (4.28% хила), лечит всех с активными HoT-ами
4. **Rejuv stacking → Regrowth spam** — стаки Abundance от реджувов дают 97% крита на Regrowth

---

### Проблемы и точки роста

#### 1. Lifebloom аптайм — 69.95% (должен быть 95%+)
Всего 13 кастов, 2.5 CPM. Lifebloom должен висеть на танке ПОСТОЯННО — даёт проки Omen of Clarity (бесплатный Regrowth). Потеря ~30% аптайма = потеря прок-ов и хила.

#### 2. Высокий оверхил — 36.15% (норма ~25-30%)
Проблемные способности:
- Spirit of the Thicket — 62% оверхил
- Nature's Bounty — 45% оверхил
- Lifebloom — 37% оверхил
- Regrowth — 35% оверхил

Игрок часто лечит цели, которым хил не нужен — типичная проблема "blanket healing" подхода.

#### 3. Возможный overuse Rejuvenation
135 кастов при 100% аптайме — возможно, слишком много реджувов на целях с полным ХП, что тратит ману и увеличивает оверхил.

---

### Итоговая оценка

Pyrró знает свою ротацию и играет уверенно. Кулдауны используются хорошо (особенно Convoke 5 раз). Основные точки роста:
- **Поднять аптайм Lifebloom** с 70% до 95%+
- **Снизить бездумный blanket healing** для уменьшения оверхила
