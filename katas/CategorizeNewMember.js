function openOrSenior(data) {
  return data.map(([age, caps]) => (age > 54 && caps > 7 ? "Senior" : "Open"));
}

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);
