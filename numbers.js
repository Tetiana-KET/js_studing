// Привести число к двоичной системе исчисления
// Метод toString(2) принимает параметр - какая система исчисления

function toBianaryString(num) {
    let bianary = num.toString(2);
    console.log(bianary);
};
// toBianaryString(5); //101
// toBianaryString(13); //1101
// toBianaryString(567); //1000110111

//ПОСЧИТАТЬ КОЛИЧЕСТВО ЕДИНИЦ В БИТАХ
function countBits(n) {
    let bianary = n.toString(2).split('');
    let count = 0;
    for (let item of bianary) {
        if (item == 1) {
            count += 1;
        }
    }
    return count;
};

//перевернуть число

function reverse(num) {
    let reverced = 0; // if digit ends by zero or it is equal zero, it doesn't fit
    console.log(`number = ${num}`); //number = 123456789
    while (num) {
        reverced = (reverced * 10) + (num % 10);
        num = Math.floor(num / 10);
        console.log(reverced); // 987654321
    }
}


function reverse(n) {
    n = Math.abs(n);
    let result = n.toString().split("").reverse().join("");
    return +result;
    
}
// console.log(reverse(123567));

// reverse(num);
// четное или нечетное
function isOddNumber(num) {
    let isOdd = Boolean(num % 2); // если остаток от деления 0 - вернет фалс
    // нечетный? = нет не нечетный
    //если 1, нечетный = да нечетный
    console.log(isOdd);

    isOdd = Boolean(num & 1); // вернет тру, если оба 1
    console.log(isOdd);
}
// isOddNumber(5)

//ПРОСТОЕ ЛИ ЧИСЛО - Is a number prime?
// ПРОСТОЕ ЧИСЛО ДЕЛИТСЯ ТОЛЬКО САМО НА СЕБЯ И НА 1, НАПРИМЕР 3, 5, 11

function isSimple(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isSimple(41));
// let num = 65123;
// let simple = isSimple(num);
// console.log(`Is ${num} simple - ${simple}`); //Is 65123 simple - true

// simple = isSimple(23);
// console.log(`Is ${23} simple - ${simple}`);//Is 23 simple - true

// simple = isSimple(24);
// console.log(`Is ${24} simple - ${simple}`);//Is 24 simple - false

// нАЙТИ МИНИМАЛЬНОЕ И МАКСИМАЛЬНОЕ ЧИСЛО

function highAndLow(numbers){
    let arr = numbers.split(' ');
    let newArr = [];
    newArr.push(Math.max(...arr));
    newArr.push(Math.min(...arr));
    console.log(newArr);
    //return newArr;
};
highAndLow("1 2 -3 4 5");