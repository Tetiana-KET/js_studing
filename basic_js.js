{
    //Dream team 
    /*
    Imagine you and your friends decide to create a dream team. 
    This team should have a cool secret name that contains encrypted information about it. 
    For example, these may be the first letters of the names of its members in upper case sorted alphabetically. 
    Your task is to implement the createDreamTeam(members) function 
    that returns name of a newly made team (string) based on the names of its members (Array).
    Names of the members should be strings. Values with other type should be ignored. In case of wrong members type function must return false.
    NB! Team member name may contain whitespaces.
    */
    function createDreamTeam(members) {
    if (!(Array.isArray(members))) {
      return false
    };
  
    let result = [];
    members.map((member) => {
      if(typeof member === 'string') {
        result.push(member.trim()[0].toUpperCase());
      }
    });
    return result.sort().join('')
  
}

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) //=> 'ADMM'
//createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
}

{
    /*
    What season?
    Your task is to implement the function getSeason(date) that accepts Date object and returns the time of the year that matches it. 
    Time of the year must be string.
    spring, summer, autumn (fall), winter.
    If the date argument was not passed, the function must return the string 'Unable to determine the time of year!'.
    If the date argument is invalid, the function must throw an Error with message Invalid date!.
    Shh! An enemy scout has lurked among the arguments that come into this function.
    He is guided by the famous proverb: “If it looks like a duck, swims like a duck and quacks like a duck, 
    then it probably is a duck (who cares what it really is)”. He is expertly disguised as a real date, 
    but a clever javascript developer can catch him and throw an Error with message Invalid date! just in time!

    For example:

    const springDate = new Date(2020, 02, 31)

    getSeason(springDate) => 'spring'
    */
    function getSeason(date) {

        if (date === undefined) {
          return 'Unable to determine the time of year!'
        }
        //Date.parse for parsing date strings, which gives an authoritative way to check if the date string is valid.
        //date instanceof Date && !isNaN(date) It also checks that it is an instance of a date, and that it is a valid date
        if ( (!Date.parse(date)) ) {
          throw Error('Invalid date!');
        };
      
        if (!(date instanceof Date) ) {
          throw Error('Invalid date!');
        };
      
        if ( Object.getOwnPropertyNames(date).length) {
          throw Error('Invalid date!');
        };
        ////The Object.getOwnPropertyNames(obj) static method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
        //Date.parse() Разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970 года 00:00:00 по местному времени.
        //Метод getMonth() возвращает месяц указанной даты по местному времени, нумерация месяцев начинается с нуля для первого месяца в году.
        const month = date.getMonth();
      
        switch (month) {
            case 11 :
            case 0:
            case 1:
      
            return 'winter';
      
            case 2 :
            case 3:
            case 4:
                
            return 'spring';
      
            case 5 :
            case 6:
            case 7:
                
            return 'summer';
      
            case 8 :
            case 9:
            case 10:
                
            return 'autumn';
            
        }
      
      }
    const springDate = new Date(2020, 02, 31)
    getSeason(springDate)
}
{
/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *  на вход получаем массив, пройтись по массиву перебором и поделить
 *  каждый домен на массив поддоменов
 *  вернуть нужно объект
 *  ключи объекта - каждый кусочек поддомена до точки
 *  значение ключа - количество вхождений
 */
function getDNSStats(domains) {
	const result = {};
	const domainsReversed = domains.map(domain => {
		return domain.split('.').reverse();
	});
	/*
  [
  [ru, yandex, code],
  [ru, yandex, music],
  [ru, yandex]
  ]
  */
	domainsReversed.forEach(domain => {
		let dns = '';

		domain.forEach(subDomain => {
			//[ru, yandex, code],
			dns += `.${subDomain}`;
			//.ru
			//.ru.yandex
			//.ru.yandex.code

			result[dns] = result[dns] ? result[dns] + 1 : 1;
		});
	});
	return result;
}
  getDNSStats([
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'
  ]);
}

{
	/**
	 * Create a repeating string based on the given parameters
	 *
	 * @param {String} str string to repeat
	 * @param {Object} options options object
	 * @return {String} repeating string
	 *
	 *
	 * @example
	 *
	 * repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
	 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
	 *
	 */
  function repeater(str, options) {
    const {
      repeatTimes = 1,
      separator = '+',
      addition = '',
      additionRepeatTimes = 1,
      additionSeparator = '|',
    } = options;

    return Array(repeatTimes)
      .fill(
        `${String(str)}${Array(additionRepeatTimes)
          .fill(String(addition))
          .join(additionSeparator)}`
      )
      .join(separator);
  }

	// repeater('la', { repeatTimes: 3 }); //  'la+la+la');
	// repeater('single', { repeatTimes: 1 }); // 	 'single');
	// repeater('12345', { repeatTimes: 5 }); // '12345+12345+12345+12345+12345');
	// repeater('la', { repeatTimes: 3, separator: 's' }); // 			'laslasla');
	// repeater('point', { repeatTimes: 3, separator: '&&&' }); // 		'point&&&point&&&point');
  // repeater('12345', { repeatTimes: 5, separator: '3 words separator' })
	//'123453 words separator123453 words separator123453 words separator123453 words separator12345';
			repeater('la', {
				repeatTimes: 3,
				separator: 's',
				addition: '+',
				additionRepeatTimes: 1,})
	// 		,'la+sla+sla+');
}

{
/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

matrix = [
  //y       y      y
   [true, false, false],//x
   [false, true, false],//x
   [false, false, false]//x
  ];

	function minesweeper(matrix) {
		const result = [];
    for (let x = 0; x < matrix.length; x += 1) {
      result.push([]);

      for (let y = 0; y < matrix[x].length; y +=1) {
				result[x][y] = 0; // fill every cell with zero

				//top row
				if (matrix[x - 1] !== undefined) {
					if (matrix[x - 1][y]) {
						result[x][y] += 1;
					}
				}

				//bottom row
				if (matrix[x + 1] !== undefined) {
					if (matrix[x + 1][y]) {
						result[x][y] += 1;
					}
				}

				//right edge
				if (matrix[x][y + 1] !== undefined) {
					if (matrix[x][y + 1]) {
						result[x][y] += 1;
					}
				}

				//left edge
				if (matrix[x][y - 1] !== undefined) {
					if (matrix[x][y - 1]) {
						result[x][y] += 1;
					}
				}

				//DIAGONAL
				//top right
          if (matrix[x - 1] !== undefined) {
						if (matrix[x - 1][y + 1]) {
							result[x][y] += 1;
						}
					}

				//top left
          if (matrix[x-1] !== undefined) {
						if (matrix[x-1][y - 1]) {
							result[x][y] += 1;
						}
					}
				//bottom right
          if (matrix[x + 1] !== undefined) {
						if (matrix[x + 1][y + 1]) {
							result[x][y] += 1;
						}
					}

				//bottom left
        if (matrix[x + 1] !== undefined) {
					if (matrix[x + 1][y - 1]) {
						result[x][y] += 1;
					}
				}
			}

    }
   return result;
	}
  console.log(minesweeper(matrix));
}