import _ from 'lodash';

export default () => {
  const number1 = Math.floor(Math.random() * 25);
  const number2 = Math.floor(Math.random() * 25);
  const sign = _.sample(['+', '-', '*']);
  const question = `${number1} ${sign} ${number2}`;
  console.log(question);
  return question;
};
