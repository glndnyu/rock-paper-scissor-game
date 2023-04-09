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
  const win = true;
  const lose = false;

  if(playerSelection == computerSelection){
    alert("You both chose " + playerSelection + ". This round's a tie!");
    return;
  }
  switch (true){
    case playerSelection == "Rock" && computerSelection == "Scissor":
    case playerSelection == "Paper" && computerSelection == "Rock":
    case playerSelection == "Scissor" && computerSelection == "Paper":
      alert("You win this round! "+ playerSelection + " wins against "+computerSelection);
      return win;
    default:
      alert("You lose this round! "+ computerSelection + " wins against "+playerSelection);
      return lose;
  }
}

function playGame(){
  let playerPoints = 0;
  let computerPoints = 0;
  let round = 1;

  while (round <=5){
    const computerSelection = getComputerChoice();
    const playerSelection = getPlayerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    if (!roundResult && roundResult != undefined) computerPoints++;
    else if (roundResult) playerPoints++;
    round++;
  }

  if(playerPoints == computerPoints) alert("It's a tie! Score is " + playerPoints + " & " + computerPoints + ".");
  else if (playerPoints > computerPoints) alert("You win! Score is " + playerPoints + " & " + computerPoints +".");
  else alert("Computer wins! Score is " + playerPoints + " & " + computerPoints +".");
}

playGame();