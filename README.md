```python
import os

markdown_content = """# Шығын - трекер расходов

Веб-приложение для учёта личных расходов, работающее полностью в браузере. Все данные сохраняются локально, без использования сторонних серверов.

## Скриншот
<img width="1016" height="488" alt="Снимок экрана 2026-06-09 014207" src="https://github.com/user-attachments/assets/f3d07be0-5db6-4524-89aa-c51ec3f83d0b" />
<img width="997" height="427" alt="Снимок экрана 2026-06-09 014312" src="https://github.com/user-attachments/assets/3a9c5c61-b625-4f2e-84b2-0caa244dc26d" />
<img width="1154" height="678" alt="Снимок экрана 2026-06-09 013855" src="https://github.com/user-attachments/assets/ac74c791-1971-4006-a750-a38484ff2ec0" />


## Стек

- HTML, CSS, JavaScript (Vanilla JS без фреймворков)
- Chart.js (подключена через CDN для отрисовки диаграмм)
- Встроенный браузерный localStorage для хранения данных

## Как запустить локально


```

```text
File saved successfully: README.md

```bash
git clone [https://github.com/Mpekvoup/expense_track_by_bek.git](https://github.com/Mpekvoup/expense_track_by_bek.git)
cd expense_track_by_bek

```

Открыть файл `index.html` в любом удобном браузере.

## Деплой

Сайт доступен и работает по адресу: [https://expense-track-by-bek.vercel.app](https://expense-track-by-bek.vercel.app)

## Что работает

* Добавление трат с указанием категории, суммы, даты и описания.
* Фильтрация расходов по категориям.
* Фильтрация по временным периодам: неделя, месяц, всё время.
* Автоматическая генерация круговой диаграммы расходов с помощью Chart.js.
* Экспорт истории трат в формат CSV.
* Полноценное сохранение всех данных в `localStorage` после перезагрузки страницы.

## Что не доделано

* Проект полностью готов и выполняет все заявленные функции локального трекера. В будущем можно добавить возможность синхронизации между разными устройствами.

## Что я узнал во время работы

* Закрепил навыки работы с чистым JavaScript (модульная структура: разделение на `data.js`, `ui.js` и `app.js`).
* Научился integrar и настраивать библиотеку Chart.js для визуализации данных.
* Разобрался, как генерировать и отдавать пользователю скачиваемые CSV-файлы прямо из фронтенда.
"""

file_name = "README.md"
with open(file_name, "w", encoding="utf-8") as f:
f.write(markdown_content)

print(f"File saved successfully: {file_name}")

```
Ваш файл `README.md` готов. Вы можете скачать его по ссылке ниже:

[file-tag: code-generated-file-0-1781002118101110883]

Текст файла в формате Markdown для удобного копирования:

```markdown
# Шығын - трекер расходов

Веб-приложение для учёта личных расходов, работающее полностью в браузере. Все данные сохраняются локально, без использования сторонних серверов.

## Скриншот

![image](https://private-user-images.githubusercontent.com/180709221/604689510-5e3d5387-4efa-4c4c-9ff7-fb1b27b4f044.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODEwMDIyMDUsIm5iZiI6MTc4MTAwMTkwNSwicGF0aCI6Ii8xODA3MDkyMjEvNjA0Njg5NTEwLTVlM2Q1Mzg3LTRlZmEtNGM0Yy05ZmY3LWZiMWIyN2I0ZjA0NC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNjA5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDYwOVQxMDQ1MDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNDY4MGU2OTA5NzFlOTAyODA5M2VkMDE4YTJkNWNmNDk5ZjY1ZDFiMDFmZTg1NWYyMTA4NmJiZGY4MmQxY2VkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.-hDB-pev_qho8YaesdB_jEKF3ogSnQz1ZJKFEPbD62A)

## Стек

- HTML, CSS, JavaScript (Vanilla JS без фреймворков)
- Chart.js (подключена через CDN для отрисовки диаграмм)
- Встроенный браузерный localStorage для хранения данных

## Как запустить локально

```bash
git clone [https://github.com/Mpekvoup/expense_track_by_bek.git](https://github.com/Mpekvoup/expense_track_by_bek.git)
cd expense_track_by_bek

```

Открыть файл `index.html` в любом удобном браузере.

## Деплой

Сайт доступен и работает по адресу: [https://expense-track-by-bek.vercel.app](https://expense-track-by-bek.vercel.app)

## Что работает

* Добавление трат с указанием категории, суммы, даты и описания.
* Фильтрация расходов по категориям.
* Фильтрация по временным периодам: неделя, месяц, всё время.
* Автоматическая генерация круговой диаграммы расходов с помощью Chart.js.
* Экспорт истории трат в формат CSV.
* Полноценное сохранение всех данных в `localStorage` после перезагрузки страницы.

## Что не доделано

* Проект полностью готов и выполняет все заявленные функции локального трекера. В будущем можно добавить возможность синхронизации между разными устройствами.

## Что я узнал во время работы

* Закрепил навыки работы с чистым JavaScript (модульная структура: разделение на `data.js`, `ui.js` и `app.js`).
* Научился интегрировать и настраивать библиотеку Chart.js для визуализации данных.
* Разобрался, как генерировать и отдавать пользователю скачиваемые CSV-файлы прямо из фронтенда.

```

```<img width="1016" height="488" alt="Снимок экрана 2026-06-09 014207" src="https://github.com/user-attachments/assets/fbfdf9f0-c037-4cf5-a785-9b27d1719a11" />
