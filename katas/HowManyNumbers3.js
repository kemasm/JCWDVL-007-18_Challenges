function combNRep(arr, x) {
  let pool = [...new Set(arr)];
  let n = pool.length;
  if (!n && x) return;
  let indices = Array(x).fill(0);
  let result = [];
  result.push(indices.map((i) => pool[i]));
  while (true) {
    let cond = false;
    let i;
    for (i of [...Array(x).keys()].reverse()) {
      if (indices[i] != n - 1) {
        cond = true;
        break;
      }
    }
    if (!cond) {
      return result;
    }
    let z = Array(x - i).fill(indices[i] + 1);
    indices = indices.slice(0, i).concat(z);
    result.push(indices.map((i) => pool[i]));
  }
}

function findAll(sum, amountDigits) {
  let combs = combNRep([1, 2, 3, 4, 5, 6, 7, 8, 9], amountDigits);
  let target = combs
    .filter((comb) => comb.reduce((a, b) => a + b) == sum)
    .map((comb) => comb.join(""));
  if (!target.length) return [];
  return [target.length, target[0], target[target.length - 1]];
}

export { findAll, combNRep };
