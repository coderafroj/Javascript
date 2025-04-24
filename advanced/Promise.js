const promise=new Promise(function(resolve,reject){
  setTimeout(function(){
  //  console.log("aysnc task is complete")
    resolve()
  },2000)
})
promise.then(function(){
//  console.log("consumed promise")//jab uper waal chalega uske baad hi ye chalega
})

//ek hi mein
new Promise(function(resolve,reject){
  setTimeout(function(){
 //   console.log("Async task 2 ")
    resolve()
  },1000)
}).then(function(){
 // console.log("aysnc 2 consumed")
})

const promiseThree=new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"coderafroj",email:"coderafroj.tech@gmail.com"})
  },1200)
})
promiseThree.then(function(user){
//  console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
  let error=false
  setTimeout(function(){
    if(!error){
      resolve({username:"coderafroj",name:"afroj"})
     }
     else{
       reject("Something went wrong")
     }
  },1000)
})
promiseFour.then(function(user){
  console.log(user)
  return user.username
}).then((username)=>{
  console.log(username)
}).catch((error)=>{
  console.log(error)
}).finally(()=>console.log("finally resolved and reject"))

const promiseFive=new Promise(function(resolve,reject){
   let error=true
  setTimeout(function(){
    if(!error){
      resolve({username:"adu",name:"afroj"})
     }
     else{
       reject( "Js went wrong")
     }
  },1000)
  
})
async function consumePromiseFive(){
 try{
    const response=await promiseFive
  console.log(response)
 }
 catch(error){
   console.log(error)
 }
}
consumePromiseFive()

//async function getAllUser(){
// try{
  //  const response=await fetch("https://jsonplaceholder.typicode.com/users")
 // const data=await response.json()
//console.log(data)
 //}
// catch(error){
 //  console.log(error)
// }
//}
//getAllUser()

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data)
}).catch((error)=>console.log(error))