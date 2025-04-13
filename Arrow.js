const user={
  username:"afroj",
  price:199,
  mess:function(){
    console.log(`${this.username} logged in`)
    console.log(this)//current reference
  }
}
//user.mess()
//user.username="coderafroj"
//user.mess()
//console.log(this)

function one(){
  let name="arjun"
  console.log(this.name)
}
//one()//


const chai=()=>{
  let name="afroj"
  console.log(this.name)
}
//chai()
//arrow
// const ar=(x,y)=>{
//   return x+y
// }
// console.log(ar(6,9))
// const addtwo=(x,y)=>x+y//implicit
//const addon=(x,y)=>(x-y)//implicit
const obj=(x,y)=>({username:"afroj"})
console.log(obj(8,6))