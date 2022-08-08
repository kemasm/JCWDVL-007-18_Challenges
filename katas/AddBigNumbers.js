function add(a, b) {
  a = a.split("").map((i) => parseInt(i));
  b = b.split("").map((i) => parseInt(i));

  while (a.length < b.length) a.unshift(0);
  while (b.length < a.length) b.unshift(0);

  a.unshift(0);
  b.unshift(0);
  for (let idx = a.length - 1; idx > 0; idx--) {
    let sumDigit = a[idx] + b[idx];
    a[idx] = sumDigit % 10;
    a[idx - 1] += Math.floor(sumDigit / 10);
  }

  while (a[0] == 0) {
    a = a.slice(1);
  }

  return a.join("");
}

class Test {
  static assertEquals(a, b) {
    process.stdout.write(".");
    return a === b;
  }
}

Test.assertEquals(add("1", "1"), "2");
Test.assertEquals(add("123", "456"), "579");
Test.assertEquals(add("888", "222"), "1110");
Test.assertEquals(add("1372", "69"), "1441");
Test.assertEquals(add("12", "456"), "468");
Test.assertEquals(add("101", "100"), "201");
Test.assertEquals(
  add("63829983432984289347293874", "90938498237058927340892374089"),
  "91002328220491911630239667963"
);
