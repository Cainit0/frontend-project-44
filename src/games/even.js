import { playGame, playRound } from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isNumberEven = (number) => (number % 2 === 0);

const playEvenRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isNumberEven(number) ? 'yes' : 'no';

  const question = `Question: ${number}`;
  return playRound(question, correctAnswer);
};

export default () => {
  playGame(playEvenRound, gameTask);
};
