import { playGame, playRound } from '../index.js';
import getRandomNumber from '../utils.js';

const gameTask = 'What number is missing in the progression?';

const getProgression = (progressionLength) => {
  const result = [];
  result[0] = getRandomNumber(1, 30);
  const progressionStep = getRandomNumber(1, 10);
  for (let i = 1; i < progressionLength; i += 1) {
    result[i] = result[0] + progressionStep * i;
  }
  return result;
};

const playProgressionRound = () => {
  const progressionLength = getRandomNumber(5, 10);
  const progression = getProgression(progressionLength);

  const hiddenElement = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const question = `Question: ${progression.join(' ')}`;
  return playRound(question, correctAnswer.toString());
};

export default () => {
  playGame(playProgressionRound, gameTask);
};
