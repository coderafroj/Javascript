const buttons=document.querySelectorAll(".button")
const body=document.querySelector("body")
buttons.forEach(function (btn){
  btn.addEventListener("click",function (clk){
    console.log(clk)
    console.log(clk.target)
    if(clk.target.id==="grey"){
      body.style.backgroundColor=clk.target.id
    }
    if(clk.target.id==="yellow"){
      body.style.backgroundColor=clk.target.id
    }
    if(clk.target.id==="white"){
      body.style.backgroundColor=clk.target.id
    }
    if(clk.target.id==="blue"){
      body.style.backgroundColor=clk.target.id
    }
  })
})