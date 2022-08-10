import { Test } from "../utils/test_utils.js";
import * as module from "../challenge3.js";

export class Challenge3Test extends Test {
  test_sanity() {
    const input = "";
    const expectedOutput = [];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case() {
    const input = "a";
    const expectedOutput = ["a"];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case2() {
    const input = "ab";
    const expectedOutput = ["a", "b"];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case3() {
    const input = "aab";
    const expectedOutput = ["b"];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case4() {
    const input = "aabb";
    const expectedOutput = [];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case4() {
    const input = "Abb";
    const expectedOutput = ["A"];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case4() {
    const input = "Aab";
    const expectedOutput = ["b"];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case() {
    const input = "Purwadhika";
    const expectedOutput = ["P", "u", "r", "w", "d", "h", "i", "k"];
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case2() {
    const input = "Hello world!";
    const expectedOutput = "Hewrd".split("");
    const result = module.notDuplicateAlpha(input);
    this.assertEqual(expectedOutput, result);
  }
}
