import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomNumber } from '../index';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomNumbersRange = 100;

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

const generateQuestAndAnswer = () => {
  const quest = getRandomNumber(randomNumbersRange);
  const trueAnswer = isPrime(quest);

  return cons(quest, trueAnswer);
};

const runBrainPrimeGame = () => startGameEngine(rules, generateQuestAndAnswer);

export default runBrainPrimeGame;
