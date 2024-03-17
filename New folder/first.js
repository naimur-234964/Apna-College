// console.log("First code");
// console.log("Naimur");
// console.log("Rahman");

// var a = "Naimur Rahman";
// console.log(a);

// var b = "234964";
// console.log(b);

// const number = prompt("Enter a number:");
// if(number % 5 === 0){
//     console.log ("This number " + number + " is a multiple of 5");
// }else{
//     console.log ("This number " + number + " is not a multiple of 5");
// }

const mark = prompt("Enter your mark: ");

if (mark >= 0 && mark <= 49){
    console.log("You got grade: F");
}else if (mark >= 50 && mark <= 59){
    console.log("You got grade: D");
}else if (mark >= 60 && mark <= 69){
    console.log("You got grade: C");
}else if (mark >= 70 && mark <= 79){
    console.log("You got grade: B");
}else if (mark >= 80 && mark <= 100){
    console.log("You got grade: A");
}else{
    console.log("You've entered an incorrect value.");
}