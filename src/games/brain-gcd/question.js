export default () => {
  const first = Math.floor(Math.random() * 100);
  const second = Math.floor(Math.random() * 100);

  console.log(`Question: ${first} ${second}`);
  return `${first} ${second}`;
};
