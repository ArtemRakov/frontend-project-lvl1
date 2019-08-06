#!/usr/bin/env node

import Game from '../index';
import validation from '../games/brain-gcd/validation';
import question from '../games/brain-gcd/question';
import instruction from '../games/brain-gcd/instruction';
import setupGame from '../lib/setup';


class BrainGcd extends Game {
  constructor(name) {
    super(name);
    setupGame(this, { validation, question, instruction });
  }
}


BrainGcd.run();
