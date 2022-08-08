function isNumeric(str) {
  if (typeof str != "string") return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

function minMax(inputs) {
  let min = Infinity;
  let max = -Infinity;
  for (let val of inputs) {
    if (val < min) min = val;
    if (val > max) max = val;
  }

  return [min, max];
}

function main() {
  let numbers = [];
  while (true) {
    let number = prompt("masukkan angka");

    let isAcceptInput = isNumeric(number);
    if (!isAcceptInput) break;

    numbers.push(parseFloat(number));
  }

  let [min, max] = minMax(numbers);

  alert(`input: ${numbers}\nmin: ${min}\nmax ${max}`);
}

main();
