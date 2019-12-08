import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomValue } from '..';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const rangeRadnomValue = 30;

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = getRandomValue(rangeRadnomValue);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

const runBrainEvenGame = () => startGameEngine(rule, generateQuestionAndAnswer);

export default runBrainEvenGame;
