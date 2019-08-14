import readlineSync from 'readline-sync';

const CORRECT_TIMES = 3;

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

export default (data, instruction) => {
  console.log('Welcome to the Brain Games!\n');
  const name = getName();
  console.log(instruction);

  for (let i = 0; i < CORRECT_TIMES; i += 1) {
    const { question, correctAnswer } = data();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      fail(userAnswer, correctAnswer, name);
      return;
    }
  }

  final(name);
};
