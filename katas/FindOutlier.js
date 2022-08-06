// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers) {
  const el1 = integers[0] % 2 === 0 ? 1 : 0;
  const el2 = integers[1] % 2 === 0 ? 1 : 0;
  const el3 = integers[2] % 2 === 0 ? 1 : 0;

  const countOdd = el1 + el2 + el3;
  let moduloResult = 0;
  if (countOdd > 1) {
    moduloResult = 1;
  }

  for (let integer of integers) {
    if (Math.abs(integer % 2) === moduloResult) {
      return integer;
    }
  }
}

export { findOutlier };
