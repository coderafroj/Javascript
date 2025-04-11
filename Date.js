let myDate=new Date()//--obeject
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.toTimeString())
console.log(myDate.toJSON())
//let myCreateDate=new Date(2007,0,9) 
//console.log(myCreateDate.toString())
//let myCreateDate=new Date(2007,0,9,7,10) 
//console.log(myCreateDate.toLocaleString())
let myCreateDate=new Date("01-09-2007")  
console.log(myCreateDate.toLocaleString())
console.log()
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime())
console.log(Math.floor(Date.now()/100))

let newDate=new Date()
console.log(newDate.getMinutes())
console.log(newDate.getDay())
console.log(newDate.getHours())



