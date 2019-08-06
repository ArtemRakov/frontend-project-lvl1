#!/usr/bin/env node

import run from '..';
import validation from '../games/brain-gcd/validation';
import question from '../games/brain-gcd/question';
import instruction from '../games/brain-gcd/instruction';

run(instruction, question, validation);
