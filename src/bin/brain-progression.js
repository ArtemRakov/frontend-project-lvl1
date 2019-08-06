#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-progression/validation';
import question from '../games/brain-progression/question';
import instruction from '../games/brain-progression/instruction';


class BrainProgression extends Game {
  constructor(name) {
    super(name);
    this.validation = validation;
    this.question = question;
    this.instruction = instruction;
  }
}


BrainProgression.run();
