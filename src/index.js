import readlineSync from 'readline-sync';

const playGame = (playRound, question) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(question);

  const roundsNumber = 3;
  for (let i = 0; i < roundsNumber; i += 1) {
    if (!playRound()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
