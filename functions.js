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