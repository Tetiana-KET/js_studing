//убрать все нули в конце числа 
//* Соответствует предыдущему символу повторенному 0 или более раз
//$ Соответствует концу ввода, С конца строки
str.replace(/0*$/, ''); 

//валидация пин кода. допустимы только цифры. 4 или 6 
/^(\d{4}|\d{6})$/.test(str);

//найти совпадающие смайлы - Valid smiley face examples: :) :D ;-D :~)
function countSmileys(arr) {
  const regExp = /[:;][-~]?[)D]/g;
  return arr.join('').match(regExp) ? arr.join('').match(regExp).length : 0;
}

//все первые буквы каждого слова в строке
/\b\w/g;

//каждая последняя буква слова. \b- обозначает границу слова
/\w\b/g;

//найти все вхождения буквы в строку, вернет массив совпадений
str.match(new RegExp(letter, 'g'));

//посчитать количество повторяющихся символов в строке
(text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//в итоге тебе возвращается массив совпадений, где одинаковых символов 2 или больше, считается длина этого массива 
/([^])\1+/g; 
//[^] matches any character including newline
//\1 matches the same text as most recently matched by the 1st capturing group
//+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)

//Заменяет последнюю запятую в строке - 82 days, 17 hours, 23 minutes, 38 seconds
//82 days, 17 hours, 23 minutes and 38 seconds
replace(/,([^,]*)$/, ' and' + '$1');
replace(/,\s(?=[\d\s\w]*$)/, ' and ')

//удалить все согласные. Все кроме гласных
str.replaceAll(/[^aeiouy]/gi, '');
/^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/.test(n);
//строка начинается (^) 2х ({2}) символов ([0-9A-Fa-f]), затем 2 символа и - повторяются 5 раз, в конце строки ($
//2 символа в диапазане ([0-9A-Fa-f]) - выражение вернет true oe false