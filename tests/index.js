import { Test } from "../utils/test_utils.js";
import * as Challenge1Test from "./challenge1.test.js";
import * as Challenge2Test from "./challenge2.test.js";
import * as Challenge3Test from "./challenge3.test.js";

const testToRun = [Challenge1Test, Challenge2Test, Challenge3Test];

for (let testModule of testToRun) {
  for (let key in testModule) {
    if (testModule[key].prototype instanceof Test) {
      new testModule[key]().run();
    }
  }
}
