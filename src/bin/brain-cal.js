#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-cal/validation';
import question from '../games/brain-cal/question';
import instruction from '../games/brain-cal/instruction';
import setupGame from '../lib/setup';


class BrainCal extends Game {
  constructor(name) {
    super(name);
    setupGame(this, { validation, question, instruction });
  }
}


BrainCal.run();
