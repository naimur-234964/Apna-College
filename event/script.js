let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    console.log('button clicked - Handler1');    
});

btn1.addEventListener("click", () => {
    console.log('button clicked - Handler2');    
});

const Handler3 = () =>{
    console.log('button clicked - Handler3');
};

btn1.addEventListener("click", Handler3)

btn1.addEventListener("click", () => {
    console.log('button clicked - Handler4');    
});


btn1.removeEventListener("click", Handler3);