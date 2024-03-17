let name = 'Naimur';
let nam = " Rahman"

console.log(name);
console.log(nam);

console.log(name.length);
console.log(nam.length);

console.log(nam[1]);

// Template Literals
let obj = {
    nam: "Naimur",
    age: 24,
};

console.log("The name is",obj.nam,"and age is", obj.age,"years.");
console.log(`His name is ${obj.nam} and he is ${obj.age} years old`);

//Escape characters
console.log("Naimur \nRahman");
console.log("Naimur \t Rahman");


//Strings Methods
let saz="Naimur Rahman";
console.log(saz.toUpperCase());

console.log(saz.toLowerCase());

let sd = "This             is          me         ";
console.log(sd.trim());


let nai = "Naimur";
let rah = "Rahman";
console.log(nai.concat(rah));

console.log(nai.replace("i", "yee"));
console.log(nai.replaceAll("a", "u"));