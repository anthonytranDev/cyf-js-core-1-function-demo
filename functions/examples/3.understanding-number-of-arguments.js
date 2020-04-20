
function buildBike(a, b, c) {
  // c is undefined if it is not used
  return a + b + c // 1 + 2 + undefined -> to evaluate to NaN
}
// 1) look at the parameters available
// 2) remember to include the right number of arguments, if needed
// e.g. c needs to be a number
// console.log(buildBike(1, 2))

function buildIcecreamBoat(a) { // 1 parameter
  return a
}

// 1) JavaScript will ignore 2 arguments as there is only one parameter
console.log(buildIcecreamBoat(67, 2.1)) // 2 arguments, 