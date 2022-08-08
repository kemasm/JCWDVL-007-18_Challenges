import { Test } from "../utils/test_utils.js";
import * as SequenceTest from "./SqrAndCubeReverseIsPrime.test.js";
import * as HashtagTest from "./GenerateHashtag.test.js";
import * as AlphabetPositionTest from "./AlphabetPosition.test.js";
import * as FindOutlierTest from "./FindOutlier.test.js";
import * as HowManyNumbers3Test from "./HowManyNumbers3.test.js";
import * as AnagramsTest from "./WhereMyAnagramAt.test.js";
import * as SumDifRefTest from "./SumDifRef.test.js";
import * as NextBiggerNumberTest from "./NextBiggerNumber.test.js";

const testToRun = [
  // SequenceTest,
  // HashtagTest,
  // AlphabetPositionTest,
  // FindOutlierTest,
  // HowManyNumbers3Test,
  // AnagramsTest,
  // SumDifRefTest,
  NextBiggerNumberTest,
];

for (let testModule of testToRun) {
  for (let key in testModule) {
    if (testModule[key].prototype instanceof Test) {
      new testModule[key]().run();
    }
  }
}
