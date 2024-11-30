import readlineSync from 'readline-sync';

const getRandomNum = () => Math.floor(Math.random() * 100);

const playGame = (playRound, answer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(answer);

    for (let i = 0; i < 3; i += 1) {
        if (!playRound()) {
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }

    console.log(`Congratulations, ${name}!`);
};

export { getRandomNum, playGame };