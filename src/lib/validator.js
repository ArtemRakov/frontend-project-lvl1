class Validator {
  static valid(number, answer) {
    const even = this.correctAnswer(number);
    return even === answer.toLowerCase();
  }


  static correctAnswer(number) {
    return number % 2 === 0 ? 'yes' : 'no';
  }
}

export default Validator;
