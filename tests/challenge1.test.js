import { Test } from "../utils/test_utils.js";
import * as module from "../challenge1.js";

export class Challenge1Test extends Test {
  test_empty() {
    const input = "";
    const expectedOutput = "";
    const result = module.uppercaseWave(input);
    this.assertEqual(expectedOutput, result);
  }

  test_single_char() {
    const input = "a";
    const expectedOutput = "A";
    const result = module.uppercaseWave(input);
    this.assertEqual(expectedOutput, result);
  }

  test_two_char() {
    const input = "ab";
    const expectedOutput = "Ab\naB";
    const result = module.uppercaseWave(input);
    this.assertEqual(expectedOutput, result);
  }

  test_three_char() {
    const input = "abc";
    const expectedOutput = "Abc\naBc\nabC";
    const result = module.uppercaseWave(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case() {
    const input = "ryan";
    const expectedOutput = "Ryan\nrYan\nryAn\nryaN";
    const result = module.uppercaseWave(input);
    this.assertEqual(expectedOutput, result);
  }
}
