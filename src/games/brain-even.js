import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomValue from '../utils';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateQuestionAndAnswer = () => {
  const question = getRandomValue(0, 30);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};

export default () => startGameEngine(rule, generateQuestionAndAnswer);
