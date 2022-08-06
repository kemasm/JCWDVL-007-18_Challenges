import { Test } from "../utils/test_utils.js";
import * as module from "../katas/HowManyNumbers3.js";

class FindAllTest extends Test {
  test_sanity() {
    const expectedOutput = [1, "1", "1"];
    const result = module.findAll(1, 1);
    this.assertEqual(expectedOutput, result);
  }
  test_given_case() {
    this.assertEqual(module.findAll(10, 3), [8, "118", "334"]);
    this.assertEqual(module.findAll(27, 3), [1, "999", "999"]);
    this.assertEqual(module.findAll(84, 4), []);
    this.assertEqual(module.findAll(35, 6), [123, "116999", "566666"]);
    this.assertEqual(module.findAll(40, 7), [247, "1129999", "5566666"]);
    this.assertEqual(module.findAll(37, 7), [282, "1117999", "5555566"]);
    this.assertEqual(module.findAll(34, 4), [2, "7999", "8899"]);
  }
}

export { FindAllTest };
