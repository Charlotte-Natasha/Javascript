function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];

  // Math.Random() returns a random float from 0.0 to 1.0.
  // Multiply the result by length of array (3 in our case) to have from 0 to 3
  // Math.floor rounds down the number

  randomIndex = Math.floor(Math.random() * options.length);

    randomOption = options[randomIndex];

  // console.log(randomOption);
    return randomOption;
}

function playRound() {
  //ask user to enter
    playerSelection = prompt("Enter Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
  //call computerPlay function
    computerSelection = computerPlay().toLowerCase();

    switch (playerSelection) {
    // P is +1 for player. C is a +1 for computer
    case "rock":
        if (computerSelection == "scissors") {
        //return `You win. Rock beats Scissors`;
        return "P";
        } else if (computerSelection == "paper") {
        //return `You lose. Paper beats Rock `;
        return "C";
        } else {
        return "Tie";
        }
    case "paper":
        if (computerSelection == "scissors") {
        //return `You lose. Scissors beats Paper`;
        return "C";
        } else if (computerSelection == "rock") {
        return "P";
        //return `You win. Paper beats Rock `;
        } else {
        return `Tie`;
        }
    case "scissors":
        if (computerSelection == "paper") {
        return "P";
        //return `You win. Scissors beats Paper`;
        } else if (computerSelection == "rock") {
        return "C";
        //return `You lose. Rock beats Scissors `;
        } else {
        return `Tie`;
        }
    default:
        alert("Unknown choice.");
        return "Tie";
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (let times = 0; times < 5; times++) {
    currentRound = playRound();
    if (currentRound == "C") {
        computerScore += 1;
    } else if (currentRound == "P") {
        playerScore += 1;
    } else {
      // Tie. Decide here if we give one point to both or zero for both
        computerScore += 0;
        playerScore += 0;
    }
    }
    if (computerScore > playerScore) {
        alert(`Computer won. Score is: ${computerScore} - ${playerScore}`);
    } else if (playerScore > computerScore) {
        alert(`You won. Score is: ${playerScore} - ${computerScore}`);
    } else {
        alert(`Tie. Score is: ${playerScore} - ${computerScore} `);
    }
}

game();

// let randomChoice = {
//     'rock' : {
//         'rock' : 'draw',
//         'paper' : 'lose',
//         'scissor' : 'win'
//     },
//     'paper' : {
//         'rock' : 'win',
//         'paper' : 'draw',
//         'scissor' : 'lose'
//     },
//     'scissor' : {
//         'rock' : 'lose',
//         'paper' : 'win',
//         'scissor' : 'draw'
//     },
// }

// function check(input){

// }
