import readlineSync from 'readline-sync';
import { playGame, playRound } from '../index.js';
import getRandomNum from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const playGcdRound = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);

  let correctAnswer = 1;
  for (let i = 2; i <= num1; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = i;
    }
  }

  const question = `Question: ${num1} ${num2}`;
  return playRound(question, correctAnswer.toString());
};

export default () => {
  playGame(playGcdRound, gameTask);
};
