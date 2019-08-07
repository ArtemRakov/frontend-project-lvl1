#!/usr/bin/env node

import run from '..';
import validation from '../games/brain-prime/validation';
import question from '../games/brain-prime/question';
import instruction from '../games/brain-prime/instruction';

run(instruction, question, validation);
