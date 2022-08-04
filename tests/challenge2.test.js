import { Test } from "../utils/test_utils.js";
import * as module from "../challenge2.js";

export class Challenge2Test extends Test {
  test_base_case() {
    const input = 1;
    const expectedOutput = 0;
    const result = module.persistance(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case2() {
    const input = 12;
    const expectedOutput = 1;
    const result = module.persistance(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case() {
    const input = 39;
    const expectedOutput = 3;
    const result = module.persistance(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case2() {
    const input = 999;
    const expectedOutput = 4;
    const result = module.persistance(input);
    this.assertEqual(expectedOutput, result);
  }
}
