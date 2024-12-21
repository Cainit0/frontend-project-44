import { playGame, playRound } from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  let result = 1;
  for (let i = 2; i <= number1; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      result = i;
    }
  }
  return result;
};

const playGcdRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const correctAnswer = getGCD(number1, number2);

  const question = `Question: ${number1} ${number2}`;
  return playRound(question, correctAnswer.toString());
};

export default () => {
  playGame(playGcdRound, gameTask);
};
