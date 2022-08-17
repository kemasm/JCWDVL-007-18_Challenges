let transpose = function (matrix) {
  return matrix[0].map((col, i) => matrix.map((row) => row[i]));
};

let mirror = function (matrix) {
  return matrix.map((row) => row.reverse());
};

let rotate = function (matrix, countRotate, isLeft = true) {
  countRotate %= 4;

  let counter = 0;
  while (counter < countRotate) {
    if (isLeft) {
      matrix = transpose(mirror(matrix));
    } else {
      matrix = mirror(transpose(matrix));
    }
    counter++;
  }

  return matrix;
};

export { rotate };
