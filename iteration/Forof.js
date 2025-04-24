// //for of 
// const array=[10,20,30,40,59]
// for(const i of array){
//   // console.log(i)
// }

// const str="coderafroj"
// for(const n of str){
//   // console.log(n)
// }

// // map
// const map=new Map()
// map.set("name","afroj")
// map.set("age",17)
// // console.log(map)
// for(const [i,j] of map){
// // console.log(i,":-",j)
// }
//object per loop forin lagta hai
const object={
  py:"python",
  java:"java ",
  js:"javascript",
  css:"cascading style sheet"
}
for(const i in object){
  // console.log(i)//key a rahi hai
  // console.log(object[i])//value a rahi hai
  // console.log(`${object[i]} sort name is ${i}`)
}

const newar=[2,6,8,6]
for(const i in newar){
  // console.log(i)//keymilti hai yani idx number 
  // console.log(newar[i])
}
const newmap=new Map()//not iterabl map
for (const m in newmap){
  // console.log(m)
}

//forEach
const arr=["js","kotlin","laravel"]
arr.forEach(function (i){
  // console.log(i)
})

arr.forEach((i)=> {
  // console.log(i)
})

function print(i){
  // console.log(i)
}
arr.forEach(print)

arr.forEach((item,index,array)=>{
  // console.log(item,index,array)
})
const coding=[
  {
   ln:"python",
   lf:"py",
   teacher:"mukund"
  },
   {
   ln:"javascript",
   lf:"js",
   teacher:"hitesh sir"
  },
   {
   ln:"html,css",
   lf:"html,css",
   teacher:"wscube"
  },
   {
   ln:"java",
   lf:"py",
   teacher:"sharadha"
  }
  ]
  coding.forEach((idx)=>{
    console.log(idx.ln)
    console.log(idx.teacher)
    
  })