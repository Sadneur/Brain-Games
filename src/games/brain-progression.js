import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '../index';

const rules = 'What number is missing in the progression?';

const questAndAnswer = () => {
  const randomNumber1 = randomNumber(100);
  const randomNumber2 = randomNumber(100);
  const randomIndex = randomNumber(10);

  const arithProgression = (num) => {
    let result = '';
    for (let i = 0; i < num; i += 1) {
      if (i === randomIndex) {
        result += '.. ';
      } else {
        result += `${randomNumber1 + randomNumber2 * i} `;
      }
    } return result;
  };

  const hiddenNumber = (num) => `${randomNumber1 + randomNumber2 * num}`;

  const quest = arithProgression(10);
  const trueAnswer = hiddenNumber(randomIndex);

  return cons(quest, trueAnswer);
};

const brainProgressionGame = () => gameEngine(rules, questAndAnswer);

export default brainProgressionGame;
