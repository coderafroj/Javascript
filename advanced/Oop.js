//const user={
//  username:"coderafroj",
  //logedIn:true,
  //getData:function(){
 //   console.log("hello")
 //   console.log(this.username)
 //   console.log(this)
//  }
//}
//console.log(user.getData())
//console.log(this)

function user(username,loginCount,isLoggedIn){
  this.username=username
  this.loginCount=loginCount
  this.isLoggedIn=isLoggedIn
  this.getData=function(){
    console.log("hello")
  }
  return this
}
const user1=new user("afroj",17,true)
const user2=new user("arjun",65,false)
console.log(user1)
console.log(user2)

console.log(user1.constructor)
console.log(user1 instanceof user)