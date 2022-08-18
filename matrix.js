class Matrix {
  constructor(twoDimentionalArr) {
    this.value = twoDimentionalArr;
  }

  _transpose = function () {
    this.value = this.value[0].map((col, i) => this.value.map((row) => row[i]));
  };

  _mirror = function () {
    this.value = this.value.map((row) => row.reverse());
  };

  _rotate = function (isLeft, countRotate) {
    const operations = {
      true: () => {
        this._mirror();
        this._transpose();
      },
      false: () => {
        this._transpose();
        this._mirror();
      },
    };

    let operation = operations[isLeft];
    let counter = 0;
    while (counter < countRotate) {
      operation();
      counter++;
    }
  };

  rotate = function (isLeft = true, countRotate = 1) {
    countRotate %= 4;

    // left rotate 3 times is equal to a single right rotation, vice versa
    if (countRotate === 3) {
      countRotate = 1;
      isLeft = !isLeft;
    }

    this._rotate(isLeft, countRotate);
  };

  _sort = function (idx, isRow, isAsc) {
    const sortFuncs = {
      true: (a, b) => a - b,
      false: (a, b) => b - a,
    };
    const sortFunc = sortFuncs[isAsc];

    if (isRow) {
      this.value[idx].sort(sortFunc);
    } else {
      const arr = this.value.map((row) => row[idx]);
      arr.sort(sortFunc);
      this.value.forEach((row, colIdx) => (row[idx] = arr[colIdx]));
    }
  };

  sortRow = function (idx, isAsc = true) {
    this._sort(idx, true, isAsc);
  };

  sortCol = function (idx, isAsc = true) {
    this._sort(idx, false, isAsc);
  };
}

export { Matrix as SquareMatrix };
