export function draw(height, separator = "") {
  let output = [];

  for (let lineLength = height; lineLength > 0; lineLength--) {
    let line = [];
    for (let star_counter = 0; star_counter < lineLength; star_counter++) {
      line.push("*");
    }
    line = line.join(separator);
    output.push(line);
  }

  output = output.join("\n");
  return output;
}
