// Tipe function
// 1. Function Declaration
funcName(); // can be called before declaration
function funcName(param1, param2, ...params) {
  // implement function
}
funcName();

// 2. Function Expression
// cannot be called before declaration
let funcName2 = function (param1, param2, ...params) {
  // implement function
};
funcName2();

// 3. Arrow Function
// the continuation of function expression
let funcName3 = (param1, param2, ...params) => {
  // implement function
};
funcName3();
