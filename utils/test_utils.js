export function assert(condition, errorMessage) {
  if (!condition) {
    throw errorMessage || "Assertion failed";
  }
  process.stdout.write(".");
}

export function assertEqual(result, expectedOutput) {
  assert(
    result === expectedOutput,
    `${result} is not equal with ${expectedOutput}`
  );
}

export class Test {
  constructor(test_funcs = []) {
    this.test_funcs = test_funcs;
  }

  run() {
    for (let test of this.test_funcs) {
      test();
    }
    console.log("\nOK");
  }

  add_test(test_func) {
    this.test_funcs.push(test_func);
  }
}
