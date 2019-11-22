import { cons } from '@hexlet/pairs';
import { gameEngine, randomNumber } from '../index';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const questAndAnswer = () => {
  const quest = randomNumber(100);
  const isPrime = (num) => {
    if (num < 2) {
      return 'no';
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const trueAnswer = isPrime(quest);

  return cons(quest, trueAnswer);
};

const brainPrimeGame = () => gameEngine(rules, questAndAnswer);

export default brainPrimeGame;
