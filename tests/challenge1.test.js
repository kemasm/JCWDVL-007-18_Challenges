import { Test } from "../utils/test_utils.js";
import * as module from "../challenge1.js";

export class Challenge1Test extends Test {
  test_sanity() {
    const input = "";
    const expectedOutput = "";
    const result = module.aplhaForward(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case1() {
    const input = "a";
    const expectedOutput = "b";
    const result = module.aplhaForward(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case2() {
    const input = "abc";
    const expectedOutput = "bcd";
    const result = module.aplhaForward(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case3() {
    const input = "abc";
    const expectedOutput = "def";
    const result = module.aplhaForward(input, 3);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case4() {
    const input = "xyz";
    const expectedOutput = "abc";
    const result = module.aplhaForward(input, 3);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case5() {
    const input = "XYZ";
    const expectedOutput = "XYZ";
    const result = module.aplhaForward(input, 0);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case6() {
    const input = "XYZ";
    const expectedOutput = "ABC";
    const result = module.aplhaForward(input, 3);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case7() {
    const input = "Abc Def!";
    const expectedOutput = "Bcd Efg!";
    const result = module.aplhaForward(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case8() {
    const input = "1";
    const expectedOutput = "2";
    const result = module.aplhaForward(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case9() {
    const input = "1 + 1 = 2";
    const expectedOutput = "2 + 2 = 3";
    const result = module.aplhaForward(input);
    this.assertEqual(expectedOutput, result);
  }
}
