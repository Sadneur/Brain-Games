import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const randomNumber = (span) => Math.floor(Math.random() * span);

export const greeting = (rules) => {
  console.log(`Welcome to the Brain Games!\n${rules}\n`);
};

export const gameEngine = (rules, questAndAnswer) => {
  greeting(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  let dataForRound = questAndAnswer();
  for (let rounds = 3; rounds > 0; rounds -= 1) {
    const userAnwer = readlineSync.question(`Question: ${car(dataForRound)}\nYour answer: `);
    if (userAnwer === cdr(dataForRound)) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnwer}' is wrong answer ;(. Correct answer was '${cdr(dataForRound)}'.\nLet's try again, ${userName}!`);
    } dataForRound = questAndAnswer();
  } return console.log(`Congratulations, ${userName}!`);
};
