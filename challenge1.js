export function uppercaseWave(input_str) {
  let outputs = [];
  for (let idx = 0; idx < input_str.length; idx++) {
    let wavingChar = input_str[idx].toUpperCase();
    let left = input_str.slice(0, idx);
    let right = input_str.slice(idx + 1);
    let output = left + wavingChar + right;
    outputs.push(output);
  }
  outputs = outputs.join("\n");
  return outputs;
}

console.log(uppercaseWave("ryan"));
