function orderFood() { // function declaration
  return 'Your food is here!'
}

const foodMessageVariable = orderFood // [Function: orderFood]
// 1) Function calls orderFood() is assigned to `foodMessage`
const foodMessage = orderFood() // 'Your food is here!'

console.log(foodMessage()) // 'Your food is here!'
console.log(foodMessageVariable()) // 'Your food is here!'