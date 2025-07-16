const elements = document.querySelectorAll(".hover");
const playerScore = document.querySelector(".pScore");
const compScore = document.querySelector(".cScore");
const gameIcon = document.querySelector(".game-icon");
const msg = document.querySelector(".msg");
const reset = document.querySelector(".reset");

let playerPoints = 0;
let compPoints = 0;

playerScore.innerText = playerPoints;
compScore.innerText = compPoints;

const compChoice = () => {
  const random = Math.floor(Math.random() * 3);
  let choice = elements[random].getAttribute("data-icon");
  return choice;
};

const checkWinner = (playerChoice, compChoice) => {
  if (playerChoice === compChoice) {
    msg.innerText = `It's a draw! Both chose ${compChoice}.`;
    msg.classList.add("draw");
  } else if (
    (playerChoice === "Rock" && compChoice === "Scissors") ||
    (playerChoice === "Scissors" && compChoice === "Paper") ||
    (playerChoice === "Paper" && compChoice === "Rock")
  ) {
    msg.innerText = `You won! Jarvis chose ${compChoice}.`;
    playerPoints++;
    msg.classList.add("winner");
  } else {
    msg.innerText = `You lost! Jarvis chose ${compChoice}.`;
    compPoints++;
    msg.classList.add("loser");
  }
};

const showWinner = (playerChoice, compChoice) => {
  gameIcon.classList.remove("win");
  void gameIcon.offsetWidth;
  gameIcon.classList.add("win");
};

elements.forEach((el) => {
  el.addEventListener("click", () => {
    msg.classList.remove("winner", "loser", "draw");
    const player = el.getAttribute("data-icon");
    const computer = compChoice();
    checkWinner(player, computer);
    showWinner(player, computer);
    playerScore.innerText = playerPoints;
    compScore.innerText = compPoints;
  });
});

reset.addEventListener("click", () => {
  playerPoints = 0;
  compPoints = 0;
  playerScore.innerText = playerPoints;
  compScore.innerText = compPoints;
  msg.classList.remove("loser", "draw");
  msg.classList.add("winner");
  msg.innerText="Make your move!"
  gameIcon.classList.remove("win");
});
