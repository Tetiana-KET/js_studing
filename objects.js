/*
Object.keys(obj) – возвращает массив ключей.
Object.values(obj) – возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].
Object.fromEntries(array) - преобразовать массив обратно в объект
*/

let firstPart = 'likes';

let userInfo = { // литерал объекта
    name: 'Tatiana', //  свойство объекта, состоит из имени (ключа) и значения;
    age: 30,
    [firstPart]: true, //получаем значение переменной, объявленной ранее
    adress: {
        city: 'Chernivtsy',
        country: 'Ukraine',
    },
    // значением свойства может быть функция
   /* showInfo: function () {
        console.log(`${this.name}, ${this.age} лет. Адрес: ${userInfo.adress.country}, ${userInfo.adress.city}`);
    },*/

    showInfo() {//более короткая запись
        console.log(`${this.name}, ${this.age} лет. Адрес: ${userInfo.adress.country}, ${userInfo.adress.city}`);
    },

}; 

//userInfo.showInfo(); //Tatiana, 30 лет. Адрес: Ukraine, Chernivtsy

// console.log(userInfo);// вывести весь объект и все его содержимое
// console.log(userInfo.name);//вывести отдельно значение ключа
userInfo['learns javascript'] = true;// добавдяем новые свойства если составное в [''], если одно слово, можно через точку.
userInfo.sex = 'male';
userInfo.education = {
    univercity: 'ЧНУ',
    faculty: 'foreign langeages',
}
//console.log(userInfo);//{name: 'Tatiana', age: 30, likes: true, adress: {…}, sex: 'male', …}
// console.log(userInfo['learns javascript']);// true - получили свойство
// console.log(userInfo[firstPart]);//true  получили значение свойства из переменной объявленной ранее
// console.log(userInfo.adress.city);//Chernivtsy вывести значение из объекта в объекте

//удалить свойство 
delete userInfo[firstPart];
delete userInfo.age;
//console.log(userInfo); //{name: 'Tatiana', adress: {…}, sex: 'male', education: {…}}

function makeUserInfo(name, age) {
    return {
        name, // ==name: name,
        age, // ==age: age,
    };
}
let user = makeUserInfo('Вася', 25);
// console.log(user);//{name: 'Вася', age: 25}

//При копировании объекта в другую переменную,
//сам объект не копируэтся.Мы делаем дубликат ключа, сам объект остается тем же.

// Клонирование и объединение объектов, Object.assign

let userCopy = Object.assign({}, userInfo);//копируем объект userInfo в пустой объект {}
//console.log(userCopy);//{name: 'Tatiana', adress: {…}, sex: 'male', education: {…}}
userCopy.sex = 'female';
//console.log(userCopy);//{name: 'Tatiana', adress: {…}, sex: 'female', education: {…}}

//ВЫВЕСТИ ВСЕ КЛЮЧИ

for (let key in userInfo) {
    //console.log(key);//name, adress, sex, education // ключи
}

//console.log(Object.keys(userInfo));// возвращает массив ключей ['name', 'adress', 'showInfo', 'learns javascript', 'sex', 'education']


for (let key in userInfo) {  // значения ключей
//   console.log(userInfo[key]);//Tatiana, {city: 'Chernivtsy', country: 'Ukraine'},  male, {univercity: 'ЧНУ', faculty: 'foreign langeages'}
}

if ('name' in userInfo) {// оператор in проверяем наличие свойства в объекте
    //console.log(userInfo.name)//Tatiana
}


//console.log(Object.values(userInfo));// возвращает массив значений ['Tatiana', {…}, ƒ, true, 'male', {…}]

//console.log(Object.entries(userInfo)); // возвращает матрицу, где каждая строка - это масив из ключ - значение

const entries = Object.entries(userInfo);
for (const [key, val] of entries) {
  //  console.log(`${key} : ${val}`);
}

{
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
      };
      
      let doublePrices = Object.fromEntries(
        // преобразовать в массив, затем map, затем fromEntries обратно объект
        Object.entries(prices).map(([key, value]) => [key, value * 2])
      );
}


let user1 = { name: "Иван" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// копируем все свойства из permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);

// теперь user = { name: "Иван", canView: true, canEdit: true }
//Если принимающий объект (user1) уже имеет свойство с таким именем, оно будет перезаписано:

// Посчитать количество строк в объекте с учетом вложенностей
let obj = {
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime",2,3,4],
    fifth:  null
}

function strCount(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            count+=1
        } else if (typeof obj[key] === 'object') {
            count+=strCount(obj[key]);
        }
    };
    return count;
}

{
    //Сумма свойств объекта

    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
        Andry: 800,
        Mary: 250
    }

    function getTotal() {
        let total = 0;
        for (let key in salaries) {
            total += salaries[key];
        }
        return total;
    }

    function getSumOfSalaries () {
        let sum = 0;
        for (let salary of Object.values(salaries)) {
            sum += salary;
        }
        return sum;
    }
    // console.log(getSumOfSalaries ());

    function getSumOfSalariesWithReduce () {
        return Object.values(salaries).reduce((salary, acc) => salary + acc, 0)
    }
    //console.log(getSumOfSalariesWithReduce ());

    //Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
    
    function getTopSalary () {
        let maxSalary = 0;
        let getMaxName = null;
        // Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
        for (let [name, salary] of Object.entries(salaries)) {
            if (maxSalary < salary) {
                maxSalary = salary;
                getMaxName = name;
            }
        }

        return getMaxName;
    }
    //console.log(getTopSalary ())//Andry
}


//console.log(getTotal()); 390

//Умножаем все числовые свойства на 2

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2; 
        }
    }
}
//multiplyNumeric(menu);
//console.log(menu); //{width: 400, height: 600, title: 'My menu'}


//You are given a an object and should return an array
//Return the list of languages where your test score is at least 60, in descending order of the results.

function myLanguages(results) {
    let result = [];

    for (let item in results) {
        if (results[item] >= 60) {
            result.push(item);
        }
    }
    console.log(result)
    return result.sort((a, b) => results[b] - results[a]);
}

//console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));// ["Ruby", "Python"]
//console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));//['Dutch', 'Greek', 'Hindi']


//Object.keys(obj) возвращает массив строковых элементов, соответствующих именам перечисляемых свойств
function myLanguagess(results) {
  return Object.keys(results).filter(item => results[item] > 59).sort((a,b) => results[b] - results[a]);
}

console.log(myLanguagess({ "Java": 10, "Ruby": 80, "Python": 65 }));// ["Ruby", "Python"]
console.log(myLanguagess({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));//['Dutch', 'Greek', 'Hindi']

{
    let prices = {
        banana: 1,
        orange: 2,
        meat: 4,
      };
      
      let doublePrices = Object.fromEntries(
        // преобразовать в массив, затем map, затем fromEntries обратно объект
        Object.entries(prices).map(([key, value]) => [key, value * 2])
      );
}

{
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  function sumSalaries(obj) {
    let sum =0;
    for (let salary of Object.values(obj)) {
        sum += salary;
    }
    return sum;
  }

  console.log( sumSalaries(salaries) ); // 650
}
{
    let salaries = {
        "John": 100,
        "Pete": 200,
        "Mary": 300
    };

    function sumSalaries(salaries) {
        return Object.values(salaries).reduce((a, b) => a + b, 0) // 600
    }
    console.log( sumSalaries(salaries) );
}

//Подсчёт количества свойств объекта
{
    let salaries = {
        "John": 100,
        "Pete": 200,
        "Mary": 300
    };

    function count (obj) {
        return Object.keys(obj).length;
    }
    console.log(count (salaries));//3
}

{
//ПРОТОТИПЫ
    const person = new Object ({
        name: 'Maxim',
        age: 25,
        greet: function () {
            console.log('Greet!')
        }
    })


    Object.prototype.sayHello = function () { //добавили новое свойство для прототипа объекта
        console.log('Hello')
    }

    const lena = Object.create(person);// создали объект лена ОТ объэкта person
    console.log(lena)// {}[[Prototype]]:Object    age:25    greet:ƒ ()    name:"Maxim"    [[Prototype]]:Object
}