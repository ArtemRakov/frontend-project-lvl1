import randomize from '../randomize';
import run from '..';

const instruction = () => 'Find the greatest common divisor of given numbers. \n';

const findGcd = (a, b) => {
  if (a < b) return findGcd(b, a);
  if (b === 0) return a;
  return findGcd(b, a % b);
};

const data = () => {
  const number1 = randomize(1, 50);
  const number2 = randomize(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2).toString();

  return { question, correctAnswer };
};


export default () => run(data, instruction);
