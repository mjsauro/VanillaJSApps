//define player controls
const playerRockBtn = document.querySelector("#player-rock-btn");
const playerPaperBtn = document.querySelector('#player-paper-btn');
const playerScissorsBtn = document.querySelector('#player-scissors-btn');

//define player choice
let choice;

loadEventListeners();

//event listeners
function loadEventListeners() {
  playerRockBtn.addEventListener('click', rock);
  playerPaperBtn.addEventListener('click', paper);
  playerScissorsBtn.addEventListener('click', scissor);
  
};

//process player choice
function rock(e) {
  console.log("rock");
  choice = "rock";
  play(choice);
  e.preventDefault();
}

function paper(e) {
  console.log("paper");
  choice = "paper";
  play(choice);
  e.preventDefault();
}

function rock(e) {
  console.log("scissors");
  choice = "scissors";
  play(choice);
  e.preventDefault();
}

