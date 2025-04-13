var z=100
let x=10
if(true){
  let x=2 
  const y=8 
  var z=9
//  console.log("inner",x)
}
//console.log("outer",x)//block scope
//console.log(y)//black scop
//console.log(z)//globle scope acchi baat nhi hai

function one(){
  const name="afroj"
  function two(){
    const id=127
    console.log(name)//baccha kar skta hai acces
    
  }
  
 // console.log(id)//bada nahi kar sakta acces
  two()
  
}
//one()

if(true){
  const user="coderafroj"
  if(user=="coderafroj"){
    const sub=" js"
    //console.log(user+sub)
   // console.log(user)
    
  }
  //console.log(sub)
}
//console.log(user)

console.log(addone(7))//access
function addone(num){
  return num+1
}

console.log(addtwo(7))//not access addtwo func
const addtwo=function(num){
  return num+2
}
addtwo(7)