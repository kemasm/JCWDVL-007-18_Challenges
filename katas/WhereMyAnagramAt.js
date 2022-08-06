const occurrences = function (word) {
  let charIdxs = word.split("").map((s) => s.charCodeAt(0) - 97);
  let occurences = Array(26).fill(0);
  for (let idx of charIdxs) {
    occurences[idx]++;
  }
  return occurences;
};

function isEqual(arr1, arr2) {
  return arr1
    .map((val, idx) => val - arr2[idx])
    .reduce((a, b) => a && b === 0, true);
}

function anagrams(word, words) {
  let x = occurrences(word);
  let ys = words.map((w) => occurrences(w));
  let res = words.filter(function (val, idx) {
    return isEqual(x, ys[idx]);
  });
  return res;
}

export { anagrams, isEqual };
