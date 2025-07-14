// New lessons learnt :- 
// 1) Modular func - Har cheez ke liye ek func. This divides the work into modules and we can reuse it 
// 2) Computer choice ke liye Math.ramdom use kiya to generate a random number. 
//    Vo random string generate nahi karta so array banaya jisse vo string ke index value ko use karke number jaise use kar sakte hai

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg1");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    // *3 is used to number from 0 to that number, Math.floor(Math.random()) is used for using the random number as a whole number
    const randIndx = Math.floor(Math.random()*3);
    return options[randIndx];
}

const drawGame = () => {
    msg.innerText = "Game was draw. Play again :(";
    msg.style.backgroundColor = "white";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! Haha. ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    // Generating comp choice -> modular
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);

    if(userChoice == compChoice){
        // Draw game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice == "rock") {
            // paper, scissor
            userWin = compChoice == "paper" ? false : true;
        }
        else if(userChoice == "paper") {
            // rock, scissor
            userWin = compChoice == "scissor" ? false : true;
        }
        else {
            // rock , paper
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
