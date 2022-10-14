class Node {
    constructor (value) {
        this.value = value;
        this.next - null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;//еще нет первого элемента
        this.length = 0;
    }

    //если мы хотим добавить элемент, воспользуемся методом add
    //добавляем первый, если не было или последний элемент

    add (value) {
        if (this.length ===0) {//еще нет элементов
            this.head = new Node(value);//создаем новый узел, помещаем на него хед
        } else {//если эл. были
            let current = this.head;//начинаем с начала списка. текущий элемент = первый элемент

            //move to the last none
            while(current.next) {//пока у текущего элемента есть следующий элемент
                current = current.next;//меняем ссылку на текущий элемент, переходим на следующий элемент
            }
            //когда дошли до последнего элемента, вместо пусто, ставим ЗА ним новый узел
            current.next = new Node(value);
        }

        this.length++;//увеличиваем счетчик длины.
    }

    //добавляем элемент по позиции

    insert(position, value) {//позиция на которую положить и значение которое положить в список
        if (position < 0 || position > this.length) {//проверяем, что позиция не меньше 0 и не больше количества элементов
            return false;
        }

        let node = new Node(value);//сщздаем узел

        if (position === 0) {// хотим добавить на первое место
            node.next = this.head;//теперь у нового узла следующая позиция будет та, которая сейчас хед
            this.head = node; //а хед меняем на новый узел
        } else { //если мы вставляем не на первую позицию
            // должны дойти до нужной позиции вставки
            //current - та переменная, которая будет прыгать по элементам, пока не длойдет до нужной позиции
            let current = this.head;// ставим current в начало списка
            let prev = null; // перед нами пока нет эл.

            let index = 0; // отсчитывает шаги

            while (index < position) { //пока не дойдем до нужной позиции
                prev = current; //перезаписываем ссылки на пред и некст элементы
                current = current.next;
                index++;
            }

            //1 ->  2  ->  3  ->  4
            //  prev2 > node > curr3
            // 1 -> 2 -> node -> 3 -> 4      

            prev.next = node;//выстроили связь от прев до нового узла
            node.next = current;//выстроили связь от нового узла к бывшему каренту, который стал некстом

            this.length++;
        };

    }

    //вывести значение определенного элемента по позиции.
    get (position) {
        if (position < 0 || this.length <=position) {
            return;
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    };

    //найти индекс элемента
    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === element) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    };

    // удалить по позиции
    removeAt (position) {
        // проверка что элемент существует
        if (position < 0 || position > this.length) {//проверяем, что позиция не меньше 0 и не больше количества элементов
            return;
        }

        let current = this.head;//запоминаем текущий

        if (position === 0) {//удаляем первый
            this.head = current.next;// обновляем указатель на следующий элемент
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;//обновляем пред.
                current = current.next;//обновляем текущий
                index++;
            }

            prev.next = current.next; //выстраиваем новые связи
                                    // после прев. идет НЕ карент, а тот, который сейчас идет ПОСЛЕ карент
                                    //выстроили связь в обход текущего элемента
        }

        this.length--;
        return current.value;
    };

    //Удалить какой то элемент
    // найдем индекс этого элемента и удалип по индексу, 
    // методы описанны выше

    remove (element) {
        this.removeAt(this.indexOf(element));
    };

    size () {
        return this.length;
    };

    isEmpty () {
        return this.length === 0;
    };

    print () {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}