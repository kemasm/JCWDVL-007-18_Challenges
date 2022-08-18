import { Page } from "./static/js/page.js";

// create 4 x 4 matrix filled with num 1 to 16
const size = 4;
const firstRow = Array(size)
  .fill(1)
  .map((v, i) => i + v); // [1, 2, .., size]
const matrixValue = firstRow.map((val, idx) =>
  firstRow.map((x) => x + size * idx)
);

// const matrixValue = [
//   [1, 2, 3, 4],
//   [5, 1, 2, 8],
//   [9, 3, 4, 12],
//   [13, 14, 15, 16],
// ];

window.onload = function () {
  const page = new Page(matrixValue);
  page.render();
};
