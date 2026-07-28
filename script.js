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

