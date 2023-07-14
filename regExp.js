//убрать все нули в конце числа 
//* Соответствует предыдущему символу повторенному 0 или более раз
//$ Соответствует концу ввода, С конца строки
str.replace(/0*$/, ''); 

//валидация пин кода. допустимы только цыфры. 4 или 6 
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

//посчитать количество поаторяющихся символов в строке
(text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
//в итоге тебе возвращается массив совпадений, где одинаковых символов 2 или больше, считается длина этого массива 
/([^])\1+/g; 
//[^] matches any character including newline
//\1 matches the same text as most recently matched by the 1st capturing group
//+ matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
