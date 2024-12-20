import readlineSync from 'readline-sync';
import playGame from '../index.js';
import getRandomNum from '../utils.js';

const getRandomOperation = (operations) => {
  const operationNum = getRandomNum(0, operations.length - 1);
  return operations[operationNum];
};

const question = 'What is the result of the expression?';

const playCalcRound = () => {
  const operations = ['+', '-', '*'];
  const num1 = getRandomNum(1, 30);
  const num2 = getRandomNum(1, 30);
  const operation = getRandomOperation(operations);
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    default:
      correctAnswer = num1 * num2;
  }

  console.log(`Question: ${num1} ${operation} ${num2}`);
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
  playGame(playCalcRound, question);
};
