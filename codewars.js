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
// rgb(0, 0, 0);//000000
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