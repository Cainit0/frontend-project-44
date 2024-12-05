import readlineSync from 'readline-sync';
import { getRandomNum, playGame} from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeRound = () => {
    const num = getRandomNum(1, 100);
    let correctAnswer = 'yes';
    for (let i = 2; i < num / 2; i += 1) {
        if (num % i === 0) {
            correctAnswer = 'no';
            break;
        }
    }

    console.log(`Question: ${num}`);
    const answer = readlineSync.question(`Your answer: `);

    const result = (answer === correctAnswer);
    if (result) {
        console.log(`Correct!`);
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    }

    return result;
};

export default () => {
    playGame(playPrimeRound, question);
}