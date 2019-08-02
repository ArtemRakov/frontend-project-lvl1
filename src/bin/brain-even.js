#!/usr/bin/env node

import Game from '../lib/game';

class BrainEven extends Game {
  constructor(name) {
    super(name);
    this.validation = (number) => number % 2 === 0 ? 'yes' : 'no';  
    this.question = () => {
      const number = Math.floor(Math.random() * 100);
      console.log(`Question: ${number}`);
      return number;
    };
    this.instuction = () => console.log("Answer 'yes' if number even otherwise answer 'no'. \n");
  }
}


BrainEven.run()
