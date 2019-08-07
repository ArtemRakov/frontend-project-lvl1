import readlineSync from 'readline-sync';
import {
  success, fail, final, getName,
} from './lib/utils';

export default (instruction, question, validation) => {
  console.log('Welcome to the Brain Games!\n');
  const name = getName();
  instruction();
  let correct = 0;

  while (correct < 3) {
    const result = question();
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = validation(result, userAnswer);

    if (correctAnswer === userAnswer) {
      correct += 1;
      success();
    } else {
      fail(userAnswer, correctAnswer, name);
      return;
    }
  }

  final(name);
};
