import { Test } from "../utils/test_utils.js";
import * as module from "../katas/AlphabetPosition.js";

export class AlphabetPositionTest extends Test {
  test_sanity() {
    const expectedOutput = "1";
    const result = module.alphabetPosition("a");
    this.assertEqual(expectedOutput, result);
  }

  test_empty_string() {
    const expectedOutput = "";
    const result = module.alphabetPosition("");
    this.assertEqual(expectedOutput, result);
  }

  test_case1() {
    const expectedOutput = "1 2";
    const result = module.alphabetPosition("ab");
    this.assertEqual(expectedOutput, result);
  }

  test_case_caps() {
    const expectedOutput = "1";
    const result = module.alphabetPosition("A");
    this.assertEqual(expectedOutput, result);
  }

  test_case_mixed() {
    const expectedOutput = "1 2 1";
    const result = module.alphabetPosition("A b a");
    this.assertEqual(expectedOutput, result);
  }

  test_case_non_alphabetical_char() {
    const expectedOutput = "";
    const result = module.alphabetPosition(".");
    this.assertEqual(expectedOutput, result);
  }

  test_case_non_alphabetical_char_mixed() {
    const expectedOutput = "";
    const result = module.alphabetPosition(".");
    this.assertEqual(expectedOutput, result);
  }

  test_case_non_alphabetical_char_mixed() {
    const expectedOutput = "1 1 1 1";
    const result = module.alphabetPosition(".Aa aA");
    this.assertEqual(expectedOutput, result);
  }

  test_given_case() {
    const expectedOutput =
      "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11";
    const result = module.alphabetPosition(
      "The sunset sets at twelve o' clock."
    );
    this.assertEqual(expectedOutput, result);
  }
}

new AlphabetPositionTest().run();
