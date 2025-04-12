var z=100
let x=10
if(true){
  let x=2 
  const y=8 
  var z=9
  console.log("inner",x)
}
console.log("outer",x)//block scope
console.log(y)//black scop
console.log(z)//globle scope acchi baat nhi hai

