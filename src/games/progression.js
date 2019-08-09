import _ from 'lodash';
import randomize from '../randomize';
import run from '..';

const instruction = () => 'What number is missing in the progression?. \n';

const LENGTH_OF_PROGRESSION = 10;

const buildProgression = (size, d) => {
  if (size < 1) return [];

  const start = randomize(1, 30);

  const iter = (acc, length) => {
    if (length < 1) {
      return acc;
    }
    const last = acc[acc.length - 1] + d;
    return iter([...acc, last], length - 1);
  };

  return iter([start], size - 1);
};

const data = () => {
  const d = randomize(1, 5);
  const progression = buildProgression(LENGTH_OF_PROGRESSION, d);

  const number = _.sample(progression);
  const index = progression.indexOf(number);
  progression[index] = '..';
  const question = progression.join(' ');
  const correctAnswer = number.toString();

  return { question, correctAnswer };
};

export default () => run(data, instruction);
