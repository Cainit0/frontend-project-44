import readlineSync from 'readline-sync';
import playGame from '../index.js';
import getRandomNum from '../utils.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenRound = () => {
  const num = getRandomNum(1, 100);
  const parity = num % 2;
  const correctAnswer = (parity === 0) ? 'yes' : 'no';

  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  const result = (answer === correctAnswer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return result;
};

export default () => {
  playGame(playEvenRound, question);
};
