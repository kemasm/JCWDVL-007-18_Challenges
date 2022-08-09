function XO(str) {
  let countX = 0;
  let countO = 0;

  str = str.toLowerCase();
  for (let char of str) {
    switch (char) {
      case "x":
        countX++;
        break;
      case "o":
        countO++;
        break;
    }
  }

  return countX == countO;
}

console.log(XO("xo"));
console.log(XO("xxOo"));
console.log(XO("xxxm"));
console.log(XO("Oo"));
console.log(XO("ooom"));
