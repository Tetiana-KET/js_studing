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
{
    //объединить 2 массива, отсортировать и удалить повторы
    function mergeArrays(arr1, arr2) {
        const merged = arr1.concat(arr2).sort((a, b) => a - b);
        const unique = new Set (merged);
        return [...unique];
    }
}
{
    function mergeArrays(arr1, arr2) {
        return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
    }
}
{
    function mergeArrays(a, b) {
        return [...new Set(a.concat(b))].sort((a,b)=>a-b);
    }
}
{ 
    let str = 'sentence';
    let arr = [...str];
    console.log(arr);// ['s', 'e', 'n', 't', 'e', 'n', 'c', 'e']
    
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

// Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0»
{
    function sumInput() {
        let numbers = [];

        while (true) {

            let value = prompt('Enter an integer', 0);

            if (value === '' || value === null || !isFinite(value)) break;

            numbers.push(+value);
        }

        let sum = 0;

        for (let number of numbers) {
            sum += number;
        }
        return sum;
    }
    // alert(sumInput());
}

{// Мы можем использовать every для сравнение массивов:

function arraysEqual(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
}

//alert( arraysEqual([1, 2], [1, 2])); // true
}

//Развертывание вложенных массивов, убрать пустые слоты масива https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
{
    function camelize(str) {
        return str.split('-').map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
    }
    console.log(camelize('my-short-string')); //myShortString
}

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
{
    function filterRange(arr, a, b) {
        let filtered = arr.filter(item => a <= item && item <= b);
        return filtered;
    }
    console.log(filterRange([5, 3, 8, 1], 1, 4));//[3, 1]
}
// Фильтрация по диапазону "на месте"
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех,
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]
{
    function filterRangeInPlace(arr, a, b) {

        for (let i = 0; i < arr.length; i++) {
          let value = arr[i];
      
          // удалить, если за пределами интервала
            if (value < a || value > b) {
                arr.splice(i, 1); //начиная с позиции i, удалить 1 элемент
                i--;
            }
        }
      return arr;
    }
    console.log(filterRangeInPlace([5, 3, 8, 1], 1, 4));//[3, 1]// удалены числа вне диапазона 1..4
}

//Скопировать и отсортировать массив
{
    function copySorted(arr) {
        return arr.slice().sort();
    }

    let arr = ["HTML", "JavaScript", "CSS"];
    let sorted = copySorted(arr);

    console.log(arr);//['HTML', 'JavaScript', 'CSS'] исходный массив не изменен
    console.log(sorted);//['CSS', 'HTML', 'JavaScript'] отсортированный
}

//У вас есть массив объектов user, и в каждом из них есть user.name. 
//Напишите код, который преобразует их в массив имён.
{
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map(item => item.name)
console.log(names);// Вася, Петя, Маша
// alert( names ); // Вася, Петя, Маша
}

{
// Отсортировать пользователей по возрасту
// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let misha = { name: "Миша", age: 8 };

let arr = [ vasya, petya, masha, misha, ];

function sortByAge(arr) {
   return arr.sort((a, b) => a.age > b.age ? 1 : -1)
};
console.log(sortByAge(arr));
}

//Перемешать массив/ РАНДОМ
{
    let array = [1, 2, 3, 4 , 5 , 6];

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    }
    console.log(shuffle(array));
}
//Тасование Фишера — Йетса. 
//Суть заключается в том, чтобы проходить по массиву в обратном порядке и менять местами каждый элемент 
//со случайным элементом, который находится перед ним.
{
    function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
/* СОРТИРОВКА МАССИВА ОБЪЕКТОВ ПО ЧИСЛОВОМУ КЛЮЧУ
7 kyu String Reordering
 result 'Vatsan took his dog for a spin'
 */

 {
    const list = [
      {'4': 'dog' }, {'2': 'took'}, {'3': 'his'}, 
      {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'} 
    ];
  
    function sentence(list) {
  
      return list.sort((a, b) => +Object.keys(a) > +Object.keys(b) ? 1 : -1).map((item) => Object.values(item)).join(' ');
  
    }
    console.log(sentence(list));
}
{
    //Развернуть вложенности массива 
    //arr.flat(Infinity);
    //возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
    //Метод flat удаляет пустые слоты из массива:
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
}

{
    //Посчитать глубину вложенности

    function calculateDepth(arr) {
        let depth = 1;
        for (let i=0; i< arr.length; i++) {
          if ( Array.isArray(arr[i]))  {
            arr = arr.flat();
            depth += this.calculateDepth(arr);
            return depth;
          }
        }
        return depth;
      }
}

{
    /* For n = 152, the output should be 52
    * assert.strictEqual(deleteDigit(152), 52);
    * assert.strictEqual(deleteDigit(1001), 101);
    * assert.strictEqual(deleteDigit(10), 1);
    * assert.strictEqual(deleteDigit(222219), 22229);
    * assert.strictEqual(deleteDigit(109), 19);
    * assert.strictEqual(deleteDigit(342), 42);
    *
    */
    function deleteDigit(n ) {
        const arr = [];
        const str = n.toString();
        for (let digit of str) {
        arr.push(+str.replace(digit, ''))
        }
        return Math.max(...arr);
    }
    // deleteDigit(222219);
}
{
    //ПЕРЕИМЕНОВАТЬ ФАЙЛЫ
    /*There's a list of file, since two files cannot have equal names, the one which comes later will have a suffix (k), 
    where k is the smallest integer such that the found name is not used yet. Your task is to implement function,
    that accepts array of names (names) and returns an array of names that will be given to the files.
    For input ["file", "file", "image", "file(1)", "file"], // {file: 3, image: 1, file(1): 1}
    * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
    *
    */
   function renameFiles(names) {
     const checked = {};//file=1+1+1,file(1)=2,image=1,file(1)(1)=1
     const result = [];//file,file(1),image,file(1)(1),file(2)
  
      names.map((name) => {
        if (!checked[name]) {
          checked[name] = 1;
          result.push(name);
        } else {
          let changedName = `${name}(${checked[name]})`;
          checked[name] += 1;
          checked[changedName] = 1;
          result.push(changedName);

        }
      });
      console.log(result);//['file', 'file(1)', 'image', 'file(1)(1)', 'file(2)']
    }
    //renameFiles(["file", "file", "image", "file(1)", "file"])
/**
 * Given an array with heights, sort them except if the value is -1.
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = arr.filter((num) => num >= 0).sort((a,b) => a-b);
    arr.forEach((n, i, arr)=> {
        if (n == -1) {
            result.splice(i, 0, n)//[-1, 150, 160, 170, -1, -1, 180, 190]
        }
    })
    console.log(result)
}
console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))// [-1, 150, 190, 170, -1, -1, 160, 180]

}
//ПЕРЕВЕРНУТЬ МАССИВ

{
    function reverseArr(arr) {
        return list.reverse();
    }

    function reverseArr1(arr) {
        const result = [];
        for (let i =0; i<=arr.length-1; i++) {
            result.push(arr[arr.length-1-i])

        }
        return result
    }
    
    function reverseArr2(arr) {
        const array = [];
        for (let i = arr.length-1; i >= 0; i --){
          array.push(arr[i]);
        }
        return array;
      }
}
   
/*{function sumInput() {
	const arr = [];
	while (true) {
        let value = prompt('enter number')
        if (value === ''|| value=== null || !isFinite(value)) {
            break;
        }
        arr.push(+value)
    }
    let sum = 0;
    
    return arr.reduce((c,a) => c+a,[]);
}
console.log(sumInput());
}*/

{
    function getMaxSubSum(arr) {
    let sum = 0;
    let partialSum = 0;

        for (let num of arr) {
            partialSum += num;
            sum = Math.max(sum, partialSum);
            if (partialSum < 0) {
                partialSum=0;
            }
        }
        return sum;
    }

    console.log( getMaxSubSum([-1, 2, 3, -9])); // 5
    console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
    console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
    console.log( getMaxSubSum([1, 2, 3]) ); // 6
    console.log( getMaxSubSum([-1, -2, -3]) ); // 0
}

{
	/*
    Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

    То есть дефисы удаляются, а все слова после них получают заглавную букву.

    Примеры:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';
    */
    function camelize(str) {
     console.log( str.split('-').map((item,i)=> i === 0 ? item : item[0].toUpperCase()+item.slice(1)).join('') )
    }
    camelize('list-style-image');
    camelize('background-color');
    camelize('-webkit-transition');
}
{
	/**
     * Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

        Функция должна возвращать новый массив и не изменять исходный.

        Например:

        let arr = [5, 3, 8, 1];

        let filtered = filterRange(arr, 1, 4);

        alert( filtered ); // 3,1 (совпадающие значения)

        alert( arr ); // 5,3,8,1 (без изменений)
    */
   function filterRange(arr, a, b) {
    console.log( arr.filter((item)=> b >= item >= a ) )
   }
   filterRange([5, 3, 8, 1], 1, 4);
}
{
	/**
     * Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
     * которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

        Функция должна изменять принимаемый массив и ничего не возвращать.
    */
	function filterRangeInPlace(arr, a, b) {
		arr.forEach((val, i) => {
			if (val < a || val > b)  {
				arr.splice(i, 1);
			}
		});
		console.log(arr);
	}
	filterRangeInPlace([5, 3, 8, 1], 1, 4);
}

{
	let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
	let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
	let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

	let users = [vasya, petya, masha];

	let usersMapped = users.map(user => ({
		fullName: `${user.name} ${user.surname}`,
		id: user.id,
	}));
}
{
   /* Создайте объект с ключами из массива
    Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.

    Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.

    Например:

    let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
    ];

    let usersById = groupById(users);

    // после вызова у нас должно получиться:

    usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
    }
*/
    let users = [
        { id: 'john', name: 'John Smith', age: 20 },
        { id: 'ann', name: 'Ann Smith', age: 24 },
        { id: 'pete', name: 'Pete Peterson', age: 31 },
    ];

    function groupById (arr) {
        return arr.reduce((accObj, curUser) => {
            accObj[curUser.id] = curUser;
            return accObj;
        },{})
    };
    let usersById = groupById(users);
    console.log(usersById);
}


console.log(`



//S T A C K`)
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

{
    //ОТФИЛЬТРОВАТЬ КОММЕНТАРИИ ПО АЙДИ ПОСТА, К КОТОРОМУ ОНИ ОТНОСЯТСЯ И ПОКАЗАТЬ ТОЛЬКО ИХ ТЕКСТ 

    function getCommentsByPostId (commentList, postId) { //принимает массив объектов с данными о посте и комент.
        let comments = commentList.filter ( (comment) => comment.postId === postId ). //сравниваем нужный айди со айди из списка
                                    map( (comment) => comment.text )
    }
}

{
    /*
    Transform array
    Your task is to implement the function transform(arr) that takes an array and returns transformed array, based on the control sequences that arr contains. 
    Control sequences are defined string elements of the mentioned array:
    --discard-next excludes the next element of the array from the transformed array.
    --discard-prev excludes the previous element of the array from the transformed array.
    --double-next duplicates the next element of the array in the transformed array.
    --double-prev duplicates the previous element of the array in the transformed array.
    For example:
    * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
    * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
    * input: [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5], => output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
    * input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5], => output: [1, 2, 3, 4, 5]
    The function should throw an Error with message 'arr' parameter must be an instance of the Array!
    */

    function transform(arr) {
        //f there is no element next to the control sequence to which it can be applied in the initial array, or this element was previously deleted, it does nothing.
          if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);
          if (!arr.length) return [];
          const result = [];
          arr.forEach ((elem, index, arr) => {
            if (arr[index-1] === '--discard-next') {
              result.push(undefined);
            } else {
              switch (elem) {
                case '--double-prev': 
                  result.push(result.at(-1));
                break;
                case '--double-next':
                  result.push(arr[index+1]);
                break;
                case '--discard-prev':
                  result.pop();
                break; 
          
                case '--discard-next':
                  result.push(undefined);
                break;
         
                default: result.push(elem);
              }
            }
          });
          return result.filter((el) => el !== undefined);
        }
}