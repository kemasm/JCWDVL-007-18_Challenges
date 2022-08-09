// !DuplicateAlpha
// Buatlah function untuk mencari huruf yang tidak terduplikasi
// ex. input: 'Purwadhika'
//      ouput: 'Huruf P, u, r, w, d, h, i, k masih original dan belum terduplikasi'
const outputFmt = (...args) =>
  `Huruf ${args[0]} masih original dan belum terduplikasi`;

function notDuplicateAlpha(chars) {
  input = chars.slice();
  input = input.replace(/[^a-zA-Z]/gi, "");

  const charDict = {};
  for (let char of input) {
    if (charDict[char.toUpperCase()] || 0) char = char.toUpperCase();
    if (charDict[char.toLowerCase()] || 0) char = char.toLowerCase();
    charDict[char] = (charDict[char] || 0) + 1;
  }

  let results = Object.entries(charDict)
    .filter((x) => x[1] == 1)
    .map((x) => x[0]);

  return results;
}

let input = "Purwadhika";
let result = notDuplicateAlpha(input).join(", ");
console.log(outputFmt(result));

input = "Hello world!";
result = notDuplicateAlpha(input).join(", ");
console.log(outputFmt(result));

export { notDuplicateAlpha };
