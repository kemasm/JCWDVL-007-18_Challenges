// ex. 39   : 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4 -> 3x
export function persistance(input) {
  input = Math.abs(input); // handle negative number inputs
  let result = 0;

  let val = String(input);
  while (val.length > 1) {
    val = val
      .split("")
      .map((i) => parseInt(i))
      .reduce((a, b) => a * b)
      .toString();

    result++;
  }

  return result;
}
