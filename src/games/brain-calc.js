import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomValue } from '..';

const rule = 'What is the result of the expression?';

const mathSigns = '+*-';

const randomMathSymb = mathSigns[getRandomValue(mathSigns.length)];

const rangeRadnomValue = 30;

const calculate = (first, second, symbol) => {
  switch (symbol) {
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

const generateQuestAndAnswer = () => {
  const firstValue = getRandomValue(rangeRadnomValue);
  const secondValue = getRandomValue(rangeRadnomValue);

  const question = `${firstValue} ${randomMathSymb} ${secondValue}`;
  const trueAnswer = String(calculate(firstValue, secondValue, randomMathSymb));
  return cons(question, trueAnswer);
};

const runBrainCalcGame = () => startGameEngine(rule, generateQuestAndAnswer);

export default runBrainCalcGame;
