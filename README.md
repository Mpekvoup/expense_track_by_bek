# Шығын - трекер расходов

Веб-приложение для учёта личных расходов. Все данные хранятся в `localStorage` — никаких серверов.

## Возможности

- Добавление трат с категорией, суммой, датой и описанием
- Фильтрация по периоду: неделя, месяц, всё время
- Фильтрация по категории
- Круговая диаграмма расходов по категориям
- Экспорт в CSV
- Данные сохраняются после перезагрузки страницы
<img width="997" height="427" alt="image" src="https://github.com/user-attachments/assets/5e3d5387-4efa-4c4c-9ff7-fb1b27b4f044" />


<img width="1154" height="678" alt="image" src="https://github.com/user-attachments/assets/493b9a31-2f32-48e8-ad8b-ed095268b021" />

<img width="1016" height="488" alt="image" src="https://github.com/user-attachments/assets/d08d1b96-085c-4c9f-8961-bfa22a936d1c" />
![Uploading image.png…]()





## Структура проекта

```
expense-tracker/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── data.js   — работа с данными и localStorage
    ├── ui.js     — рендеринг компонентов
    └── app.js    — контроллер, обработка событий
```

## Запуск

Открыть `index.html` в браузере или задеплоить на GitHub Pages.

## Деплой на GitHub Pages

1. Создать репозиторий `expense-tracker`
2. Загрузить файлы
3. Settings → Pages → Source: `main` / `root`
4. Сайт будет доступен по адресу `https://<username>.github.io/expense-tracker`

## Стек

- HTML, CSS, JavaScript — без фреймворков
- [Chart.js](https://www.chartjs.org/) — диаграмма (CDN)
- localStorage — хранилище данных
