// Example of Through Class

console.log('hello world');

class house {
    door() {
        console.log('Door');        
    }
    window() {
        console.log("Window");
    }
    fan() {
        console.log('Fan');        
    }
    light() {
        console.log("Light");
    }

    ownerName(owner){
        this.owner = owner;
    }
}

let myHome = new house;
myHome.ownerName("Naimur Rahman");