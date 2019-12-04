import { cons } from '@hexlet/pairs';
import { startGameEngine, getRandomValue } from '..';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const randomRange = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestAndAnswer = () => {
  const question = getRandomValue(randomRange);
  const trueAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, trueAnswer);
};

const runBrainPrimeGame = () => startGameEngine(rule, generateQuestAndAnswer);

export default runBrainPrimeGame;
