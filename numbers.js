//Math.random()     СГЕНЕРИРОВАТЬ случайное целое число от min до max (включительно).
//Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), от 0 (включительно) до 1 (но не включая 1),
// правильное решение – это использовать Math.floor для получения случайного числа от min до max+1:
{function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }
}
{
    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

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
//https://www.youtube.com/watch?v=s8zUK5jmXA4 найти все простые числа в заданном диапазоне

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

/** НАЙТИ СУММУ ЧИСЛА ДО 1 ЦИФРЫ
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 */
function getSumOfDigits(n) {
    if (n == 0) {return 0};
  
    return (n % 9 == 0) ? 9 : (n % 9);
}
// console.log(getSumOfDigits(15));

/*How does the above logic works? 

* To check if a number is divisible by 9, add the digits of the number and check if the sum is divisible by 9 or not. 
* If yes, is the case,  the number is divisible by 9, otherwise, it’s not.
* let’s take 27  i.e (2+7 = 9) hence divisible by 9.
* If a number n is divisible by 9, then the sum of its digit until the sum becomes a single digit is always 9. 
* * For example, 
* Let, n = 2880 
* Sum of digits = 2 + 8 + 8 = 18: 18 = 1 + 8 = 9
*/

function getSumOfDigits(n) {
    let sum = 0;
    while (n) {
        sum = sum + (n % 10);
        n = Math.floor(n/10);
    };

    if (sum < 10) {
        return sum
    } else {
        sum = getSumOfDigits(sum);
    }
    return sum;
}
console.log(getSumOfDigits(288));

//Вычислить сумму чисел до данного including

{
    // 1. цикл
    function getSumInCycle (n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i
        }
        return sum
    }
    //console.log(getSumInCycle (100));

    // 2. Решение через рекурсию:
    function getSumByRecursion (n) {
        return n == 1 ? n : n + (getSumByRecursion (n-1));
    }
    //console.log(getSumByRecursion (100));

    //3. Решение по формуле: sumTo(n) = n*(n+1)/2

    function getSumWithArithmeticProgressionFormula (n) {
        return n * (n + 1) / 2
    }
   // console.log(getSumWithArithmeticProgressionFormula (100));
}

{
    /* ФАКТОРИАЛ
    Факториал натурального числа – это число, умноженное на "себя минус один", 
    затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
    n! можно записать как n * (n-1)!
    */

    function getFuctorial (n) {
        return n == 1 ? 1 : n * getFuctorial (n - 1)
    }
    console.log(getFuctorial (5))
}

{
    //Числа Фибоначчи
    //Fn = Fn-1 + Fn-2
    //1 1(1+0) 2(1+1), 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
    function culcFibonachi(n) {
        let a = 1;
        let b = 1;
        for (let i = 3; i <= n; i++) {
          let c = a + b;
          a = b;
          b = c;
        }
        return b;
      }
}