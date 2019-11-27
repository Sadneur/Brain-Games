import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rules = 'What is the result of the expression?';

const mathSymbols = '+*-';

const symbStrLength = mathSymbols.length;

const randomMathSymb = mathSymbols[getRandomNumber(symbStrLength)];

const randomNumbersRange = 30;

const doMathOperation = (firstNum, symbol, secondNum) => {
  switch (symbol) {
    case '+':
      return firstNum + secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      return firstNum * secondNum;
  }
};

const generateQuestAndAnswer = () => {
  const firstRandomNumber = getRandomNumber(randomNumbersRange);
  const secondRandomNumber = getRandomNumber(randomNumbersRange);

  const quest = `${firstRandomNumber} ${randomMathSymb} ${secondRandomNumber}`;
  const trueAnswer = String(doMathOperation(firstRandomNumber, randomMathSymb, secondRandomNumber));
  return cons(quest, trueAnswer);
};

const runBrainCalcGame = () => startGameEngine(rules, generateQuestAndAnswer);

export default runBrainCalcGame;
