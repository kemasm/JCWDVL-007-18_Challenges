export const exec = (executedFunction) => {
  let args = [];
  process.argv.forEach(function (val, index, array) {
    args[index] = val;
  });

  let input = args[2];

  if (!input) {
    let scriptName = "exec.js";

    console.log(
      `Masukkan string yang ingin diperiksa.\nContoh penggunaan:\nnode .\\${scriptName} katak\nnode .\\${scriptName} "kasur rusak"`
    );
  } else {
    console.log(executedFunction(String(args[2])));
  }
};
