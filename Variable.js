const id=1729   //constant ,reasignnahi kar skte
let name="Coderafroj" //block scope hota hai,ekblock ke andar hi accessable hai ,agatlet ke andar koi variable ek baar asign ho jata hai to phir us variable ko declare nahi kar sakte
{
  let x=6
}
//console.log(x) --not accessable
var email="xyz@gmail.com" // functional scope hota hai matlab ki ek block mein deckare karnw oer bo bahar bhi accesable hota hai.ismwin email naam ke variabke ko phir se asignkar sakte hai
{
  var y=8
}
//console.log(y) --accesable


city="vijaywada"

console.log(id)//xonsole oer kuch bhi print karne ke liye
console.table([id,name,email,city])//ek table ke format mein print karne ke liye ek sath sare


//prefer  not to use var because of issue in functionalscope
