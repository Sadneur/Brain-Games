import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomValue = (span) => Math.floor(Math.random() * span);

const roundsCount = 3;

export const startGameEngine = (rule, questAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${rule}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 1; i <= roundsCount; i += 1) {
    const qna = questAndAnswer();
    const question = car(qna);
    const trueAnswer = cdr(qna);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
