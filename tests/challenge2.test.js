import { Test } from "../utils/test_utils.js";
import * as module from "../challenge2.js";

export class Challenge2Test extends Test {
  test_given_test_case() {
    const input = "bar";
    const expectedOutput = "bar";
    const result = module.inversions(input);
    this.assertEqual(expectedOutput, result);
  }
}
