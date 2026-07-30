
// to add listener to the buttons

const rockBtn= document.getElementById("rock-btn");
const paperBtn= document.getElementById("paper-btn");
const scissorsBtn= document.getElementById("scissor-btn");

rockBtn.addEventListener("click",()=>{
    playRound("rock",getComputerChoice());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});



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


// get div reference 
const myDiv= document.getElementById("div");
// function to play in rounds
function playRound(humanChoice, computerChoice){
    
    const resultPara = document.createElement("p");
    let resultText = `your choice: ${humanChoice}
computer choice: ${computerChoice} =>
`;


    if(humanChoice=="rock" && computerChoice=="scissors"){
        resultText+="you won, Rock beats Scissors";
        humanScore++;

    }
    else if(humanChoice=="scissors" && computerChoice=="rock"){
        resultText+="you lose, Rock beats Scissors";
        computerScore++;

    }
    else if(humanChoice=="scissors" && computerChoice=="paper"){
        resultText +="you won, Scissors beats Paper";
        humanScore++;

    }
    else if(humanChoice=="paper" && computerChoice=="scissors"){
        resultText +="you lose, Scissors beats Paper";
        computerScore++;

    }
    else if(humanChoice=="paper" && computerChoice=="rock"){
        resultText +="you won, Paper beats Rock";
        humanScore++;

    }
    else if (humanChoice=="rock" && computerChoice== "paper"){
        resultText +="you lose, Paper beats Rock";
        computerScore++;

    }
    else{ 
        resultText +="Its a tie!";

    }

    
    resultPara.textContent= resultText;
    document.getElementById("results-div").appendChild(resultPara);
    document.getElementById("human-score").textContent=humanScore;
    document.getElementById("computer-score").textContent=computerScore;
    
    if (humanScore===5){
        myDiv.append("Game Over! You reached 5 points, you win the match!");
        disableButtons();
        resetBtn.style.display="inline-block";
    }
    else if(computerScore===5){
        myDiv.append("Game Over! The computer reached 5 points, you lose.");
        disableButtons();

    }
}

//function to disable buttons
function disableButtons(){
    document.querySelectorAll(".choice-btn").forEach(button=>button.disabled=true);

}

// to reset buttons 
const resetBtn= document.getElementById("reset-btn");

resetBtn.addEventListener("click", ()=>{
    humanScore=0;
    computerScore=0;
    document.getElementById("human-score").textContent=humanScore;
    document.getElementById("computer-score").textContent=computerScore;
    document.getElementById("results-div").textContent="";
    myDiv.textContent="";
    document.querySelectorAll(".choice-btn").forEach(button=>{
        button.disabled=false;

    });
    resetBtn.style.display="none";
})


// a function that tracks scores and decide the winner
function playGame(){
    
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

