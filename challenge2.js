// Generate range (looping only)
// ex.  min: 2, max: 10, step: 2
//      res: [2, 4, 6, 8, 10]

// ex.  min: 2, max: 10, step: 3
//      res: [2, 5, 8, 11]

function generateRange(min, max, step = 1) {
  let result = [];
  for (; min <= max; min += step) {
    result.push(min);
  }
  return result;
}

let min = 5;
let max = 10;
let step = 1;
let range = generateRange(min, max, step);
console.log(range);

export { generateRange };
