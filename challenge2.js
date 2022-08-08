// buatlah program untuk memisahkan setiap angka ganjil yang saling bersampingan
// tidak boleh menggunakan method bawaan js & 1 array saja
// input : [3, 9, 2, 3, 4, 7, 5, 6]
// output: [3, "-", 9, 2, 3, 4, 7, "-", 5, 6]

function isOdd(num) {
  return num % 2 === 1;
}

export function oddSliceOdd(inputs = []) {
  if (inputs.length < 2) return inputs;

  for (let idx = 0; idx < inputs.length - 1; idx++) {
    if (isOdd(inputs[idx]) && isOdd(inputs[idx + 1])) {
      inputs.splice(idx + 1, 0, "-");
      idx += 1;
    }
  }
  return inputs;
}

// const input = [3, 9, 2, 3, 4, 7, 5, 6];
// const resutl = oddSliceOdd(input);
// console.log(resutl);
