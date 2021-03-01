function CustomException(message) {
  const error = new Error(message);
  return error;
}
CustomException.prototype = Object.create(Error.prototype);

function debounce(fn, timeInMs) {
  if (typeof fn !== 'function' || typeof timeInMs !== 'number') {
    throw new CustomException('Arguments not correct.');
  }

  let timeCounter = 0;
  return function manageTimer() {
    clearTimeout(timeCounter);
    timeCounter = setTimeout(() => {
      fn();
    }, timeInMs);
  };
}
export { debounce };
