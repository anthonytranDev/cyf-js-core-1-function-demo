// function
// 1) can get zero or more inputs (meaning zero arguments and parameters) 
// and you can choose manipulate or not
// 2) (they can be put together) and that can be reused
// 3) and they ALWAYS create an output - either output a value or undefined - 
//    when give an empty `return` statement
// 4) Set of instruction (use it over a time of period) - research in your own time

// global and local scope
let day = 1

function incrementDay() {
  const day = 500
  return day
}

// console.log(incrementDay())

const food = 'hamburger'
let drink = 'Tango'

function createMenu(drink) { // undefined => 'Coke'

  const sentence = `I am going to eat alot of ${food}`
  // backtick => ` `
  // dollar-sign and curly braces => ${ }
  // inside add more JavaScript code ${  } 
  // Example of template string literal => `I am going to eat alot of ${food}`
  // string interpolation (this one here) => `${food}`
  console.log(sentence)
}

createMenu('Coke')



