let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let _sort = (arr, asc) => {
  if (asc) {
    return arr.sort((a, b) => a - b);
  } else {
    return arr.sort((a, b) => b - a);
  }
};

let sort = (matrix, idx, is_row = true, asc = true) => {
  if (is_row) {
    let arr = matrix[idx];
    arr = _sort(arr, asc);
    matrix[idx] = arr;
  } else {
    let arr = matrix.map((row) => row[idx]);
    arr = _sort(arr, asc);
    matrix.forEach((row, i) => (row[idx] = arr[i]));
  }
  return matrix;
};

let transpose = (matrix) => {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

let mirror = (matrix) => {
  return matrix.map((row) => row.reverse());
};

let rotate = (matrix, count = 1, left = true) => {
  let func1 = transpose;
  let func2 = mirror;
  if (!left) {
    [func1, func2] = [func2, func1];
  }
  count = count % 4;
  for (let i = 0; i < count; i++) {
    matrix = func1(func2(matrix));
  }
  return matrix;
};

export { sort, rotate };
