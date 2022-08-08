import { Test } from "../utils/test_utils.js";
import * as module from "../katas/Permutation.js";

export class NextBiggerNumberTest extends Test {
  // test_sanity() {
  //   const expectedOutput = 21;
  //   const result = module.nextBigger(12);
  //   this.assertEqual(expectedOutput, result);
  // }

  test_given() {
    // this.assertEqual(module.nextBigger(12), 21);
    // this.assertEqual(module.nextBigger(513), 531);
    // this.assertEqual(module.nextBigger(2017), 2071);
    // this.assertEqual(module.nextBigger(414), 441);
    // this.assertEqual(module.nextBigger(144), 414);
    // this.assertEqual(module.nextBigger(2017), 2071);
    // this.assertEqual(module.nextBigger(451955), 455159);
  }
}

let n = 1234567;
var digits = [];
while (n) {
  digits.unshift(n % 10); //  Get right-most digit. Ex. 123/10 → 12.3 → 3
  n = (n / 10) | 0; //  Remove right-most digit. Ex. 123 → 12.3 → 12
}
console.log(digits);

console.time("test");
console.table(module.combo(["a", "b", "a"]));
console.timeEnd("test");
