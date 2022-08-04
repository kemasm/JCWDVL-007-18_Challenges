// ex. 39   : 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4 -> 3x
export function persistance(input_int) {
  let input_str = String(input_int);
  let counter = 0;
  while (input_str.length > 1) {
    let splitted_input = Array.from(input_str);
    splitted_input = splitted_input.map((i) => parseInt(i));
    let multiplied = splitted_input[0];
    for (let idx = 1; idx < splitted_input.length; idx++) {
      multiplied *= splitted_input[idx];
    }
    input_str = String(multiplied);
    counter++;
  }
  return counter;
}
