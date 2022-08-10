// concate middle (no method)
// buatlah function untuk mendapatkan huruf/angka/karakter yang berada di tengah suatu deret kata

// Ex.  Input:  'Ryan'
//      Result: ya

// Ex.  Input:  'Hello, I'm Ryan!'
//      Result: ll'a

function getMiddle(buffer, bufferLength) {
  if (bufferLength == 1) {
    return buffer;
  }

  let isBufferLengthEven = bufferLength % 2 == 0;
  let middle = isBufferLengthEven
    ? buffer[bufferLength / 2 - 1] + buffer[bufferLength / 2]
    : buffer[bufferLength / 2 - 0.5];
  return middle;
}

function concatMiddle(input) {
  let middles = [];

  let bufferLength = 0;
  let buffer = "";

  for (let char of input) {
    if (char === " ") {
      middles.push(getMiddle(buffer, bufferLength));
      buffer = "";
      bufferLength = 0;
    } else {
      buffer += char;
      bufferLength += 1;
    }
  }

  middles.push(getMiddle(buffer, bufferLength));

  let result = "";
  for (let middle of middles) {
    result += middle;
  }
  return result;
}

let input = "Hello, I'm Ryan!";
console.log(concatMiddle(input));

export { concatMiddle as echo };
