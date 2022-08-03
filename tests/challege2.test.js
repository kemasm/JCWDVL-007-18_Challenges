import { assert, assertEqual, Test } from "../utils/test_utils.js";
import * as module from "../challenge2/operator.js";

const test = new Test();

function test_add() {
  const input1 = 1;
  const input2 = 1;
  const operator = "+";
  const expectedOutput = 2;
  let result = module.operate(input1, input2, operator);
  assertEqual(result, expectedOutput);
}
test.add_test(test_add);

function test_minus() {
  const input1 = 1;
  const input2 = 1;
  const operator = "-";
  const expectedOutput = 0;
  let result = module.operate(input1, input2, operator);
  assertEqual(result, expectedOutput);
}
test.add_test(test_minus);

function test_multiply() {
  const input1 = 2;
  const input2 = 2;
  const operator = "*";
  const expectedOutput = 4;
  let result = module.operate(input1, input2, operator);
  assertEqual(result, expectedOutput);
}
test.add_test(test_multiply);

function test_divide() {
  const input1 = 8;
  const input2 = 2;
  const operator = "/";
  const expectedOutput = 4;
  let result = module.operate(input1, input2, operator);
  assertEqual(result, expectedOutput);
}
test.add_test(test_divide);

test.run();
