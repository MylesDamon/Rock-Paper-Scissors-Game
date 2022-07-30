//let person = prompt("Choose: Rock, Paper, Or Scissors")

// Computer's random choice;
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"] 
    return choice[Math.floor(Math.random() * choice.length)]
 }

// Playing a single round that will determine winner based on what the user choose
function round(playerSelection, computerSelection) {
   let tie = "It's a Tie! You selected " + playerSelection + "." + " The computer selected " + computerSelection + "."
   let youWin = "YOU WIN! You selected " + playerSelection + "." + " The computer selected " + computerSelection + "."
   let youLose = "YOU LOSE! You selected " + playerSelection + "." + " The computer selected " + computerSelection + "."

   if (playerSelection === "Rock".toUpperCase() && computerSelection === "ROCK") {
    return tie;
   } else if (playerSelection === "Rock".toUpperCase() && computerSelection === "PAPER") {
    return youLose;
   } else if (playerSelection === "Rock".toUpperCase() && computerSelection === "SCISSORS") {
    return youWin;
   }
 }

const playerSelection = "ROCK";
const computerSelection = getComputerChoice()
console.log(round(playerSelection,computerSelection))

