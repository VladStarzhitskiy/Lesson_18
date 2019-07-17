"use strict";

//№1
let a = '1';
if( a === '1') {
    console.log('Верно');
}else{
    console.log('Неверно');
}

//№2
let item = false;
if (!item) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//№2.1
!item ? console.log('Верно'): console.log('Неверно');

//№3
let aa = -3;
if( aa > 0 && aa < 4) {
    console.log('Верно');
}else{
    console.log('Неверно');
}

//№4
let a1 = 7;
let b = 7;
if( a1 > 3 && a1 < 12 || b >= 7 && b < 15 ) {
    console.log('Верно');
}
else{
    console.log('Неверно');
}

//№5
let month = 11;
if( month >= 3 && month <= 5 ){
    console.log('Весна');
}else if( month >= 6 && month <= 8 ){
    console.log('Лето');
}else if( month >= 9 && month <= 11 ){
    console.log('Осень');
} else{
    console.log('Зима');
}

//№6
for(let e = 0; e <= 100; e += 1){
    if(e%2 === 0){
        console.log(e);
    }
}




