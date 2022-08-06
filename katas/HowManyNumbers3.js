function isValid(nums, desiredSum) {
  for (let idx = 0; idx < nums.length - 1; idx++) {
    if (nums[idx] > nums[idx + 1]) return false;
  }

  return nums.map((i) => parseInt(i)).reduce((a, b) => a + b) == desiredSum;
}

function findAll(sum, amountDigits) {
  let div = sum / amountDigits;
  if (div < 1 || div > 9) {
    return [];
  }

  if (div == 9) {
    return [1, "9".repeat(amountDigits), "9".repeat(amountDigits)];
  }

  if (div == 1) {
    return [1, "1".repeat(amountDigits), "1".repeat(amountDigits)];
  }

  let currentVal = parseInt("1".repeat(amountDigits - 1) + "2");
  let endVal = parseInt("8" + "9".repeat(amountDigits - 1));

  let vals = [];
  while (currentVal <= endVal) {
    let val = currentVal.toString();
    let nums = val.split("");

    if (isValid(nums, sum)) {
      vals.push(val);
    }
    currentVal++;
  }

  let vals_length = vals.length;
  if (!vals_length) return [];

  console.log(vals);
  return [vals.length, vals[0], vals[vals_length - 1]];
}

export { findAll };
