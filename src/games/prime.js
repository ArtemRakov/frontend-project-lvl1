import randomize from '../randomize';
import run from '..';

const instruction = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

const data = () => {
  const question = randomize(1, 30);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

export default () => run(data, instruction);
