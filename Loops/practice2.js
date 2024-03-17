let gameNumber = 523;

let guess = prompt("Guess the game number: ");

while (guess != gameNumber) {
    guess = prompt("You guessed wrong. Guess again: ");
}

alert("You've guessed Right!");
console.log("You've guessed Right!");


// if (gameNumber == guess) {
//     alert("You've guessed Right!");
//     console.log("You've guessed Right!");
// }else{
//     alert("You've guessed Wrong!");
//     console.log("You've guessed Wrong!");    
// }