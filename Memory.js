//stack (primitive) heap(non-primitive) 
//stack--jo bhi changes karte hai bo copy mein hote hai
let name="afroj"
let anotherName=name 
anotherName="coderafroj" 
//console.log(name) ---afroj
//console.log(anotherName)----coderafroj


//heap---original mein changes hote hai
let std={
  name:"afroj",
  id:1001
}
let std2=std 
std2.name="coderafroj"
console.log(std2.name) //----coderafroj
console.log(std.name)//----coderafroj


