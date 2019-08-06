#!/usr/bin/env node

import run from '..';
import validation from '../games/brain-progression/validation';
import question from '../games/brain-progression/question';
import instruction from '../games/brain-progression/instruction';

run(instruction, question, validation);
