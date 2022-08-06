import { Test } from "../utils/test_utils.js";
import * as sequenceTest from "./SqrAndCubeReverseIsPrime.test.js";
import * as hashtagTest from "./GenerateHashtag.test.js";
import * as alphabetPositionTest from "./AlphabetPosition.test.js";
import * as findOutlierTest from "./FindOutlier.test.js";

const testToRun = [
  sequenceTest,
  hashtagTest,
  alphabetPositionTest,
  findOutlierTest,
];

for (let testModule of testToRun) {
  for (let key in testModule) {
    if (testModule[key].prototype instanceof Test) {
      new testModule[key]().run();
    }
  }
}
