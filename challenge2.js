// inversions
// buatlah function untuk menetukan ada berapa bilangan yg itdak sesuai dengan urutan pada array

// [1, 3, 2, 4] => 1 inversions = 3 dan 2
// [4, 1, 2, 3] => 3 inversions = 4 dan 1, 4 dan 2, 4 dan 3
// [3, 1, 2, 4] => 2 inversions = 3 dan 1, 3 dan 2
function inversions(arr) {
  let inverseArr = [];
  let isNotSorted = true;
  while (isNotSorted) {
    isNotSorted = false;
    for (let idx = 0; idx < arr.length - 1; idx++) {
      if (arr[idx] > arr[idx + 1]) {
        isNotSorted = true;
        inverseArr.push([arr[idx], arr[idx + 1]]);
        let temp = arr[idx];
        arr[idx] = arr[idx + 1];
        arr[idx + 1] = temp;
      }
    }
  }

  let outputFmt = `${inverseArr.length} inversions = `;
  for (let inverse of inverseArr) {
    outputFmt += `${inverse[0]} dan ${inverse[1]}, `;
  }
  return outputFmt;
}

let inputs = [
  [1, 3, 2, 4],
  [4, 1, 2, 3],
  [3, 1, 2, 4],
];
for (let input of inputs) console.log(`[${input}] => ${inversions(input)}`);

export { inversions };
