// Even/Odd (Tidak boleh menggunakan split)
// Ex.  Input   : '3-10-9-1-55'
//      OUput   : 'Total Bilangan Genap: 1 & Total Bilangan Ganjil: 4'

export function countOddEven(input_str) {
  const result_format = (a, b) =>
    `Total Bilangan Genap: ${a} & Total Bilangan Ganjil: ${b}`;

  let count_odd = 0;
  let count_even = 0;

  function incrementCounter(input_num) {
    if (input_num % 2 === 0) {
      count_even++;
    } else {
      count_odd++;
    }
  }

  let num_str = "";
  let num = NaN;
  for (let char of input_str) {
    if (char === "-") {
      // if separator then process number and reset temporary string character
      num = parseInt(num_str);
      incrementCounter(num);
      num_str = "";
    } else {
      // if num character append the temporary string character
      num_str += char;
    }
  }

  // process the last number
  // unless the input is an empty string
  num = parseInt(num_str);
  if (!isNaN(num)) {
    incrementCounter(num);
  }

  return result_format(count_even, count_odd);
}
