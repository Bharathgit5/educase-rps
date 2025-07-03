 const imageMap = {
  rock: "assets/rock-img1.png",
  paper: "assets/paper-img.png",
  scissors: "assets/scissor-img.png"
};
const choices = document.querySelectorAll('[data-choice]');
const welcome = document.getElementById('welcome');
const gameArea = document.getElementById('gameArea');
const resultText = document.getElementById('resultText');
const playerHand = document.getElementById('playerHand');
const computerHand = document.getElementById('computerHand');

const score = { won: 0, lost: 0, draw: 0 };

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
}

function updateScore() {
  document.getElementById('won').textContent = score.won;
  document.getElementById('lost').textContent = score.lost;
  document.getElementById('draw').textContent = score.draw;
}

choices.forEach(btn => {
  btn.addEventListener("click", () => {
    const choice = btn.getAttribute("data-choice");
    play(choice);
  });
});


function play(playerChoice) {
  const computerChoice = getComputerChoice();

  playerHand.innerHTML = `<img src="${imageMap[playerChoice]}" alt="${playerChoice}" class="icon">`;
  computerHand.innerHTML = `<img src="${imageMap[computerChoice]}" alt="${computerChoice}" class="icon">`;

  let result;
  let resultIcon = "";

  switch (playerChoice + "-" + computerChoice) {
    case "rock-scissors":
    case "paper-rock":
    case "scissors-paper":
      result = "Congrats, You Won!";
      resultIcon = "win.png";
      score.won++;
      break;
    case "rock-paper":
    case "paper-scissors":
    case "scissors-rock":
      result = "You Lost!";
    
      score.lost++;
      break;
    default:
      result = "It's a Draw!";
     
      score.draw++;
  }

  resultText.innerHTML = `${result} `;
  updateScore();

  if (!gameArea.classList.contains('hidden')) return;
  welcome.classList.add('hidden');
  gameArea.classList.remove('hidden');
}
