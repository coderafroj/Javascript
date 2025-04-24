const clock=document.getElementById("clock")

setInterval(function (){
  let data=new Date()
// console.log(data.toLocaleTimeString())
clock.innerHTML=data.toLocaleTimeString()
  
},1000)