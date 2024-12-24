import playGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculate = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: '${operation}'`);
  }
};

const gameTask = 'What is the result of the expression?';

const playCalcRound = () => {
  const operations = ['+', '-', '*'];
  const number1 = getRandomNumber(1, 30);
  const number2 = getRandomNumber(1, 30);
  const operationNum = getRandomNumber(0, operations.length - 1);
  const operation = operations[operationNum];

  const correctAnswer = calculate(number1, number2, operation).toString();
  const question = `${number1} ${operation} ${number2}`;
  return { question, correctAnswer };
};

export default () => {
  playGame(playCalcRound, gameTask);
};
