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

userInfo.showInfo(); //Tatiana, 30 лет. Адрес: Ukraine, Chernivtsy

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

console.log(Object.keys(userInfo));// возвращает массив ключей ['name', 'adress', 'showInfo', 'learns javascript', 'sex', 'education']


for (let key in userInfo) {  // значения ключей
//   console.log(userInfo[key]);//Tatiana, {city: 'Chernivtsy', country: 'Ukraine'},  male, {univercity: 'ЧНУ', faculty: 'foreign langeages'}
}

if ('name' in userInfo) {// оператор in проверяем наличие свойства в объекте
    console.log(userInfo.name)//Tatiana
}


console.log(Object.values(userInfo));// возвращает массив значений ['Tatiana', {…}, ƒ, true, 'male', {…}]

console.log(Object.entries(userInfo)); // возвращает матрицу, где каждая строка - это масив из ключ - значение

const entries = Object.entries(userInfo);
for (const [key, val] of entries) {
    console.log(`${key} : ${val}`);
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

//Сумма свойств объекта

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function getTotal() {
    let total = 0;
    for (let key in salaries) {
        total += salaries[key];
    }
    return total;
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


