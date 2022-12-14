{
//МЕТОДЫ МАСССИВА
//УДАЛИТЬ ЭЛЕМЕНТ
let arr = ['Ivan', 'age', 'Vasia', 'name', 'Nina'];
let result = arr.splice(1, 2); // начиная с позиции 1 удаляем 2 элемента

//ЗАМЕНИТЬ ЭЛЕМЕНТ

arr.splice(0, 1, 'New Value'); // Начиная с 0 позиции, заменяем 1 элемент на New Value

//ДОБАВИТЬ ЭЛЕМЕНТ В СЕРЕДИНЕ

arr.splice(2, 0, 'New Value', 'New Value');// начиная со второй позиции, начего не удаляем, добавляем новые значения

//  СКОПИРОВАТЬ ЧАСТЬ МАССИВА

//let newArr = arr.slice([start], [end]); // копирует в новый массив начиная с [start] до [end] - не включая end

//СКОПИРОВАТЬ ВЕСЬ МАССИВ
let newArray = arr.slice();

// МЕТОД concat - создает новый массив, в который копирует данные из исходного массива
// + дополнительные значения

let newArr = arr.concat('editional value', 'editional value');
}

//find и findIndex ПОИСК В МАССИВЕ ОБЪЕКТОВ с определенным условием
//возвращает первый элемент, удовлетворяющий условию

{
    let arr = [
        { name: 'Ivan', age: 36 },
        { name: 'Vasia', age: 18 },
        { name: 'Nina', age: 25 },
    ]

    let result = arr.find(function (item, index, array) {
        return item.age === 18;
    })
    //let result = arr.find(item => item.age === 18);
    console.log(result); // {name: 'Vasia', age: 18}
}


//FILTER - ВОЗВРАЩАЕТ МАССИВ ИЗ ВСЕХ ЭЛЕМЕНТОВ УДОВЛЕТВОРЯЮЩИХ УСЛОВИЮ
{
    let arr = [
        { name: 'Ivan', age: 36 },
        { name: 'Vasia', age: 18 },
        { name: 'Nina', age: 25 },
    ]

    let result = arr.filter((item) => item.age > 18);
    console.log(result); // 2) [{name: 'Ivan', age: 36}, {name: 'Nina', age: 25}]

    let children = [
        {name: 'Vasia', age: 18, score: 21},
        {name: 'Olga', age: 10, score: 20},
        {name: 'Sergey', age: 17, score: 25},
        {name: 'Violetta', age: 15, score: 21},
    ]
    const excellentStudent = children.filter(person => person.score > 20 && person.age < 18);
    console.log(excellentStudent); 
    // {name: 'Sergey', age: 17, score: 25}
    //{name: 'Violetta', age: 15, score: 21}
}

//СОРТИРОВКА МАССИВА

//ARR.SORT()
//array.sort((a, b) => a-b);

//МЕТОД MAP - вызывает функцию для каждого элемента массива, 
//ПОЗВОЛЯЕТ ТРАНСФОРМИРОВАТЬ ДАННЫЕ
// и возвращает массив результатов этой функции
{
    let arr = ['Ivan', 'age', 'Vasia', 'name', 'Nina'];
    let result = arr.map((item) => item[0]);

    console.log(result); //['I', 'a', 'V', 'n', 'N']
}

let array = [20, 21, 22, 23, 24, 25, 26, 26, 23];

//ПРОВЕРКА НА МАССИВ
//Array.isArray(array);

console.log(Array.isArray(array));//true

// вывести ВСЕ ЭЛЕМЕНТЫ МАССИВА, перебор массива

function goThruoghArray() {
  for (let i = 0; i < array.length; i++) {
    //console.log(`element with index ${i} is ${array[i]}`);
};
}
// goThruoghArray(array);

// element with index 0 is 20
// element with index 1 is 21
// element with index 2 is 22
// element with index 3 is 23
// element with index 4 is 24
// element with index 5 is 25
// element with index 6 is 26
// element with index 7 is 26

//ПЕРЕБОР МАССИВА FOR .. OF .. FOREACH
// сразу получаете доступ к самому элементу массива, индекс не доступен
// НЕ пропускают пустые элементы в массиве
{
    let people = [
        { name: 'Ivan', age: 36 },
        { name: 'Vasia', age: 18 },
        { name: 'Nina', age: 25 },
    ]

    for (let person of people) {
        console.log(person);
    }
    //{name: 'Ivan', age: 36}
    // {name: 'Vasia', age: 18}
    // {name: 'Nina', age: 25}


    people.forEach(person => console.log(person.age*2)); //72 - 36 - 50

}

// СУММА ВСЕХ ЭЛЕМЕНТОВ В МАССИВЕ

{
    const array = [1, 10, 35, 15];
    function findSumOfArrayElements() {
        let SumOfArrayElements = 0; 
        for (let i = 0; i < array.length; i++) {
            SumOfArrayElements += array[i]; 
        };
        console.log(`SumOfArrayElements = ${SumOfArrayElements}`);//SumOfArrayElements = 61
    }
    
    goThruoghArray(array);
    findSumOfArrayElements(array);
    //the same using МЕТОД Reduce()

    function findSumOfArrayElementsWithReduce() {
        let arraySum = array.reduce((previous, item) => previous + item);
        console.log(arraySum);
    }
    findSumOfArrayElementsWithReduce(array);
}

// element with index 0 is 1
// element with index 1 is 10
// element with index 2 is 35
// element with index 3 is 15
// SumOfArrayElements = 61

// МЕТОД Reduce()
{
    let people = [
        { name: 'Ivan', age: 36, budget: 5488 },
        { name: 'Vasia', age: 18, budget: 1200 },
        { name: 'Nina', age: 25, budget: 3520 },
    ];

    const amount = people.reduce((total, person) => {
        return total + person.budget
    }, 0);
    console.log(amount);//10208
    // тоже самое, но короче
    //const amount = people.reduce((total, person) => total + person.budget, 0);
}

// УДАЛИТЬ ПОВТОРЫ ИЗ МАССИВА

{
    const array = [20, 21, 20, 22, 21, 23, 24, 25, 26, 26, 23];
    function deleteRepeat() {
        let arrayWithoutrepeat = new Set(array);
        console.log(arrayWithoutrepeat);
    }
    deleteRepeat();//Set(7) {20, 21, 22, 23, 24, 25, 26}
}

// deleteRepeat(array);
// Set(7) {20, 21, 22, 23, 24, …}
// 0: 20
// 1: 21
// 2: 22
// 3: 23
// 4: 24
// 5: 25
// 6: 26
// size: 7

// Найти МИНИМУМ элемент, минимум

// 1. Проверить есть ли впринципе в массиве элементы
// если длина масива равня 0, значит элементов нет, иначе есть

function findMinimum() {
// задаем переменной минимум начальное значение, равное первому элементу массива
    let min = array.length ? array[0] : 0;

// Проходимся по всему масиву, если очередной элемент меньше, чем минимум,
// который мы уже знаем, то присваиваем минимуму новое значение
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        };
    };
    console.log(min);
}
// findMinimum(array);

// console.log(Math.min(...array)); - а можно и так
// ... - (оператор расширения "раскрывает" массив в список аргументов)
// можем передать несколько итерируемых объектов:
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// alert( Math.max(...arr1, ...arr2) ); // 8



// Найти СРЕДНЕЕ АРИФМЕТИЧЕСКОЕ в массиве

function findAverage() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let average = array.length ? sum / array.length : 0;
    console.log(average);
}
// findAverage(array);
// Найти среднее арифметическое в массиве с помощью REDUCE

function findAverageByReduce() {
    average = array.reduce((acc, item) => acc + item) / array.length;
    console.log(average);
}
// findAverageByReduce(array);



// Разложение числа на отдельные цифры

// let num = 123456789;
// 1. делим число на 10, пока число не будет равно 0
function deviding(num) {
    let digit;
    let newArr = [];
    while (num > 0) { // можно написать просто (num), когда 0, вернет фалс
        digit = num % 10; //берем остаток от желения
        num = Math.floor(num / 10); //трансформируем само число и округляем в низ, а само число целое возвращается в num
        newArr.push(digit);
    }
    console.log(newArr);
}
// deviding(num);
// (9) [9, 8, 7, 6, 5, 4, 3, 2, 1]

// 2. Приводим число к строке и разбиваем на массив методом split('')
function devidingBySplit(num) {
    let newArr = num.toString().split('');
    console.log(newArr);
}
// devidingBySplit(num);
// (9) ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// 3. Приводим число к строке и циклом берем каждый элемент строки
function devideNumUsingString() {
    let digit;
    let str = num.toString();
    for (let i = 0; i < str.length; i++) {
        digit = str[i];
        console.log(digit)//выведет каждое число
    }
    console.log(digit)// выведет только последнее
}
// devideNumUsingString(num);


//Array.prototype.some(callback(element[, index[, array]])[, thisArg])
//Метод some() вызывает переданную функцию callback один раз для каждого элемента,
//присутствующего в массиве до тех пор, пока не найдёт такой, для которого callback вернёт истинное значение

//array = [20, 21, 22, 23, 24, 25, 26, 26, 23];

//console.log(`Array [${array}] has integer less than 5:`, array.some((item) => item < 5));
//array_stack.js:162 Array [20,21,22,23,24,25,26,26,23] has integer less than 5: false

//console.log(`Array [${array}] has integer bigger than 5:`, array.some((item) => item > 5));
//Array [20,21,22,23,24,25,26,26,23] has integer bigger than 5: true

// то же самое, самописная функция

function checkSome() {
    function arrayHasSome(array, checkFunction) {
        for (let i = 0; i < array.length; i++) {
            if (checkFunction(array[i])) {
                return true;
            }
        }
        return false;
    }

    console.log(`Array [${array}] has integer less than 100:`, arrayHasSome(array, (item) => item < 100));
    //Array [20,21,22,23,24,25,26,26,23] has integer less than 100: true
    console.log(`Array [${array}] has integer biger than 100:`, arrayHasSome(array, (item) => item > 100));
    //Array [20,21,22,23,24,25,26,26,23] has integer biger than 100: false
}

//checkSome();


//ПРОВЕРИТЬ КАЖДЫЙ ЭЛЕМЕНТ НА УСЛОВИЕ

function arrayIsEvery() {
    function isEvery(array, checkFunc) {
        for (let i = 0; i < array.length; i++) {
            if (!checkFunc(array[i])) {
                return false;
            }
        }
        return true;
    }

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    console.log(`is every ineger in Array [${array}] less than 100:`, isEvery(array, (item) => item < 100));
    console.log(`is every ineger in Array [${array}] bigger than 100:`, isEvery(array, (item) => item > 100));
    //is every ineger in Array [1,2,3,4,5,6,7,8,9] less than 100: true
    //is every ineger in Array [1,2,3,4,5,6,7,8,9] bigger than 100: false

    //СТАНДАРТНЫЙ МЕТОД МАСИВА arr.every(callback(currentValue[, index[, array]])[, thisArg])
    console.log(`check if every ineger in Array [${array}] is less than 100, using method arr.every()`, array.every( (item) => item < 100) );
}
//arrayIsEvery();

//Ф И Л Ь Т Р А Ц И Я    М А С И В А

function filterArray() {
    let arr = [1, 3, 5, 7, 9, 11, 13, 15];
    let newArr = arr.filter((item) => item > 10);
    console.log(newArr);
}
//filterArray();//[11, 13, 15]



//S T A C K

//---------------------------
//| 1 2 3 4 ...  <-->
//---------------------------
// Base operations: PUSH / POP / TOP / SIZE / IS_EMPTY

function stackOnArrayExample() {
    let stack = [];
    console.log(`stack is empty`, stack);
    stack.push('something');
    console.log(`now we add to stack - 'something'`, stack);
    stack.push('something else');
    console.log(`now we add to stack - 'something else'`, stack);
    stack.push('again something');
    console.log(`now we add to stack - 'again something'`, stack);

    console.log(stack);//  ['something', 'something else', 'again something']

    while (stack.length) {
        let operation = stack.pop();
        console.log(`now we delete - `, operation, stack); // ['something', 'something else']  // ['something'] // []
    }
}
stackOnArrayExample()

//ПРОВЕРИТЬ ПРАВИЛЬНО ЛИ РАСТАВЛЕНЫ СКОБКИ В СТРОКЕ, КОТОРАЯ ПРИШЛА К НАМ В КАЧЕСТВЕ АРГУМЕНТА.

function check(str, bracketsConfig) {

    const OPEN_BRACKETS = ['(', '{', '[','|'];
    const BRACKETS_PAIR = {};
    // [')']: '(',
    // ['}']: '{',
    // [']']: '[',
    //'()' - строка
    bracketsConfig.forEach(element => {
        BRACKETS_PAIR[`${element[1]}`] = `${element[0]}`;
    })

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if (OPEN_BRACKETS.includes(currentSymbol)) {//Проверяем или текущий символ - открывающая скобка
            stack.push(currentSymbol);// если да - кладем ее в стек
        } else {// если НЕТ, не открывающая - значит закрывающая
            if (stack.length === 0) { //то проверяем или стек пуст, если стек пуст, а текущая скобка закрывает,
                return false;// значит порядок нарушен, в стеке нет открывающей скобки -  и возвращаем фалс
            }

            let topElement = stack[stack.length - 1];// если стек не пуст, проверяем верхний элемент

            //проверяем совпадает ли элемент в стеке паре для текущего символа
            if (BRACKETS_PAIR[currentSymbol] === topElement) {//на данном этапе текущий символ - закрывающий [')']: '(', а в стеке у нас уже лежит '('
                stack.pop();
            }
            else {//если скобка, которая пришла и которая лежит в стеке отличается, то фалс
                return false;
            }
        }
    }
    return stack.length === 0;// если после всех проверок стек пуст - то последовательность верна

}

function bracketsIssue() {
    const OPEN_BRACKETS = ['(', '{'];
    const BRACKETS_PAIR = {
        [')']: '(',
        ['}']: '{',
    };

    function IsBracketsOk(str) {
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            let currentSymbol = str[i];

            if (OPEN_BRACKETS.includes(currentSymbol)) {
                stack.push(currentSymbol);
            } else {
                if (stack.length === 0) {
                    return false;
                }

                let topElement = stack[stack.length - 1];

                if (BRACKETS_PAIR[currentSymbol] === topElement) {
                    stack.pop();
                }
                else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
    console.log('check case - ()(()()) - ', IsBracketsOk('()(()())'));
    console.log('check case - ())(() - ', IsBracketsOk('())(()'));
    console.log('check case - (){}({}()) - ', IsBracketsOk('(){}({}())'));
    console.log('check case - (}({}()) - ', IsBracketsOk('(}({}())'));
}
// bracketsIssue();
// check case - ()(()()) -  true
// check case - ())(() -  false
// check case - (){}({}()) -  true
// check case - (}({}()) -  false


//Строка - которую нужно проверить. Строка может содержать как цифры - проверяем и их парность, так и ||
// в параметр bracketsConfig - передается масив из пар скобок, из которых мы берем образцы

function checkOrder(str, bracketsConfig) { 

  const BRACKETS_PAIR = {};

  bracketsConfig.forEach(element => {
    BRACKETS_PAIR[`${element[1]}`] = `${element[0]}`;//второй элемент масива - становиться ключом, первый - значением
  });

  let stack = [];

  for (let i = 0; i < str.length; i++) {

    let currentSymbol = str[i];

    let topElement = stack[stack.length - 1];

    if (stack.length > 0 && topElement === BRACKETS_PAIR[currentSymbol]) {
      stack.pop();
    } else {
      stack.push(currentSymbol);
    }
  }
  
  return stack.length === 0;

}

//Развернуть вложенности массива 
function deepArr(a){
    let newArray = a.flat(Infinity);
    console.log(newArray);
}
// deepArr([1, 2, [3, 4, [5]]]);// [1, 2, 3, 4, 5]

/*var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);*/

function deepCount(a){
    return a.reduce((acc, el) => {
        return acc + (Array.isArray(el) ? deepCount(el) : 0);//если элемент масив, возвращает true => 1 к асс добавляем 1 
        //и запускаем рекурсивно функцию для этого элемента
   }, a.length);//, a.length - это аккумулятор, равен длине массива
}

//console.log(deepCount([1, 2, [3, 4, [5]]]));//7



/**
* Implement the Stack with a given interface via array.
*
* @example
* const stack = new Stack();
*
* stack.push(1); // adds the element to the stack
* stack.peek(); // returns the peek, but doesn't delete it, returns 1
* stack.pop(); // returns the top element from stack and deletes it, returns 1
* stack.pop(); // undefined
*
*/

//the constructor function does not require the "function" keyword. 
//This is true for all functions declared inside the class. 
// functions declared inside a class are referred to as methods 
// and are accessible from outside of the class by default.
// The peek method, just like the method name suggests, 
// returns the element on top of the stack without affecting the stack.

class Stack {

    constructor () {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      return this.items.pop();
    }
  
    peek() {
      
      return this.items[this.items.length - 1];
    }
  }