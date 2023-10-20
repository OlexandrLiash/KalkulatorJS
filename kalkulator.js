'use strict'

// ЦЯ ЧАСТИНА КОДУ ПРАЦЮЄ!!! АЛЕ Я ХОТІВ ДОДАТИ МОЖЛИВІСТЬ ПОДЕРНЕННЯ ДО ВВОДУ СИМВОЛУ, ЯКЩО ЙОГО БУЛО ЗАДАНО НЕ ВІРНО!!!


// var x = Number(prompt("Введіть перше число"));
//    if (isNaN(x)) {
//       alert ('is not number'); break;
//    }
//    else {
//       alert ('OK')
//    }
// var y = Number(prompt("Введіть друге число"));
//    if (isNaN(y)) {
//       alert ('is not number'); break;
//    }
//    else {
//       alert ('OK')
//    }
// var useOper = userOper();

// function userOper() {
//    switch(prompt("Введіть оператор +, -, *, /,")){
//       case "+":   alert("="+(x+y)); break;
//       case "-":   alert("="+(x-y)); break;
//       case "*":   alert("="+(x*y)); break;
//       case "/":   alert("="+(x/y)); break;
//       default:    alert("Це не оператор!"); break;
//    }
// }






// Цей калькулятор на операторі + складає показники змінних (x+y=xy 12+2=122), а не додаэ їх один до одного (x+y=z 12+2=14); не розумію як це виправити!!!!!
// також намагався зробити повернення до вводу першого числа, якщо якесь значення було введено не правильтно. Не выйшло.

let x = '';
let y = '';
let operator = '';
let start = true;

function checkX(x) {
   if (!x) return false;
   if (isNaN(x) || x === '') {
      alert('Було введено не число! Спробуйте ще раз');
      return false;
   }
   return true;
}

function checkY(y) {
   if (!y) return false;
   if (isNaN(y) || y === '') {
      alert('Було введено не число! Спробуйте ще раз');
      return false;
   }
   return true;
}

function checkOperator(operator) {
   switch(prompt("Введіть оператор +, -, *, /")){
            case "+":   alert("="+(x+y)); break;
            case "-":   alert("="+(x-y)); break;
            case "*":   alert("="+(x*y)); break;
            case "/":   alert("="+(x/y)); break;
            default:    alert("Це не оператор!");
         }
}


while (start) {
   start = checkX(x);
   x = prompt('Введіть перше число', '');
   if (checkX(x)){}
   else {
     alert('С початку!'), location. reload() ; break;
   }
   y = prompt('Введіть друге число', '');
   if (checkY(y)){}
   else {
     alert('С початку!', location. reload()) ;break;
   }
   operator = '';
   if (checkOperator(operator)){}
   else {
     alert('С початку!'), location. reload() ;break;
   }
 }

// const calc = (x, y, oper) => {
//    switch (oper) {
//       case '+': return x + y;
//       case '-': return x - y;
//       case '/': return x / y;
//       case '*': return x * y;
//       default: console.log('неправельный оператор');
//    }
//    switch (y) {
//       case 0: console.log ('на 0 делить нельзя!!');
//       case '': console.log ('путое поле y');
//    }
//    switch (x) {
//       case '': console.log ('путое поле x');
//    }
// }

// console.log(calc('asd',2,'-'))
