#!/usr/bin/env node

import run from '..';
import validation from '../games/brain-cal/validation';
import question from '../games/brain-cal/question';
import instruction from '../games/brain-cal/instruction';

run(instruction, question, validation);
