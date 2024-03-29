// Inheritance
// Inheritance is to pass Properties and Methods from Parent classes to Child Classes

class person{
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class kid extends person{
    kids(){
        console.log("kids are naughty");
    }
}

let afiya = new kid;


