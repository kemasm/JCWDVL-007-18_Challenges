import { Test } from "../utils/test_utils.js";
import * as module from "../challenge1.js";

export class Challenge1Test extends Test {
  test_given_test_case() {
    const input = "bar";
    const expectedOutput = "bar";
    const result = module.echo(input);
    this.assertEqual(expectedOutput, result);
  }
}
