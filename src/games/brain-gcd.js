import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '../index';

const rules = 'Find the greatest common divisor of given numbers.';

const questAndAnswer = () => {
  const randomNumber1 = randomNumber(100);
  const randomNumber2 = randomNumber(100);

  const gcd = (num1, num2) => {
    if (num1 % num2 === 0) {
      return String(num2);
    }
    const remains = num1 % num2;
    return gcd(num2, remains);
  };

  const quest = `${randomNumber1} ${randomNumber2}`;
  const trueAnswer = gcd(randomNumber1, randomNumber2);

  return cons(quest, trueAnswer);
};

const brainGcdGame = () => gameEngine(rules, questAndAnswer);

export default brainGcdGame;
