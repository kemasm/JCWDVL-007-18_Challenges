// inversions
// buatlah function untuk menetukan ada berapa bilangan yg itdak sesuai dengan urutan pada array

// [1, 3, 2, 4] => 1 inversions = 3 dan 2
// [4, 1, 2, 3] => 3 inversions = 4 dan 1, 4 dan 2, 4 dan 3
// [3, 1, 2, 4] => 2 inversions = 3 dan 1, 3 dan 2
function inversions(arr) {
  let inputArr = arr.slice();
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

  let inputToStr = `[${inputArr.join(", ")}]`;
  let inverseArrStr = inverseArr.map((x) => `${x[0]} dan ${x[1]}`).join(", ");
  let outputFmt = `${inputToStr} => ${inverseArr.length} inversions = ${inverseArrStr}`;
  return outputFmt;
}

let inputs = [
  [1, 3, 2, 4],
  [4, 1, 2, 3],
  [3, 1, 2, 4],
];
for (let input of inputs) console.log(inversions(input));

export { inversions };
