import randomize from '../randomize';
import run from '..';

const instruction = "Answer 'yes' if number even otherwise answer 'no'. \n";

const isEven = number => number % 2 === 0;

const data = () => {
  const question = randomize(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};

export default () => run(data, instruction);
