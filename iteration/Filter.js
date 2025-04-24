// const coding=["js","py","rb","java"]
// const x=coding.forEach((i)=> {
//   console.log(i)
//   return i
// })
// console.log(x)

// const newar=[1,3,6,8,3]
// const x=newar.filter((i)=>i>2)
// console.log(x)

// const ar=[2,3,5,7,8]
// const y=ar.filter((i)=>{
//   return i>2
// })
// console.log(y)
// const n=[3,6,8,6,4,1]
// const array=[]
// n.forEach((num)=>{
//   if(num>2){
//     array.push(num)
//   }
// })
// console.log(array)

// const books=[{
//   title:"rich dad poor dad",
//   genre:'business',
//   publish:"2015"
// },
// {
//   title:"pshycology",
//   genre:'mind',
//   publish:"2014"
// },
// {
//   title:"physics",
//   genre:'knowledge',
//   publish:"10ed"
// },
// {
//   title:"Atomic habit",
//   genre:'business',
//   publish:"2015"
// },
// {
//   title:"metasploit",
//   genre:'hacking',
//   publish:"2015"
// },
// {
//   title:"kali linux",
//   genre:'hacking',
//   publish:"2011"
// }]
// const b=books.filter((bk)=>bk.genre==='hacking')
// console.log(b)
// const b=books.filter((bk)=>bk.publish>=2000)
// const b=books.filter((bk)=>{
//   return bk.publish>=2000 && bk.genre==='hacking'
// })
// console.log(b)
// const num=[1,2,3,4,5,6]
// const number=num.map((n)=>n*5)
// const number=num.map((n)=>n*5).map((n)=>n+2).filter((n)=>n>20)
// console.log(number)

//reduce(accumelator,currentval)
// const arre=[2,4,6,7,8]
// const mynumber=arre.reduce(function (acc,currnval){
  
//   return acc+currnval
  
// },3)
// console.log(mynumber)
// const arre=[4,7,4,5,8,9,3]
// const myNumber=arre.reduce((acc,currnval)=> acc+currnval,1)
// console.log(myNumber)

const courses=[{
  name:"js course",
  price:4099
},
{
  name:"web dev course",
  price:20000
},
{
  name:"hacking course",
  price:40099
},
{
  name:"kotlin course",
  price:10000
}]
const pricePay=courses.reduce((acc,item)=>acc+item.price,0)
console.log(pricePay)




