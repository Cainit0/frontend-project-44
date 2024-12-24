import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (firstProgressionNumber, progressionStep, progressionLength) => {
  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = firstProgressionNumber + progressionStep * i;
  }
  return result;
};

const playProgressionRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 10);
  const firstProgressionNumber = getRandomNumber(1, 30);
  const progression = getProgression(firstProgressionNumber, progressionStep, progressionLength);

  const hiddenElement = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElement].toString();
  progression[hiddenElement] = '..';

  const question = `${progression.join(' ')}`;
  return { question, correctAnswer };
};

export default () => {
  playGame(playProgressionRound, gameTask);
};
