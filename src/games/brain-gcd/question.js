import randomize from '../../lib/randomize';

export default () => {
  const first = randomize(1, 50);
  const second = randomize(1, 50);

  console.log(`Question: ${first} ${second}`);
  return `${first} ${second}`;
};
