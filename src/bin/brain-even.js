#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-even/validation';
import question from '../games/brain-even/question';
import instruction from '../games/brain-even/instruction';z


class BrainEven extends Game {
  constructor(name) {
    super(name);
    this.validation = validation;
    this.question = question;
    this.instruction = instruction;
  }
}


BrainEven.run();
