import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '../index';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const questAndAnswer = () => {
  const randomMathSymb = '+*-'[randomNumber(3)];
  const randomNumber1 = randomNumber(10);
  const randomNumber2 = randomNumber(10);

  const operation = () => {
    switch (randomMathSymb) {
      case '+':
        return Number(randomNumber1) + Number(randomNumber2);
      case '-':
        return Number(randomNumber1) - Number(randomNumber2);
      default:
        return Number(randomNumber1) * Number(randomNumber2);
    }
  };

  const quest = `${randomNumber1} ${randomMathSymb} ${randomNumber2}`;
  const trueAnswer = String(operation());
  return cons(quest, trueAnswer);
};

const brainCalcGame = () => gameEngine(rules, questAndAnswer);

export default brainCalcGame;
