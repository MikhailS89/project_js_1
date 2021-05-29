"use strict";
//Сложение
function addition (a, b) {
    let c = a + b;
    return c;
};

//Вычитание
function subtract (a, b) {
    let c = a - b;
    return c;
};

//Умножение
function multiplier (a, b) {
    let c = a * b;
    return c;
};

//Деление
function division (a ,b) {
    let c = a / b;
    return c;
};

function mathOperation(arg1, arg2, operation) {
    let r = null;
    switch (operation) {
        case "addition":
            r = addition (arg1, arg2);
            return r;
        case "subtract":
            r = subtract (arg1, arg2);
            return r;
        case "multiplier":
            r = multiplier (arg1, arg2);
            return r;
        case "division":
            r = division (arg1, arg2);
            return r;   
    }
}

let result = mathOperation(2, 2, "addition");
console.log(result);

console.log(mathOperation(3, 3, "subtract"));
console.log(mathOperation(4, 4, "multiplier"));
console.log(mathOperation(5, 5, "division"));
