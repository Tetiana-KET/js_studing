{
    //Навигазия по всем узлам документа, 
    //включая текстовые узлы, узлы-комментарии и перенос строки
   
    //Получаем в константу полностью весь объект со всем содержимым
    const htmlElement = document.documentElement;//Получаем в константу полностью весь объект со всем содержимым
    const headElement = document.head;
    const bodyElement = document.body;

    //Получаем УЗЛЫ
    const firstChildNode = document.body.firstChild;//const firstChildNode = bodyElement.firstChild;
    const lastChildNode = bodyElement.lastChild;

    console.log(firstChildNode);//#text - текстовый узел - там перенос строки
    console.log(lastChildNode);// последний дочерний узел - подключение скрипта, все что после скрипта не показывается

    //Коллекция всех дочерних УЗЛОВ
    const childNodes = bodyElement.childNodes;
    console.log(childNodes);//NodeList(6) [text, h1, text, h3, text, script]

    //для проверки наличия дочерних узлов
    //специальная функция hasChildNodes()
    console.log(bodyElement.hasChildNodes());//true

    /*
    childNodes - похожая на массив коллекция - "псевдомассив"
    для перебора коллекции можно использовать for ..of
    методы массива не работают

    * Почти все DOM коллекции ЖИВЫЕ
    * Только для чтения
    */
    
    /*перенбор коллекции
    for (let node of childNodes) {
        console.log(node);
    }*/

    //СОСЕДНИЕ И РОДИТЕЛЬСКИЕ УЗЛЫ

    const previousSiblingNode = bodyElement.previousSibling;// предыдущий узел объекта, на том же уровне вложенности
    const nextSiblingNode = bodyElement.nextSibling;// следующий узел объекта
    const parentNode = bodyElement.parentNode;// непосредственный родитель объекта боди - получим весь хтмл со всем содержимым
}

{
    //НАВИГАЦИЯ ПО ЭЛЕМЕНТАМ
    const htmlElement = document.documentElement;
    const bodyElement = document.body;


    const htmlChildrem = htmlElement.children;
    console.log(htmlChildrem);//HTMLCollection(2) [head, body] - коллекция, содержит только єлементы, только теги, без текстовых узлов
    
    const previousSibling = bodyElement.previousElementSibling;
    const nextSibling = bodyElement.nextElementSibling;
    const parentElement = bodyElement.parentElement;
    console.log(previousSibling);// <head> со всем его содержимым</head>
    console.log(nextSibling);
    console.log(parentElement);//весь элемент html со всем содержимым
}