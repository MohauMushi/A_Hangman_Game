const hangmanImage = document.querySelector('.hangman-box img');
const wordDisplay = document.querySelector('.word-display');
const guessesText = document.querySelector('.guesses-text b');
const keyboardDiv = document.querySelector('.keyboard');
const gameModal = document.querySelector('.game-modal');
const playAgainBtn = document.querySelector('.play-again');

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

const resetGame = () => {
	// Ressetting all game variables and UI elements
	correctLetters = [];
	wrongGuessCount = 0;
	hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
	guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
	keyboardDiv.querySelectorAll('button').forEach(btn => btn.disabled = false);
	wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
	gameModal.classList.remove('show');
}
