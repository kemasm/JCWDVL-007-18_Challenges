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

// num 1 and num2 are called as parameters, and num2 have default arguments
let add = (num1, num2 = 0) => {
  console.log(num1 + num2);
};

add(1, 1); // print 2, the argument are called direct arguments
let x,
  y = [1, 1];
add(x, y); // print 2, the arguments are called indirect arguments
add(); // print NaN, num1 will be automatically filled with undefined. since addition of undefined with number is NaN, it'll print NaN

// this one return value, the returned value then can be saved and utilize outside the function scope
let mul = (num1, num2) => {
  return num1 * num2;
};

// this one don't return value. the result of the division can only be utilized within the function scope
let div = (num1, num2) => {
  console.log(num1 / num2);
};

let q = mul(4, 2);
console.log(q); // print 2
let p = div(4, 2);
console.log(p); // print undefined since div doesn't return value

// operator are acted as callback function. it's a function that's called within another function
let calc = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(calc(2, 4, mul)); // using mul as indirect callback function
calc(2, 2, (num1, num2) => {
  return num1 ** num2;
}); // using direct callback function
