let firstPart = 'likes';

let userInfo = { // литерал объекта
    name: 'Tatiana', //  свойство объекта, состоит из имени (ключа) и значения;
    age: 30,
    [firstPart]: true, //получаем значение переменной, объявленной ранее
    adress: {
        city: 'Chernivtsy',
        country: 'Ukraine',
    }
}; 

// console.log(userInfo);// вывести весь объект и все его содержимое
// console.log(userInfo.name);//вывести отдельно значение ключа
// userInfo['learns javascript'] = true;// добавдяем новые свойства если составное в [''], если одно слово, можно через точку.
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
// чтобы скопировать именно объект

let userCopy = Object.assign({}, userInfo);//копируем объект userInfo в пустой объект {}
//console.log(userCopy);//{name: 'Tatiana', adress: {…}, sex: 'male', education: {…}}
userCopy.sex = 'female';
//console.log(userCopy);//{name: 'Tatiana', adress: {…}, sex: 'female', education: {…}}

// for (let key in userInfo) {
//     console.log(key);//name, adress, sex, education // ключи
// }
// for (let key in userInfo) {  // значения ключей
//     console.log(userInfo[key]);//Tatiana, {city: 'Chernivtsy', country: 'Ukraine'},  male, {univercity: 'ЧНУ', faculty: 'foreign langeages'}

// }

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






