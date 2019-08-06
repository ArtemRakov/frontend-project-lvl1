#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-progression/validation';
import question from '../games/brain-progression/question';
import instruction from '../games/brain-progression/instruction';
import setupGame from '../lib/setup';


class BrainProgression extends Game {
  constructor(name) {
    super(name);
    setupGame(this, { validation, question, instruction });
  }
}


BrainProgression.run();
