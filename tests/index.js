import { Test } from "../utils/test_utils.js";
import * as SequenceTest from "./SqrAndCubeReverseIsPrime.test.js";
import * as HashtagTest from "./GenerateHashtag.test.js";
import * as AlphabetPositionTest from "./AlphabetPosition.test.js";
import * as FindOutlierTest from "./FindOutlier.test.js";
import * as HowManyNumbers3Test from "./HowManyNumbers3.test.js";

const testToRun = [
  // SequenceTest,
  // HashtagTest,
  // AlphabetPositionTest,
  // FindOutlierTest,
  HowManyNumbers3Test,
];

for (let testModule of testToRun) {
  for (let key in testModule) {
    if (testModule[key].prototype instanceof Test) {
      new testModule[key]().run();
    }
  }
}
