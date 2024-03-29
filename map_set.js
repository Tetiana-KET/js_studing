/*Map и Set - https://learn.javascript.ru/map-set

MAP - это структура, которая хранит данные в парах ключ/значение, где каждый ключ уникален. 
позволяет использовать ключи любого типа.
Map может использовать объекты в качестве ключей.
NaN также может использоваться в качестве ключа
поменять порядок элементов или получить элемент напрямую по его номеру нельзя.

Иногда её также называют ассоциативным массивом или словарём. 
Map часто используют для быстрого поиска данных. 
Она позволяет делать следующие вещи:

new Map() – создаёт коллекцию.
let map = new Map(Object.entries(obj)) - создать Map из обычного объекта (Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ])
let obj = Object.fromEntries(map.entries()); // Object.fromEntries(map) - создаём обычный объект from map

map.set(key, value) добавлять пары в коллекцию;
map.delete(key) - удалять пары из коллекции (удаляет элемент (пару «ключ/значение») по ключу key);
изменять существующей пары;
map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует,искать значение, связанное с определенным ключом.

Как объект Map СРАВНИВАЕТ ключи
Чтобы сравнивать ключи, объект Map использует алгоритм SameValueZero. 
Это почти такое же сравнение, что и ===, с той лишь разницей, что NaN считается равным NaN. 
Так что NaN также может использоваться в качестве ключа.

ПЕРЕБОР Map

map.keys() – возвращает итерируемый объект по ключам,
map.values() – возвращает итерируемый объект по значениям,
map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
-перебор происходит в том же порядке, в каком происходило добавление элементов.
-имеет встроенный метод forEach - map.forEach((value, key, map) => {}
*/


{
    //Отфильтровать анаграммы
    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
    function aclean(arr) {
        let map = new Map ();
        for (let word of arr) {
            let sorted = word.toLowerCase().split('').sort().join('');
            console.log(sorted)
            map.set(sorted, word);
            console.log(map)
        }
        return Array.from(map.values());
    }
    console.log(aclean(arr));//['PAN', 'hectares', 'era']
}



/*
Set

-особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз/
-поменять порядок элементов или получить элемент напрямую по его номеру нельзя.
Перебор объекта Set - как с помощью метода for..of, так и используя forEach - set.forEach((value, valueAgain, set) => {}
*/
/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const matrixCopy = matrix; // copy of the original matrix
  const result = new Array(matrix.length); // create new matrix and Fill Result Matrix with undefined
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = new Array(matrix.length);
  }
  let start = 0;
  const end = matrix.length - 1;
  // iterates through the original matrix and fills the result with rotated values
  for (let i = 0; i <= end; i += 1) {
    // outer loop
    for (let j = 0; j <= end; j += 1) {
      // inner loop
      result[i][j] = matrix[end - j][start]; // end - 2 - 1 - 0; start 0, after loop start will be increased by 1
    }
    start += 1;
  }
  // copy the rotated values from result to matrixCopy.
  for (let i = 0; i <= end; i += 1) {
    for (let j = 0; j <= end; j += 1) {
      matrixCopy[i][j] = result[i][j];
    }
  }

  return matrixCopy;
}