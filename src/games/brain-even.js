import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumbersRange = 30;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestAndAnswer = () => {
  const quest = getRandomNumber(randomNumbersRange);
  const trueAnswer = isEven(quest);
  return cons(quest, trueAnswer);
};

const runBrainEvenGame = () => startGameEngine(rules, generateQuestAndAnswer);

export default runBrainEvenGame;
