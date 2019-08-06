import _ from 'lodash';
import randomize from '../../lib/randomize';

export default () => {
  const number1 = randomize(1, 25);
  const number2 = randomize(1, 25);
  const sign = _.sample(['+', '-', '*']);
  const question = `${number1} ${sign} ${number2}`;
  console.log(question);
  return question;
};
