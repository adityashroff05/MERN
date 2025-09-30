//operator
//Arithemiatic operator

// console.log(2+6);
// console.log(6-2);
// console.log(2*6);
// console.log(6/2);
// console.log(7%2); //modulus operator
// console.log(2**3); //exponentiation operator
//------------------------------------------------------------
//Assignment operator
// let x = 5;
// let y = 3;
// //x = x+y;
// // x = x-y;
// // x = x*y;
// // x = x/y;
// // x = x%y;
// // x = x**y;
// x+=y;
// console.log(x);
//------------------------------------------------------------
// Comparison operator
// let x = 5;
// let y = 3;
// console.log(x == y); // equal to
// console.log(x != y); // not equal to
// console.log(x > y); // greater than
// console.log(x < y); // less than
// console.log(x >= y); // greater than or equal to
// console.log(x <= y); // less than or equal to
//console.log(x === y); // strict equal to
//------------------------------------------------------------
let a = "123abc";
let b = Number(a);
console.log(b); // Output: NaN (Not a Number) type is number
console.log(typeof b); // Output: number

console.log(Number(true)); // Output: 1
console.log(Number(false)); // Output: 0

console.log(Number(null)); // Output: 0
console.log(Number(undefined)); // Output: NaN

//----------------------------------------------------------

//Boolean Conversion

console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
console.log(Boolean(-1)); // Output: true
console.log(Boolean("Hello")); // Output: true
console.log(Boolean("")); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined));    // Output: false
console.log(Boolean(NaN)); // Output: false  

//----------------------------------------------------------

//string conversion
console.log(String(123)); // Output: "123"
console.log(String(true)); // Output: "true"
console.log(String(false)); // Output: "false"
console.log(String(null)); // Output: "null"
console.log(String(undefined)); // Output: "undefined"
console.log(String([1, 2, 3])); // Output: "1,2,3"
//----------------------------------------------------------

//logical operator
// let x = 5;
// let y = 3;
// console.log(x && y);
// console.log(x || y);
// console.log( ! y);

//----------------------------------------------------------
let x = "0.1";
let y = "0.2";
let z = (String(x)+String(y))
console.log(z);

//----------------------------------------------------------
//1. Null is loosely equal to undefined only
console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null >= 0); //true
console.log(null > 0); //false
console.log(null <= 0); //true
console.log(null < 0); //false
console.log(null + 1); //1
console.log(null - 1); //-1 
//----------------------------------------------------------