function sumFibs(num) {
  if (num < 1) {
    return 0;
  }

  let firstNumber = 1;
  let secondNumber = 1;
  let sum = 1;
  while (secondNumber <= num) {
    if (!(secondNumber % 2 === 0)) {
      sum += secondNumber;
    }
    const temp = secondNumber;
    secondNumber = firstNumber + secondNumber;
    firstNumber = temp;
  }
  return sum;
  // console.log(sum);
}

function cacheFunction() {}

export { sumFibs, cacheFunction };
