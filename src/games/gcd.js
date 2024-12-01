import readlineSync from 'readline-sync';
import { getRandomNum, playGame} from '../index.js';

const answer = 'Find the greatest common divisor of given numbers.';

const playGcdRound = () => {
    const num1 = getRandomNum();
    const num2 = getRandomNum();

    let correctAnswer = 1;
    for (let i = 2; i <= num1; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            correctAnswer = i;
        }
    }

    console.log(`Question: ${num1} ${num2}`);
    const answer = parseInt(readlineSync.question(`Your answer: `));
    const result = (answer === correctAnswer);

    if (result) {
        console.log(`Correct!`);
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }

    return result;
};

export default () => {
    playGame(playGcdRound, answer);
}