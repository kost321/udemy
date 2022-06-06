/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoDeleteImages = document.querySelectorAll(".promo__adv img");
const changeImg = document.querySelector(".promo__bg ");
const changeGenre = changeImg.querySelector(".promo__genre");
const interactiveList = document.querySelector(".promo__interactive-list");



changeGenre.textContent = "драма";

promoDeleteImages.forEach(image => {
    image.remove();
});

changeImg.style.backgroundImage = "url('/project/project/img/bg.jpg')";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

interactiveList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film,i) => {
    interactiveList.innerHTML += 
    `<li class="promo__interactive-item"> ${i} ${film} 
        <div class="delete"></div>
    </li>`;
});