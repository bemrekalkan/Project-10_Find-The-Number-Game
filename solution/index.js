let continueGame;
let guessNumber;

do{
    let live=5;

    const randomNumber = Math.floor(Math.random() * 101);
    //! Returns a random INTEGER (floor()) from 0 to 100:
    console.log(randomNumber);

    do{
        const guessNumber = Number(prompt("Enter a number between 0 and 100..."));
        live -= 1;

        if(guessNumber === randomNumber){
            alert(`Congrats! Your ${5 - live}th try.`);
            break;
        } else {
            alert(`Be careful! You have only ${live} lives!`);

            if (guessNumber > randomNumber){
                alert("DOWN ⬇");
            } else if (guessNumber < randomNumber){
                alert(`UP ⬆`);
            }
        }
    } while (live > 0);

    if(live === 0 && guessNumber !== randomNumber){
        alert(`Sorry, game over..`);
    }

    continueGame
}