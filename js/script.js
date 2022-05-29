
// alert("hello");
// const result = confirm("asdasd");
// const answers = [];
// answers[0] = alert('asdasd');
// answers[1] = alert('asddsadasd');
// console.log(answers);
// document.write('asdadasd')


const answer = +prompt('сколько фильм уже посмотрели?',0);

const numberOfFilms = answer;

const personalMovieDB = {
    count:numberOfFilms,
    movies:{

    },
    actors:{},
    genres:[],
    privat:false
};

const qestionLastFilm = prompt("Один из последних просмотренных фильмов?","ХАЛК");
const gradeOFFilm = +prompt("На сколько оцените его?",10);

personalMovieDB.movies[qestionLastFilm] = gradeOFFilm;
console.log(personalMovieDB);