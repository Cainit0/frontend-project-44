import readlineSync from 'readline-sync';

const playRound = (question, correctAnswer) => {
  console.log(question);
  const answer = readlineSync.question('Your answer: ');
  const result = (answer === correctAnswer);
  if (result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  }
  return result;
};

const playGame = (playGameRound, gameTask) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameTask);

  const roundsNumber = 3;
  for (let i = 0; i < roundsNumber; i += 1) {
    if (!playGameRound()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export { playGame, playRound };
