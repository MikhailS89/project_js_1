//Задание 3
"use strict";
let a = Number(prompt('Задайче значение для a'));
let b = Number(prompt('Задайче значение для b'));
    
    if (a >= 0 && b >=0) {
        let c = a - b;
        alert(c);
    } else if (a <= 0 && b <= 0){
        let c = a * b;
        alert(c);
    } else if (a <= 0 || b <= 0){
        let c = a + b;
        alert(c);
    };