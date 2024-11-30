import readlineSync from 'readline-sync';
import { getRandomNum, playGame} from '../index.js';

const getRandomOperation = (operations) => {
    const operationNum = Math.floor(Math.random() * operations.length);
    return operations[operationNum];
};

const answer = 'What is the result of the expression?';

const playCalcRound = () => {
    const operations = [ '+', '-', '*'];
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const operation = getRandomOperation(operations);
    let correctAnswer;

    switch (operation) {
        case '+':
            correctAnswer = num1 + num2;
            break;
        case '-':
            correctAnswer = num1 - num2;
            break;
        default:
            correctAnswer = num1 * num2;
    }

    console.log(`Question: ${num1} ${operation} ${num2}`);
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
    playGame(playCalcRound, answer);
}