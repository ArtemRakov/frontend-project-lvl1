import { randomize } from '../lib/utils';
import run from '..';

const instruction = () => console.log("Answer 'yes' if number even otherwise answer 'no'. \n");

const question = () => {
  const number = randomize(1, 100);
  console.log(`Question: ${number}`);
  return number;
};

const validation = number => (number % 2 === 0 ? 'yes' : 'no');

export default () => run(instruction, question, validation);
