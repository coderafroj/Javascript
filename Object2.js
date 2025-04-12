const app=new Object()
console.log(app)
app.id=1729
app.name="afroj"
app.city="naguar"
console.log(app)
const std={
  svmi:{
    clas:{
      12:{
        user:{
          name:"afroj",
          rollno:42,
          stream:"pcm"
        }
      }
    }
  }
}
//console.log(std.svmi.clas["12"].user)
const obj1={
  1:"a",2:"b",3:"c"
}
const obj2={
  4:"d",5:"e",6:"f"
}
const obj3={
  7:"g",8:"h",9:"i"
}
//const obj={obj1,obj2}
const obj=Object.assign({},obj1,obj2,obj3)
//console.log(obj)
const ob={...obj1,...obj2,...obj3}
console.log(ob)
const user=[
  {
    id:1,
    name:"afroj"
  },
  {
    id:2,
    name:"arjun"
  }
  ]
 // console.log(user[1].name)
// console.log(app)
// console.log("keys",Object.keys(app));
// console.log("value",Object.values(app));
// console.log(Object.entries(app))
// console.log(Object.hasOwnProperty("name"))

//de structure object

const course={
  courseName:"javascript",
  fee:1000,
  duration:"six month",
  guru:"hitesh sir"
}
const {courseName:cN}=course //de structure
console.log(cN)