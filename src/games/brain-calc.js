import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rule = 'What is the result of the expression?';

const mathSymbols = '+*-';

const symbStrLength = mathSymbols.length;

const randomMathSymb = mathSymbols[getRandomNumber(symbStrLength)];

const randomNumbersRange = 30;

const calculate = (firstNum, symbol, secondNum) => {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    case '*':
      return firstNum * secondNum;
    default:
      return null;
  }
};

const generateQuestAndAnswer = () => {
  const firstValue = getRandomNumber(randomNumbersRange);
  const secondValue = getRandomNumber(randomNumbersRange);

  const question = `${firstValue} ${randomMathSymb} ${secondValue}`;
  const trueAnswer = String(calculate(firstValue, randomMathSymb, secondValue));
  return cons(question, trueAnswer);
};

const runBrainCalcGame = () => startGameEngine(rule, generateQuestAndAnswer);

export default runBrainCalcGame;
