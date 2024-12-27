import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrimeRound = () => {
  const number = getRandomNumber(1, 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const question = number.toString();
  return { question, correctAnswer };
};

export default () => {
  playGame(playPrimeRound, gameTask);
};
