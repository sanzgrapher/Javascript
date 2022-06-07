// let type ="naran";
// console.log(typeof type);
// const name1 = 'naran'; //single quote
let name = "Jack";
const name1 = 'Peter';
const name2 = "ram"; //double
const name3 = `sanz`; //backticks

// console.log(typeof name1);
// console.log(typeof name2);
// console.log(typeof name3);


const result = `The names are ${name} and ${name1}`;
// console.log(result);

// Access String Characters
// -------------------              as an array

// console.log(name[0] + name[1] + name[2] + name[3] );

// -------------------              using method charAt();

// console.log(name3.charAt(0));

// strings index cannot be changed 
name[1] = 'H';
// console.log(name);
name = 'roman';
// console.log(name);






const longmessage = "this is thee longest \
 message ever seeen \
in different lines"
 
// console.log(longmessage);


// calculate length
const brand=['dell','acer','asus','hp']
// console.log(longmessage.length);
// console.log(name.length);
// console.log(brand.length); // returns the no of data inside the array

// new keyword

const named = new String('named');
// console.log(named);
// console.log(typeof named);



// javascripts strings methods

var firstString = 'naran';
var secondString = 'naran';
console.log(firstString.charAt()); // returns the character at the specified index
console.log("the first char is ' " + firstString.charAt(0) + " ' ");



const finalString = firstString.concat(" ", secondString);
console.log();



let guestList = `Guests:John 
Pete 
Mary
`;
// console.log(guestList);

