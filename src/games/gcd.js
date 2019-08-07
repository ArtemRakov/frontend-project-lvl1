import { randomize } from '../lib/utils';
import run from '..';

const instruction = () => console.log('Find the greatest common divisor of given numbers. \n');

const question = () => {
  const first = randomize(1, 50);
  const second = randomize(1, 50);

  console.log(`Question: ${first} ${second}`);
  return `${first} ${second}`;
};

const validation = (string) => {
  const numbers = string.split(' ');
  let [first, second] = numbers;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return String(first + second);
};

export default () => run(instruction, question, validation);
