let button = document.querySelector("#mode");

let currMode = "light";

button.addEventListener("click", () => {
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
    console.log(currMode);
});