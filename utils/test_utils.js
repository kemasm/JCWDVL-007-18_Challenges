export class Test {
  assert(condition, errorMessage) {
    if (!condition) {
      throw errorMessage || "Assertion failed";
    }
    process.stdout.write(".");
  }

  assertEqual(result, expectedOutput) {
    this.assert(
      result === expectedOutput,
      `${result} is not equal with ${expectedOutput}`
    );
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

    console.log("\nOK");
  }
}
