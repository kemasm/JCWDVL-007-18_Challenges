class Test {
  static assertEquals(a, b) {
    process.stdout.write(".");
    return a === b;
  }
}

function add(n) {
  const func = (x) => add(n + x);
  func.valueOf = () => n;
  return func;
}
console.log(add(1)(2));
