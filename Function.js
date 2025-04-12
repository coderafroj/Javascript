function hello(){
  console.log("hello js")
}
hello()// call.function
function add(x,y){ //x,y --parameter
  console.log(x+y)
}
//const result=add(6,8)//6,9---arguments
//console.log(result)//---undefined
 function addTwo(a,b){
   //let result=a+b 
  // return result
  return a+b
   
 }
 const result=addTwo(9,5)
 //console.log(result)
 
// function loggedIn(user){
//   return `${user} just logged in`
// }
// console.log(loggedIn("hello"))
//agar loggedIn wale funcrion mein iser ne koi aegument nahi diya to--|
                             
  function loggedIn(user="afu"){//default parameter
    if(!user){
      console.log("please type your name")
      return
    }
    return `${user} just logged in`
  }
  console.log(loggedIn())


