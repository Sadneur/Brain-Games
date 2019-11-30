import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rule = 'Find the greatest common divisor of given numbers.';

const randomNumbersRange = 100;

const getGcd = (fistNum, secondNum) => {
  if (fistNum % secondNum === 0) {
    return String(secondNum);
  }
  const remains = fistNum % secondNum;
  return getGcd(secondNum, remains);
};

const generateQuestAndAnswer = () => {
  const fistValue = getRandomNumber(randomNumbersRange);
  const secondValue = getRandomNumber(randomNumbersRange);

  const question = `${fistValue} ${secondValue}`;
  const trueAnswer = getGcd(fistValue, secondValue);

  return cons(question, trueAnswer);
};

const runBrainGcdGame = () => startGameEngine(rule, generateQuestAndAnswer);

export default runBrainGcdGame;
