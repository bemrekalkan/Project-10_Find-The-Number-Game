//? random value generated --> Returns a random INTEGER (floor()) from 0 to 100:
let randomNumber = Math.floor(Math.random() * 101);

console.log(randomNumber);

//? counting the number of guesses
//? made for correct Guess
let guess = 1;

//! SELECTORS:
const submit = document.getElementById("submitGuess");
const guessInput = document.getElementById("guess");
const congratsMessage = document.getElementById("congrats");

//! Calling the click function of the submit button by pressing the enter key from the keyboard
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    submit.click();
  }
});

//! make input active at startup:
window.onload = function () {
  guessInput.focus();
};

document.getElementById("submitGuess").onclick = function () {
  //? number guessed by user
  let guessNumber = document.getElementById("guess").value;
  // console.log(guessNumber);

  if (randomNumber == guessNumber) {
    congratsMessage.textContent = ` 👍 CONGRATULATIONS 👏 YOU GUESSED IT RIGHT IN ${guess} GUESS`;
    // alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
  } else if (randomNumber > guessNumber) {
    //? if guessed number is greater than actual number
    guess++;
    alert("OOPS SORRY 😔 TRY A GREATER 👆 NUMBER");
  } else {
    guess++;
    alert("OOPS SORRY 😔 TRY A SMALLER 👇 NUMBER");
  }
};
