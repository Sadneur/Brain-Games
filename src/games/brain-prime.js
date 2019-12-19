import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomValue from '../utils';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const question = getRandomValue(0, 100);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, trueAnswer);
};

export default () => startGameEngine(rule, generateQuestionAndAnswer);
