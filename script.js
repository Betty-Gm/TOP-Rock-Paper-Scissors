

// global variables to keep track of human and computer scores
let humanScore= 0;
let computerScore= 0;


// a function to get the computer choice 
function getComputerChoice(){
    let cprChoice= Math.floor(Math.random()*3);
    
    if (cprChoice==0){
        cprChoice= "rock";
    }
    else if(cprChoice==1){
        cprChoice="paper";
    }
    else {
        cprChoice="scissors";
    }
  
    return cprChoice;



}

// function to get the human choice 
function getHumanChoice(){
    let humanChoice = (prompt("enter your choice: Rock | Paper | Scissors")).toLowerCase();
   return humanChoice;
    
}

// function to play in rounds
function playRound(humanChoice, computerChoice){

    console.log(`your choice: ${humanChoice}
computer choice: ${computerChoice}\n`);

    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("you won, Rock beats Scissors");

    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("you lose, Rock beats Scissors");

    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("you won, Scissors beats Paper");

    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("you lose, Scissors beats Paper");

    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("you won, Paper beats Rock");

    }
    else if (humanChoice=="rock" && computerChoice== "paper"){
        console.log("you lose, Paper beats Rock");

    }
    else{ 
        console.log("Its a tie!");

    }

}

const humanSelection= getHumanChoice();
const computerSelection= getComputerChoice();

playRound(humanSelection,computerSelection);

