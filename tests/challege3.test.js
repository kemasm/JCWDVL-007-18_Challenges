import { assert, assertEqual, Test } from "../utils/test_utils.js";
import * as module from "../challenge3.js";

const test = new Test();

function test_draw() {
  const height = 3;
  const result = module.drawRightTriangle(height);
  const expectedOutput = "*\n**\n***\n";
  assertEqual(result, expectedOutput);
}
test.add_test(test_draw);

function test_draw_none() {
  const height = 0;
  const result = module.drawRightTriangle(height);
  const expectedOutput = "";
  assertEqual(result, expectedOutput);
}
test.add_test(test_draw_none);

function test_draw_one() {
  const height = 1;
  const result = module.drawRightTriangle(height);
  const expectedOutput = "*\n";
  assertEqual(result, expectedOutput);
}
test.add_test(test_draw_one);

test.run();
