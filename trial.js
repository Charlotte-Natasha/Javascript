function computerPlay(){
    let options = ["Rock", "Paper", "Scissors"]; 
    
    randomIndex = Math.floor(Math.random() * options.length);
    
    // Using Date.now() instead of math to randomize
    randomIndex = Date.now()/1000
    
    randomOption = options[randomIndex];
    
    return randomOption
    
    }

let choicesObject = {
    'rock' : {
        'rock' : 'draw',
        'scissors' : 'win', 
        'paper' : 'lose'
    },
    'scissors' : {
        'rock': 'lose',
        'scissors' : 'draw',
        'paper' : 'win'
    }, 
    'paper' : {
        'rock' : 'win',
        'scissors' : 'lose',
        'paper' : 'draw'
    }
}

function playRound(){
    playerSelection = prompt("Enter Rock, Paper or Scissors");
    playerSelection = playerSelection.toLowerCase();
    // check to make sure they enter either rock, paper or scissors:
    if (playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors'){
        alert(`${playerSelection} is not a valid choice`);
        return 'lose'
    }
    computerSelection = computerPlay().toLowerCase();

    result = choicesObject[playerSelection][computerSelection]
    return result  
    }

function game(){
    let computerScore = 0;
    let playerScore = 0;
    
    for (let times = 0; times < 5; times++){
        currentRound = playRound();
        if (currentRound == 'lose'){
        computerScore += 1;
        }
        else if(currentRound == 'win'){
        playerScore += 1;
        }
        else{
        // Tie. Decide here if we give one point to both or zero for both
        computerScore += 0;
        playerScore +=0
        }
    }
    if (computerScore > playerScore){
        alert(`Computer won. Score is: ${computerScore} - ${playerScore}`);
    }
    else if(playerScore > computerScore){
        alert(`You won. Score is: ${playerScore} - ${computerScore}`);
    }
    else{
        alert(`Tie. Score is: ${playerScore} - ${computerScore} `)
    }
    
    }
    
    


// let choicesObject = {
//     'rock' : {
//         'rock' : 'draw',
//         'scissor' : 'win',
//         'paper' : 'lose'
//     },
//     'scissor' : {
//         'rock' : 'lose',
//         'scissor' : 'draw',
//         'paper' : 'win'
//     },
//     'paper' : {
//         'rock' : 'win',
//         'scissor' : 'lose',
//         'paper' : 'draw'
//     }
//     }

//     function checker(input){
//         let choices = ["rock", "paper", "scissor"];
//         let num = Math.floor(Math.random()*3);
    
//         let computerChoice = choices[num];
//             let result
    
//         switch(choicesObject[input][computerChoice]){
//             case 'win':
//             result = "YOU WIN";
//             break;
//             case 'lose':
//             result = "YOU LOSE";
//             break;
//             default:
//             result = "DRAW";
//             break;
//         }
//     }    