import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomValue from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstDividend, secondDividend) => {
  if (firstDividend % secondDividend === 0) {
    return secondDividend;
  }
  const remains = firstDividend % secondDividend;
  return getGcd(secondDividend, remains);
};

const generateQuestionAndAnswer = () => {
  const firstDividend = getRandomValue(0, 100);
  const secondDividend = getRandomValue(0, 100);

  const question = `${firstDividend} ${secondDividend}`;
  const trueAnswer = String(getGcd(firstDividend, secondDividend));

  return cons(question, trueAnswer);
};

export default () => startGameEngine(rule, generateQuestionAndAnswer);
