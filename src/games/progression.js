import readlineSync from 'readline-sync';
import playGame from '../index.js';
import getRandomNum from '../utils.js';

const question = 'What number is missing in the progression?';

const playProgressionRound = () => {
  const progressionLength = getRandomNum(5, 10);
  const progression = [];
  progression[0] = getRandomNum(1, 30);
  const progressionStep = getRandomNum(1, 10);
  for (let i = 1; i < progressionLength; i += 1) {
    progression[i] = progression[0] + progressionStep * i;
  }

  const hiddenElement = getRandomNum(0, progressionLength - 1);
  const correctAnswer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  console.log(`Question: ${progression.join(' ')}`);
  const answer = readlineSync.question('Your answer: ');
  const result = (answer === correctAnswer.toString());

  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }

  return result;
};

export default () => {
  playGame(playProgressionRound, question);
};
