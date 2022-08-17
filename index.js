import { SquareMatrix } from "./matrix.js";

const matrix = new SquareMatrix(4);

const drawMatrix = function (matrix) {
  for (let [idxRow, row] of matrix.value.entries()) {
    for (let [idxCol, val] of row.entries()) {
      const td = document.getElementById(`${idxRow}-${idxCol}`);
      td.innerHTML = val;
    }
  }
};

const createTableComponents = function () {
  const createSortButton = function (tableRow, idx, sortType = "row") {
    const tableData = document.createElement("td");
    tableRow.appendChild(tableData);

    const button = document.createElement("button");
    tableData.appendChild(button);

    button.value = false; // false = desc
    button.id = `${sortType}-${idx}`;
    button.className = "sort-btn";
    button.innerHTML = "sort";
  };

  const table = document.getElementById(`main-table`);

  for (let [idxRow, row] of matrix.value.entries()) {
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);

    for (let idxCol in row) {
      const tableData = document.createElement("td");
      tableRow.appendChild(tableData);
      tableData.id = `${idxRow}-${idxCol}`;
    }

    createSortButton(tableRow, idxRow); // create sort button for each rows
  }

  const tableRow = document.createElement("tr");
  table.appendChild(tableRow);

  for (let idxCol in matrix.value[0]) {
    createSortButton(tableRow, idxCol, "col"); // create sort button for each columns
  }
};

const assignButtonFunctions = function () {
  const btnFuncs = {
    "sort-btn": function () {
      let [sortType, btnId] = this.id.split("-");
      let targetIdx = Number(btnId);
      let isAsc = this.value === "true";

      sortType === "row"
        ? matrix.sortRow(targetIdx, isAsc)
        : matrix.sortCol(targetIdx, isAsc);

      drawMatrix(matrix);

      this.value = this.value === "true" ? "false" : "true"; // toggle value

      // toggle button cosmetics
      this.className = this.className.includes("active")
        ? "sort-btn"
        : "sort-btn active";
    },
    "rotate-btn": function () {
      let countRotate = document.getElementById("input-rotate").value;
      countRotate = Number(countRotate);

      let isLeft = this.value === "left";
      matrix.rotate(isLeft, countRotate);

      drawMatrix(matrix);
    },
    "reset-btn": function () {
      matrix.reset();
      drawMatrix(matrix);

      [...document.getElementsByClassName("sort-btn")].forEach((btn) => {
        btn.className = "sort-btn"; // remove active class
        btn.value = "false"; // reset value
      });
    },
  };

  for (let button of document.getElementsByTagName("button")) {
    button.onclick = btnFuncs[button.className];
  }
};

let initPage = function () {
  // create empty table with buttons
  createTableComponents();

  // fill the tables with matrix
  drawMatrix(matrix);

  // assign function to control panel bellow table
  assignButtonFunctions();
};

window.onload = function () {
  initPage();
};
