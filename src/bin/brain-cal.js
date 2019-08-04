#!/usr/bin/env node
/* eslint no-eval: 0 */

import Game from '../lib/game';
import validation from '../games/brain-cal/validation';
import question from '../games/brain-cal/question';
import instruction from '../games/brain-cal/instruction';

class BrainCal extends Game {
  constructor(name) {
    super(name);
    this.validation = validation;
    this.question = question;
    this.instruction = instruction;
  }
}


BrainCal.run();
