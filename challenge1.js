// sort the numbers (no method & 1 array only)
// buatlah function untuk mengurutkan bilangan yang acak

// Ex. Input  : [10, 3, 5, 100, 1]
//     Result : [1, 3, 5, 10, 100]

const input = [1, 2];

function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  // selection sort, hence can be upgraded to double pivot
  for (let lowestIdx = 0; lowestIdx < arr.length - 1; lowestIdx++) {
    let min = Infinity;
    let minIdx = -1;
    for (let runningIdx = lowestIdx; runningIdx < arr.length; runningIdx++) {
      if (arr[runningIdx] < min) {
        min = arr[runningIdx];
        minIdx = runningIdx;
      }
    }
    let temp = arr[lowestIdx];
    arr[lowestIdx] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}

console.log(sort(input));

export { sort };
