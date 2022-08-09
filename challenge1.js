// Alpha forward
// forward setiap huruf alphabet sebanyak n buah untuk setiap char
function _getChar(chars, n) {
  return chars[n % chars.length];
}

function getNextChar(char, n = 1) {
  let isUpper = char.toUpperCase() === char;

  let numList = "0123456789";
  let idx = numList.indexOf(char);
  if (idx != -1) return _getChar(numList, idx + n);

  let charList = "abcdefghijklmnopqrstuvwxyz";
  if (isUpper) charList = charList.toUpperCase();

  idx = charList.indexOf(char);
  if (idx != -1) return _getChar(charList, idx + n);

  return char;
}

function aplhaForward(input, forward) {
  let chars = input.split("").map((char) => getNextChar(char, forward));
  return chars.join("");
}

// let input = "abc";
// let result = aplhaForward(input, 3);
// console.log(`input: ${input}\nresult: ${result}`);

// input = "xyz";
// result = aplhaForward(input, 3);
// console.log(`input: ${input}\nresult: ${result}`);
export { aplhaForward };
