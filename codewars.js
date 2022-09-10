function likes(names) {
 let message = (names.length === 0) ? 'no one likes this' :
  (names.length === 1) ? `${names[0]} likes this` :
  (names.length === 2) ? `${names[0]} and ${names[1]} like this` :
  (names.length === 3) ? `${names[0]}, ${names[1]} and ${names[2]} like this` :
 `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    
    return message;
}
//Высчитать время по углу часовой стрелки
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

console.log(explode("1203"));

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
console.log(handshake(6));

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
console.log(getParticipants(36));

//Duplicate Encoder

function duplicateEncode(word){
    console.log(word.toLowerCase())
}

duplicateEncode(Word)
//ARRAYS

