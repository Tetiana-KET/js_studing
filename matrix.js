// let matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [0, 3, 6, 9],
//     [6, 8, 0, 2],
// ];
function logEachMatrixItem(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            console.log( `item {${i}, ${j}} - ${matrix[i][j]}`)
        }
    }
}
//logEachMatrixItem(matrix); //item {0, 0} - 1
                             //item {0, 1} - 2
                             //item {0, 2} - 3
                             //item {0, 3} - 4

function showMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}
// showMatrix(matrix);
// 1 2 3 4
// 5 6 7 8
// 0 3 6 9
// 6 8 0 2

// ГЛАВНАЯ     Д И А Г О Н А Л Ь 

function showMainDiag(matrix) {
    console.log('main diagonal elements -');
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i][i]);//номер столбца, совпадает с номером строки, поэтому подставляем в столбец такой де индекс
    }
}
// showMainDiag(matrix);

//вывести элементы побочной диагонали - 4, 7, 3, 6

function showSideDiag(matrix) { 
    console.log('side diagonal elements -');
    let n = matrix.length;// число строк. так как матрица квадратная, равно числуу столбцов
    for (let i = 0; i < n; i++) {
        console.log(matrix[i][n-1-i]); //n-1 єто длина строки. -i чтобі двигаться в обратном порядке
    }
}
// showSideDiag(matrix);

//Вывести нижний треугольник матрицы
function showBottomMainTriangle(matrix) {
    let row;
    for (let i = 0; i < matrix.length; i++) {

        row = [];

        for (let j = 0; j <= i; j++) {
            row.push(matrix[i][j]);
        }

        console.log(row.join(' '));
    }
    
}
// showMatrix(matrix);
//showBottomMainTriangle(matrix);

// 1
// 5 6
// 0 3 6
// 6 8 0 2

// Вывести массив с суммами строк, обход по строчкам
//consider that we surely have matrix with data
//we have square matrix? with equal count of elements in every row and column

function sumOfEveryStringOfMatrix(matrix) {
    let arrayOfSum = [];
    let sum;
    for (let i = 0; i < matrix.length; i++) {
        sum = 0
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
        }
        arrayOfSum.push(sum);
    }
    console.log(arrayOfSum);
}
//sumOfEveryStringOfMatrix(matrix); // [10, 26, 18, 16]

// обход матрицы по столбцам
// 1 2 3 4 - j
// 5 6 7 8
// 0 3 6 9
// 6 8 0 2
// i

function findColumnsWithZero(matrix) {
    let columnsWithZeroInd = []; // накапливаем результаты
    let columnAmount = matrix[0].length; // сколько вообще у нас колонок
    
    for (let i = 0; i < columnAmount; i++) { // i - номер столбцa
        
        for (let j = 0; j < matrix.length; j++) { // строки. идем от нулевой строки вниз. j - номер строки
            if (matrix[j][i] === 0) {
                columnsWithZeroInd.push(i);
                break;//по заданию нужно найти столбец с 0, если нашли хоть 1 ноль, нет надобности проверять дальше
            }
        }
    }
    console.log('Columns With Zero -', columnsWithZeroInd);
}
//findColumnsWithZero(matrix);//Columns With Zero - (2) [0, 2]

let smallMatrix = [
    [1, 2, 3],// - i
    [4, 5, 6],// - i, а каждый элемент строки - это j
    [7, 8, 9],// - i
]

function showSmallMatrix() {
    for (let i = 0; i < smallMatrix.length; i++) {
        console.log(smallMatrix[i].join(' '));
    }
}
//(smallMatrix);

function passThroughLikeSnake(smallMatrix) {
    for (let i = 0; i < smallMatrix.length; i++) { //проход по элементам(строкам) наружного массива (матрицы)
        for (let j = 0; j < smallMatrix[i].length; j++) {
            let columnIndex = i % 2 === 0//определяем четная ли строка,
                ? j// если четная - идем в естественном порядке
                : smallMatrix[i].length - 1 - j; //если не четная, идем в обратном порядке, с конца. 
                // -1 ->length - 1 - это индекс последнего элемента
                // - j при увеличении j, чтобы двигаться от него влево, отнимаем его
            console.log(smallMatrix[i][columnIndex]);
        }
    }  
}
//passThroughLikeSnake(smallMatrix);// 123654789
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];

function towelSort(matrix = []) { // параметр по умолчанию, если функцию вызвать без параметров
  let result = [];
  let empty = [];

  if (matrix.length) {// если у масива есть длина больше 0 - вернет тру
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let index = i % 2 === 0 ? j : matrix[i].length - 1 - j;
        result.push(matrix[i][index]);
      }
    }
    return result;
  } else {
    return empty;
  };
}

console.log(towelSort(matrix));