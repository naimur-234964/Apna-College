const viewData = "This is ViewData function";
const editData = "This is EditData function, Admin can edit data";

class User {
    constructor (name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(viewData);
    }
}

class Admin extends User{
    constructor(name, email) {
        super(name, email);
    }
    editData(){
        console.log(editData);
    }
}

let u = new Admin("admin", "lakfsjdl");