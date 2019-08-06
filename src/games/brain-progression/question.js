import _ from 'lodash';

export default () => {
  const d = Math.ceil(Math.random() * 10);
  const start = Math.floor(Math.random() * 10);

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
