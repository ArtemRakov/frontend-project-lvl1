#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-even/validation';
import question from '../games/brain-even/question';
import instruction from '../games/brain-even/instruction';
import setupGame from '../lib/setup';


class BrainEven extends Game {
  constructor(name) {
    super(name);
    setupGame(this, { validation, question, instruction });
  }
}


BrainEven.run();
