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
{
    //Сумма с помощью замыканий sum(a)(b) = a+b.

    function getSum (a) {
        return function (b) {
            return a+b
        }
    }
   console.log (getSum (5)(8))
}
{
    //Фильтрация с помощью замыкания
    /*
    У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы с помощью функции f. Если она возвращает true, то элемент добавится в возвращаемый массив.

    Сделайте набор «готовых к употреблению» фильтров:

    inBetween(a, b) – между a и b (включительно).
    inArray([...]) – находится в данном массиве.
    Они должны использоваться таким образом:

    arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
    arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива */
    let arr = [1, 2, 3, 4, 5, 6, 7];

    function inBetween(a, b) {
        return function (x) {
            return x >=a && x <=b
        }
    }
    console.log(arr.filter(inBetween(3,6)));

    function inArray(arr) {
        return function (x) {
            return arr.includes(x);
        }
    }
    console.log(arr.filter(inArray([1, 2, 10])))

    // Сортировать по полю
    // У нас есть массив объектов, который нужно отсортировать:

    let users = [
    { name: "John", age: 20, surname: "Aohnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Wathaway" }
    ];

    //console.log(users.sort((a,b)=> a.name > b.name ? 1 : -1));
    //console.log(users.sort((a, b) => a.age-b.age));

    function byField(field) {
        return function(a, b) {
            return a[field] > b[field] ? 1 : -1;
        }
    }
    //console.log (users.sort(byField('surname')));
}

{
    function makeArmy() {

        let shooters = [];
      
        for(let i = 0; i < 10; i++) {
          let shooter = function() { // функция shooter
            console.log( i ); // должна выводить порядковый номер
          };
          shooters.push(shooter);
        }

        return shooters;
    }
      
    let army = makeArmy();//возвращает массив функций
    
    army[0](); // вызывает функцию из массива функций по индексу
    army[5](); // 5
}

{
    function makeCounter() {
        let count = 0;

        function counter() {
            return count++;
        }
        counter.set = value => count = value;
        counter.decrease = () => --count;
        return counter;
    }
    let counter = makeCounter();
    console.log(counter()) 
    console.log(counter.set(6)) 
    console.log(counter.decrease())
    console.log(counter()) 
}


{
	/**
    Создать расширяемый калькулятор
    Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

    Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

    let calc = new Calculator;

    alert( calc.calculate("3 + 7") ); // 10
    Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

    Например, давайте добавим умножение *, деление / и возведение в степень **:

    let powerCalc = new Calculator;
    powerCalc.addMethod("*", (a, b) => a * b);
    powerCalc.addMethod("/", (a, b) => a / b);
    powerCalc.addMethod("**", (a, b) => a ** b);

    let result = powerCalc.calculate("2 ** 3");
    alert( result ); // 8
    */

    function Calculator () {
        this.methods = {
            "+" : (a, b) => a+b,
            "-" : (a, b) => a-b
        };

        this.calculate = function (str) {
            let items = str.split(' '),
            a = +items[0],
            operator = items[1],
            b = +items[2]

            if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN;

            return this.methods[operator](a, b);
        } 

        this.addMethod = function(name, func) {
            this.methods[name] = func;
        }
    }
    let calc = new Calculator();
    let powerCalc = new Calculator();
    powerCalc.addMethod('*', (a, b) => a * b);
    powerCalc.addMethod('/', (a, b) => a / b);
    powerCalc.addMethod('**', (a, b) => a ** b);

    console.log(powerCalc.calculate('9 / 3'));
}


