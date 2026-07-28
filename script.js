

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
        humanScore++;

    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("you lose, Rock beats Scissors");
        computerScore++;

    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("you won, Scissors beats Paper");
        humanScore++;

    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("you lose, Scissors beats Paper");
        computerScore++;

    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("you won, Paper beats Rock");
        humanScore++;

    }
    else if (humanChoice=="rock" && computerChoice== "paper"){
        console.log("you lose, Paper beats Rock");
        computerScore++;

    }
    else{ 
        console.log("Its a tie!");

    }

}




// a function that tracks scores and decide the winner
function playGame(){
    for (let round=1;round<=5; round++){
        console.log(`This is round ${round}`);
        const humanSelection= getHumanChoice();
        const computerSelection= getComputerChoice();
        playRound(humanSelection,computerSelection);
        

    }
    if (humanScore>computerScore){
        console.log(`Congratulations! you are the winner`);

    }
    else if(computerScore>humanScore){
        console.log("Oops, you lose.");
    }
    else{
        console.log("Oops, its a tie.")
    }
}

playGame();