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
  }
}

class HasLowerDigitAfterwardsTest extends Test {
  test_sanity() {
    const expectedOutput = true;
    const result = module.hasLowerDigitAfterwards(1);
    this.assertEqual(result, expectedOutput);
  }

  test_base_false() {
    const expectedOutput = false;
    const result = module.hasLowerDigitAfterwards(10);
    this.assertEqual(result, expectedOutput);
  }

  test_base_true() {
    const expectedOutput = true;
    const result = module.hasLowerDigitAfterwards(11);
    this.assertEqual(result, expectedOutput);
  }

  test_true1() {
    const expectedOutput = true;
    const result = module.hasLowerDigitAfterwards(111);
    this.assertEqual(result, expectedOutput);
  }

  test_true2() {
    const expectedOutput = true;
    const result = module.hasLowerDigitAfterwards(112);
    this.assertEqual(result, expectedOutput);
  }

  test_true3() {
    const expectedOutput = true;
    const result = module.hasLowerDigitAfterwards(123);
    this.assertEqual(result, expectedOutput);
  }

  test_false1() {
    const expectedOutput = false;
    const result = module.hasLowerDigitAfterwards(121);
    this.assertEqual(result, expectedOutput);
  }

  test_false2() {
    const expectedOutput = false;
    const result = module.hasLowerDigitAfterwards(11121);
    this.assertEqual(result, expectedOutput);
  }
}

class SumOfNumCharsTest extends Test {
  test_sanity() {
    const expectedOutput = 0;
    const result = module.sumOfNumChars(0);
    this.assertEqual(result, expectedOutput);
  }

  test_base() {
    const expectedOutput = 1;
    const result = module.sumOfNumChars(10);
    this.assertEqual(result, expectedOutput);
  }

  test_base2() {
    const expectedOutput = 2;
    const result = module.sumOfNumChars(11);
    this.assertEqual(result, expectedOutput);
  }
}

export { FindAllTest, HasLowerDigitAfterwardsTest, SumOfNumCharsTest };
