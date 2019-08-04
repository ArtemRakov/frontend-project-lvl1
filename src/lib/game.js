import readlineSync from 'readline-sync';
import Message from './message';
import getName from '..';

class Game {
  constructor(name) {
    this.name = name;
    this.message = Message;
    this.userAnswer = () => readlineSync.question('Your answer: ');
  }

  startGame() {
    this.instruction();
    let correct = 0;

    while (correct < 3) {
      const result = this.question();
      const userAnswer = this.userAnswer();
      const correctAnswer = this.validation(result, userAnswer);

      if (correctAnswer === userAnswer) {
        correct += 1;
        this.message.success();
      } else {
        this.message.fail(userAnswer, correctAnswer, this.name);
        return;
      }
    }

    this.message.final(this.name);
  }

  static run() {
    console.log('Welcome to the Brain Games!\n');
    const name = getName();
    new this(name).startGame();
  }
}

export default Game;
