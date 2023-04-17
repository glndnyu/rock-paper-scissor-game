const choices = ["Rock", "Paper", "Scissor"];
let playerPoints = 0;
let computerPoints = 0;
function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function checkWinner(){
  if(playerPoints == 5){ 
    alert("You win!");
    playGame();
  } if(computerPoints == 5){
    alert("You lose");
    playGame();
  }
}

function playRound(event){
  const playerSelection = event.target.textContent;
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  if(playerSelection == computerSelection){
    alert("You both chose " + playerSelection + ". This round's a tie!");
    console.log(`${playerPoints}, ${computerPoints}`);
    return;
  }
  switch (true){
    case playerSelection == "Rock" && computerSelection == "Scissor":
    case playerSelection == "Paper" && computerSelection == "Rock":
    case playerSelection == "Scissor" && computerSelection == "Paper":
      alert("You win this round! "+ playerSelection + " wins against "+computerSelection);
      playerPoints++;
      break;
    default:
      alert("You lose this round! "+ computerSelection + " wins against "+playerSelection);
      computerPoints++;
      break;
  }
  console.log(`${playerPoints}, ${computerPoints}`);
  checkWinner();
}

function playGame(){
  playerPoints = 0;
  computerPoints = 0;
  const buttons = document.querySelectorAll("button");
  buttons.forEach(button => {
  button.addEventListener("click", playRound);
  });
}

playGame();