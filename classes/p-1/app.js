const data = "This is ViewData Function";

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data : ", data);
    }
}

let n = new User("naimur", "n@mail.com");