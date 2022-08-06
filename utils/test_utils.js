export class Test {
  assert(condition, errorMessage) {
    if (!condition) {
      throw errorMessage || "Assertion failed";
    }
    process.stdout.write(".");
  }

  assertEqual(result, expectedOutput) {
    let condition = result === expectedOutput;

    if (expectedOutput.constructor === Array) {
      condition =
        result.length === expectedOutput.length &&
        result.every((value, index) => value === expectedOutput[index]);
    }

    let errorMsg = `${result} is not equal with ${expectedOutput}`;

    this.assert(condition, errorMsg);
  }

  get_all_functions() {
    const methods = [];
    Object.getOwnPropertyNames(Object.getPrototypeOf(this)).forEach(
      (methodName) => {
        if (methodName.startsWith("test_")) {
          methods.push(this[methodName]);
        }
      }
    );
    return methods;
  }
  run() {
    const funcs = this.get_all_functions();

    for (let func of funcs) {
      func = func.bind(this);
      func();
    }

    console.log(`\n${this.constructor.name} OK`);
  }
}
