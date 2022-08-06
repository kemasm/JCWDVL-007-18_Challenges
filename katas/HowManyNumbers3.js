function hasLowerDigitAfterwards(num) {
  let nums = num
    .toString()
    .split("")
    .map((i) => parseInt(i));

  for (let idx = 0; idx < nums.length - 1; idx++) {
    if (nums[idx] > nums[idx + 1]) return false;
  }
  return true;
}

function sumOfNumChars(num) {
  return num
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reduce((a, b) => a + b);
}

function findAll(desiredSum, amountDigit) {
  // your code here
  let startVal = parseInt("1".repeat(amountDigit));
  let endVal = parseInt("9".repeat(amountDigit));

  let vals = [...Array(endVal - startVal + 1).keys()]
    .map((i) => i + startVal)
    .filter((num) => hasLowerDigitAfterwards(num))
    .filter((num) => sumOfNumChars(num) === desiredSum);

  if (!vals.length) return [];

  return [
    vals.length,
    vals.slice(0)[0].toString(),
    vals.slice(-1)[0].toString(),
  ];
}

export { findAll, hasLowerDigitAfterwards, sumOfNumChars };
