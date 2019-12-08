import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomValue } from '..';

const rule = 'Find the greatest common divisor of given numbers.';

const rangeRadnomValue = 100;

const getGcd = (firstDividend, secondDividend) => {
  if (firstDividend % secondDividend === 0) {
    return secondDividend;
  }
  const remains = firstDividend % secondDividend;
  return getGcd(secondDividend, remains);
};

const generateQuestionAndAnswer = () => {
  const firstDividend = getRandomValue(rangeRadnomValue);
  const secondDividend = getRandomValue(rangeRadnomValue);

  const question = `${firstDividend} ${secondDividend}`;
  const trueAnswer = String(getGcd(firstDividend, secondDividend));

  return cons(question, trueAnswer);
};

const runBrainGcdGame = () => startGameEngine(rule, generateQuestionAndAnswer);

export default runBrainGcdGame;
