function removeFalsyValues(array) {
  for (let i = 0; i < array.length;) {
    const currentItem = array[i];
    if (!currentItem) {
      array.splice(i, 1);
    } else {
      i += 1;
    }
  }
  return array;
}

export {
  removeFalsyValues,
};
