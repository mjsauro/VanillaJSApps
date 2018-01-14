//define componenets

//player componenents
const playerRockBtn = document.querySelector("#player-rock-btn");
const playerPaperBtn = document.querySelector('#player-paper-btn');
const playerScissorsBtn = document.querySelector('#player-scissors-btn');
const playerRockIcon = document.querySelector("#player-rock-icon");
const playerPaperIcon = document.querySelector("#player-paper-icon");
const playerScissorsIcon = document.querySelector("#player-scissors-icon");

//computer componenets
const computerRockIcon = document.querySelector("#computer-rock-icon");
const computerPaperIcon = document.querySelector("#computer-paper-icon");
const computerScissorsIcon = document.querySelector("#computer-scissors-icon");
const computerRockBtn = document.querySelector("#computer-rock-btn");
const computerPaperBtn = document.querySelector("#computer-paper-btn");
const computerScissorsBtn = document.querySelector("#computer-scissors-btn");
let compIcon;
let compBtn;
//all buttons
const buttons = document.getElementsByTagName('button');

//loader component
const loadIcon = document.querySelector('#load-icon');

//define player choice
let choice;

//define computer choice
let computerChoice;

loadEventListeners();

//event listeners
function loadEventListeners() {
  playerRockBtn.addEventListener('click', rock);
  playerPaperBtn.addEventListener('click', paper);
  playerScissorsBtn.addEventListener('click', scissors);

};

//process player choice rock
function rock(e) {
  //assign player choice
  choice = "rock";

  e.preventDefault();

  //start play
  play(choice, playerRockIcon, playerRockBtn);

}

//process player choice paper
function paper(e) {

  //assign player choice
  choice = "paper";
  e.preventDefault();

  //start play
  play(choice, playerPaperIcon, playerPaperBtn);

}

//process player choice scissors
function scissors(e) {

  //assign player choice
  choice = "scissors";
  e.preventDefault();

  //start play
  play(choice, playerScissorsIcon, playerScissorsBtn);

}

//get computer's random choice
function getRandom() {

  let decision = Math.floor(Math.random() * (3 - 1 + 1) + 1);

  switch (decision) {
    case 1:
      decision = 'rock';
      compIcon = computerRockIcon;
      compBtn = computerRockBtn;
      load()
      break;
    case 2:
      decision = 'paper';
      compIcon = computerPaperIcon;
      compBtn = computerPaperBtn;
      load()
      break;
    case 3:
      decision = 'scissors';
      compIcon = computerScissorsIcon;
      compBtn = computerScissorsBtn;
      load()
  }


  computerChoice = decision;
  return;
}

//show loader after computer random choice
function load() {
  //add loading
  loadIcon.classList.remove('hidden');
  //wait and call function to add icon and active button
  setTimeout(function () {
    computerIconAndButton(compIcon, compBtn);
  }, 2000, );
}

//change computer icon and button
function computerIconAndButton(icon, button) {
  //remove loading image
  loadIcon.classList.add('hidden');
  //show computer image
  compIcon.classList.remove('hidden');
  //show active button
  compBtn.classList.remove('btn-warning');
  compBtn.classList.add('btn-danger');
}

//start play
function play(playerChoice, icon, button) {

  //show icon
  icon.classList.remove("hidden");
  button.classList.remove('btn-primary');
  button.classList.add('btn-success');
  //disable all buttons
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add('disabled');
  }


  const computerChoice = getRandom();
  getResults()
}

//evaluate results
function getResults() {
  console.log("Player\'s choice is " + choice);
  console.log("Computer's choice is " + computerChoice);

  //check for tie, then check for win and call win or lose function
  if (choice == computerChoice) {
    tie();
  } else {
    switch (choice) {
      case "rock":
        computerChoice == 'scissors' ? win() : lose();
        break;
        case 'paper':
        computerChoice == 'rock' ? win() : lose();
      case "scissors":
        computerChoice == 'paper' ? win() : lose();
        break;
    }
  }
}

function win()
{
  console.log("You win");
}

function lose()
{
  console.log("You lost");
}

function tie()
{
  console.log("You tied");
}