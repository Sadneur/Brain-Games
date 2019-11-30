import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumbersRange = 30;

const isEven = (num) => num % 2 === 0;

const generateQuestAndAnswer = () => {
  const question = getRandomNumber(randomNumbersRange);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

const runBrainEvenGame = () => startGameEngine(rule, generateQuestAndAnswer);

export default runBrainEvenGame;
