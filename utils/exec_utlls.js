export const exec = (executedFunction) => {
  let args = [];
  process.argv.forEach(function (val, index, array) {
    args[index] = val;
  });

  let inputs = args.slice(2);

  if (!inputs) {
    let scriptName = "exec.js";

    console.log(
      `Masukkan string yang ingin diperiksa.\nContoh penggunaan:\nnode .\\${scriptName} katak\nnode .\\${scriptName} "kasur rusak"`
    );
  } else {
    console.log(executedFunction(...inputs));
  }
};
