import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (firstNumber, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result[i] = firstNumber + step * i;
  }
  return result;
};

const playProgressionRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 10);
  const firstProgressionNumber = getRandomNumber(1, 30);
  const progression = getProgression(firstProgressionNumber, progressionStep, progressionLength);

  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = `${progression.join(' ')}`;
  return { question, correctAnswer };
};

export default () => {
  playGame(playProgressionRound, gameTask);
};
