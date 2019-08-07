import readlineSync from 'readline-sync';

const success = () => {
  console.log('Correct!');
};

const fail = (answer, correctAnswer, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
};

const final = (name) => {
  console.log(`Congratulations, ${name}!`);
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const randomize = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


export {
  success, fail, final, getName, randomize,
};
