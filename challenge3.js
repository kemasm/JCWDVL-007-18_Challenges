/*
The Most (Looping Only!)
Buatlah program untuk mencari jumlah huruf yang muncul pada suatu kata/kalimat

Ex. Input   : "RRI"
    Output  : "Huruf R paling banyak muncul sebanyak 2 kali"
*/

export function findMostOccurence(input) {
  let outputFormat = (a, b) =>
    `Huruf ${a} paling banyak muncul sebanyak ${b} kali`;
  let occurenceDict = {};

  for (let idx = 0; idx < input.length; idx++) {
    let selectedChar = input[idx];
    occurenceDict[selectedChar] = (occurenceDict[selectedChar] || 0) + 1;
  }

  let mostOccurence = "";
  let countMostOccurence = 0;
  for (let char in occurenceDict) {
    if (occurenceDict[char] > countMostOccurence) {
      mostOccurence = char;
      countMostOccurence = occurenceDict[char];
    }
  }

  return outputFormat(mostOccurence, countMostOccurence);
}
