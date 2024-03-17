//For adding an element with js

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";

let div = document.querySelector("div");
div.append(newBtn); //For adding in last in the node
div.prepend(newBtn); //For adding in first in the node

div.before(newBtn); //For adding element just before the node
div.after(newBtn); //For adding element just after the node

//adding new Heading in the body with JS

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi! This is new Heading</i>";

document.querySelector("body").prepend(newHeading);


//Deleting any node
let p = document.querySelector("p")
p.remove();