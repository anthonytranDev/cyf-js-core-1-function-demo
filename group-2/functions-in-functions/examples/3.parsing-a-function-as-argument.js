

// 1) Pass a function as argument
function capitaliseWord() { // input 'string' => output capitalised 'STRING'
  return 'NAWAL' // returns a string
}

function greetFriend(strFunction) { // input 'string' => output messaage  "Hello " + 'string' + "!"
  const message = "Hello " + strFunction() + "!"
  return message
}


console.log(greetFriend(capitaliseWord)) // [Function:capitaliseWord]
