let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matrix);

function mirror(matrix) {
  return matrix.map((arr) => arr.reverse());
}

function transpose(matrix) {
  let newMatrix = [];
  for (let idx = 0; idx < matrix.length; idx++) {
    let newArr = [];
    for (let idx2 = 0; idx2 < matrix.length; idx2++) {
      newArr.push(matrix[idx2][idx]);
    }
    newMatrix.push(newArr);
  }
  return newMatrix;
}

function rotate(matrix, direction) {
  if (direction === "left") {
    return transpose(mirror(matrix));
  } else if (direction === "right") {
    return mirror(transpose(matrix));
  }
}

matrix = rotate(matrix, "left");
fnDrawTd();
