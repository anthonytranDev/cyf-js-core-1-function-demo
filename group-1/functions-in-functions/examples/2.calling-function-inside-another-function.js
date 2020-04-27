// 1) Calling functions in functions
function capitaliseWord(word) {
  return word.toUpperCase()
}

function greetFriend(friendName) {
  const message = "Hello " + capitaliseWord(friendName) + "!" // calling capitaliseWord function here
  return message
}

console.log(greetFriend('erol'))