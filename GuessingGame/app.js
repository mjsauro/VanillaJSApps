//Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;
console.log(winningNum);
//UI elements

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//Assign UI Min and Max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    //Validate
    if (isNaN(guess) | guess < min | guess > max) {
        setMessage('Please enter a number between ' + min + ' and ' + max + '.', "red")

    } else {

        //Win condition
        if (guess === winningNum) {
            //winning guess
            gameOver(true, winningNum + ' is correct. You win.');

        } else {
            //Wrong guess
            guessesLeft -= 1;
            if (guessesLeft === 0) {
                //Game over
                gameOver(false, "Game over.  The correct number was " + winningNum + '.');


            } else {
                //Game continues, answer wrong
                //Wrong message and guesses left
                setMessage('Wrong number, try again. You have ' + guessesLeft + ' guesses left.', 'red');
                //change border color
                guessInput.style.borderColor = 'red';
                //clear input
                guessInput.value = '';
            }
        }
    }
});

//Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    //Disable Input
    guessInput.disabled = true;
    //Change border color
    guessInput.style.borderColor = color;
    //set message 
    setMessage(msg, color);
    //reset game
    resetGame();
}

//Set message
function setMessage(msg, color) {
    //change text to red
    message.style.color = color;
    //show message
    message.textContent = msg;
    //change border color to red
    guessInput.style.borderColor = color;
}

//Reset game
function resetGame() {
    guessBtn.value = "Reset";
    guessBtn.addEventListener("mousedown", function () {
        location.reload();
    })
}

function getRandomNum(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min);
    
}