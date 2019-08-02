#!/usr/bin/env node
/* eslint no-eval: 0 */

import _ from 'lodash';
import Game from '../lib/game';

class BrainCal extends Game {
  constructor(name) {
    super(name);
    this.validation = result => String(eval(result));
    this.question = () => {
      const number1 = Math.floor(Math.random() * 25);
      const number2 = Math.floor(Math.random() * 25);
      const sign = _.sample(['+', '-', '*']);
      const question = `${number1} ${sign} ${number2}`;
      console.log(question);
      return question;
    };
    this.instuction = () => console.log('What is the result of the expression? \n');
  }
}


BrainCal.run();
