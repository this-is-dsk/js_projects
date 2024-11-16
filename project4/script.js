let randomNumber = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaining = document.querySelector(".lastResult")
const alertMessage = document.querySelector(".alertMessage")
const startOver = document.querySelector(".result")

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true; 

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    } else if(guess<1){
        alert("Please enter number more than 1.")
    } else if(guess>100){
        alert("Please enter number less than 100.")
    }
    else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`Hurrraayyy🎉.. you guessed it right.`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage(`number is too low🥲 `)
    }else if(guess>randomNumber){
        displayMessage(`number is too high😁 `)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${12 - numGuess}`
}

function displayMessage(message) {
    alertMessage.innerHTML = `<h2>${message}</h2>` 
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false; 
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e){
        randomNumber = (parseInt(Math.random() * 100 + 1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${12 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p);
        alertMessage.innerHTML = ''
        playGame = true;
    })
}







