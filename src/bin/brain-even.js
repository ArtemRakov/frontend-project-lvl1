#!/usr/bin/env node

import getName from '..';
import ask from '../lib/ask';
import Validator from '../lib/validator';
import Message from '../lib/message';

class BrainEven {
  constructor(name) {
    this.name = name;
    this.validator = Validator;
    this.message = Message;
  }

  run() {
    let correct = 0;

    while (correct < 3) {
      const { number, answer } = ask();

      if (this.validator.valid(number, answer)) {
        correct += 1;
        this.message.success();
      } else {
        this.message.fail(answer, this.validator.correctAnswer(number), this.name);
        return;
      }
    }

    this.message.final(this.name);
  }
}

console.log('Welcome to the Brain Games!');
console.log("Answer 'yes' if number even otherwise answer 'no'. \n");

const name = getName();
new BrainEven(name).run();
