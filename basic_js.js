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