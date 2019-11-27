import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomNumber = (span) => Math.floor(Math.random() * span);

export const startGameEngine = (rules, questAndAnswer) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let dataForRound = questAndAnswer();
  for (let rounds = 3; rounds > 0; rounds -= 1) {
    const userAnwer = readlineSync.question(`Question: ${car(dataForRound)}\nYour answer: `);
    if (userAnwer === cdr(dataForRound)) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnwer}' is wrong answer ;(. Correct answer was '${cdr(dataForRound)}'.\nLet's try again, ${userName}!`);
      return;
    } dataForRound = questAndAnswer();
  } console.log(`Congratulations, ${userName}!`);
};
