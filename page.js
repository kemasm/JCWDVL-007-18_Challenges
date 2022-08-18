import { SquareMatrix } from "./matrix.js";

class Page {
  constructor(matrixVal) {
    this.MATRIX_VAL_ORIG = structuredClone(matrixVal);
    this.matrix = new SquareMatrix(matrixVal);
  }

  init = function () {
    // create empty table with buttons
    this.createTableComponents();

    // assign function to control panel bellow table
    this.assignButtonFunctions();

    // fill the tables with matrix
    this.drawMatrix();
  };

  reset = function () {
    const matrixVal = structuredClone(this.MATRIX_VAL_ORIG);
    this.matrix = new SquareMatrix(matrixVal);
    this.drawMatrix();

    [...document.getElementsByClassName("sort-btn")].forEach((btn) => {
      btn.className = "sort-btn"; // remove active class
      btn.value = "false"; // reset value
    });
  };

  drawMatrix = function () {
    for (let [idxRow, row] of this.matrix.value.entries()) {
      for (let [idxCol, val] of row.entries()) {
        const td = document.getElementById(`${idxRow}-${idxCol}`);
        td.innerHTML = val;
      }
    }
  };

  createTableComponents = function () {
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

    for (let [idxRow, row] of this.matrix.value.entries()) {
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

    for (let idxCol in this.matrix.value[0]) {
      createSortButton(tableRow, idxCol, "col"); // create sort button for each columns
    }
  };

  assignButtonFunctions = function () {
    const btnFuncs = {
      "sort-btn": function (page) {
        let [sortType, btnId] = this.id.split("-");
        let targetIdx = Number(btnId);
        let isAsc = this.value === "true";

        sortType === "row"
          ? page.matrix.sortRow(targetIdx, isAsc)
          : page.matrix.sortCol(targetIdx, isAsc);
        page.drawMatrix();

        this.value = this.value === "true" ? "false" : "true"; // toggle value
        // toggle button cosmetics
        this.className = this.className.includes("active")
          ? "sort-btn"
          : "sort-btn active";
      },
      "rotate-btn": function (page) {
        let countRotate = document.getElementById("input-rotate").value;
        countRotate = Number(countRotate);

        let isLeft = this.value === "left";
        page.matrix.rotate(isLeft, countRotate);

        page.drawMatrix();
      },
      "reset-btn": function (page) {
        page.reset();
      },
    };

    for (let button of document.getElementsByTagName("button")) {
      button.onclick = btnFuncs[button.className].bind(button, this);
    }
  };
}

export { Page };
