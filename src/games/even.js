import readlineSync from 'readline-sync';
import { playGame, playRound } from '../index.js';
import getRandomNum from '../utils.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEvenRound = () => {
  const num = getRandomNum(1, 100);
  const parity = num % 2;
  const correctAnswer = (parity === 0) ? 'yes' : 'no';

  const question = `Question: ${num}`;
  return playRound(question, correctAnswer);
};

export default () => {
  playGame(playEvenRound, gameTask);
};
