import randomize from '../randomize';
import run from '..';

const instruction = () => console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'. \n");

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const question = () => {
  const number = randomize(1, 30);
  console.log(`Question: ${number}`);
  return number;
};

const validation = number => (isPrime(number) ? 'yes' : 'no');

export default () => run(instruction, question, validation);
