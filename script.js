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

const getRandomWord = () => {
	// Selecting a random word and hint from the wordlist
	const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
	currentWord = word;
	console.log(word);
	document.querySelector(".hint-text b").innerText = hint;
	resetGame();
}

const gameOver = (isVictory) => {
	// After 300ms of game complete.. showing modal with relevant details
	setTimeout(() => {
		const modalText = isVictory ? `You found the word:` : `The correct word was:`;
		gameModal.querySelector('img').src = `./images/${isVictory ? 'victory' : 'lost'}.gif`;
		gameModal.querySelector('h4').innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
		gameModal.querySelector('p').innerHTML = `${modalText} <b>${currentWord}</b>`;
		gameModal.classList.add('show');
	}, 300);
}
