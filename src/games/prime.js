import readlineSync from 'readline-sync';
import { playGame, playRound } from '../index.js';
import getRandomNum from '../utils.js';

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrimeRound = () => {
  const num = getRandomNum(1, 100);
  let correctAnswer = 'yes';
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      correctAnswer = 'no';
      break;
    }
  }

  const question = `Question: ${num}`;
  return playRound(question, correctAnswer);
};

export default () => {
  playGame(playPrimeRound, gameTask);
};
