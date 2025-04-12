//singleton
//object.create

//object literel
const sym=Symbol("adu")
const user={
  name:"Afroj",
  age:18,
  email:"afroj@gmail.com",
  logedIn:false,
  city:"us nagar",
  "full Name":"coderafroj",
  [sym]:"hello"
  
  
  
}
//console.log(user.name)
//console.log(user["age"])
//console.log(user["full Name"])//. karke isi access nahi kar skte
//console.log(user[sym])
//update value
user.name="coderafroj"
user["age"]=17
//Object.freeze(user)
user.email="coder@gmail.com"
//console.log(user)
user.greeting=function(){
  console.log("hello js")
}
user.greetingTo=function(){
  console.log(`hello js user ${this.name}`)
}
console.log(user.greeting())
console.log(user.greetingTo())
console.log(user)
