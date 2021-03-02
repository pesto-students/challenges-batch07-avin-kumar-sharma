const limitFunctionCallCount = (fn, counter) => {
  let trackCounter = 0;
  function callBackFunction(...args) {
    if (trackCounter === counter) return null;
    trackCounter += 1;
    return fn.apply(this, args);
  }
  return callBackFunction;
};

export {
  limitFunctionCallCount,
};
