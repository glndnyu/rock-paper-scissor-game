const choices = ["Rock", "Paper", "Scissor"];
let playerPoints = 0;
let computerPoints = 0;
const buttons = document.querySelectorAll("button");
const h2 = document.querySelector("h2");
const h4 = document.querySelector("h4");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const playerImage = document.getElementById("player");
const computerImage = document.getElementById("computer");

function getComputerChoice(){
  const computerChoice = Math.floor(Math.random() * choices.length);
  return choices[computerChoice];
}

function playAnotherRound(){
  if(confirm("Play another round?")){
    playGame();
  } else{
    alert("Bye!");
    document.documentElement.style.display = "none";
  }
}

function checkWinner(){
  if(playerPoints == 5){ 
    buttons.forEach(button => {
      button.removeEventListener("click", playRound);
    });
    h2.textContent = "YOU WIN!";
    h4.textContent = "Congrats 🎆!";
    setTimeout(playAnotherRound, 500);
  } if(computerPoints == 5){
    buttons.forEach(button => {
      button.removeEventListener("click", playRound);
    });
    h2.textContent = "YOU LOSE!";
    h4.textContent = "Sorry 😔!";
    setTimeout(playAnotherRound, 500);
  }
}

function playRound(event){
  const playerSelection = event.target.alt;
  const computerSelection = getComputerChoice();

  playerImage.src = `images/${playerSelection}.png`;
  computerImage.src = `images/${computerSelection}.png`;
  if(playerSelection == computerSelection){
    h2.textContent = "Round is a tie!";
    h4.textContent = `Both chose ${playerSelection}`;
    return;
  }
  switch (true){
    case playerSelection == "Rock" && computerSelection == "Scissor":
    case playerSelection == "Paper" && computerSelection == "Rock":
    case playerSelection == "Scissor" && computerSelection == "Paper":
      h2.textContent = "You win this round!";
      h4.textContent = `${playerSelection} wins against ${computerSelection}`;
      playerScore.textContent = ++playerPoints
      break;
    default:
      h2.textContent = "You lose this round!";
      h4.textContent = `${playerSelection} loses against ${computerSelection}`;
      computerScore.textContent = ++computerPoints;
      break;
  }
  checkWinner();
}

function playGame(){
  initialize();
  buttons.forEach(button => {
  button.addEventListener("click", playRound);
  });
}

function initialize(){
  playerPoints = 0;
  computerPoints = 0;
  h2.textContent = "Choose your hand";
  h4.textContent = "First to score 5 points win the game";
  playerScore.textContent = playerPoints;
  computerScore.textContent = computerPoints;
  playerImage.src = "";
  computerImage.src = "";
}

playGame();