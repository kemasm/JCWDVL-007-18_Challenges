// Segitiga-1
// *
// **
// ***

export function drawRightTriangle(height) {
  let output = "";
  for (let starCounter = 1; starCounter <= height; starCounter++) {
    for (let printCounter = 0; printCounter < starCounter; printCounter++) {
      output += "*";
    }
    output += "\n";
  }
  return output;
}
