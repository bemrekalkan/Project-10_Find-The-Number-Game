// random value generated
let randomNumber = Math.floor(Math.random() * 101);
//! Returns a random INTEGER (floor()) from 0 to 100:
console.log(randomNumber);

//? counting the number of guesses
//? made for correct Guess
let guess = 1;

document.getElementById("submitGuess").onclick = function () {
  //? number guessed by user
  let guessNumber = document.getElementById("guess").value;

  if (randomNumber == guessNumber) {
    alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN " + guess + " GUESS ");
  } else if (randomNumber > guessNumber) {
    //? if guessed number is greater than actual number
    guess++;
    alert("OOPS SORRY!! TRY A SMALLER NUMBER");
  } else {
    guess++;
    alert("OOPS SORRY!! TRY A GREATER NUMBER");
  }
};
