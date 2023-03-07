function getComputerChoice() {
    let computerSelection = ["rock", "paper", "scissors"];
    return computerSelection[Math.floor (Math.random() * 3)];
}

const playerSelection= prompt ("Do you choose rock, paper or scissors?");

function playRound(playerSelection,computerSelection){
    if(playerSelection == computerSelection){
      window.alert = "Draw!!!";
      return "draw";}
    else if(playerSelection=="rock" && computerSelection=="paper")
        {window.alert= "you Lose! Paper beats Rock";
        return "lose";}
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        window.alert="you Lose! Scissors beats Paper";
        return "lose";}
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        window.alert=  "you Lose! Rock beats Scissors";
        return "lose";}
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        window.alert= "you Win! Rock beats Scissors";
        return "win";}
    else if (playerSelection == "paper" && computerSelection == "rock"){
        window.alert= "you Win! Paper beats Rock";
          return "win";}
    else (playerSelection == "scissors" && computerSelection == "paper")
        {window.alert= "you Win! Scissors beats Paper";
        return "win";}
}

function game(){
    let wins =0;
    let loses=0;
    const computerSelection=getComputerChoice();
    const result = playRound(playerSelection,computerSelection);
    const resultFinal=result.slice(0,5);
    if (resultFinal ==="win"){wins++;}
    else if (resultFinal==="lose"){loses++;}

if (wins>loses) {window.alert("You win the game")}
else if (loses>wins){window.alert("You lose the game. Try again.")}
else {window.alert("It's a draw. Try again.")}
}