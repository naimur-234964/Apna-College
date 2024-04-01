// Super keyword
// Super keyword is used when a Child class wants to create a constructor while there is also a constructor in Parent class

class newPerson{
    constructor(name){
        this.name = name;
        console.log(name);
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends newPerson{
    constructor(branch){
        super();
        this.branch = branch;
        console.log("Branch is : ", branch);
    }
    engineer(){
        console.log("kids are naughty");
    }
}

let enggObj = new engineer("mechanical");