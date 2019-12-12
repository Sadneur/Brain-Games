import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomValue = (span) => Math.floor(Math.random() * span);

const roundsCount = 3;

export const startGameEngine = (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAndAnswer = getQuestionAndAnswer();

    const question = car(questionAndAnswer);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const trueAnswer = cdr(questionAndAnswer);

    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
