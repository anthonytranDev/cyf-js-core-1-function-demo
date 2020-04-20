

// 1) Pass a function as argument
function capitaliseWord(word) {
  return word.toUpperCase()
}

function greetFriend(friendName) {
  const message = "Hello " + friendName + "!"
  return message
}

console.log(greetFriend(capitaliseWord('Anthony'))) // parse function as an argument here
