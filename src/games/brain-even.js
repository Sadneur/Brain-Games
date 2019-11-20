import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '../index';

const rules = 'What is the result of the expression?';

const questAndAnswer = () => {
  const quest = randomNumber(30);
  const trueAnswer = ((quest % 2) === 0 ? 'yes' : 'no');
  return cons(quest, trueAnswer);
};

const brainEvenGame = () => gameEngine(rules, questAndAnswer);

export default brainEvenGame;
