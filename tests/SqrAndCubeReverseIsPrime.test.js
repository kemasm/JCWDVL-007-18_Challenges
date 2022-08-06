import { Test } from "../utils/test_utils.js";
import * as module from "../katas/SqrAndCubeReverseIsPrime.js";

export class IsInSeqTest extends Test {
  test_is_in_seq_base_case() {
    const input = 89;
    const expectedOutput = true;
    const result = module.isInSeq(input);
    this.assertEqual(expectedOutput, result);
  }

  test_is_in_seq_given_case() {
    const inputs = [89, 271, 325, 328];
    const expectedOutput = true;
    const result = inputs
      .map((i) => module.isInSeq(i))
      .reduce((a, b) => a && b);
    this.assertEqual(expectedOutput, result);
  }
}
new IsInSeqTest().run();

export class CreateSeqTest extends Test {
  test_sanity() {
    const input = 0;
    const expectedOutput = [];
    const result = module.createSeq(input);
    this.assertEqual(expectedOutput, result);
  }

  test_base_case() {
    const input = 1;
    const expectedOutput = [89];
    const result = module.createSeq(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case() {
    const input = 4;
    const expectedOutput = [89, 271, 325, 328];
    const result = module.createSeq(input);
    this.assertEqual(expectedOutput, result);
  }
}
new CreateSeqTest().run();

export class SqCubRevPrimeTest extends Test {
  test_sanity() {
    const input = 1;
    const expectedOutput = 89;
    const result = module.sqCubRevPrime(input);
    this.assertEqual(expectedOutput, result);
  }

  test_given_case() {
    const inputs = [1, 2, 3, 4];
    const expectedOutput = [89, 271, 325, 328];
    const result = inputs.map((i) => module.sqCubRevPrime(i));
    this.assertEqual(expectedOutput, result);
  }
}
new SqCubRevPrimeTest().run();
