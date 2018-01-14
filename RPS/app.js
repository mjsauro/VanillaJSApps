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

//reset button
const resetButton = document.querySelector("#reset-btn");

//loader component
const loadIcon = document.querySelector('#load-icon');

//reacord panel and components
const recordPanel = document.querySelector('#record-panel');
const recordDisplay = document.querySelector("#record-display");
const clearButton = document.querySelector("#clear-button");
//message panel and heading components
const messagePanel = document.querySelector("#message-panel");
const resultMessage = document.querySelector("#result-message");

//define player choice
let choice;

//define computer choice
let computerChoice;

//win/loss/tie counters
let winCounter,
  lossCounter,
  tieCounter;

//load win/loss/tie record
loadResults();

// win/loss/tie record function
function loadResults() {

  winCounter = JSON.parse(localStorage.getItem('wins'));
  lossCounter = JSON.parse(localStorage.getItem('losses'));
  tieCounter = JSON.parse(localStorage.getItem('ties'));

  if (winCounter === null && lossCounter === null && tieCounter === null) {
    recordPanel.classList.add('hidden');
  } else {

    if (winCounter === null) {
      winCounter = 0;
    }

    if (lossCounter === null) {
      lossCounter = 0;
    }

    if (tieCounter === null) {
      tieCounter = 0;
    }

    recordDisplay.innerHTML = "Wins:&emsp;&emsp;" + winCounter +
      "&emsp;&emsp;Losses:&emsp;&emsp;" + lossCounter +
      "&emsp;&emsp;Ties:&emsp;&emsp;" + tieCounter;
  }

}

//load event listeners
loadEventListeners();

//event listeners
function loadEventListeners() {
  playerRockBtn.addEventListener('click', rock);
  playerPaperBtn.addEventListener('click', paper);
  playerScissorsBtn.addEventListener('click', scissors);
  resetButton.addEventListener('click', function () {
    location.reload();
  });
  clearButton.addEventListener('click', function () {

    localStorage.clear();
    location.reload();
  });
}

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
      load();
      break;
    case 2:
      decision = 'paper';
      compIcon = computerPaperIcon;
      compBtn = computerPaperBtn;
      load();
      break;
    case 3:
      decision = 'scissors';
      compIcon = computerScissorsIcon;
      compBtn = computerScissorsBtn;
      load();
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

  clearButton.classList.remove('disabled');

  const computerChoice = getRandom();
  getResults();
}

//evaluate results
function getResults() {
  console.log("Player's choice is " + choice);
  console.log("Computer's choice is " + computerChoice);

  //check for tie, then check for win and call win or lose function
  if (choice === computerChoice) {
    tie();
  } else {
    switch (choice) {
      case "rock":
        computerChoice === 'scissors' ? win() : lose();
        break;
      case 'paper':
        computerChoice === 'rock' ? win() : lose();
        break;
      case "scissors":
        computerChoice === 'paper' ? win() : lose();
        break;
    }
  }
}

//win function
function win() {
  let winningMsg = choice.toUpperCase() + " beats " + computerChoice.toUpperCase() + ". You win!";
  let panelClass = "panel-success";
  let buttonClass = "btn-success";
  winCounter += 1;
  setTimeout(function () {
    showMessage(winningMsg, panelClass, buttonClass);
  }, 2000);
}

//lose function
function lose() {
  let losingMsg = computerChoice.toUpperCase() + " beats " + choice.toUpperCase() + ". You lose!";
  let panelClass = "panel-danger";
  let buttonClass = "btn-danger";
  lossCounter += 1;
  setTimeout(function () {
    showMessage(losingMsg, panelClass, buttonClass);
  }, 2000);
}

//draw function
function tie() {
  let tieMsg = "You both chose " + choice.toUpperCase() + ". It's a draw.";
  let panelClass = "panel-warning";
  let buttonClass = "btn-warning";
  tieCounter += 1;
  setTimeout(function () {
    showMessage(tieMsg, panelClass, buttonClass);
  }, 2000);
}

//show message
function showMessage(msg, panelClass, buttonClass) {
  console.log(msg);

  //show panel, add color class, add button class
  messagePanel.classList.remove("hidden");
  messagePanel.classList.add(panelClass);
  resetButton.classList.add(buttonClass);
  resetButton.classList.remove('disabled');
  resetButton.classList.add('active');
  resetButton.classList.add("btn");

  //add message
  resultMessage.innerHTML = msg;

  //save results
  saveResults(winCounter, lossCounter, tieCounter);
}

//save results function
function saveResults(winCounter, lossCounter, tieCounter) {
  localStorage.setItem('wins', JSON.stringify(winCounter));
  localStorage.setItem('losses', JSON.stringify(lossCounter));
  localStorage.setItem('ties', JSON.stringify(tieCounter));
}