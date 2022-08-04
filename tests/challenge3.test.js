import { Test } from "../utils/test_utils.js";
import * as module from "../challenge3.js";

export class Challenge3Test extends Test {
  test_given_test_case() {
    const input = "RRI";
    const expectedOutput = "Huruf R paling banyak muncul sebanyak 2 kali";
    const result = module.findMostOccurence(input);
    this.assertEqual(expectedOutput, result);
  }

  test_empty_test_case() {
    const input = "";
    const expectedOutput = "Huruf  paling banyak muncul sebanyak 0 kali";
    const result = module.findMostOccurence(input);
    this.assertEqual(expectedOutput, result);
  }

  test_sanity_test_case() {
    const input = "A";
    const expectedOutput = "Huruf A paling banyak muncul sebanyak 1 kali";
    const result = module.findMostOccurence(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_test_case() {
    const input = "AA";
    const expectedOutput = "Huruf A paling banyak muncul sebanyak 2 kali";
    const result = module.findMostOccurence(input);
    this.assertEqual(expectedOutput, result);
  }

  test_test_case1() {
    const input = "AABBB";
    const expectedOutput = "Huruf B paling banyak muncul sebanyak 3 kali";
    const result = module.findMostOccurence(input);
    this.assertEqual(expectedOutput, result);
  }
}
