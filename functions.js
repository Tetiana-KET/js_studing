/*
Замыкание — это внутренняя функция, имеющая доступ к переменным внешней (вложенной) функции, 
т.е. к цепочке областей видимости

КАРИРОВАНИЕ
https://medium.com/nuances-of-programming/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-9e46cf4abff9
Каррирование — это декомпозиция (разложение) функции из множества аргументов на несколько функций с одним аргументом.

const multiply = ( a, b ) => a * b;
Вызывать функцию вы будете примерно так:
multiply(2, 3)
Но с каррированием multiply разобьется на несколько функций в зависимости от арности (количества аргументов). 
Арность этой функции — 2. Выглядит это так:
const mul = curry(multiply);
mul(2)(3);

const mul = (x) => {
    return (y) => {
        return (z) => {
            return x * y * z;
        };
    };
};

    function calculate2(...args1) {
        return function calculate2 (...args2) {
            return [...args1, ...args2].reduce((acc, item) => acc + item, 0)
        }
    }

*/

// 

{
    //посчитать сумму всех зарплат в компании

    let company = { // тот же самый объект, сжатый для краткости
        sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
        development: {
          sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
          internals: [{name: 'Jack', salary: 1300}]
        }
    };

    function calculateSalary (department) {
        if(Array.isArray(department)) {
            return department.reduce((acc, current) => acc + current.salary, 0);
        } else {
            let sum = 0;
            for (let subDep of Object.values(department)) {
                sum+=calculateSalary (subDep)
            }
            return sum;
        }

    }
    // console.log(calculateSalary (company))
}
{
    //Вычислить сумму чисел до данного
    function calculateSunToGivenNum (n) {
        return n===1 ? n : n + calculateSunToGivenNum (n-1)
    }
    console.log(calculateSunToGivenNum (100))

    //С использованием формулы арифметической прогрессии.
    function calculateSunToGivenNum1 (n) {
        return n*(n+1)/2;
    }
    console.log(calculateSunToGivenNum1 (100))

    //Решение с помощью цикла
    function calculateSunToGivenNum2 (n) {
       let sum =0;
       for (let i=1; i<=n; i++) {
        sum+=i
       }
       return sum;
    }
    console.log(calculateSunToGivenNum2 (100))
}

{
    //Вычислить факториал
    /*Факториал натурального числа – это число, умноженное на "себя минус один", 
    затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!*/

    function getFactorial (n) {
     return n === 1? n : n *getFactorial(n-1);
    }
    console.log(getFactorial (5))
}

{
    //Числа Фибоначчи
    /*
    каждое следующее число в последовательности получается как сумма двух предыдущих.

    Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....
    */

    function fib(n) {
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