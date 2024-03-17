let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const drawGame = ()=>{
    console.log('Game was draw!');    
}

const genCompChoice = () =>{
    const choices = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random() * 3);
    return choices[idx];
}

const showWinner = (userWin) =>{
    if (userWin){
        console.log('you win');        
    }else{
        console.log('you lose');
        
    }
}

const playGame = (userChoice) =>{
    console.log("user Choice =", userChoice);
    
    const compChoice = genCompChoice();
    console.log("computer Choice =", compChoice);

    if(userChoice === compChoice){
        drawGame();
        document.querySelector("#msg").innerText = "Game was draw!";
    }else{
        const userWin = true;
        if(userChoice === "rock"){
            //paper, scissor
             userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //scissor, rock
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock, paper
            userWin = compChoice === "rock" ?  false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});