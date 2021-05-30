//Задание 1.
let arr = [0,1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            console.log(`${arr[i]}-это ноль`);
        }
        if (arr[i] % 2 == 0 && arr[i] > 0) {
            console.log(`${arr[i]}-четное число`);
        }
        if (arr[i] % 2 == 1) {
            console.log(`${arr[i]}-нечетное число`);
        }
    }