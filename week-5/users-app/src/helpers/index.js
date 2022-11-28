export const sumNumbers = (x, y) => {
  console.log('sum number function is called', x, y);
  // too complicated and costly
  let result = 0;
  for (let i = 0; i<1000000000; i++) {
    result += i;
  }
  return x + y;
};
