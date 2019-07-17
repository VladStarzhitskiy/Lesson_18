"use strict";

let a = true;
let b = 2;

//Операторы сравнения
console.log(a > b); //false
console.log(a < b); //true
console.log(a >= b); //false
console.log(a <= b); //true
console.log(a == b); //false
console.log(a != b); //true

let ifMore = a > b;

//Сравнение строк

console.log( 'Б' > 'А' ); //true  текст сравнивается по алфавиту
console.log( 'борис' > 'Андрей'); //true

console.log( '2' > '14'); //true
console.log( 2 > 14 );//false

console.log( +'2' > +'14'); //false

//Сравнение разных типов

console.log ( '2' > 1 ); //true

console.log( '01' == 1 ); //true

console.log( false == 0); //true false- приабразуется в 0

console.log( true == 1); //true

//строгое равенство ===

console.log( true === 1 ); //false потому что не будет пытатся приобразовать

// сравнение null i undefined

console.log( null == undefined ); //true

console.log( +null );
console.log( null == 0 ); //false
console.log( null != 0 ); //rtue
console.log( null >= 0 ); //rtue
console.log( null > 0 ); //false

console.log( +undefined ); //преобразуется к NaN

console.log( +NaN); //NaN

//NaN i underfined при сравнении с ними - всегда возвращает false

//Взаимодействие с пользователем (UI)
/*
alert('Привет');

let userMessage = prompt('Сколько лет?', '20');
console.log( userMessage );

let isTrue = confirm('Согласны?');
console.log( isTrue );
*/
//Условные операторы: if, ?

let year = prompt('Какой сейчас год?');

if(year == '2019') {
    console.log('Верно');
}else{
    console.log('Не верно');
}

//в логическом контексте:0, null, '', undefined, NaN - являются false. Остальные значение true.
if( 0 ){//false

}
if( 1 ){//true

}

let cond = (year != 2019); //2019 = false

// Неверное значение else

if(1){
    //true
}
else{
    //false
}

//Несколько условий

if( year >= 2019 ){
    console.log('Меньше');
}
else if( year == 2019){
    console.log('Верно');
}
else{
    console.log('Больше');
}

//Оператор ? знак (Тернарный оператор)
//условие ? значение1 : значение2

let age = 15;
let access = (age > 14) ? true : false;
access = (age > 14) ? 'Доступ разрешен' : 'Доступ запрещон';

//несколько операторов сравнения '?'
(year >= 2019) ? console.log('Меньше') :
(year == 2019) ? console.log('Верно') :
console.log('Больше');

//Логические операторы ИЛИ ||

console.log( true || true); //true
console.log( true || false); //true
console.log( false || false); //false
console.log( false || true); //true

let hours = 9;
if( hours <10 || hours> 18){
    console.log('Офис закрыт до 10 и после 18');
}

let isWeekend = true;
if(hours < 10 || hours > 18 || isWeekend){
    console.log('Офис закрыт до 10 и после 18 или в выходной');
}

let x;
true || (x=1);
console.log(x); //undefined

//ИЛИ запинается на правде

//оперетор И - && (& - амперсант)
console.log( true && true ); //true
console.log( true && false ); //false
console.log( false && true ); //false
console.log( false && false ); //false

let hour = 12, minutes = 30;

if(hour == 12 && minutes == 30){
    console.log('Время: 12.30');
}

//&& записывается на ЛЖИ

//Приоритет у && больше чем у ||
console.log( 5 || 1 && 0); //5

// Оператор НЕ!

let value = 10;
let result = !value; //false

//Преобразование к логическому типу !!

console.log( !!'строка' ); //true
console.log( !!null ); //false

console.log( null || 2 || undefined ); //2

//Строковое преобразование 
console.log( String(null) === 'null' ); //true

//Числовое преобразование

x = +"123";
x = Number("123");
/*
undefined = NaN
null = 0 
true/false = 1/0
строка = откидываются пробелы, если число то приобразовывает. Если числа в перемешку с иными символами то NaN
*/

//Логическое преобразование

console.log( !!'0'); //true
console.log( Boolean("") ); //true

console.log( 0 == " 0 " ); //true