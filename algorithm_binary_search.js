//Линейный — O(n) - сложность алгоритма линейно растет с увеличением входного массива
//Логарифмический — O( log2 n) (грубо корень квадратный из числа )
//Линеарифметический — O(n*log2 n)
//Квадратичный — O(n 2) во второй степени n*n

//АЛГОРИТМЫ СОРТИРОВКИ
 
//сортировка выбором 0(n*n) чуть меньше, тут еще есть коэфициэнт, но он не указывается при оценке.
{
  const arr = [5, 4, 9, 2, 4, 7, 5, -6, 3, -1, 8, 1, -3, 7, 9, 5, 4, 7, 0];
  function selectionSort (arr) {

    for (let i=0; i<arr.length; i++) {

      let minIndex = i;

      for (let j = i+1; j<arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    return arr;
  }
  console.log(selectionSort(arr));
}


//Пузырьковая сортировка самый не эффективный, сложность 0(n*n) 

{  
 const arr = [5, 4, 9, 2, 4, 7, 5, -6, 3, -1, 8, 1, -3, 7, -9, 20, 5, 4, 7, 0];

  function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {

			for (let j = i + 1; j < arr.length; j++) {

				if (arr[j] < arr[i]) {
					let temp = arr[j];
					arr[j] = arr[i];
					arr[i] = temp;
				}
			}
		}
    return arr;
  }
  console.log(bubbleSort(arr));
}

/*Быстрая сортировка или сортировка Хоара  O(log2n*n) 
относится к алгоритмам «разделяй и властвуй». Один из наиболее эффективных алгоритмов.

Алгоритм состоит из трёх шагов:

1. Выбрать элемент из массива. Назовём его опорным.
Сравнить все остальные элементы с опорным и переставить их в массиве так, чтобы разбить массив на три непрерывных отрезка, 
следующих друг за другом: «элементы меньшие опорного», «равные» и «большие опорного».
Для отрезков «меньших» и «больших» значений выполнить рекурсивно ту же последовательность операций, если длина отрезка больше единицы.

На практике массив обычно делят не на три, а на две части: например, «меньшие опорного» и «равные и большие»;
такой подход в общем случае эффективнее, так как упрощает алгоритм разделения.

Разбиение: перераспределение элементов в массиве таким образом, что элементы, меньшие опорного, 
помещаются перед ним, а большие или равные - после.
*/

{  
  const arr = [5, 4, 7, 5, -6, 3, -1];
  function quickSort(arr) {
    if (arr.length == 0) return [];
    let less = [],
    greater = [],
    p = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < p) less.push(arr[i]);
      else greater.push(arr[i]);
    }
    return quickSort(less).concat(p, quickSort(greater));
  }
  console.log(quickSort(arr))
}


//ПОИСК
// ЛИНЕЙНЫЙ ПОИСК -   O(n), where ''n'' - is an amount of elements
{
const arr= [1,2,3,4,5,6,7,8,9,10,11,12,15,18,20,30,50];

function linearSearch (array, item) {
  for(let i=0; i<array.length; i++) {
    if(array[i]===item) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 14));
}

//бинарный поиск - самый эффективный, но только для уже отсортированного массива O(log2n)
//const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];
{
	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

	function binarySearch(val, arr) {
		let start = 0;
		let end = arr.length - 1;

		while (start <= end) {
			const middle = Math.floor((end + start) / 2);

			if (val === arr[middle]) {
				return middle;
			}

			if (val < arr[middle]) {
				end = middle - 1;
			} else {
				start = middle + 1;
			}
		}
		// return -1;
		return 'no such element';
	}

	console.log(`index of element you search is [${binarySearch(17, arr)}]`);
}

function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  else {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] > i) {
      return binarySearchRecursiveMethod(arr, i, left, mid - 1);
    } else {
      return binarySearchRecursiveMethod(arr, i, mid + 1, right);
    }
  }
}

//binarySearchRecursiveMethod(arr, 5); // -1


// Массив Эффективность(«О» большое):

// Индексирование: O(1).
// Поиск: O(n).
// Двоичный поиск: O(log n).
// Вставка: недопустимо (если не делать этого в самом конце массива).

// Эффективность списка, стека, очереди («О» большое):

// Индексирование: O(n).
// Поиск: O(n).
// Двоичный поиск: O(n).
// Вставка: O(1).

// Хэш-таблица (объект)
// Данные хранятся в виде пар ключ-значение.
// Оптимальны для поиска, вставки и удаления.
// Эффективность («О» большое):
// Индексирование: O(1).
// Поиск: O(1).
// Вставка: O(1).

// Двоичное дерево
// Двоичное дерево — структура данных, в которой каждый узел имеет максимум два дочерних элемента. Дочерние элементы бывают левым и правым. Ключ левого дочернего узла меньше, чем у родительского. Ключ правого дочернего узла больше, чем у родительского.
// Оптимальны для сортировки и поиска.
// Эффективность («О» большое):
// Индексирование: O(log n).
// Поиск: O(log n).
// Вставка: O(log n).

class Node {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor () {
    this.root = null;
  }

  add (value) {
    this.root = addWithin(this.root, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }

      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  }
}