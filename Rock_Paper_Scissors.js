
var answer = document.getElementById("ans");
var btnRock = document.getElementById("rock");
var btnPaper = document.getElementById("paper");
var btnScissors = document.getElementById("scissors");
var randomNo = Math.floor(Math.random() * 3);

var yourScore = document.getElementById("score1");
var computerScore = document.getElementById("score2");

console.log(randomNo);
var arr = ["rock", 'paper', 'scissors']
var targetValue = arr[randomNo]
console.log(targetValue);
var computerSum = 0;
var yourSum = 0;
var userWin = false;
var computerWin = false


function rockClick() {
    console.log("entered function x")
    if (targetValue == "rock") {
        answer.innerHTML = "its a tie"
    }
    else if (targetValue == "scissors") {
        answer.innerHTML = "Rock breaks scissors..You Win"
        yourSum = yourSum + 1
    }
    else {
        answer.innerHTML = "paper covers rock..Computer win"
        computerSum = computerSum + 1
    }

    yourScore.innerHTML = yourSum;
    computerScore.innerHTML = computerSum;
    randomNo = Math.floor(Math.random() * 3);
    targetValue = arr[randomNo];
    console.log(targetValue);
}
btnRock.addEventListener('click', rockClick)

function paperClick() {
    console.log("entered function y")
    if (targetValue == "paper") {
        answer.innerHTML = "its a tie"
        console.log("its a tie");
    }
    else if (targetValue == "scissors") {
        answer.innerHTML = "scissors cuts paper..Computer win!!"
        console.log("scissors cuts paper..Computer win!!");
        computerSum = computerSum + 1
    }
    else if (targetValue == "rock") {
        answer.innerHTML = "paper covers rock..you win!!"
        console.log("paper covers rock..you win!!");
        yourSum = yourSum + 1
    }

    yourScore.innerHTML = yourSum;
    computerScore.innerHTML = computerSum;
    randomNo = Math.floor(Math.random() * 3);
    targetValue = arr[randomNo];
    console.log(targetValue);
}
btnPaper.addEventListener('click', paperClick)


function scissor() {
    console.log("entered function z")

    if (targetValue == "scissors") {
        answer.innerHTML = "its a tie"
    }
    else if (targetValue == "rock") {
        answer.innerHTML = "Rock breaks scissors..Computer win!!"
        computerSum = computerSum + 1

    }
    else if (targetValue == "paper") {
        answer.innerHTML = "scissors cuts paper..you win!!"
        yourSum = yourSum + 1
    }

    yourScore.innerHTML = yourSum;
    computerScore.innerHTML = computerSum;
    randomNo = Math.floor(Math.random() * 3);
    targetValue = arr[randomNo]
    console.log(targetValue);
}
btnScissors.addEventListener('click', scissor)


