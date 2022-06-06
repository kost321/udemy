"use strict";


const personalMovieDB = {
    count:0,
    movies:{},
    actors:{},
    genres:[],
    privat:false,
    start:function (){
        personalMovieDB.count  = +prompt('сколько фильм уже посмотрели?',0);
        while (personalMovieDB.count  === '' || personalMovieDB.count === null || isNaN(personalMovieDB.count))  {
            personalMovieDB.count  = +prompt('сколько фильм уже посмотрели?',0);
        }
    },
    rememberMyFilms:function () {
        for(let i = 0;i < 2; i++){
            const a = prompt("Один из последних просмотренных фильмов?","ХАЛК");
            const b = +prompt("На сколько оцените его?",10);
            if(a !== null && b !== null && a !== "" && b !== "" && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel:function () { 
        if(personalMovieDB.count < 10 ) {
            alert("Просмотренно давольно мало фильмов"); 
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30 ) {
            alert("Вы классический зритель");
        } else if(personalMovieDB.count >30){
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB:function (){
        if(personalMovieDB.privat === false){
            console.log(personalMovieDB);
        } 
    },
    toogleVisibleMyDB:function () {
        if(personalMovieDB.privat === true){
            personalMovieDB.privat = false;
        } else if (personalMovieDB.privat === false){
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres:function () {
        for (let i = 1; i <= 3;i++){
        const question = prompt(`Ваш любимый жанр под номером ${i}`);
        if(question === "" || question === null){
            console.log("Вы ввели некорректные данные");
        } else {
        personalMovieDB.genres[i-1] = question;
        }
    }
    personalMovieDB.genres.forEach((item,i) => 
    console.log(`Любимый жанр ${i + 1} - это ${item}`)
    );
}
};