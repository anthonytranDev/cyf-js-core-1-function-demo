/*
  1) always undefined, even if there are no arguments, and empty return statement
*/

function eatIceCream() {
  return
}

function drinkTea() {
  // empty
}

console.log(eatIceCream()) // undefined
// console.log(eatIceCream) //  not being called, you will print the function [Function: eatIceCream]

// console.log(drinkTea()) // undefined
// console.log(drinkTea) //  not being called, you will print the function [Function: drinkTea]