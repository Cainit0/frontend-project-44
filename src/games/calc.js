import { playGame, playRound } from '../index.js';
import getRandomNumber from '../utils.js';

const getRandomOperation = (operations) => {
  const operationNum = getRandomNumber(0, operations.length - 1);
  return operations[operationNum];
};

const getAnswerToOperation = (number1, number2, operation) => {
  let answer;

  switch (operation) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      throw new Error(`Unknown operation: '${operation}'`);
  }

  return answer;
};

const gameTask = 'What is the result of the expression?';

const playCalcRound = () => {
  const operations = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const operation = getRandomOperation(operations);
  const correctAnswer = getAnswerToOperation(number1, number2, operation);

  const question = `Question: ${number1} ${operation} ${number2}`;
  return playRound(question, correctAnswer.toString());
};

export default () => {
  playGame(playCalcRound, gameTask);
};
