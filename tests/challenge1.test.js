import { Test } from "../utils/test_utils.js";
import * as module from "../challenge1.js";

export class Challenge1Test extends Test {
  test_base_case() {
    const inputs = [2];
    const expectedOutputs = [
      [1, 1],
      [1, 2],
    ];
    for (let [idx, val] of inputs.entries()) {
      const result = module.getFactors(val);
      this.assertEqual(expectedOutputs[idx], result);
    }
  }
}
