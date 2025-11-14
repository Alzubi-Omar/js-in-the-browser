// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Initial score
let score = 20;
let highscore = Number(localStorage.getItem("highscore")) || 0;

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const bodyEl = document.querySelector("body");
const highscoreEl = document.querySelector(".highscore");

highscoreEl.textContent = highscore;

// Helper function
const setMessage = function (text) {
  messageEl.textContent = text;
};

// Event listener for the check button
checkBtn.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    setMessage("No number! ⛔");
    return;
  }

  // Correct guess
  if (guess === secretNumber) {
    bodyEl.style.backgroundColor = "#60b347ff";
    setMessage("Correct Number! 🎉");
    numberEl.style.width = "30rem";
    numberEl.textContent = secretNumber;

    if (score > 0 && score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
      localStorage.setItem("highscore", highscore);
    }
    return;
  }

  // Wrong guess
  if (score > 1) {
    setMessage(guess > secretNumber ? "Too High! 📈" : "Too Low! 📉");
    score--;
    scoreEl.textContent = score;
  } else {
    // loss the game
    setMessage("You lost the game! 💥");
    scoreEl.textContent = 0;
    bodyEl.style.backgroundColor = "#ba3a3aff";
    return;
  }
});

// Play again
againBtn.addEventListener("click", function () {
  // Reset values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset UI
  setMessage("Start guessing...");
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  bodyEl.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
});
