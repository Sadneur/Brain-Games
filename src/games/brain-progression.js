import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rule = 'What number is missing in the progression?';

const randomNumbersRange = 100;
const rangeProgressionNumbers = 10;

const getArithProgression = (radnomIndex, firstNum, secondNum) => {
  let result = '';
  const hiddenNumber = '..';

  for (let i = 0; i < rangeProgressionNumbers; i += 1) {
    if (i === radnomIndex) {
      result = `${result}${hiddenNumber} `;
    } else {
      result = `${result}${firstNum + secondNum * i} `;
    }
  } return result;
};

const findHiddenNumber = (radnomIndex, firstNum, secondNum) => `${firstNum + secondNum * radnomIndex}`;

const generateQuestAndAnswer = () => {
  const firstValue = getRandomNumber(randomNumbersRange);
  const secondValue = getRandomNumber(randomNumbersRange);
  const valueOfProgression = getRandomNumber(rangeProgressionNumbers);

  const question = getArithProgression(valueOfProgression, firstValue, secondValue);
  const trueAnswer = findHiddenNumber(valueOfProgression, firstValue, secondValue);

  return cons(question, trueAnswer);
};

const runBrainProgressionGame = () => startGameEngine(rule, generateQuestAndAnswer);

export default runBrainProgressionGame;
