function createIceCream() {
  let flavour; //1)  you can't used `const`, use `let` instead
  flavour = 'chocolate' // assign `flavour` before `return` statement

  return `Pete likes ${flavour} ice cream and strawberry jelly`
  flavour = 'mint' // do NOT assign `flavour` after `return` statement will not be used
}

console.log(createIceCream())