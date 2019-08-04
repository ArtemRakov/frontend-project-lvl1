export default (string) => {
  const numbers = string.split(' ');
  let [first, second] = numbers;
  while (first !== 0 && second !== 0) {
    if (first > second) {
      first %= second;
    } else {
      second %= first;
    }
  }

  return String(first + second);
};
