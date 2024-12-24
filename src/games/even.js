import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playEvenRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const question = `${number}`;
  return { question, correctAnswer };
};

export default () => {
  playGame(playEvenRound, gameTask);
};
