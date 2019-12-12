import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomValue } from '..';

const rule = 'What number is missing in the progression?';

const rangeRadnomValue = 20;
const progressionLength = 10;

const getQuestion = (range, step, value) => {
  let result = '';

  for (let i = 0; i < range; i += 1) {
    if (i === step) {
      result = `${result}.. `;
    } else {
      result = `${result}${value + value * i} `;
    }
  } return result.trim();
};

const generateQuestionAndAnswer = () => {
  const initialValue = getRandomValue(rangeRadnomValue);
  const progressionStep = getRandomValue(progressionLength);

  const question = getQuestion(progressionLength, progressionStep, initialValue);
  const trueAnswer = String(initialValue + initialValue * progressionStep);

  return cons(question, trueAnswer);
};

const runBrainProgressionGame = () => startGameEngine(rule, generateQuestionAndAnswer);

export default runBrainProgressionGame;
