"use strict";

// const { get } = require("http");
// const { type } = require("os");

// alert("hello");
// const result = confirm("asdasd");
// const answers = [];
// answers[0] = alert('asdasd');
// answers[1] = alert('asddsadasd');



// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result);

// function getTimeFromMinutes(num) {
//     if(typeof num === "string" || num < 0 || !Number.isInteger(num)){
//         return console.log("Произошла ошибка");
//     } 
//         const timeInHours = Math.floor(num /60);
//         const timeInMinutes = num % 60;
//         let str = "";
//         switch (timeInHours) {
//             case 0:
//                 str ="часов";
//                 break;
//             case 1:
//                 str = "час";
//                 break;  
//             case 2:
//                 str = "часа";
//                 break; 
//             default:
//                 str = 'часов';  
//         } 

//     return console.log(`Это ${timeInHours} ${str} и ${timeInMinutes} минут`);
// }
// getTimeFromMinutes(50);


// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         let {age} = plan;
//         let lang = plan.skills.languages;
//         let newLang = lang.map(b => b.toUpperCase());
//         let result = ` мне ${age} лет и я владею языками ${newLang} `;
//         console.log(typeof result);
//         return result;
//     }
// };
// console.log( personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let result = "";
//     const {programmingLangs} = plan.skills;
//     for(let key in programmingLangs){
//        result += `${key} + ${programmingLangs[key]} \n`;
//     }
//     return result;
// }
// console.log( showProgrammingLangs(personalPlanPeter));


// function showExerience (exp) {
//     return personalPlanPeter.skills.exp;
// }   
// console.log( showExerience(personalPlanPeter));


// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = "";
//     if(family.length === 0){
//         return "Семья пуста";
//     } 
//     const result= arr.join(' ');
//     return str = `Семья состоит из: ${result}.`;
// }
// console.log( showFamily(family));


// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = "";
//     if(arr.length === 0) {
//         str = "Нет доступных валют"; }
//         str = 'Доступные валюты:\n';
//         arr.forEach(i => {
//            if(i !== missingCurr){
//             str += `${i}\n`;
//            }
//         });
    
//     return  str;
// }
// console.log( availableCurr([...baseCurrencies,...additionalCurrencies], 'CNY'));

// function checkZero(result) {
//     let resultString = result + "";
//     let count = 0;
//     for (let j = resultString.length - 1; j >= 0; j--) {
//       if (resultString[j] === "0") {
//         count++;
//       } else {
//         break;
//       }
//     }
//     return count;
//   }
//   console.log(checkZero(450700));

//   function backwardString(value){
//     return value.split("").reverse().join("");







const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    if(prop){
        answer = 'Открыто';
    } else{ 
        answer = "Закрыто";
    }

    return answer;
}

console.log(isOpen( restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+(fDish.price.slice(0, -1) + sDish.price.slice(0, -1)) < average) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors[0] = [{name: 'Mike', age: 32}];
    return copy;
}

console.log(transferWaitors(restorantData));


