// script.js

let words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];
let currentWord;
let score = 0;
let time = 60;
let timer;

const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

// Start Game
startBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    time = 60;
    wordInput.value = "";
    wordInput.disabled = false;
    startBtn.disabled = true;
    nextWord();
    timer = setInterval(updateTimer, 1000);
}

// Update Timer
function updateTimer() {
    time--;
    timerDisplay.textContent = `Time: ${time}s`;
    if (time === 0) {
        clearInterval(timer);
        wordInput.disabled = true;
        startBtn.disabled = false;
        alert(`Time's up! Your score is ${score}`);
    }
}

// Display Next Word
function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.textContent = currentWord;
}

// Check Input
wordInput.addEventListener('input', checkInput);

function checkInput() {
    if (wordInput.value.toLowerCase() === currentWord.toLowerCase()) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        wordInput.value = "";
        nextWord();
    }
}