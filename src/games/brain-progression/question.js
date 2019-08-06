import _ from 'lodash';
import randomize from '../../lib/randomize';

export default () => {
  const d = randomize(1, 5);
  const start = randomize(1, 30);

  const numberOfElements = 9;
  const elements = [start];

  for (let i = 0; i < numberOfElements; i += 1) {
    const last = elements[elements.length - 1];
    elements.push(last + d);
  }

  const number = _.sample(elements);
  const index = elements.indexOf(number);
  elements[index] = '..';

  console.log(`Question: ${elements.join(' ')}`);

  return number;
};
