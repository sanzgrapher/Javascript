document.getElementById("title").innerHTML = `indexOf(); :: indexOf(searchString)
indexOf(searchString, position)
)`;

const NAME = 'Fernando Naran Dhakal';
// console.log(NAME.indexOf("Naran"));
// finding the first occurence of the search term 
let pos = NAME.indexOf("a");
// console.log(pos);
// finding the second occurance of the search term
// console.log(NAME.indexOf("a", pos + 1));

// counting the occurance of the letters in a string

const para = "The quick brown fox jumps over the lazy dog.";
let count = 0;
let searchterm = "e";
let position = para.indexOf(searchterm);

while (position !== -1) {
    count++
    position =para.indexOf(searchterm,position+1)
    
}
console.log(count);



