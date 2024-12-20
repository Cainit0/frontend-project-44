import readlineSync from 'readline-sync';
import playGame from '../index.js';
import getRandomNum from '../utils.js';

const question = 'Find the greatest common divisor of given numbers.';

const playGcdRound = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  let correctAnswer = 1;
  for (let i = 2; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = i;
    }
  }

  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const result = (answer === correctAnswer.toString());

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return result;
};

export default () => {
  playGame(playGcdRound, question);
};
