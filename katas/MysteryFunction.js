//https://www.codewars.com/kata/56b2abae51646a143400001d/train/javascript

// let arr = [...Array(64).keys()];
// console.log(arr);
// let left = arr.slice(0, arr.length / 2);
// let right = arr.slice(arr.length / 2);

function shuffle(arr, isLeft = true) {
  if (!arr.length || arr.length == 1) return arr;
  let left = arr.slice(0, arr.length / 2);
  let right = arr.slice(arr.length / 2);
  if (isLeft) {
    right = right.reverse();
  } else {
    left = left.reverse();
  }
  return shuffle(left, true).concat(shuffle(right, false));
}

const SEQ = shuffle([...Array(32).keys()]);
// console.log(SEQ);

function _mystery(arr, n, m, isR) {
  if (arr.length == 2) return isR ? arr[1] : arr[0];

  const [l, r] = arr;
  const isAsc = l < r;

  let childArrSize = Math.floor(Math.abs(l - r) / 2);
  childArrSize = isAsc ? childArrSize : childArrSize * -1;
  let lArr = [l, l + childArrSize];
  let rArr = [r - childArrSize, r];

  if (isAsc) {
    rArr = rArr.reverse();
  } else {
    lArr = lArr.reverse();
  }

  const m2 = m - 1;
  const n2 = n % 2 ** m;
  const isR2 = n >= 2 ** m2;

  let childArr = isR ? rArr : lArr;
  return _mystery(childArr, n2, m2, isR2);
}

function mystery(n) {
  const m = Math.ceil(Math.log2(n));
  const isR = n >= 2 ** (m - 1);
  const arr = [0, 2 ** m];
  return _mystery(arr, n, m, isR);
}

function mysteryInv(n) {
  return SEQ.indexOf(n);
}

console.log(10);
