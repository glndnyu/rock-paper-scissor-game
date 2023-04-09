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
  return getPlayerChoice();
}

function playRound(playerSelection, computerSelection){
  const win = "win";
  const lose = "lose"
  const tie = "tie";

  if(playerSelection == computerSelection){
    alert("You both chose " + playerSelection + ". This round's a tie!");
    return tie;
  }
  if (playerSelection == "Rock"){
    alert("You win this round!");
    return win;
  } 
  alert("You lost this round");
  return lose;
}

function playGame(){
  let playerPoints = 0;
  let computerPoints = 0;
  let round = 1;

  while (round <=5){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    if (roundResult.includes("lose")) computerPoints++;
    else if (roundResult.includes("win")) playerPoints++;
    round++;
  }

  if(playerPoints == computerPoints) alert("It's a tie! Score is " + playerPoints + " & " + computerPoints);
  else if (playerPoints > computerPoints) alert("You win! Score is " + playerPoints + " & " + computerPoints);
  else alert("Computer wins! Score is " + playerPoints + " & " + computerPoints);
}