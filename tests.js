import { Test } from "./utils/test_utils.js";
import { draw } from "./drawUpsidedownTriangle.js";

class DrawTest extends Test {
  test_given_test_case() {
    const expectedOutput = "***\n**\n*";
    const input = 3;
    const result = draw(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_zero() {
    const expectedOutput = "";
    const input = 0;
    const result = draw(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_one() {
    const expectedOutput = "*";
    const input = 1;
    const result = draw(input);
    this.assertEqual(expectedOutput, result);
  }
}

new DrawTest().run();
