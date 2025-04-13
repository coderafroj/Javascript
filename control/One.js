//if 
// if(true){
//   console.log("executed")
// }

//comparison opr 
// < --less than
// > --greater than
// <= --less than equal
// >= --greater than equal
// = ---asign opr 
// == --equal opr 
// != --not equal 
// === --- strict check
// !== -- not strict check
// if(2=="2"){//--ye to galat hai 
//   console.log("execute")
// }

// strict check
// if(2==="2"){
//   console.log("execute")
// }
// const score=100
// if(score<200){
//   const power="hacking"
//   console.log(`user power ${power}`)
// }
// console.log(power)//block scope hai power

// const bal=1000
// if(bal>200) console.log("true"),console.log("true2");//not readable

// let money=1000
// if(money<100){
//   console.log("your money less than 100")
// }
// else if(money<300){
//   console.log("your maney less than 300")
// }
// else if(money<800){
//   console.log("your money less than 800")
// }
// else{
//   console.log("your money less than 1100")
// }

// logicle opr 
// &&---agar dono true to code run hoga 
// ||---koi ek true to code run hoga 

const loggedIn=true 
const devidCard=true 
const userLoggedInGoogle=false
const userLoggedInEmail=true
if(loggedIn && devidCard && 2!=2){
  console.log("Allow these course")
}
if(userLoggedInEmail || userLoggedInGoogle){
  console.log("allow course")
}