// For get any attribute's value

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

//For set an existing attribute's value

let setName = div.setAttribute("name", "Naimur");
console.log(setName);


//For change Style

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";
div.style.backgroundColor = "maroon";

div.style.color = "white";