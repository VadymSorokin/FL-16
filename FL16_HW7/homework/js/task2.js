const isAgree = confirm('Do you want to play a game?');
const numZero = 0;
const numStart = 8;
const numAttempt = 3;
const numAddSlot = 4;
const initialGain = 100;
const base = 2;
let numPlayer;
let numRandom;
let numMax;
let prize;
let currentGain;
let isRepeat = true;
let isContinue = true;

if (isAgree) {
    while (isRepeat === true) {
        prize = 0;
        let j = 0;
        isContinue = true;
        while (isContinue === true) {
            currentGain = initialGain * Math.pow(base, j);
            numMax = numStart + numAddSlot * j;
            numRandom = Math.floor(Math.random() * (numMax + 1));
            for (let i = 0; i < numAttempt; i++) {
                numPlayer = Number(prompt(`
                Choose a roulette pocket number from ${numZero} to ${numMax}
                Attempts left: ${numAttempt - i}
                Total prize: ${prize}$
                Possible price on current attempt: ${currentGain / Math.pow(base, i)}$
                `));
                if (!Number.isInteger(numPlayer)) {
                    alert('Only integer number');
                }
                if (numPlayer === numRandom) {
                    if (i === 0) {
                        prize += currentGain / Math.pow(base, i);
                        alert(`Congratulation, you won! Your prize is: ${currentGain / Math.pow(base, i)}$.`);
                        break;
                    } else if (i === 1) {
                        prize += currentGain / Math.pow(base, i);
                        alert(`Congratulation, you won! Your prize is: ${currentGain / Math.pow(base, i)}$.`);
                        break;
                    } else if (i === numAttempt - 1) {
                        prize += currentGain / Math.pow(base, i);
                        alert(`Congratulation, you won! Your prize is: ${currentGain / Math.pow(base, i)}$.`);
                        break;
                    }
                } else {
                    continue;
                }
            }
            if (numPlayer === numRandom) {
                isContinue = confirm('Keep going, dude!');
                if (isContinue) {
                    j++;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${prize}$`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${prize}$`);
                isContinue = false;
            }
        }
        isRepeat = confirm('Do you want to play again?');
    }
} else {
    alert('You did not become a billionaire, but can.');
}