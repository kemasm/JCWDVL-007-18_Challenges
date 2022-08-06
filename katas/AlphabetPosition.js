const charValDict = {};
for (const [index, char] of "abcdefghijklmnopqrstuvwxyz".split("").entries()) {
  charValDict[char] = (index + 1).toString();
}

function alphabetPosition(text = "") {
  text = text.toLowerCase();
  const regexPattern = RegExp("[a-z]", "g");
  let results = [];
  let result;
  while ((result = regexPattern.exec(text)) !== null) {
    results.push(result);
  }
  results = results.map((i) => charValDict[i[0]]).join(" ");
  return results;
}

export { alphabetPosition };
