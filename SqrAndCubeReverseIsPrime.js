export function createSeq(seqLength) {
  const seq = [];
  let val = 1;
  while (seq.length < seqLength) {
    if (isInSeq(val)) {
      seq.push(val);
    }
    val++;
  }
  return seq;
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const reverseNum = (num) => {
  return parseInt(num.toString().split("").reverse().join(""));
};

const isInSeq = (num) => {
  return isPrime(reverseNum(num ** 2)) && isPrime(reverseNum(num ** 3));
};

export function sqCubRevPrime(n) {
  var nthTermValue;
  // your code here
  var seq = createSeq(n);
  nthTermValue = seq[n - 1];
  return nthTermValue;
}
