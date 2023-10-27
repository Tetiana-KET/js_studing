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
{
    // кеширование данных
    function calculate (v) {
        // здесь могут быть ресурсоёмкие вычисления
        alert(`Called with ${v}`);
        return v;
    }

    function cachingData (func) { //декоратор, специальная функция, которая принимает другую функцию и изменяет её поведение.
        let cache = new Map();

        return function (v) {

            if (cache.has(v)) {// если кеш содержит такой v,
                return cache.get(v); // читаем из него результат
            }

            let result = func(v); // иначе, вызываем функцию

            cache.set(v, result); // и кешируем (запоминаем) результат

            return result;
        };
    }
    calculate = cachingData(calculate);
}


// для работы с методами объекта
{
	// сделаем worker.slow кеширующим
	let worker = {
		someMethod() {
			return 1;
		},

		slow(x) {
			// здесь может быть страшно тяжёлая задача для процессора
			alert('Called with ' + x);
			return x * this.someMethod(); // (*)
		},
	};

    function cacheData (func) {
        let cache = new Map();

        return function (x) {
            if (cache.has(x)) {
               return cache.get(x);
            }

            let result = func.call(this, x);//декоратор вызывает оригинальную функцию как func(x) из метода,
            //декоратор передаёт вызов оригинальному методу, но без контекста. Необходимо привязать контекст
            //использовать call в обёртке для передачи контекста в исходную функцию:
            cache.set(x, result);
            return result;
        };
    }
    worker.slow = cachingDecorator(worker.slow);
}

{
	// для работы с несколькими аргументами

	let worker = {
		slow(min, max) {
			alert(`Called with ${min},${max}`);
			return min + max;
		},
	};

	function cacheData(func, hashFunc) {
		let cache = new Map();

		return function () {
			let key = hash(arguments);
			if (cache.has(key)) {
				return cache.get(key);
			}

			let result = func.call(this, ...arguments);
			cache.set(key, result);
			return result;
		};
	}

	function hash(arguments) {
		return [].join.call(arguments);
	}

	worker.slow = cachingDecorator(worker.slow, hash);
	//заимствуем) метод join из обычного массива [].join. И используем [].join.call, чтобы выполнить его в контексте arguments.
}

{
	// debounce(f, ms) – это обёртка, которая откладывает вызовы f, пока не пройдёт ms миллисекунд бездействия
	//(без вызовов, «cooldown period»), а затем вызывает f один раз с последними аргументами.
	//Вызов debounce возвращает обёртку.
	//При вызове он планирует вызов исходной функции через указанное количество ms и отменяет предыдущий такой тайм-аут.
	// Обёрнутая в debounce функция ждёт мс после последнего вызова, а затем запускает: f с последними аргументами.
	function debounce(f, ms) {
		let timeout;
		return function () {
			clearTimeout(timeout);
			timeout = setTimeout(() => f.apply(this, arguments), ms);
		};
	}
}

{
    /*«тормозящий» декоратор throttle(f, ms), который возвращает обёртку.

    При многократном вызове он передает вызов f не чаще одного раза в ms миллисекунд.

    По сравнению с декоратором debounce поведение совершенно другое:

    debounce запускает функцию один раз после периода «бездействия». Подходит для обработки конечного результата.
    throttle запускает функцию не чаще, чем указанное время ms. Подходит для регулярных обновлений, которые не должны быть слишком частыми.*/

    function throttle (f, ms) {
        let isThrottled = false;
        let savedThis, savedArgs;

        function wrapper () {
            if (isThrottled) {// после первого вызова, запоминаем аргументы последнего вызова для вызова после задержки
                savedThis = this;
                savedArgs = arguments;
                return;
            }
            //Во время первого вызова обёртка просто вызывает func и устанавливает состояние задержки (isThrottled = true).
            f.apply(this, arguments)

            isThrottled = true;

            setTimeout(function () {
                isThrottled = false;

                if(savedArgs) {
                    // если были вызовы, savedThis/savedArgs хранят последний из них
                    // рекурсивный вызов запускает функцию и снова устанавливает время задержки
                    wrapper.apply(savedThis, savedArgs);
					savedThis = savedArgs = null;
                }
            }, ms)
        }

        return wrapper;
    }
}
