let player = 0;
let computer = 0;
let gameOn = true;

const handof = ["ROCK", "PAPER", "SCISSORS"];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = document.getElementById("playerScore");
let cpuScore = document.getElementById("cpuScore");
const roundOutcome = document.getElementById("roundOutcome");
const gameResult = document.getElementById("gameResult");

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  return handof[randomNum];
}

function playRound(button) {
  player == 5 || computer == 5 ? gameOn = false : gameOn = true;
  if(gameOn == false) {
    return;
  }

  const playerSelection = button.innerText;
  const computerSelection = getComputerChoice();
  
  const playerWins = ()=> {
    player++;
    playerScore.innerText = player;
    roundOutcome.innerHTML = `Won Round! ${playerSelection} beats ${computerSelection}`;
  }
  
  const playerLoses = ()=> {
    computer++;
    cpuScore.innerText = computer;
    roundOutcome.innerHTML = `Lost Round! ${computerSelection} beats ${playerSelection}`;
  }
  
  switch(gameOn){
    case playerSelection == computerSelection:
      roundOutcome.innerHTML = "Draw!";
      break;
    case playerSelection == 'ROCK' && computerSelection == 'PAPER':
      playerLoses();
      break;
    case playerSelection == "PAPER" && computerSelection == "SCISSORS":
      playerLoses();
      break;
    case playerSelection == "SCISSORS" && computerSelection == "ROCK":
      playerLoses();
          break;
    case playerSelection == "ROCK" && computerSelection == "SCISSORS":
          playerWins();
          break;
    case playerSelection == "PAPER" && computerSelection == "ROCK":
          playerWins();
          break;
    case playerSelection == "SCISSORS" && computerSelection == "PAPER":
          playerWins();
    default:break;
  }
  if(player > 4 || computer > 4){
    winnerText();
  }
}

const winnerText = ()=>{
  player > computer
    ? (gameResult.innerHTML = "Congratulations! You won the game")
    : (gameResult.innerHTML = "Oops! You lost this time");
}
