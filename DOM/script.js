// let heading = document.querySelector("h2");

// heading.innerText = heading.innerText + " from Naimur Rahman";

let divs = document.querySelectorAll(".box");

let i = 100;
for(div of divs){
    div.innerText = `new text ${i}`;
    i++;
}

// console.dir(divs);
// divs[0].innerText = "new text 1";
// divs[1].innerText = "new text 2";
// divs[2].innerText = "new text 3";