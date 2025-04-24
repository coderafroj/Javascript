function multiply(num){
  return num*5
}
multiply.power=6
console.log(multiply(6))
console.log(multiply.power)
console.log(multiply.prototype)

function createUser(username,score){
  this.username=username
  this.score=score
}
createUser.prototype.increment=function(){
  this.score++
}

createUser.prototype.print=function(){
  console.log(`price:-${this.score}`)
}
const chai=new createUser("coffee",65)
const tea=new createUser("tea",76)
console.log(chai.score)
chai.print()
console.log(tea.increment())