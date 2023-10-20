'use strict'

// ЦЯ ЧАСТИНА КОДУ ПРАЦЮЄ!!! АЛЕ Я ХОТІВ ДОДАТИ МОЖЛИВІСТЬ ПОДЕРНЕННЯ ДО ВВОДУ СИМВОЛУ, ЯКЩО ЙОГО БУЛО ЗАДАНО НЕ ВІРНО!!!


// var x = Number(prompt("Введіть перше число"));
//    if (isNaN(x)) {
//       alert ('is not number');
//    }
//    else {
//       alert ('OK')
//    }
// var y = Number(prompt("Введіть друге число"));
//    if (isNaN(y)) {
//       alert ('is not number');
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
//       default:    alert("Це не оператор!"); 
//    }
// }






// Цей калькулятор на операторі + складає показники змінних (x+y=xy 12+2=122), а не додаэ їх один до одного (x+y=z 12+2=14); не розумію як це виправити!!!!!
// повернення до першого числа реалізовано через перезавантаження сторінки


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

 typeof x
 
// Не розумію як зробити перевірку на число у 

// const calc = (x, oper, y) => {

//    switch (x) {
//       case '': console.log ('пустое поле x'); break;
//       case Number: console.log('правильно!')
//    }

//    switch (oper) {
//       case '+': return x + y; break;
//       case '-': return x - y; break;
//       case '/': return x / y; break;
//       case '*': return x * y; break;
//       case '': return console.log('Вы не ввели оператор'); break;
//       default: console.log('Неправельный оператор'); break;
//    }

//    switch (y) {
//       case 0: console.log ('На 0 делить нельзя!!'); break;
//       case '': console.log ('пустое поле y'); break;
//    }
// }

// console.log(calc(1,'/',2))

