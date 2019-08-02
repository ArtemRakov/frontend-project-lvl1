#!/usr/bin/env node

import getName from '..';
import BranEven from './brain-even';

console.log('Welcome to the Brain Games!');
console.log("Answer 'yes' if number even otherwise answer 'no'. \n");

const name = getName();
const game = new BranEven(name);
game.run();
