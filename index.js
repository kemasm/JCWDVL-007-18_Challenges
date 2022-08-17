import { rotate } from "./matrix.js";

// const matrixOrig = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

let row = Array(4)
  .fill(1)
  .map((val, idx) => idx + val);
const matrixOrig = row.map((val, idx) => row.map((x) => x + row.length * idx));

let matrix = structuredClone(matrixOrig);

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

let initPage = function () {
  let createSortButton = function (tableRow, idx, sortType = "row") {
    let tableData = document.createElement("td");
    let button = document.createElement("button");
    button.value = false; // false = desc
    button.id = `${sortType} ${idx}`;
    button.className = "sort-btn";
    button.onclick = onclickSortBtn;
    let text = document.createTextNode(`sort`);
    button.appendChild(text);
    tableData.appendChild(button);
    tableRow.appendChild(tableData);
  };

  // create matrix table with its components
  const table = document.getElementById(`main-table`);
  for (let [idxRow, row] of matrix.entries()) {
    let tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let [idxCol, val] of row.entries()) {
      let tableData = document.createElement("td");
      let data = document.createTextNode(`${val}`);
      tableData.id = `${idxRow} ${idxCol}`;
      tableRow.appendChild(tableData);
    }
    let tableData = document.createElement("td");
    createSortButton(tableRow, idxRow); // create sort button for each rows
  }

  let tableRow = document.createElement("tr");
  table.appendChild(tableRow);
  for (let idxCol in matrix[0]) {
    createSortButton(tableRow, idxCol, "col"); // create sort button for each columns
  }

  for (let [idxRow, row] of matrix.entries()) {
    for (let [idxCol, val] of row.entries()) {
      let tblDataComp = document.getElementById(`${idxRow} ${idxCol}`);
      tblDataComp.innerHTML = val;
    }
  }

  // create control panel below table
  const body = document.getElementsByTagName("body")[0];
  let br = document.createElement("br");
  body.appendChild(br);

  let ctrlPanel = document.createElement("table");
  let row = document.createElement("tr");

  let tableData = document.createElement("td");
  row.appendChild(tableData);

  let input = document.createElement("input");
  input.id = "input-rotate";
  input.type = "number";
  input.min = 1;
  input.defaultValue = 1;
  tableData.append(input);

  let ctrlPanelButtons = ["left-rotate", "right-rotate", "reset"];

  for (let buttonId of ctrlPanelButtons) {
    let tableData = document.createElement("td");
    row.appendChild(tableData);

    let button = document.createElement("button");
    button.id = buttonId;
    button.innerHTML = buttonId.split("-").join(" ");
    tableData.appendChild(button);
  }
  ctrlPanel.appendChild(row);
  body.appendChild(ctrlPanel);

  let buttonReset = document.getElementById("reset");
  buttonReset.onclick = onclickResetBtn;

  let buttonRotateLeft = document.getElementById("left-rotate");
  buttonRotateLeft.onclick = onclickRotateBtn;

  let buttonRotateRight = document.getElementById("right-rotate");
  buttonRotateRight.onclick = onclickRotateBtn;
};

window.onload = function () {
  initPage();
};
