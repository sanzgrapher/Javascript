document.getElementById("title").innerHTML = `This is the example of the charAt() function 
syntax :
varname.charAt(index);`;

const name = 'naran';
let index = 3;
console.log(`In ${name} The letter at ${index} is  ${name.charAt(index)}`);

// getting last character at string 
console.log(name.charAt(name.length - 1));

