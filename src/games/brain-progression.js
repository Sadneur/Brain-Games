import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rules = 'What number is missing in the progression?';

const randomNumbersRange = 100;
const rangeProgressionNumbers = 10;

const getArithProgression = (radnomIndex, firstNum, secondNum) => {
  let result = '';
  for (let i = 0; i < rangeProgressionNumbers; i += 1) {
    if (i === radnomIndex) {
      result += '.. ';
    } else {
      result += `${firstNum + secondNum * i} `;
    }
  } return result;
};

const findHiddenNumber = (radnomIndex, firstNum, secondNum) => `${firstNum + secondNum * radnomIndex}`;

const generateQuestAndAnswer = () => {
  const firstRandomNumber = getRandomNumber(randomNumbersRange);
  const secondRandomNumber = getRandomNumber(randomNumbersRange);
  const numberOfProgression = getRandomNumber(rangeProgressionNumbers);

  const quest = getArithProgression(numberOfProgression, firstRandomNumber, secondRandomNumber);
  const trueAnswer = findHiddenNumber(numberOfProgression, firstRandomNumber, secondRandomNumber);

  return cons(quest, trueAnswer);
};

const runBrainProgressionGame = () => startGameEngine(rules, generateQuestAndAnswer);

export default runBrainProgressionGame;
