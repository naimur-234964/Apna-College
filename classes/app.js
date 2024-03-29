// Example of Prototype
// Prototype is a built-in function in an object

console.log("Hello world!");

// This is an Object
const person = {
    fullName : "Naimur Rahman",
    age : 24,
    contact : "01642608736",


    printContact : function(){
        console.log("Contact No is: ", this.contact);        
    }
}

const company = {
    companyName(){
        console.log("Solutorix");
    }
}

const employee = {
    fName: "Naimur Rahman"
}

// add 1 object's function in another object by using Prototype as .__proto__
employee.__proto__ = company;

console.log(`Employee name ${employee.fName} and company is ${employee.companyName()}`);
