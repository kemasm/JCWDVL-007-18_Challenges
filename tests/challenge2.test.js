import { Test } from "../utils/test_utils.js";
import * as module from "../challenge2.js";

export class Challenge2Test extends Test {
  test_given_test_case() {
    let inputs = [
      [1, 3, 2, 4],
      [4, 1, 2, 3],
      [3, 1, 2, 4],
    ];
    let outputs = [
      "[1, 3, 2, 4] => 1 inversions = 3 dan 2",
      "[4, 1, 2, 3] => 3 inversions = 4 dan 1, 4 dan 2, 4 dan 3",
      "[3, 1, 2, 4] => 2 inversions = 3 dan 1, 3 dan 2",
    ];
    let results = inputs.map((input) => module.inversions(input));
    for (let [idx, result] of results.entries()) {
      this.assertEqual(outputs[idx], result);
    }
  }
}
