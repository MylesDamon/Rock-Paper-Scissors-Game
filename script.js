

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
   let result;

   if (playerSelection === "Rock".toUpperCase() && computerSelection === "ROCK") {
    result = tie
    return tie;
   } else if (playerSelection === "Rock".toUpperCase() && computerSelection === "PAPER") {
    result = youLose
    return youLose;
   } else if (playerSelection === "Rock".toUpperCase() && computerSelection === "SCISSORS") {
    result = youWin
    return youWIn;
   }

   if (playerSelection === "paper".toUpperCase() && computerSelection === "PAPER") {
    result = tie
    return tie;
   } else if (playerSelection === "paper".toUpperCase() && computerSelection === "SCISSORS") {
    result = youLose
    return youLose;
   } else if (playerSelection === "paper".toUpperCase() && computerSelection === "ROCK") {
    result = youWin
    return youWin;
   }

   if (playerSelection === "scissors".toUpperCase() && computerSelection === "SCISSORS") {
    result = tie
    return result;
   } else if (playerSelection === "scissors".toUpperCase() && computerSelection === "ROCK") {
    result = youLose
    return youLose;
   } else if (playerSelection === "scissors".toUpperCase() && computerSelection === "PAPER") {
    result = youWin
    return youWin;
   }
   console.log(result)
 }

 //function game() {
  //  let playerScore = 0;
   // let computerScore = 0;
   // for (i = 0; i < 5; i++) {
    
  //     const playerSelection = prompt("Choose: Rock, Paper, Or Scissors").//toUpperCase(); //Makes the user's choice case-insensitive 
  //      const computerSelection = getComputerChoice()
   //     round(if (result = youWin) {
   //         playerScore += 1
    //    } else if (result = youLose) {
     //       computerScore += 1
     //   })
        
//console.log(playerScore)
//console.log(computerScore)
  ///  }
   

// }

// console.log(game())