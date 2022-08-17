import { sort, rotate } from "./matrix.js";

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matrixSize = matrix.length;

let redrawMatrix = function (matrix) {
  for (let [row_idx, row] of matrix.entries()) {
    for (let [col_idx, val] of row.entries()) {
      let tableCell = document.getElementById(`${row_idx} ${col_idx}`);
      tableCell.innerHTML = val;
    }
  }
};

let clickSortButton = function () {
  let isAsc = this.value === "true" ? true : false;
  let [isRow, idx] = this.id.split("-");
  isRow = isRow === "row";
  idx = Number(idx);

  // toggle button value
  if (this.value == "true") this.value = "false";
  else if (this.value == "false") this.value = "true";

  matrix = sort(matrix, idx, isRow, isAsc);
  redrawMatrix(matrix);
};

let clickRotateButton = function () {
  let rotateCount = Number(document.getElementById("rotate-input").value);
  let isLeft = this.value === "left";
  matrix = rotate(matrix, rotateCount, isLeft);
  redrawMatrix(matrix);
};

let createSortButtonComponent = function (id, value = false) {
  const tableData = document.createElement("td");
  const button = document.createElement("button");
  button.id = id;
  button.className = "sort-btn";
  button.value = value;
  button.onclick = clickSortButton;
  const textNode = document.createTextNode("sort");
  button.appendChild(textNode);
  tableData.appendChild(button);
  return tableData;
};

let init_table = function () {
  const table = document.getElementById("main-table");

  for (let i = 0; i < matrixSize; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < matrixSize; j++) {
      const tableData = document.createElement("td");
      tableData.id = `${i} ${j}`;
      const textNode = document.createTextNode(matrix[i][j]);
      tableData.appendChild(textNode);
      tableRow.appendChild(tableData);
    }
    const button_id = `row-${i}`;
    tableRow.appendChild(createSortButtonComponent(button_id));
    table.appendChild(tableRow);
  }

  const tableRow = document.createElement("tr");
  for (let j = 0; j < matrixSize; j++) {
    const button_id = `col-${j}`;
    tableRow.appendChild(createSortButtonComponent(button_id));
  }
  table.appendChild(tableRow);

  const rotateButtons = document.getElementsByClassName("rotate-btn");
  for (let button of rotateButtons) {
    button.onclick = clickRotateButton;
  }
};

window.onload = function () {
  init_table();
};
