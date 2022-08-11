// Change Upper (1 variable only)
// Ex. Input  : helloWorldHai!
//     Result : hello-World-Hai!
function changeUpper(input = "") {
  for (let idx = 0; idx < input.length; idx++) {
    if (input[idx].match(/[A-Z]/)) {
      input = input.slice(0, idx) + "-" + input.slice(idx);
      idx += 1;
    }
  }
  return input;
}

console.log(changeUpper("AA"));

export { changeUpper };
