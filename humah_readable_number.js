function toReadable(number) {

    const numbers = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
    }

    const tens = {
        0: '',
        1: '',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    const thousands = {
        1: '',
        2: 'thousand',
        3: 'million',
        4: 'billion',
        5: 'trillion',
    }

    number = Math.abs(number); //возвращает абсолютное значение числа, если введено отрицательное число
    //up to 19
    if (number < 20) {
       return numbers[number];
    };

    // from 20 to 99
    if (number.toString().length === 2) {
        if (number > 19 && number.toString().charAt(1) !== '0')
         return tens[number.toString().charAt(0)] + ' ' + numbers[number.toString().charAt(1)];
    
        if (!(number.toString().charAt(1) !== '0')) {
            return tens[number.toString().charAt(0)];
        }
    };


    if (number.toString().length === 3) {
        if (number.toString().charAt(1) === '0' && number.toString().charAt(2) === '0') {
            return numbers[number.toString().charAt(0)] + ' hundred';
        } else {
            return numbers[number.toString().charAt(0)] + ' hundred ' + toReadable(+(number.toString().charAt(1) + number.toString().charAt(2)));
        }
    }    
};

console.log(toReadable(20));


