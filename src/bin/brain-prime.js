#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-prime/validation';
import question from '../games/brain-prime/question';
import instruction from '../games/brain-prime/instruction';
import setupGame from '../lib/setup';

class BrainPrime extends Game {
  constructor(name) {
    super(name);
    setupGame(this, { validation, question, instruction });
  }
}


BrainPrime.run();
