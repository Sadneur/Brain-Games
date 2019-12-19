import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomValue from '../utils';

const rule = 'What is the result of the expression?';

const signs = '+*-';

const calculate = (first, second, sign) => {
  switch (sign) {
    case '+':
      return first + second;
    case '-':
      return first - second;
    case '*':
      return first * second;
    default:
      return null;
  }
};

const generateQuestionAndAnswer = () => {
  const firstValue = getRandomValue(0, 30);
  const secondValue = getRandomValue(0, 30);
  const randomMathSymb = signs[getRandomValue(0, signs.length - 1)];

  const question = `${firstValue} ${randomMathSymb} ${secondValue}`;
  const trueAnswer = String(calculate(firstValue, secondValue, randomMathSymb));
  return cons(question, trueAnswer);
};

export default () => startGameEngine(rule, generateQuestionAndAnswer);
