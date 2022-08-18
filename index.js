import { Page } from "./page.js";

window.onload = function () {
  const size = 4;
  let matrixVal = Array(size)
    .fill(1)
    .map((val, idx) => idx + val);
  matrixVal = matrixVal.map((val, idx) =>
    matrixVal.map((x) => x + matrixVal.length * idx)
  );

  const page = new Page(matrixVal);
  page.init();
};
