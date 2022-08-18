import { Matrix } from "./matrix.js";

const onclickBtnEvent = function (page) {
  const funcs = {
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
  const key = this.className.split(" ")[0];
  funcs[key].bind(this, page)();
};

class Page {
  constructor(matrixVal) {
    this.MATRIX_VAL_ORIG = JSON.parse(JSON.stringify(matrixVal));
    this.matrix = new Matrix(matrixVal);
  }

  reset = function () {
    const matrixVal = JSON.parse(JSON.stringify(this.MATRIX_VAL_ORIG));
    this.matrix = new Matrix(matrixVal);
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

  _createSortButton = function (tableRow, idx, sortType = "row") {
    const tableData = document.createElement("td");
    tableRow.appendChild(tableData);

    const button = document.createElement("button");
    tableData.appendChild(button);

    button.value = false; // false = desc
    button.id = `${sortType}-${idx}`;
    button.className = "sort-btn";
    button.innerHTML = "sort";
  };

  render = function () {
    const table = document.getElementById(`main-table`);

    // fill table with tr, td, and sort buttons for each rows
    for (let [idxRow, row] of this.matrix.value.entries()) {
      const tableRow = document.createElement("tr");
      table.appendChild(tableRow);

      for (let idxCol in row) {
        const tableData = document.createElement("td");
        tableRow.appendChild(tableData);
        tableData.id = `${idxRow}-${idxCol}`;
      }

      this._createSortButton(tableRow, idxRow);
    }

    // create sort button for each columns
    const tableRow = document.createElement("tr");
    table.appendChild(tableRow);
    for (let idxCol in this.matrix.value[0]) {
      this._createSortButton(tableRow, idxCol, "col");
    }

    // assign function for every button in page
    for (let button of document.getElementsByTagName("button")) {
      button.onclick = onclickBtnEvent.bind(button, this);
    }

    // fill the tables with matrix
    this.drawMatrix();
  };
}

export { Page };
