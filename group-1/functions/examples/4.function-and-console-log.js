// function
// 1) can get zero or more inputs and can manipulate or not
// 2) they can be put together and that can be reused
// 3) and they ALWAYS create an output - either output a value or undefined

// console.log()
// 1) prints whatever is passed to it into the terminal or browser
// 2) console.log returns undefined - i.e. basically nothing
// 3) console.log() ONLY interacts with the "logs", inside terminal

// why use a function that does not return anything - PARADOX?

let todaysDay = 20
let food = 'pizza'

function incrementDay() { // function declaration doesn't work until called
  todaysDay = 21 // variable assignment of `todaysDay` of value 21
  food = 'cheese burger'
  return // `undefined`
}

incrementDay() // undefined

// calling the function, means we can use the function
// console.log(incrementDay()) // undefined 
// console.log(food) //
// console.log(todaysDay) // 21

