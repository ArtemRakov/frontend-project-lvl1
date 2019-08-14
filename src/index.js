import readlineSync from 'readline-sync';

const correctTimes = 3;

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default (data, instruction) => {
  console.log('Welcome to the Brain Games!\n');
  const name = getName();
  console.log(instruction, '\n');

  for (let i = 0; i < correctTimes; i += 1) {
    const { question, correctAnswer } = data();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
