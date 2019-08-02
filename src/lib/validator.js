class Validator {
  static valid(number, answer) {
    return this.correctAnswer(number) === answer.toLowerCase();
  }


  static correctAnswer(number) {
    return number % 2 === 0 ? 'yes' : 'no';
  }
}

export default Validator;
