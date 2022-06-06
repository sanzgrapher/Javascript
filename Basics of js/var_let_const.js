// // for tutorial of var let and const
// // seeing the block scope of let and const


 // var as global variable

var y = 1;
{
    var y = 2;
    console.log(y);
}
console.log(y);


// let  as block scoped


let x = 5;
{
    let x = 6;
    console.log(x);
}
console.log(x);

// const as block scoped
// Constants can be declared with uppercase or lowercase, but a common convention is to use all - uppercase letters.

const Z = 10;
{
   
    const Z = 100;
    console.log(Z);
}
console.log(Z);




