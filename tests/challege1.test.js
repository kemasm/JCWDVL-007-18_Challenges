import { assert, assertEqual, Test } from "../utils/test_utils.js";
import * as module from "../challenge1.js";

const test = new Test();

const testCountOddEvenGivenCase = () => {
  let input = "3-10-9-1-55";
  let expectedOutput = "Total Bilangan Genap: 1 & Total Bilangan Ganjil: 4";
  assertEqual(module.countOddEven(input), expectedOutput);
};
test.add_test(testCountOddEvenGivenCase);

const testCountOddEvenEmptyCase = () => {
  let input = "";
  let expectedOutput = "Total Bilangan Genap: 0 & Total Bilangan Ganjil: 0";
  assertEqual(module.countOddEven(input), expectedOutput);
};
test.add_test(testCountOddEvenEmptyCase);

const testCountOddEvenCase1 = () => {
  let input = "1";
  let expectedOutput = "Total Bilangan Genap: 0 & Total Bilangan Ganjil: 1";
  assertEqual(module.countOddEven(input), expectedOutput);
};
test.add_test(testCountOddEvenCase1);

const testCountOddEvenCase2 = () => {
  let input = "12";
  let expectedOutput = "Total Bilangan Genap: 1 & Total Bilangan Ganjil: 0";
  assertEqual(module.countOddEven(input), expectedOutput);
};
test.add_test(testCountOddEvenCase2);

test.run();
