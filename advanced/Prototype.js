//let name="afroj    "
//console.log(name.truelength)


const hero=["thor","spiderman"]
const heroPo={
  thor:"hammer",
  spiderman:"spring",
  getfun:function(){
    console.log(this.thor)
  
}
}
Object.prototype.afroj=function(){
  console.log("afroj always in object")
}
//heroPo.afroj()//own declare mathod--work all data tyoes
//heroPo.getfun()
Array.prototype.afu=function(){
  console.log("afu alaway in array")
}
//heroPo.afroj() //--object mwin sefine hai sabmwin chalega
//hero.afroj()
//hero.afu()
heroPo.afu//Array mein difine kiya hai object mwin nahi chalwga

const anotherName="coderafroj  "
Object.prototype.truelength=function(){
  console.log(`true length is ${this.trim().length}`)
}
anotherName.truelength()