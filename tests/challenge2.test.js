import { Test } from "../utils/test_utils.js";
import * as module from "../challenge2.js";

export class Challenge2Test extends Test {
  test_sanity() {
    const input = [];
    const expectedOutput = [];
    const result = module.oddSliceOdd(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case() {
    const input = [1];
    const expectedOutput = [1];
    const result = module.oddSliceOdd(input);
    this.assertEqual(expectedOutput, result);
  }

  test_simple_case() {
    const input = [0, 1, 3];
    const expectedOutput = [0, 1, "-", 3];
    const result = module.oddSliceOdd(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case() {
    const input = [3, 9, 2, 3, 4, 7, 5, 6];
    const expectedOutput = [3, "-", 9, 2, 3, 4, 7, "-", 5, 6];
    const result = module.oddSliceOdd(input);
    this.assertEqual(expectedOutput, result);
  }
}
