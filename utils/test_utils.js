export class Test {
  assert(condition, errorMessage) {
    if (!condition) {
      throw errorMessage || "Assertion failed";
    }
    process.stdout.write(".");
  }

  assertEqual(result, expectedOutput) {
    let condition = result === expectedOutput;
    let errorMsg = `${result} is not equal with ${expectedOutput}`;

    if (expectedOutput === undefined) {
      this.assert(condition, errorMsg);
    } else if (expectedOutput.constructor === Array) {
      condition =
        result.length === expectedOutput.length &&
        result.every((value, index) => value === expectedOutput[index]);
      this.assert(condition, errorMsg);
    } else this.assert(condition, errorMsg);
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
