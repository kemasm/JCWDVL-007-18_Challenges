class Matrix {
  constructor() {
    this.val = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
  }

  _sort = function (arr, asc) {
    if (asc) {
      return arr.sort((a, b) => a - b);
    } else {
      return arr.sort((a, b) => b - a);
    }
  };

  sort = function (idx, is_row = true, asc = true) {
    if (is_row) {
      let arr = this.val[idx];
      arr = _sort(arr, asc);
      this.val[idx] = arr;
    } else {
      let arr = this.val.map((row) => row[idx]);
      arr = _sort(arr, asc);
      this.val.forEach((row, i) => (row[idx] = arr[i]));
    }
  };

  transpose = function () {
    this.val = this.val[0].map((col, i) => this.val.map((row) => row[i]));
  };

  mirror = function () {
    this.val = this.val.map((row) => row.reverse());
  };

  rotate = function (count = 1, left = true) {
    let func1 = transpose;
    let func2 = mirror;
    if (!left) {
      [func1, func2] = [func2, func1];
    }
    count = count % 4;
    for (let i = 0; i < count; i++) {
      this.val = func1(func2(this.val));
    }
  };
}
