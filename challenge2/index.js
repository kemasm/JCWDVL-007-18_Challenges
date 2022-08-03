import { operate } from "./operator.js";
let input1 = parseInt(prompt("masukkan angka pertama"));
let input2 = parseInt(prompt("masukkan angka kedua"));
let operator = prompt("masukkan operator");

let result = operate(input1, input2, operator);
alert(result);
