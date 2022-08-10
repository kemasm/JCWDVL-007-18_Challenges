// isPrime
// buatlah function untuk menentukan suatu bilangan adalah bilangan prima atau bukan
// ex.  input: 2
//      output: ["1 x 2"] = Prime

// ex.  input: 10
//      ouput: ["1 x 10", "2 x 5", "5 x 2"] = Is Not Prime

function getFactors(input) {
  let factors = [];

  if (input === 1 || input === 2) {
    return [[1, input]]; // base case, if input 1 & 2 then return the only factor
  } else {
    for (let divisor = 2; divisor < input; divisor++) {
      // divide with any number below input
      if (input % divisor === 0) {
        factors.push([divisor, input / divisor]);
      }
    }
    factors.unshift([1, input]); // add the remaining factor, which is 1
    return factors;
  }
}

function isPrime(n) {
  const factors = getFactors(n);
  const result = factors.length === 1 && n !== 1 ? "Prime" : "Is Not Prime";
  const factorsStr = factors.map((x) => `"${x[0]} x ${x[1]}"`).join(", ");
  const outputFmt = (a, b) => `[${a}] = ${b}`;
  return outputFmt(factorsStr, result);
}

let inputs = [1, 2, 8, 10, 24];
for (let input of inputs) console.log(`${isPrime(input)}\n`);

export { getFactors };
