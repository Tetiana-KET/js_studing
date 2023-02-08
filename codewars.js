function likes(names) {
 let message = (names.length === 0) ? 'no one likes this' :
  (names.length === 1) ? `${names[0]} likes this` :
  (names.length === 2) ? `${names[0]} and ${names[1]} like this` :
  (names.length === 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
 `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    
    return message;
}
//Высчитать время по углу часовой стрелки
// Отметка 12 часов - это 0°
// 1 час - 360°:12 = 30° (градусы часовой стрелки)
// 1 минута - 360°:60 = 6° (градусы минутной стрелки)
// Каждую минуту часовая стрелка смещается на 30°:60 = 0.5°
var whatTimeIsIt = function(angle) {
  let hour = Math.floor(angle/30);
  if (hour === 0) hour = 12;
  let minute = Math.floor(angle % 30 * 2);
    console.log(`${('0' + String(hour)).slice(-2)}:${('0' + String(minute)).slice(-2)}`);
}
// whatTimeIsIt(50);


// RGB To Hex Conversion
function rgb(r, g, b) {
    function toHexFofmat(number) {
        return number.length < 2 ? '0' + number : number;
    };
    const rgbArray = [r, g, b];
    let hex = '';
    for (let number of rgbArray) {
        if (number < 0) {
            number = 0
        } else if (number > 255) {
            number = 255
        }
        hex = hex + toHexFofmat(number.toString(16).toUpperCase());
    }
  console.log(hex);
}
//rgb(0, 0, 0);//000000
// rgb(300, 150, -20);//FF9600

// Другой вариант
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

//Highest and Lowest
function highAndLow(numbers){
    let arr = numbers.split(' ');
    let newArr = [];
    newArr.push(Math.max(...arr));
    newArr.push(Math.min(...arr));
    return newArr.join(' ');
};

//Disemvowel Trolls
function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, '');
  return str;
}

//Isograms

function isIsogram(str){
  let arr = str.toLowerCase().split('');
  let isogran = new Set(arr);
  if (isogran.size == arr.length) { 
    return true
  }
  return false;
}

//console.log(isIsogram("isograAm"));

//Digits explosion

function explode(s) {
  if (s === 0) {
    return "";
  }
  let arr = s.split('');
  let newArr = arr.map((item) => item.repeat([item]));

  return newArr.join('');
}

function explode(s) {
  return s.split("").map((e) => e.repeat(+e)).join("");
}

//console.log(explode("1203"));

//Handshake problem

function handshake(n) {// amount of persons is given. should find an amount of handshakes
  // when n becomes 0 that
  // means all the persons
  // have done handshake
  // with other
  if (n === 0)
    return 0;
  else
    return n - 1 + handshake(n - 1);
}
//console.log(handshake(6));

//handshakes are given/ need to find out an amount of people needed to perform it
function getParticipants(handshakes){
  if(handshakes === 0) return 0;

  let result = 0;
  let sum = 0

  while(sum < handshakes) {
    sum = result * (result + 1) / 2;

    result++;
  }

  return result;
}
//console.log(getParticipants(36));

//Duplicate Encoder

function duplicateEncode(word){
    console.log(word.toLowerCase())
}

// duplicateEncode(Word)

//Which color is the brightest?
// You are given a list of colors in 6 - digit hexidecimal notation #RRGGBB.
// Return the brightest of these colors!
// One of the ways to determine brightness of a color is to find the value V of the alternative HSV(Hue, Saturation, Value) 
// color model.Value is defined as the largest component of a color:

// V = max(R,G,B)

function brightest(colors){
  let colorIndex = 0, maxValue = 0;
  for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    let r = parseInt(color.slice(1, 3), 16),
      g = parseInt(color.slice(3, 5), 16),
      b = parseInt(color.slice(5, 7), 16);
    let value = Math.max(r, g, b);
    if (value > maxValue) {
      maxValue = value;
      colorIndex = i;
    }
  }
  return colors[colorIndex];
}

//console.log(brightest(["#001000", "#000000"]));


//N-th Fibonacci
// write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

// For example:

//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

function nthFibo(n) {
  const fiboArr = [0, 1];

  if (n < 2) {
     return `${fiboArr[n]}, ${n+1}th Fibo`;
  };

  for (let i = 2; i <= n; i++){
    const prevNum1 = fiboArr[i - 1];
    const prevNum2 = fiboArr[i - 2];
    fiboArr.push(prevNum1 + prevNum2);
  };

  console.log(fiboArr);
  return `${fiboArr[n - 1]}, ${n}th Fibo`;
};
//console.log(nthFibo(4));


/* Возвращает не индекс, а позицию по счету, начиная с 1
function nthFibo(n) {
  
  const fiboArr = [0, 1];
  
 if (n < 3) {
   return fiboArr[n-1]
 };
  
  for (let i = 2; i <= n; i++){
    const prevNum1 = fiboArr[i - 1];
    const prevNum2 = fiboArr[i - 2];
    fiboArr.push(prevNum1 + prevNum2);
  }
  return fiboArr[n - 1]; 
};*/
  
//Your job is to implement these functions in your given language.
//Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1, 2, 3, 4, 5]); => [2, 3, 4, 5]

function head (arr) {
   let result = arr[0];
  return result;
};

function tail (arr) {
   
  if (arr.length == 1) {
    return [];
  }
  
   return arr.slice(1);;
};

function init (arr) {
  return arr.slice(0, -1)
};

function last(arr) {
  return arr[arr.length -1]
}

function head(a) {return a[0]}

function last(a) {return a[a.length - 1]}

function init(a) {return a.slice(0, -1)}

function tail(a) { return a.slice(1) }

//Duplicate Encoder
/*The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string,
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.*/

function duplicateEncode(word) {
  let obj = {};
  let letter = word.toLowerCase().split('');
  for (let i = 0; i < letter.length; i++) {
    let objKey = letter[i];//ключем будет буква
    if (obj[objKey] === undefined) {//если этот ключ еще не определен, значит такая буква еще не встречалась
      obj[objKey] = 1;// присваиваем ключу значение 1 (будет считать буквы)
    } else {//если не неандефайнд, значит эта буква уже встречалась
      obj[objKey] += 1//прибавляем к предыдушему значению ключа 1
    }
  };
// console.log(obj);//{r: 1, e: 3, c: 1, d: 1}
  let result = letter.map(function (letter) {
    return obj[letter] === 1 ? '(' : ')';//проходимся по масиву, подставляем
  }).join('');//каждую букву из массива как ключ объекта

  return result;
    
  
}
//console.log(duplicateEncode("recede"));//()()()

// 16+18=214

function add(num1, num2) {//(add(122, 81)
  num1 = num1.toString().split('').reverse();//['2', '2', '1']
  num2 = num2.toString().split('').reverse();//['1', '8']

  let count = Math.max(num1.length, num2.length); //3
  
  const newArr = [];

  for (let i = count-1; i>=0; i--) {//i=2
    
    newArr.push(+(num1[i] || 0) + +(num2[i] || 0));//1+0; 2+8=10; 2+1; 1 - 10 - 3
  }
  console.log(newArr);//[1, 10, 3]

  //let result = newArr.reduce((acc, ell) => acc.toString() + ell.toString());
  //return +result;
  return +newArr.join(''); 
}
//console.log(add(122, 81))//1103

//У вас есть 3 объекта ввода(школьные дневники) со школьными предметами и отметкой
// вернуть имя ученика, сумма баллов которого самая высокая
//Если у двух или трех сыновей одинаковые самые высокие оценки, нужно выбрать младшего. 
{
 const diary1 = {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10,
  };

  const diary2 = {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10,
  };

  const diary3 = {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10,
  };
  const ageTable = {
    'firstSonAge': 14,
    'secondSonAge': 9,
    'thirdSonAge': 8
  };

  function whoseBicycle(diary1, diary2, diary3) {
    let score1 = 0;
    let score2 = 0;
    let score3 = 0;

    for (let key in diary1) {
      score1 += diary1[key];
    };
    for (let key in diary2) {
      score2 += diary2[key];
    };
    for (let key in diary3) {
      score3 += diary3[key];
    };

    const firstSon = {
      name: 'first',
      score : score1,
      age : ageTable.firstSonAge,
    };

    const secondSon = {
      name: 'second',
      score : score2,
      age : ageTable.secondSonAge,
    };

    const thirdSon = {
      name: 'third',
      score : score3,
      age : ageTable.thirdSonAge,
    };

    const children = [firstSon, secondSon, thirdSon];
    const excellentStudent = children.filter(person =>person.score == Math.max(firstSon.score, secondSon.score, thirdSon.score));
    let result='';
    if (excellentStudent.length == 1) {
      result =  excellentStudent[0].name;
    } else {
      result = (excellentStudent.sort((a, b) => a.age - b.age))[0].name;
    }
    
    return `'I need to buy a bicycle for my ${result} son.'`;
  }
  console.log(whoseBicycle(diary1, diary2, diary3));
}

//7 kyu Who is the killer?

{
  const suspectInfo = {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle']
  };
  const dead  = ['Lucas', 'Bill'];

  function killer(suspectInfo, dead) {
    for (let suspect in suspectInfo) {
      if (suspectInfo[suspect].includes(...dead)) {
        return suspect;
      }
    }
  }
  console.log(killer(suspectInfo, dead));
  {
    function killer(suspectInfo, dead) {
      return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
    }
  }
}


{
  // ЗАМЕНИТЬ ВСЕ ГЛАСНЫЕ НА 1 СОГЛАСНЫЕ И ЦИФРЫ НА 00
  // Examples:
  // vowelOne( "abceios" ) // "1001110"
  // vowelOne( "aeiou, abc" ) // "1111100100"
  ///[0-9]/gi все цифры
  ///[aeiou]/gi -* все гласные не зависимо от регистра
  ////[^0-9]/gi - все НЕ цифры

  function vowelOne(s){
    return s.replace(/[0-9]/gi, 00).replace(/[aeiou]/gi, 1).replace(/[^0-9]/gi, 00);
  }

  {
    function vowelOne(s){
      return s.replace(/[^aeiou]/gi, 0).replace(/[^\d]/g, 1);
    }
  }
}