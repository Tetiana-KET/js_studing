//Линейный — O(n) - сложность алгоритма линейно растет с увеличением входного массива
//Логарифмический — O( log n)
//Линеарифметический — O(n·log n)
//Квадратичный — O(n 2)

//Пузырьковая сортировка

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let t = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
}
bubbleSort(arr);

//Быстрая сортировка - Бинарный поиск

function quickSort(arr) {
  if (arr.length == 0) return [];
  let a = [],
    b = [],
    p = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) a.push(arr[i]);
    else b.push(arr[i]);
  }
  return quickSort(a).concat(p, quickSort(b));
}
quickSort(arr);

const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, i) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((right + left) / 2);

    if (arr[mid] === i) {
      return mid;
    } else if (arr[mid] > i) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

binarySearchIterationMethod(arr, 100); // 7

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

binarySearchRecursiveMethod(arr, 5); // -1

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