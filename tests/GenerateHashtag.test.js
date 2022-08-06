import { Test } from "../utils/test_utils.js";
import * as module from "../katas/GenerateHashtag.js";

export class generateHashtagTest extends Test {
  test_sanity() {
    const expectedOutput = "#A";
    const result = module.generateHashtag("a");
    this.assertEqual(expectedOutput, result);
  }

  test_empty() {
    const expectedOutput = false;
    const result = module.generateHashtag("");
    this.assertEqual(expectedOutput, result);
  }

  test_space() {
    const expectedOutput = false;
    const result = module.generateHashtag(" ");
    this.assertEqual(expectedOutput, result);
  }

  test_spaces() {
    const expectedOutput = false;
    const result = module.generateHashtag(" ".repeat(10));
    this.assertEqual(expectedOutput, result);
  }

  test_length_limit() {
    const expectedOutput = false;
    const result = module.generateHashtag("a".repeat(141));
    this.assertEqual(expectedOutput, result);
  }

  test_trailing_space() {
    const expectedOutput = "#A";
    const result = module.generateHashtag("a ");
    this.assertEqual(expectedOutput, result);
  }

  test_trailing_spaces() {
    const expectedOutput = "#A";
    const result = module.generateHashtag("a" + " ".repeat(139));
    this.assertEqual(expectedOutput, result);
  }

  test_multiple_words() {
    const expectedOutput = "#AB";
    const result = module.generateHashtag("a b");
    this.assertEqual(expectedOutput, result);
  }

  test_multiple_words_long_separation() {
    const expectedOutput = "#AB";
    const result = module.generateHashtag("a" + " ".repeat(10) + "b");
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case1() {
    const expectedOutput = "#DoWeHaveAHashtag";
    const result = module.generateHashtag("Do We have A Hashtag");
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case2() {
    const expectedOutput = "#Codewars";
    const result = module.generateHashtag("Codewars");
    this.assertEqual(expectedOutput, result);
  }

  test_given_test_case3() {
    const expectedOutput = "#CodewarsIsNice";
    const result = module.generateHashtag("Codewars Is Nice");
    this.assertEqual(expectedOutput, result);
  }
}

new generateHashtagTest().run();
