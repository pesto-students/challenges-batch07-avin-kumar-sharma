const sumEvenArgs = (...args) => {
  let sum = 0;
  for (const arg of args) {
    if (arg % 2 === 0) {
      sum += arg;
    }
  }
  // console.log(sum);
  return sum;
};
export { sumEvenArgs };
