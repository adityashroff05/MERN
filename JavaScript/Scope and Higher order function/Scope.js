// Scope and Clouser, and higher order functions
//Global Scope
var a = "Hello World";


//Function Scope
function greet() {
  var b = "Hello Everyone";
  console.log(a);
  console.log(b);
}


//Block Level Scope
if (true) {
  let c = "Hello Aditya";
  const d = "Hello Unknown";
  console.log(c);
  console.log(d);
}
greet();

// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined
// console.log(d); // Error: d is not defined
//Var respect only function scope
//Let and Const respect all level of scope