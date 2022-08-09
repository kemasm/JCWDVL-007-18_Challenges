// Alpha forward
// forward setiap huruf alphabet sebanyak n buah untuk setiap char
function getNextAlpha(char, n = 1) {
  let isUpper = char.toUpperCase() === char;

  let charList = "abcdefghijklmnopqrstuvwxyz";
  if (isUpper) charList = charList.toUpperCase();

  let idx = charList.indexOf(char);
  if (idx == -1) return char;
  return charList[(idx + n) % charList.length];
}

function aplhaForward(input, forward) {
  let chars = input.split("").map((char) => getNextAlpha(char, forward));
  return chars.join("");
}

// let input = "abc";
// let result = aplhaForward(input, 3);
// console.log(`input: ${input}\nresult: ${result}`);

// input = "xyz";
// result = aplhaForward(input, 3);
// console.log(`input: ${input}\nresult: ${result}`);
export { aplhaForward };
