// Alpha forward
// forward setiap huruf alphabet sebanyak n buah untuk setiap char
function getNextChar(char, n = 1) {
  let isUpper = char.toUpperCase() === char;

  let charList = "abcdefghijklmnopqrstuvwxyz";
  if (isUpper) charList = charList.toUpperCase();

  let idx = charList.indexOf(char);
  if (idx == -1) {
    let numList = "0123456789";
    idx = numList.indexOf(char);
    if (idx == -1) return char;
    return numList[(idx + n) % numList.length];
  }
  return charList[(idx + n) % charList.length];
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
