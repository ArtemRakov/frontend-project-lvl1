#!/usr/bin/env node

import Game from '../lib/game';
import validation from '../games/brain-gcd/validation';
import question from '../games/brain-gcd/question';
import instruction from '../games/brain-gcd/instruction';


class BrainGcd extends Game {
  constructor(name) {
    super(name);
    this.validation = validation;
    this.question = question;
    this.instruction = instruction;
  }
}


BrainGcd.run();
