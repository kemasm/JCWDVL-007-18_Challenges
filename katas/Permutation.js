function permutations(data) {
  data = data.split("");

  data = data.slice(); // make a copy
  var result = [],
    stack = [];

  function doPerm() {
    if (data.length == 0) {
      result.some(function (a) {
        return a.every(function (b, j) {
          return stack[j] === b;
        });
      }) || result.push(stack.slice());
      return;
    }
    for (var i = 0; i < data.length; i++) {
      var x = data.splice(i, 1)[0];
      stack.push(x);
      doPerm();
      stack.pop();
      data.splice(i, 0, x);
    }
  }

  doPerm();

  for (var i = 0; i < result.length; i++) {
    result[i] = result[i].join("");
  }
  return result;
}

var input = "abba";
var result = permutations(input);

console.log(result);
