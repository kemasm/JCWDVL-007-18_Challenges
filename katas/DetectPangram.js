function isPangram(string) {
  string = string.toLowerCase().replace(/[^a-z]/g, "");
  let charDict = {};
  for (let char of string) {
    charDict[char] = (charDict[char] || 0) + 1;
  }
  return Object.keys(charDict).length == 26;
}
