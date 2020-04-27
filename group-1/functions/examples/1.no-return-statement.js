
/*
  1) remember returning nothing, actually
  returns undefined
*/
function eatIceCream() {
  return
}

console.log(eatIceCream) // [Function: eatIceCream]
console.log(eatIceCream()) // undefined

function drinkTea() { }

console.log(drinkTea) // [Function: drinkTea]
console.log(drinkTea()) // undefined
