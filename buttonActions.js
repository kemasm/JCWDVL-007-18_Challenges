import { matrix, matrixOrig } from "./index.js";

let redrawMatrix = function (newMatrix) {
  for (let [idxRow, row] of newMatrix.entries()) {
    for (let [idxCol, val] of row.entries()) {
      let td = document.getElementById(`${idxRow} ${idxCol}`);
      td.innerHTML = val;
    }
  }
};

let onclickRotateBtn = function () {
  let inputRotate = document.getElementById("input-rotate");
  let countRotate = Number(inputRotate.value);

  let rotateDirection = this.id.split("-")[0];
  if (rotateDirection === "left") {
    matrix = rotate(matrix, countRotate);
  } else {
    matrix = rotate(matrix, countRotate, false);
  }
  redrawMatrix(matrix);
};

let onclickSortBtn = function () {
  let [sortType, btnId] = this.id.split(" ");
  let targetIdx = Number(btnId);
  if (sortType === "row") {
    if (this.value === "true") {
      matrix[targetIdx].sort((a, b) => a - b);
    } else {
      matrix[targetIdx].sort((a, b) => b - a);
    }
  } else {
    let arr = matrix.map((row) => row[targetIdx]);
    if (this.value === "true") {
      arr.sort((a, b) => a - b);
    } else {
      arr.sort((a, b) => b - a);
    }

    for (let [idx, val] of arr.entries()) {
      matrix[idx][targetIdx] = val;
    }
  }
  // console.log(matrix);
  this.value = this.value === "true" ? "false" : "true";
  redrawMatrix(matrix);
};

let onclickResetBtn = function () {
  matrix = structuredClone(matrixOrig);
  redrawMatrix(matrix);

  let sortBtns = document.getElementsByClassName("sort-btn");
  for (let btn of sortBtns) {
    btn.value = "false";
  }
};

export { onclickResetBtn, onclickRotateBtn, onclickSortBtn };
