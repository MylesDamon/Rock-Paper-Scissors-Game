let playerScore = 0
let computerScore = 0

// Computer's random choice;
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"] 
    return choice[Math.floor(Math.random() * choice.length)]
 }

// Playing a single round that will determine winner based on what the user choose
function round(playerSelection, computerSelection) {
   let tie = "It's a Tie! You both selected " + computerSelection
   let youWin = "YOU WIN! " + playerSelection + " beats " + computerSelection + "."
   let youLose = "YOU LOSE! " + computerSelection + " beats " + playerSelection + "."
    


   if (playerSelection === "Rock".toUpperCase() && computerSelection === "ROCK") {
      result = tie
      return;
   } else if (playerSelection === "Rock".toUpperCase() && computerSelection === "PAPER") {
     result = youLose
     computerScore++
     return;
   } else if (playerSelection === "Rock".toUpperCase() && computerSelection === "SCISSORS") {
     result = youWin
     playerScore++
     return;
   }
   

   if (playerSelection === "paper".toUpperCase() && computerSelection === "PAPER") {
     result = tie
      return;
   } else if (playerSelection === "paper".toUpperCase() && computerSelection === "SCISSORS") {
     result = youLose
     computerScore++
     return;
   } else if (playerSelection === "paper".toUpperCase() && computerSelection === "ROCK") {
     result = youWin
     playerScore++
     return;
   }
   

   if (playerSelection === "scissors".toUpperCase() && computerSelection === "SCISSORS") {
     result = tie
     return;
   } else if (playerSelection === "scissors".toUpperCase() && computerSelection === "ROCK") {
     result = youLose
     computerScore++
     return;
   } else if (playerSelection === "scissors".toUpperCase() && computerSelection === "PAPER") {
     result = youWin
     playerScore++
     return;
   }
    
}

 function game() {
    for (i = 0; i < 5; i++) {
    
    const playerSelection = prompt("Choose: Rock, Paper, Or Scissors").toUpperCase(); //Makes the user's choice case-insensitive 
    const computerSelection = getComputerChoice()   
   
       

    round(playerSelection,computerSelection)
    console.log(result)
    console.log("Player Score: " + playerScore)
    console.log("Computer Score: " + computerScore)  
    }

}

 console.log(game())