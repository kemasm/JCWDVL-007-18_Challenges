import { Page } from "./page.js";

// create 4 x 4 matrix filled with num 1 to 16
const size = 4;
const firstRow = Array(size)
  .fill(1)
  .map((v, i) => i + v); // [1, 2, .., size]
const MatrixValue = firstRow.map((val, idx) =>
  firstRow.map((x) => x + size * idx)
);

window.onload = function () {
  const page = new Page(MatrixValue);
  page.render();
};
