// Scope and Clouser, and higher order functions
//Global Scope
// var a = "Hello World";


//Function Scope
// function greet() {
//   var b = "Hello Everyone";
//   console.log(a);
//   console.log(b);
// }


//Block Level Scope
// if (true) {
//   let c = "Hello Aditya";
//   const d = "Hello Unknown";
//   console.log(c);
//   console.log(d);
// }
// greet();

// console.log(b); // Error: b is not defined
// console.log(c); // Error: c is not defined
// console.log(d); // Error: d is not defined
//Var respect only function scope
//Let and Const respect all level of scope

// function createCounter() {
//   let count = 0;
//   function increament(){
//     //console.log("I am Increament function");
//     count++;
//     return count;
//   }
//   return increament;
// }
// const counter = createCounter();
// console.log(counter);
// console.log(counter());
// console.log(counter());
// console.log(counter());

//-------------------------------------------------------
//Clouser Example


function createBankAccount(){
balance: 200;
retuen{ 
  withdraw: function(amount){
    if(typeof amount==="number" && amount>0 && amount<=balance){
      balance-=amount;
      return balance;
    }
  },
  deposit: function(amount){
    if(typeof amount==="number" && amount>0){
      balance+=amount;
      return balance;
    }
  }
}
}
const customer = createBankAccount();
console.log(customer.withdraw(50));
