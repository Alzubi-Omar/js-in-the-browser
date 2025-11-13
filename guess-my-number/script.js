// Generate a random secret number between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector(".number").textContent = secretNumber;

// Initial score
let score = 20;

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");
const bodyEl = document.querySelector("body");

// Event listener for the check button
checkBtn.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = "No number! ⛔";
    return;
  }

  // when the guess is correct
  if (guess === secretNumber) {
    bodyEl.style.backgroundColor = "#60b347ff";
    messageEl.textContent = "Correct Number! 🎉";
    numberEl.style.width = "30rem";
    numberEl.textContent = secretNumber;
    return;
  } else if (guess > secretNumber) {
    messageEl.textContent = "Too High! 📈";
  } else {
    messageEl.textContent = "Too Low! 📉";
  }
  console.log(guess, secretNumber);

  if (score >= 1) {
    score--;
    scoreEl.textContent = score;
  } else {
    messageEl.textContent = "You lost the game! 💥";
    scoreEl.textContent = 0;
  }
});

// Play again
againBtn.addEventListener("click", function () {
  // Reset values
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset UI
  messageEl.textContent = "Start guessing...";
  scoreEl.textContent = score;
  numberEl.textContent = "?";
  guessEl.value = "";
  bodyEl.style.backgroundColor = "#222";
  numberEl.style.width = "15rem";
});
