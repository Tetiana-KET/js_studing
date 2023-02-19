//this - это ссылка на объект до точки. Объект в контексте которого вызывается функция.
//this;// вне функции по умолчанию  это объект Window

console.log('Просто в программе');
console.log(this);// вне функции по умолчанию объект Window

function usingThis() {
    console.log('inside the function');
    console.log(this); //функция без контекста - остается оюъект Window
    console.log(3 + 5 / 2); 
    
}

//usingThis();

function usingThis() {
    console.log('inside the function');
    console.log(this); // элемент на котором произошло событие
    console.log(3 + 5 / 2); 
    this.style.background = 'red';
}

// document.querySelector('p').onclick = usingThis;

// let p = document.querySelectorAll('p');
// p.forEach(function(element) {
//     element.onclick = usingThis;
// });

//document.querySelector('p').addEventListener('click', usingThis);

let p = document.querySelectorAll('p');
p.forEach(function(element) {
    element.addEventListener('click', usingThis);
});

bind(obj)//привязать объект в качестве контекста