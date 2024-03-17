let btn1 = document.querySelector("#btn1");
// btn1.onclick = () => {
//     console.log("button was clicked!");    
// }

btn1.addEventListener("click", (e) => {
    console.log('button was clicked!');
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX);
    console.log(e.clientY);
    
})

let box = document.querySelector(".box");

box.onmouseover = () => {
    console.log("You are  in the Div!");
    alert("Div!");  
}