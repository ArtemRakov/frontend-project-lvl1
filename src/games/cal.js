import randomize from '../randomize';
import run from '..';

const operations = [
  { sign: '+', solve: (a, b) => a + b },
  { sign: '-', solve: (a, b) => a - b },
  { sign: '*', solve: (a, b) => a * b },
];

const instruction = () => 'What is the result of the expression? \n';


const data = () => {
  const number1 = randomize(1, 25);
  const number2 = randomize(1, 25);
  const operation = operations[randomize(0, operations.length - 1)];
  const question = (`${number1} ${operation.sign} ${number2}`);
  const correctAnswer = operation.solve(number1, number2).toString();
  return { question, correctAnswer };
};

export default () => run(data, instruction);
