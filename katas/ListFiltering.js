function filter_list(l) {
  return l.filter((i) => typeof i === "number");
}

console.table(filter_list([1, 2, "aasf", "1", "123", 123]));
