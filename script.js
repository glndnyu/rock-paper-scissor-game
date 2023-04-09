const choices = ["Rock", "Paper", "Scissor"];

function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function getPlayerChoice(){
  const playerChoice = prompt("Rock Paper Scissor, pick your weapon!");
  if(playerChoice.toLowerCase() == "rock") return choices[0];
  if(playerChoice.toLowerCase() == "paper") return choices[1];
  if(playerChoice.toLowerCase() == "scissor") return choices[2];
  alert("Invalid Input");
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

console.log(computerSelection + " vs " + playerSelection);

function playRound(playerSelection, computerSelection){

}

function game(){

}