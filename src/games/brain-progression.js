import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomValue } from '..';

const rule = 'What number is missing in the progression?';

const rangeRadnomValue = 10;
const rangeProgression = 10;

const getQuestion = (range, radnomIndex, firstValue, secondValue) => {
  let result = '';

  for (let i = 0; i < range; i += 1) {
    if (i === radnomIndex) {
      result = `${result}.. `;
    } else if (i === range - 1) {
      result = `${result}${firstValue + secondValue * i}`;
    } else {
      result = `${result}${firstValue + secondValue * i} `;
    }
  } return result;
};

const generateQuestionAndAnswer = () => {
  const initialValue = getRandomValue(rangeRadnomValue);
  const progressionLength = getRandomValue(rangeRadnomValue);
  const progressionStep = getRandomValue(rangeProgression);

  const question = getQuestion(rangeProgression, progressionStep, initialValue, progressionLength);
  const trueAnswer = String(initialValue + progressionLength * progressionStep);

  return cons(question, trueAnswer);
};

const runBrainProgressionGame = () => startGameEngine(rule, generateQuestionAndAnswer);

export default runBrainProgressionGame;
