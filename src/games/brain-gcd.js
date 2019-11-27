import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rules = 'Find the greatest common divisor of given numbers.';

const randomNumbersRange = 100;

const getGcd = (fistNum, secondNum) => {
  if (fistNum % secondNum === 0) {
    return String(secondNum);
  }
  const remains = fistNum % secondNum;
  return getGcd(secondNum, remains);
};

const generateQuestAndAnswer = () => {
  const fistRandomNumber = getRandomNumber(randomNumbersRange);
  const secondRandomNumber = getRandomNumber(randomNumbersRange);

  const quest = `${fistRandomNumber} ${secondRandomNumber}`;
  const trueAnswer = getGcd(fistRandomNumber, secondRandomNumber);

  return cons(quest, trueAnswer);
};

const runBrainGcdGame = () => startGameEngine(rules, generateQuestAndAnswer);

export default runBrainGcdGame;
