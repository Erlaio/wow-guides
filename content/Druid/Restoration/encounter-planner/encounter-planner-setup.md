---
tags: [wow, druid, restoration, addon, encounter-planner]
created: 2026-03-23
---

## Encounter Planner — настройка для Resto Druid

### Установка

1. Скачай с [CurseForge](https://www.curseforge.com/wow/addons/encounter-planner)
2. В игре: `/ep` или через меню аддонов
3. При первом запуске — пройди интерактивный туториал

### Быстрый старт

#### 1. Создай план
Plan Menu → **New Plan** → выбери босса, сложность, имя

#### 2. Добавь CD на таймлайн
- **ЛКМ** на таймлайне = новый ассайнмент
- **Перетаскивание** иконки = изменить время
- **Ctrl + перетаскивание** = дублировать
- **Клик по иконке** = редактор (триггер, спелл, текст)

#### 3. Триггеры
- **Fixed Time** — `{time:0:17}` = на 17 секунде боя. Бери тайминги из босс-заметок
- **Combat Log Event** — на каст босса (сложнее, но точнее)

#### 4. Настрой ремайндеры
Preferences → Reminder:
- **Icons** — иконки CD на экране (вкл)
- **Text-to-Speech** — голос говорит что жать (вкл)
- **Progress Bars** — полоски обратного отсчёта (опционально)
- **"Only Show Reminders For Me"** — только свои CD

#### 5. Импорт из MRT
Plan Menu → Import → From MRT (если гильдия использует MRT ноты)

### Рекомендуемые настройки

| Настройка | Значение |
|---|---|
| Countdown length | 5 сек (предупреждение заранее) |
| Message hold duration | 3 сек |
| Icon size | 40-50 |
| TTS voice | любой, громкость 80% |
| Show only my reminders | Да |
| Assignee sort | Role > Alphabetical |

### Формат строк для импорта

```
{time:MM:SS} ИмяПерсонажа {spell:SpellID}{text}Текст напоминания{/text}
```

Готовые планы для каждого босса — в отдельных файлах этой папки.

### Ссылки

- [User Guide (GitHub Wiki)](https://github.com/markoleptic/EncounterPlanner/wiki/User-Guide)
- [CurseForge](https://www.curseforge.com/wow/addons/encounter-planner)
