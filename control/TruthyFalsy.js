
//const y="const x="afu@tech.ai"
// if(x){
//   console.log("got user email")
// }
// else{
//   console.log("don't user email")
// }
// const y=""
// if(y){
//   console.log("got user email")
// }
// else{
//   console.log("don't user email")
// }

//falsy value
// 0,"",false,bigInt 0n,-0,null,undefined,NaN
// truthy value 
// " ","0","false",[],{},function(){}

// const ar=[]
// if(ar.length===0){
//   console.log("Array is empty")
// }

// const obj={}
// if(Object.keys(obj).length===0){
//   console.log("object is empty")
// }
// nullish coalescing operater (??)
let val;
// val=10 ?? 76
// val=null ?? 26
val=undefined ?? 8 ?? 4
console.log(val)

// terniary operater
// condition ? true : false
const iceCreamPrice=999
iceCreamPrice<800 ? console.log("less than 800"):console.log("more than 800")