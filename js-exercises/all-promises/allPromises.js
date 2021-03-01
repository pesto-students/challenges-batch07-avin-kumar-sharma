const individualPromise = (promise) => {
  const indPromise = new Promise((resolve, reject) => {
    if (typeof (promise) === 'string' || typeof (promise) === 'number' || promise === null || promise === undefined) {
      resolve(promise);
    } else {
      promise.then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      });
    }
  });
  return indPromise;
};

const recursivePromiseResolve = (inputPromiseArr, outputArr) => {
  const resolvedArr = new Promise((resolve, reject) => {
    const callRecursivePromise = (shiftInputPromiseArr, appendOutputArr) => {
      individualPromise(shiftInputPromiseArr[0]).then(indvidualResponse => {
        appendOutputArr.push(indvidualResponse);
        shiftInputPromiseArr.shift();
        if (shiftInputPromiseArr.length > 0) {
          callRecursivePromise(shiftInputPromiseArr, appendOutputArr);
        } else {
          resolve(appendOutputArr);
        }
      }).catch((error) => {
        reject(error);
      });
    };
    callRecursivePromise(inputPromiseArr, outputArr);
  });
  return resolvedArr;
};

const allPromises = args => {
  const outputArr = recursivePromiseResolve(args, []);
  return outputArr;
};

export { allPromises };
