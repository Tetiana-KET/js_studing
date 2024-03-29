//Заглавная буква каждого слова из строки

//Метод substring(1, 3) извлекает символы, начиная с индекса 1 до 3, но не включая его или до конца, если указан только 1 индекс

function firstLetterToUpperCase() {
    
    const str = "How can mirrors be real if our eyes aren't real";
    const words = str.split(' ');
    
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    return words.join(' ');
};
//console.log(firstLetterToUpperCase());//How Can Mirrors Be Real If Our Eyes Aren't Real


//Поменять регистр букв четных и не четных в строке

function toWeirdCase(string) {
    let arrFromStr = string.split(' ').map(item => item.split('')).map((item) =>
        item.map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()));
    let newArr = arrFromStr.map((subarr) => subarr.join('')).join(' ');

    console.log(newArr); //StRiNg ToWeL
}
// toWeirdCase('String towel');


// 'A BC' -> [65, 32, 66, 67] - у каждого символа (буквы) есть свой код в кодовой таблице символов.
//пробелу соответствует код 32

//.charCodeAt(ind) - получить код символа в строке. Получить чаркод позиции
//String.fromCharCode() - зная код символа - сформировать строрку.

function showStringCharCodeList(str) {
    console.log('\nShow charcode list:');

    for (let i = 0; i < str.length; i++) {
        console.log(`'${str[i]}' - ${str.charCodeAt(i)}`);
    }
}

// showStringCharCodeList('Aa BC');
// Show charcode list:
// 'A' - 65
// 'a' - 97
// ' ' - 32
// 'B' - 66
// 'C' - 67

function logSymbolByCharCodeList(charCodeList) {
    console.log('\nShow Symbol By CharCode List:');

    charCodeList.forEach((charCode) => {
        let symbol = String.fromCharCode(charCode);

        console.log(`[${charCode}] - '${symbol}'`);
    });
}

//logSymbolByCharCodeList([88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]);

//Является ли слово АНАГРАМОЙ, желательно станача все привести к одному регистру, вдруг есть большие буквы

function isAnagram(str) {
    str = str.replace(/ /g, '');

    let leng = str.length;

    for (let i = 0; i < leng / 2; i++) {
        if (str[i] !== str[leng - 1 - i]) {
            return false
        }
    }

    return true;
}
//console.log('check "abcba" is anagram -', isAnagram('abcba')); //check "abcba" is anagram - true
//console.log('check "abc" is anagram -', isAnagram('abc'));//check "abc" is anagram - false
//console.log('check "а роза азора" is anagram -', isAnagram('а роза азора'));//check "а роза азора" is anagram - true

//Подсчет количества слов в строке

function wordCount(str) { // делим строку на масив элементов
    let wordList = str.trim().split(/\s+/);
    //сплит поделит на массив с пустыми строками, если будет несколько пробелов подряд?
    //поэтому нужно удалить пробелы
    // str.trim() - отрежим пробелы в начале и в конце
    //  /\s+/ - регулярное выражение - любой пробельный символ, один или несколько

    console.log(`String "${str}" contains ${wordList.length} word(s)`);
    //найти самое длинное слово
    let theLongest = wordList[0];
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length > theLongest.length) {
            theLongest = wordList[i];
        }
        console.log(`the longest word is "${theLongest}"`);
    }
}

//wordCount('abc   def  ghfht');// String "abc   def  ghfht" contains 3 word(s) //the longest word is ghfht

//Шифр Цезаря - сдвиг на 2 позиции
//ЗАЦИКЛИТЬ ПРИ СДВИГЕ- берем индекс элемента + число сдвиг делим с остатком на длину и получаем индекс следующего элемента

// ABCDE(ABCDE) -> length 5
// 01234(01234)
//E -> SHIFT 2 -> B[1]  //
//[4] + 2(сдвиг) % length (5) = [1] - остаток от деления 6/5 = 1/1
// тут понятнее - https://www.youtube.com/watch?v=KST4bGAH-8Y

{
	/**
	 * Encode specified string with ROT13 cipher
	 * See details:  https://en.wikipedia.org/wiki/ROT13
	 *
	 * @param {string} str - The input string.
	 * @return {string} - The ROT13 encoded string.
	 *
	 * @example
	 *
	 *   'hello' => 'uryyb'
	 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
	 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
	 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
	 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
	 *
	 */
	function encodeToRot13(str) {
		const alphabet =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMabcdefghijklmnopqrstuvwxyzabcdefghijklm';
		return str.replace(
			/[a-zA-Z]/g,
			char => alphabet[alphabet.indexOf(char) + 13]
		);
	}

	/**
     * function encodeToRot13(str) {
		return str.replace(/[a-z]/gi, char => String.fromCharCode(char.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
	}
     */
	/**
    * function encodeToRot13(str) {
        let result = '';
        for (let i = 0; i < str.length; i += 1) {
            let code = str[i].charCodeAt(0);
            if ((code >= 65 && code < 78) || (code >= 97 && code < 110)) code += 13;
            else if ((code >= 78 && code <= 90) || (code >= 110 && code <= 122))
            code -= 13;
            result += String.fromCharCode(code);
        }
        return result;
    }
    */
}


// Шифр Виджинера - сдвигаем каждый символ текста на столько, на сколько сдвинут символ соответствующего индекса в ключе
{

    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    //encrypt method accepts 2 parameters: message (string to encode) and key (string-keyword)
    //an Error with message Incorrect arguments! must be thrown.
    //The text returned by these methods must be uppercase. 
    //Machines encrypt and decrypt only latin alphabet (all other symbols remain unchanged).
    //arr.indexOf(searchElement[, fromIndex = 0])
    
    function encrypt(message, key) {

        if(!message || !key) {
          throw new Error ('Incorrect arguments!');
        }
        
        let result = '';
        let j = 0;

        for (let i = 0; i<message.length; i++) {
            if (j > key.length-1) {
                j = 0;
            };
            if (!alphabet.includes(message[i].toUpperCase())) {
                result +=message[i];
            } else {
                result += alphabet[(alphabet.indexOf(message[i].toUpperCase()) + alphabet.indexOf(key[j].toUpperCase()) ) % 26]
                j++
            }
        }
        console.log(result);
    }
   // encrypt('attack at dawn!', 'alphonse')//'AEIHQX SX DLLU!' - AEIHQX SX DLLU!

    function  decrypt(message, key) {
        let result = '';
        let j = 0;

        
        for (let i = 0; i<message.length; i++) {
            if (j > key.length-1) {
                j = 0;
            };

            if (!alphabet.includes(message[i].toUpperCase())) {
                result +=message[i];
            } else {
                if ((alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase()) >= 0)) {
                    result += alphabet[(alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase()) )]
                    j++
                } else {
                    let index = (alphabet.indexOf(message[i].toUpperCase()) - alphabet.indexOf(key[j].toUpperCase())) + 26;
                    result += alphabet[index];
                    j++
                }
                
            } 
        }
        console.log(result)
    }
    //decrypt('AEIHQX SX DLLU!', 'alphonse')
}


function vigenereEncode(text, key) {
    let coefficient = Math.ceil(text.length / key.length); //(округление вверх) коэфиц. во сколько раз текст длиннее ключа
    key = key.repeat(coefficient);// текст длинее ключа, дублируем ключ, чтоб он соответствовал длине текста


    //определяем стартовую позицию - код символа А
    let codeA = 'A'.charCodeAt(0); //вернёт число 65, значение Unicode для латинского символа «A».
    let abcCount = 26; // фиксируем количество букв в алфавите, чтоб закольцевать сдвиги

    let result = []; // помещаем элементы после шифлования

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {// пробелы оставляем
            result.push(text[i]);
        } else {
            let letterIndex = text.charCodeAt(i) - codeA; // получаем индекс в рамках алфавита, text.charCodeAt(i) - индекс буквы которая пришла в тексте
            let shift = key.charCodeAt(i) - codeA; // определяем на сколько сдвинуть

            result.push(
                String.fromCharCode(codeA + (letterIndex + shift) % abcCount)
            );
        }
    }

    return result.join('');// соединим масив в строку без пробелов
}


function vigenereDecode(text, key) {
    let coefficient = Math.ceil(text.length / key.length);
    key = key.repeat(coefficient);

    let codeA = 'A'.charCodeAt(0);
    let abcCount = 26;

    let result = [];

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            result.push(text[i]);
        } else {
            let letterIndex = text.charCodeAt(i) - codeA;
            let shift = key.charCodeAt(i) - codeA;

            result.push(
                String.fromCharCode(codeA + (letterIndex - shift + abcCount) % abcCount)
            );
        }
    }

    return result.join('');
}

//console.log('Encoded "BBB" with key "AB" - ', vigenereEncode('BBB', 'AB')); //Encoded "BBB" with key "AB" -  BCB

let key = 'JAVASCRIPT';
let text = 'MY NAME IS TETIANA';
let secretText = vigenereEncode(text, key);
let decodedText = vigenereDecode(secretText, key)

//console.log(`Encoding text - "${text}" using key "${key}", we reseave -`, secretText); // Encoding text - "MY NAME IS TETIANA" using key "JAVASCRIPT", we reseave - VY NSOV XL TZTACEI
//console.log(`Decoding text - "${secretText}", we reseave -`, decodedText); // Decoding text - "VY NSOV XL TZTACEI", we reseave - MY NAME IS TETIANA



//morse-decoder

const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

let expr = '0000101110000011111100000010110000111010**********00000000110000111111**********00101111100000101110000011111100001111100000101110000000101100000011110000001111000000101000000011100000111110';
//final result of decoding this string is - 'road to programming'
function decode(expr) {
    const space = '**********';
    let arr = [];
    for (let i = 0; i < expr.length; i += 10) {
        arr.push(expr.substr(i, 10));
    }

    let morzArray = [];
    let str = '';
    let char = '';
    arr.forEach((item) => {
        morzArray.push(item.replace(/11/g, '-').replace(/10/g, '.').replace(/0/g, ''));
    });


    for (let j = 0; j < morzArray.length; j++) {
        let currentSymbol = morzArray[j];
        if (currentSymbol === '**********') {
            char = ' ';
        } else {
            char = MORSE_TABLE[currentSymbol];
        };

        str = str + char;

    }

    console.log(str);
}
// tringdecode(expr);

// result after arr.push(expr.substr(i, 10));
//['0000101110', '0000111111', '0000001011', '0000111010', '**********', '0000000011', '0000111111', '**********', '0010111110', '0000101110', '0000111111', '0000111110', '0000101110', '0000001011', '0000001111', '0000001111', '0000001010', '0000001110', '0000111110']

//result after morzArray.push(item.replace(/11/g, '-').replace(/10/g, '.')
//(19) ['0000.-.', '0000---', '000000.-', '0000-..', '**********', '00000000-', '0000---', '**********', '00.--.', '0000.-.', '0000---', '0000--.', '0000.-.', '000000.-', '000000--', '000000--', '000000..', '000000-.', '0000--.']

//result  +.replace(/0/g, '')); now  morzArray => every item of this array is a char
//['.-.', '---', '.-', '-..', '**********', '-', '---', '**********', '.--.', '.-.', '---', '--.', '.-.', '.-', '--', '--', '..', '-.', '--.']

//final result - road to programming


//Удаление символов в JavaScript
//https://snipp.ru/jquery/remove-symbols-js
//str = str.replace(/[aeiouy]/gi, '')

// ПОСЧИТАТЬ КОЛИЧЕСТВО ОДИНАКОВЫХ БУКВ В СТРОКАХ
/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

 function getCommonCharacterCount(s1, s2) {
    let count = 0;
    const arr = s2.split('');//lелаем массив из 2й строки
    for(char of s1){ //проходим циклом по первой строке
      let idx = arr.findIndex(el => el === char);//находим индекс символа в s2, который совпадает с текущей буквой в s1
        if(idx >= 0){
            count++;
            arr.splice(idx, 1);//вырезаем из массива эту букву, чтобы не считать ее дваджы
            //console.log(arr);
        }
    }
    return count;
  }
  
//console.log(getCommonCharacterCount("aabcc", "adcaa"));

/**  ЗАКОДИРОВАТЬ СТРОКУ 
 * Given a string, return its encoding version.
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {

    let result = '';
    let count =1;

    //loop through all the letters of the string and compare each pair of two consecutive letters:
    for (let i = 0; i < s.length; i++) {

        if (s[i] === s[i+1]) {
            count++;
        } else {// if the current letter s[i] and the next letter s[i+1] is different
            result = result + (count + s[i]);
            count = 1;//We also need to reset count
        }
        
    }
    return result.replace(/1/g, '');//replace(/1/g, ''); - удаляет единичку
}
     

console.log(encodeLine("aabbbc"));//2a3bc(2a3bc)

{
/**
 * Returns the number of vowels in the string. Посчитать количество гласных
 * 
 * Vowels: 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'I', 'O', 'U', 'Y'.
 *
 * @param {string} str - The input string.
 * @return {number} - The number of vowels in the string.
 *
 * @example:
 *   countVowels('apple')  => 2
 *   countVowels('banana') => 3
 *   countVowels('cherry') => 2
 *   countVowels('aEiOu') => 5
 *   countVowels('XYZ') => 1
 *
 *   const withoutVowels = str.replaceAll(/[^aeiouy]/gi, '');
 *   return withoutVowels.length;
 * 
 *   return str
    .toLowerCase()
    .split('')
    .reduce((a, c) => (vowels.includes(c) ? (a += 1) : a), 0);
 */
	function countVowels(str, vowels = 'aeiouy') {
		let result = 0;
		str
			.toLowerCase()
			.split('')
			.forEach(char => {
				if (vowels.includes(char)) {
					result += 1;
				}
			});
		return result;
	}
}

{    /**
     * Returns true if the value is a string, otherwise returns false.
     * ЯВЛЯЕТСЯ ЛИ ПАРАМЕТР "СТРОКОЙ" ПРОВЕРКА НА СТРОКУ
     * @param {string} value - The value to check if it's a string.
     * @return {boolean} - True if the value is a string, false otherwise.
     *
     * @example
     *   isString() => false
     *   isString(null) => false
     *   isString([]) => false
     *   isString({}) => false
     *   isString('test') => true
     *   isString(new String('test')) => true
     * Object.prototype.constructor.name - didn`t work, why?
     * Object.prototype.toString.call(obj)
     *  Using instanceof: This approach only works with string objects (e.g., new String('test')).
     * typeof value === 'string' || value instanceof String
     */
    function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
    }
}

{    /**
     * Remove the first occurrence of a substring from a string.
     * УДАЛИТЬ ПЕРВОЕ ВХОЖДЕНИЕ ПОДСТРОКИ В СТРОКУ
     * 
     * @param {string} str - The input string.
     * @param {string} value - The substring to remove from the string.
     * @return {string} - The string with the first occurrence of the substring removed.
     *
     * @example
     *   removeFirstOccurrences('To be or not to be', 'be') => 'To  or not to be'.
     *   removeFirstOccurrences('I like legends', 'end') => 'I like legs'.
     *   removeFirstOccurrences('ABABAB', 'BA') => 'ABAB'.
     * str.replace(`${value}`, '') doesn`t work, why?
     *
     */
    function removeFirstOccurrences(str, value) {
    const i = str.indexOf(value);
    return i !== -1 ? `${str.slice(0, i)}${str.slice(i + value.length)}` : str;
    }
}

{
	/**
	 * Returns true if the string is a palindrome; otherwise false.
	 * https://en.wikipedia.org/wiki/Palindrome
	 *
	 * @param {string} str - The input string.
	 * @return {bool} - True if the string is a palindrome, false otherwise.
	 *
	 * @example:
	 *   isPalindrome('madam') => true
	 *   isPalindrome('racecar') => true
	 *     => false
	 *   isPalindrome('No lemon, no melon') => true
	 */
	function isPalindrome(str) {
		return (
			str.toLowerCase().replace(/[ ,.!?]/g, '') ===
			str
				.replace(/[ ,.!?]/g, '')
				.toLowerCase()
				.split('')
				.reverse()
				.join('')
		);
	}
}

{
	/**
	 * Returns true if the string is a palindrome; otherwise false.
	 * https://en.wikipedia.org/wiki/Palindrome
	 * ПАЛИНДРОМ
	 *
	 * @param {string} str - The input string.
	 * @return {bool} - True if the string is a palindrome, false otherwise.
	 *
	 * @example:
	 *   isPalindrome('madam') => true
	 *   isPalindrome('racecar') => true
	 *   isPalindrome('apple') => false  => false
	 *   isPalindrome('No lemon, no melon') => true
	 */
	function isPalindrome(str) {
		return (
			str.toLowerCase().replace(/[ ,.!?]/g, '') ===
			str
				.replace(/[ ,.!?]/g, '')
				.toLowerCase()
				.split('')
				.reverse()
				.join('')
		);
	}
}
/**
 * Find the longest word in the sentence. If there are multiple longest words, самое длинное слово
 * the function returns the first one encountered.
 *
 * @param {string} sentence - The input sentence.
 * @returns {string} - The longest word in the sentence.
 *
 * @example:
 *   findLongestWord('The quick brown fox') => 'quick'
 *   findLongestWord('A long and winding road') => 'winding'
 *   findLongestWord('No words here') => 'words'
 * 
 * function findLongestWord(sentence) {
  const copiedStr = sentence.slice();
  return copiedStr.split(' ').sort((a, b) => b.length - a.length)[0];
}
 */
function findLongestWord(sentence) {
  return sentence
    .split(' ')
    .reduce((acc, cur) => (cur.length > acc.length ? cur : acc), '');
}