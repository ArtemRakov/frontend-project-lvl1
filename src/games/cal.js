import randomize from '../randomize';
import run from '..';

const operations = [
  { sign: '+', run: (a, b) => a + b },
  { sign: '-', run: (a, b) => a - b },
  { sign: '*', run: (a, b) => a * b },
];

const instruction = () => console.log('What is the result of the expression? \n');

const validation = result => String(result);

const question = () => {
  const number1 = randomize(1, 25);
  const number2 = randomize(1, 25);
  const operation = operations[randomize(0, operations.length - 1)];
  console.log(`${number1} ${operation.sign} ${number2}`);
  return operation.run(number1, number2);
};

export default () => run(instruction, question, validation);
