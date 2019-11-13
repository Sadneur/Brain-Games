import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".\n');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

const brainEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 1000);
    const frstQuestion = readlineSync.question(`Question: ${randomNumber} `);
    if (frstQuestion === 'yes' && randomNumber % 2 === 0) {
      console.log('Correct!');
    } else if (frstQuestion === 'no' && randomNumber % 2 === 1) {
      console.log('Correct!');
    } else if (frstQuestion === 'no' && randomNumber % 2 === 0) {
      return console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
    } else if (frstQuestion === 'yes' && randomNumber % 2 === 1) {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    } else {
      return console.log(`Incorrect input ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

brainEven();
