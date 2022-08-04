import { Test } from "../utils/test_utils.js";
import * as module from "../challenge2.js";

export class Challenge2Test extends Test {
  test_given_test_case() {
    const expectedOutput = "bar";
    const result = module.foo();
    this.assertEqual(expectedOutput, result);
  }
}

new Challenge2Test().run();
