// Generate a random secret number between 1 and 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;

// Initial score
let score = 20;

const checkBtn = document.querySelector(".check");
const scoreEl = document.querySelector(".score");
const guessEl = document.querySelector(".guess");
const messageEl = document.querySelector(".message");
const numberEl = document.querySelector(".number");

// Event listener for the check button
checkBtn.addEventListener("click", function () {
  const guess = Number(guessEl.value);

  if (!guess) {
    messageEl.textContent = "No number! ⛔";
    return;
  }

  // when the guess is correct
  if (guess === secretNumber) {
    messageEl.textContent = "Correct Number! 🎉";
    numberEl.textContent = secretNumber;
    return;
  } else if (guess > secretNumber) {
    messageEl.textContent = "Too High! 📈";
  } else {
    messageEl.textContent = "Too Low! 📉";
  }
  console.log(guess);

  if (score >= 1) {
    score--;
    scoreEl.textContent = score;
  } else {
    messageEl.textContent = "You lost the game! 💥";
    scoreEl.textContent = 0;
  }
});
