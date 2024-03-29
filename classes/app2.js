class biCycle {
    constructor(brand) {
        console.log("My cycle created");
        this.brand = brand;
        console.log(`My cycle's brand is ${brand}`);
    }
    wheel(){
        console.log(26);
    }
    color(){
        console.log("Black");
    }
}

let myCycle = new biCycle("Core");
// myCycle.brand = "Core";