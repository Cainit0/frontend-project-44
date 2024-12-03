import readlineSync from 'readline-sync';

const getRandomNum = (minNumber = 0, maxNumber = 100) => Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

const playGame = (playRound, question) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(question);

    for (let i = 0; i < 3; i += 1) {
        if (!playRound()) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export { getRandomNum, playGame };