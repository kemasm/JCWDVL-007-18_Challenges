export function uppercaseWave(input_str) {
  const outputs = [];
  const splittedInput = Array.from(input_str);
  for (let idx = 0; idx < splittedInput.length; idx++) {
    splittedInput[idx] = splittedInput[idx].toUpperCase();
    outputs.push(splittedInput.join(""));
    splittedInput[idx] = splittedInput[idx].toLowerCase();
  }
  return outputs.join("\n");
}

console.log(uppercaseWave("ryan"));
