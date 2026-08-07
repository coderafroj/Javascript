// select element
//first mathod select element using id
let usingId=document.getElementById("intro")
console.log("id usese",usingId);
let usingClass=document.getElementsByClassName("my")
console.dir("class usues",usingClass)
// sysntax
// let h1=document.querySelector(".class/#id/tagname")docu
let h1=document.querySelector("#sec")
console.log(h1)

//change content
let heading=document.querySelector("#intro")
heading.textContent="my self CODERAFROJ"
let descrip=document.querySelector("#sec")
descrip.innerHTML="<i>my self coderafroj and i am pursuaing bca"
let my=document.querySelector(".my")
my.innerText="hello"