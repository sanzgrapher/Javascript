// move the declaration up and down to get clear view of hoisting
// gives undefined when it is below the use and only iniciate but not declare

//////////////////////////////////////////////

var str = "subash";
console.log(str);



console.log(a);
var a = 5; 

//////////////////////////////////////////////

var x;
x = 3;
console.log(x); // prints 3

var y;
console.log(y); // undefined
y = 2;

z = 4;
console.log(z); // prints 4
var y;

console.log(c); // undefined
var c = 5;  //  JavaScript only hoists declarations, not initializations.

//////////////////////////////////////////////


var myvar = 'my value';
(function () {
    var myvar;
    console.log(myvar); // undefined
    myvar = 'local value';
})();
//////////////////////////////////////////////
