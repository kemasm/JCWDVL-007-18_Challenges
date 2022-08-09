function findNextSquare(sq) {
  let sqrt = sq ** (1 / 2);
  if (sqrt % 1 == 0) return (sqrt + 1) ** 2;
  return -1;
}
