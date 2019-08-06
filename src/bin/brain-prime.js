#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-prime/validation';
import question from '../games/brain-prime/question';
import instruction from '../games/brain-prime/instruction';


class BrainPrime extends Game {
  constructor(name) {
    super(name);
    this.validation = validation;
    this.question = question;
    this.instruction = instruction;
  }
}


BrainPrime.run();
