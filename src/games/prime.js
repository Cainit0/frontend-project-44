import { playGame, playRound } from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberPrime = (number) => {
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isNumberPrime(number) ? 'yes' : 'no';

  const question = `Question: ${number}`;
  return playRound(question, correctAnswer);
};

export default () => {
  playGame(playPrimeRound, gameTask);
};
