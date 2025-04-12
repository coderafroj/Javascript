function calculateCartPrice(...num){
  return num
}
console.log(calculateCartPrice(100,20,75))

const cart={
  username:"afroj",
  price:199
}
function handleObject(anyobj){
  return `username is ${anyobj.username} and price rs in ${anyobj.price}`
}
console.log(handleObject(cart))
console.log(handleObject({
  username:"coderafroj",
  price:299
}))
const myArr=[100,66,99]
function returnSecondValue(getarray){
  return getarray[1]
}
console.log(returnSecondValue(myArr))
console.log(returnSecondValue([200,765,09]))