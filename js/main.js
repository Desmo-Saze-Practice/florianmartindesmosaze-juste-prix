const min = 0;
let max = 100;
let guessNumber = 0;
let attempts = 0;
let randomNumber = Math.round(Math.random()*max);
console.log(randomNumber);

const playGame = function() {
    guessNumber = Number(prompt(`I have made a number wetween ${min} and ${max}, you have to find it.`));
    if (randomNumber === guessNumber) {
        attempts++;
        alert(`you win, my number was ${randomNumber}. It took you ${attempts} attempt(s) to find it. Can you do better ?`);
    }
    else if (randomNumber > guessNumber) {
        attempts++;
        alert(`No, my number is greater than ${guessNumber}`);
        playGame();
    }
    else if (randomNumber < guessNumber) {
        attempts++;
        alert(`No, my number is samller than ${guessNumber}`);
        playGame();
    }
    else if (guessNumber !== Number) {
        attempts++;
        alert(`Your answer must be a number.`);
        playGame();
    }
    else if (guessNumber < min || guessNumber > max) {
        attempts++;
        alert(`Becareful, my number is between ${min} and ${max}.`);
        playGame();
    }
}

playGame();

// let replay = function() {
//     confirm(`do you want play again ?`);
//     if (replay) {
//         playGame();
//     }
// }

// replay();