import randomize from '../../lib/randomize';

const operations = [
  { sign: '+', run: (a, b) => a + b },
  { sign: '-', run: (a, b) => a - b },
  { sign: '*', run: (a, b) => a * b },
];

export default () => {
  const number1 = randomize(1, 25);
  const number2 = randomize(1, 25);
  const operation = operations[randomize(0, operations.length - 1)];
  const question = `${number1} ${operation.sign} ${number2}`;
  console.log(question);
  return operation.run(number1, number2);
};
