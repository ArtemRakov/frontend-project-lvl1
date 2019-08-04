export default () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
};
