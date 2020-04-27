
// Give an action names for functions
function createIcecream() {
  // 1) declare a variable, using `let` it is assigned `undefined`
  let food // undefined


  // 2)  as soon as you return
  // code before will NOT be executed
  return food // Hello World

  food = 'Hello World' // assignment for variable "food", will NOT be executed, because it is below `return`

}

console.log(createIcecream()) // undefined
