var loki = 'loky';

function space() {
    var loki = 'god';

    function planet() {
        var loki = 'human';
        console.log(loki);
    }

    planet();
}
space();

function calculate() {
    var a = 3, b = 5;

    function calculateInner() {
        var c = 11, b = 7;

        a += b + c;// a= a + b + c
    };
    calculateInner();

    console.log('a=', a, 'b =', b);// a= 21 b = 5
};
calculate();

var items = [1, 2, 3];

function wtf(items) {
    return items = [3, 2, 1,];
};
console.log(wtf(items));//[3, 2, 1]
console.log(items);// [1, 2, 3]

// function wtf() {
//     return items = [3, 2, 1,];
// };
// console.log(wtf(items));//[3, 2, 1]
// console.log(items);// [3, 2, 1]