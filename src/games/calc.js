import readlineSync from 'readline-sync';
import { playGame, playRound } from '../index.js';
import getRandomNum from '../utils.js';

const getRandomOperation = (operations) => {
  const operationNum = getRandomNum(0, operations.length - 1);
  return operations[operationNum];
};

const gameTask = 'What is the result of the expression?';

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

  const question = `Question: ${num1} ${operation} ${num2}`;
  return playRound(question, correctAnswer.toString());
};

export default () => {
  playGame(playCalcRound, gameTask);
};
