#!/usr/bin/env node

import run from '..';
import validation from '../games/brain-even/validation';
import question from '../games/brain-even/question';
import instruction from '../games/brain-even/instruction';

run(instruction, question, validation);
