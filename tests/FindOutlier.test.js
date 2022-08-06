import { Test } from "../utils/test_utils.js";
import * as module from "../katas/FindOutlier.js";

export class FindOutlierTest extends Test {
  test_sanity() {
    const expectedOutput = 1;
    const input = [1, 2, 2];
    const result = module.findOutlier(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case1() {
    const expectedOutput = 1;
    const input = [0, 1, 2];
    const result = module.findOutlier(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case2() {
    const expectedOutput = 2;
    const input = [1, 2, 3];
    const result = module.findOutlier(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case3() {
    const expectedOutput = 3;
    const input = [2, 6, 8, 10, 3];
    const result = module.findOutlier(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case4() {
    const expectedOutput = 3;
    const input = [0, 0, 3, 0, 0];
    const result = module.findOutlier(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case5() {
    const expectedOutput = 0;
    const input = [1, 1, 0, 1, 1];
    const result = module.findOutlier(input);
    this.assertEqual(expectedOutput, result);
  }
}

new FindOutlierTest().run();
