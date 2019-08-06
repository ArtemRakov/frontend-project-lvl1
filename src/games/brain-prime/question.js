import randomize from '../../lib/randomize';

export default () => {
  const number = randomize(1, 30);
  console.log(`Question: ${number}`);
  return number;
};
