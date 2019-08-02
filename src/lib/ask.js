import readlineSync from 'readline-sync';

const question = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
};

const userAnswer = () => readlineSync.question('Your answer: ');

const ask = () => {
  const number = question();
  const answer = userAnswer();
  return { number, answer };
};

export default ask;
