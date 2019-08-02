class Message {
  static success() {
    console.log('Correct!');
  }

  static fail(answer, correctAnswer, name) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
  }

  static final(name) {
    console.log(`Congratulations, ${name}!`);
  }
}

export default Message;
