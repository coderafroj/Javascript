const number=[2,5,8,2,"hello",true]
// console.log(number)
// console.log(number[4])//acces elment by index number 
const n=new Array(2,5,8,2,0)
// console.log(n)
number.push("js")
// console.log(number)
number.pop()
// console.log(number)//dlt last element
// console.log(number.length)
number.unshift("start")//add element in start
// console.log(number)
number.shift()//dlt start element
// console.log(number)
// console.log(number.includes(9))
// console.log(number.indexOf(9))
const newar=number.join()
// console.log(number)
// console.log(newar)
// console.log(typeof newar)
const myArr=[1,2,3,4,5,6]
const slc=myArr.slice(1,3)
console.log(slc)
console.log("A",myArr)
const spc=myArr.splice(1,3)
console.log(spc)
console.log(myArr)