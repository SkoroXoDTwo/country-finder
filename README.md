# Проект: country-finder
----

<div align="center">
  <img src="https://i.ibb.co/CPPvJzx/skoroxodtwo-github-io-country-finder.png" width="90%">
</div>

## 📖 Описание проекта:
Приложения для поиска данных любой страны.<br>
В приложении можно выставить фильтр по региону, и/или указать значение в поле поиска.<br>
Так же реализована возможность плавного переключения темы - светлая/темная.<br>
При нажатии на карточку страны, пользователь перенаправляется на страницу по маршруту /country/:name с детальной информацией о стране, после этого отправляется запрос на сервер для получения подробный информации о стране:
* Name;
* Native Namel;
* Region;
* Subregion;
* Capital;
* Languages;
* Currencies;
* Top Level Domain;
* Border Countries (при наличии).

Получение Border Countries происходит отдельным запросом к серверу.<br>
Данные параметры настраиваются из файла конфига.<br>
На странице /country/:name если Border Countries присутствует, то отображаются все страны соседи в виде кнопок. При клике на эти кнопки, происходит перенаправление на страницу с информацией о стране "соседе" с таким же путем /country/:name.<br><br>
На этой же странице есть кнопку Back для возврата назад по маршрутизации.<br>
При отсутствии данных о странах или же при получении ошибки от сервера, на экране отображается компонент с информацией об ошибке.<br>
Все полученные данные с api, в т.ч. статусы и ошибки попадают в store redux. Так же в store попадают данные выбранной темы, фильтрации, значения поиска.<br>

## ⚙ Функциональность:

* адаптивная верстка.
* подгрузка данных о странах с api;
* подгрузка подробных данных о стране с api;
* подгрузка данных о странах соседях с api;
* переключение темы;
* установка фильтров;
* поиск по странам;
* просмотр подробных данных о стране;
* просмотр стран соседей;
* маршрутизация;
* обработка ошибок;
* лоадеры.

## ☀ Планы на будушее:

* переключение языка en/ru
* сортировка по населению/алфавиту

## 🛠 Стек:
<p>
  <img src="https://img.shields.io/badge/React-gray?style=for-the-badge&logo=React&logoColor=/">
  <img src="https://img.shields.io/badge/Redux-gray?style=for-the-badge&logo=Redux&logoColor=/">
  <img src="https://img.shields.io/badge/JavaScript-gray?style=for-the-badge&logo=JavaScript&logoColor=/">
  <img src="https://img.shields.io/badge/Scss-gray?style=for-the-badge&logo=Sass&logoColor=/">
  <img src="https://img.shields.io/badge/Html-gray?style=for-the-badge&logo=HTML5&logoColor=red/">
</p>

## ✈ Технологии и инструменты:

* БЭМ;
* React Router v6;
* Redux-thunk.

## 👉 Начало работы:

### Сайт можно запустить по [ссылке](https://skoroxodtwo.github.io/country-finder/).

----
### Запуск локально:

- скачать проект;
- открыть консоль в корне проекта.

#### Для запуска потребуется скачать и установить [NodeJS](https://nodejs.org/en/)

#### `npm install`- устанавливает необходимые пакеты;<br/>
#### `npm run start` - запускает проект в режиме разработки;<br/>
#### `npm run build` - собирает проект в production.<br/>
