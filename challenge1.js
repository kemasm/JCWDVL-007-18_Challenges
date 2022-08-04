export function uppercaseWave(input_str) {
  const outputs = [];
  const splittedInput = Array.from(input_str);
  for (let idx = 0; idx < splittedInput.length; idx++) {
    splittedInput[idx] = splittedInput[idx].toUpperCase(); // character waving
    outputs.push(splittedInput.join(""));
    splittedInput[idx] = splittedInput[idx].toLowerCase(); // character finish waving
  }
  return outputs.join("\n");
}
