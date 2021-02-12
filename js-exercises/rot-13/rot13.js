function rot13(str) {
  let cipherStr = '';
  for (let char of str) {
    char = char.charCodeAt(0);
    if (char > 64 && char < 91) {
      char = (char - 64) + 13; // to baseline the ASCII value starting from 1 and add 13 for cipher
      char %= 26;
      if (char === 0) {
        char = 26;
      }
      char += 64; // to round the values after z and reverse effect of first line in this block
    }
    cipherStr += String.fromCharCode(char);
  }
  // console.log(cipherStr);
  return cipherStr;
}

export {
  rot13,
};
