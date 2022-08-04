// ex. 39   : 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4 -> 3x
export function persistance(input) {
  input = Math.abs(input); // handle negative number inputs
  let val = String(input);

  let persistance = 0;
  while (val.length > 1) {
    let splittedVal = Array.from(val);
    splittedVal = splittedVal.map((i) => parseInt(i));

    let multiplied = splittedVal[0];
    for (let idx = 1; idx < splittedVal.length; idx++) {
      multiplied *= splittedVal[idx];
    }
    val = String(multiplied);

    persistance++;
  }

  return persistance;
}
