const computer_lang=["Python","javascript","java"]
const ui=["react","anguler","vuejs"] 
//computer_lang.push(ui)
//console.log(computer_lang)

//mathod
//const newarr=computer_lang.concat(ui)//merge array
//console.log(newarr)
const alLang=[...computer_lang,...ui]//best mathod 
console.log(alLang)
const anotherArr=[1,7,4,[8,4,0,[6,7,8]],7,9,2]
const realArr=anotherArr.flat(Infinity)
console.log(realArr)
console.log(Array.isArray("afroj"))//check array not array
console.log(Array.from("coderafroj"))
console.log(Array.from({name:"afroj"}))
const s1=192
const s2=78
const s3=92 
console.log(Array.of(s1,s2,s3))