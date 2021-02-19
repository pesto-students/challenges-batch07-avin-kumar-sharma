const deepCopyObject = (objToCopy) => {
  if (typeof (objToCopy) !== 'object' || objToCopy === null) { return objToCopy; }
  const newDeepObject = {};
  for (const key in objToCopy) {
    if (Object.prototype.hasOwnProperty.call(objToCopy, key)) {
      newDeepObject[key] = deepCopyObject(objToCopy[key]);
    }
  }
  return newDeepObject;
};

export { deepCopyObject };
