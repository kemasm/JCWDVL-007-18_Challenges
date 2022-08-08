import { Test } from "../utils/test_utils.js";
import * as module from "../katas/SumDifRef.js";

export class SumDifRefTest extends Test {
  test_sanity() {
    const expectedOutput = 45;
    const result = module.sumDifRev(1);
    this.assertEqual(expectedOutput, result);
  }

  test_given() {
    this.assertEqual(module.sumDifRev(3), 495);
    this.assertEqual(module.sumDifRev(4), 594);
    this.assertEqual(module.sumDifRev(51), 552825);
  }
}
