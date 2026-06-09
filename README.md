# Шығын - трекер расходов

Веб-приложение для учёта личных расходов, работающее полностью в браузере. Все данные сохраняются локально, без использования сторонних серверов.

## Скриншот

![image](https://private-user-images.githubusercontent.com/180709221/604689510-5e3d5387-4efa-4c4c-9ff7-fb1b27b4f044.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODEwMDIyMDUsIm5iZiI6MTc4MTAwMTkwNSwicGF0aCI6Ii8xODA3MDkyMjEvNjA0Njg5NTEwLTVlM2Q1Mzg3LTRlZmEtNGM0Yy05ZmY3LWZiMWIyN2I0ZjA0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotTextPTIwMjYwNjA5VDEwNDUwNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE0NjgwZTY5MDk3MWU5MDI4MDkzZWQwMThhMmQ1Y2Y0OTlmNjVkMWIwMWZlODU1ZjIyMTA4NmJiZGY4MmQxY2VkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.-hDB-pev_qho8YaesdB_jEKF3ogSnQz1ZJKFEPbD62A)

## Стек

- HTML, CSS, JavaScript (Vanilla JS без фреймворков)
- Chart.js (подключена через CDN для отрисовки диаграмм)
- Встроенный браузерный localStorage для хранения данных

## Как запустить локально

```bash
git clone [https://github.com/Mpekvoup/expense_track_by_bek.git](https://github.com/Mpekvoup/expense_track_by_bek.git)
cd expense_track_by_bek
Открыть файл index.html в любом удобном браузере.

Деплой
Сайт доступен и работает по адресу: https://expense-track-by-bek.vercel.app

Что работает
Добавление трат с указанием категории, суммы, даты и описания.

Фильтрация расходов по категориям.

Фильтрация по временным периодам: неделя, месяц, всё время.

Автоматическая генерация круговой диаграммы расходов с помощью Chart.js.

Экспорт истории трат в формат CSV.

Полноценное сохранение всех данных в localStorage после перезагрузки страницы.

Что не доделано
Проект полностью готов и выполняет все заявленные функции локального трекера. В будущем можно добавить возможность синхронизации между разными устройствами.

Что я узнал во время работы
Закрепил навыки работы с чистым JavaScript (модульная структура: разделение на data.js, ui.js и app.js).

Научился интегрировать и настраивать библиотеку Chart.js для визуализации данных.

Разобрался, как генерировать и отдавать пользователю скачиваемые CSV-файлы прямо из фронтенда.
