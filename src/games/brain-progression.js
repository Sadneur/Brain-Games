import { cons } from '@hexlet/pairs';
import startGameEngine from '..';
import getRandomValue from '../utils';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestion = (range, step, value, indexHiddenValue) => {
  let result = '';

  for (let i = 0; i < range; i += 1) {
    if (i === indexHiddenValue) {
      result = `${result}.. `;
    } else {
      result = `${result}${value + step * i} `;
    }
  } return result.trim();
};

const generateQuestionAndAnswer = () => {
  const initialValue = getRandomValue(0, 15);
  const indexHiddenValue = getRandomValue(0, progressionLength - 1);
  const progressionStep = getRandomValue(1, 15);

  const question = getQuestion(progressionLength, progressionStep, initialValue, indexHiddenValue);
  const trueAnswer = String(initialValue + progressionStep * indexHiddenValue);

  return cons(question, trueAnswer);
};

export default () => startGameEngine(rule, generateQuestionAndAnswer);
