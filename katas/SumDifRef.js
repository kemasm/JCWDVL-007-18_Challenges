let results = [45, 54];
let numbersSet = new Set(results);

function flipInt(n) {
  var digit,
    result = 0;

  while (n) {
    digit = n % 10; //  Get right-most digit. Ex. 123/10 → 12.3 → 3
    result = result * 10 + digit; //  Ex. 123 → 1230 + 4 → 1234
    n = (n / 10) | 0; //  Remove right-most digit. Ex. 123 → 12.3 → 12
  }

  return result;
}

function isPartOfSet(val) {
  if (val % 10 === 0) {
    return false;
  }

  if (numbersSet.has(val)) {
    if (results.indexOf(val) === -1) results.push(val);
    return true;
  }

  let flippedVal = flipInt(val);
  let isPart = (val + flippedVal) % (val - flippedVal) === 0;
  if (isPart) {
    numbersSet.add(val);
    numbersSet.add(flippedVal);
    results.push(val);
    return true;
  }

  return false;
}

function sumDifRev(n) {
  let val = results[results.length - 1];
  while (results[n - 1] === undefined) {
    isPartOfSet(val);
    val += 1;
  }

  return results[n - 1];
}

export { sumDifRev };
