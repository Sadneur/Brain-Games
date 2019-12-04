import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomValue = (span) => Math.floor(Math.random() * span);

export const startGameEngine = (rule, questAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${rule}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const roundCount = 3;
  for (let round = 1; round <= roundCount; round += 1) {
    const qna = questAndAnswer();
    const question = car(qna);
    const trueAnswer = cdr(qna);
    const userAnwer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnwer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnwer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  } console.log(`Congratulations, ${userName}!`);
};
