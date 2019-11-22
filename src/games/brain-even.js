import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '../index';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questAndAnswer = () => {
  const quest = randomNumber(30);
  const trueAnswer = ((quest % 2) === 0 ? 'yes' : 'no');
  return cons(quest, trueAnswer);
};

const brainEvenGame = () => gameEngine(rules, questAndAnswer);

export default brainEvenGame;
