let rm=parseInt(Math.random()*100+1)
const userInput=document.querySelector("#guessField")
const submit =document.querySelector("#subt")
const pg=document.querySelector(".guesses")
const rg=document.querySelector(".lastResult")
const lowOrHi=document.querySelector(".loworhi")
const startOver=document.querySelector(".resultParas")
const p=document.createElement("p")

let prevGuess=[]
let numGuess=1 
let playGame=true

if(playGame){
  submit.addEventListener("click",function (clk){
    clk.preventDefault();
    const guess=parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("please Enter valid number")
  }
  else if(guess<1){
    alert("please Enter greater than 1")
  }
  else if(guess>100){
    alert("please enter number less than and equal 100")
  }
  else{
    prevGuess.push(guess)
    if(numGuess===11){
      displayGuess(guess)
      displayMessage(`Game over: random number was ${rm}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
  
}

function checkGuess(guess){
  if(guess===rm){
    displayMessage("you guessed it right")
    endGame()
  }
  else if(guess<rm){
    displayMessage("you guessed too low")
  }
  else if(guess>rm){
    displayMessage("you guessed  tooo high")
    
  }
  
}

function displayGuess(guess){
  userInput.value=""
  pg.innerHTML+=`${guess} `
  numGuess++
  rg.innerHTML=`${11-numGuess}`
  
}

function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
  
}

function endGame(){
  userInput.value=""
  userInput.setAttribute("disabled","")
  p.classList.add("button")
  p.innerHTML=`<h2 id="newGame">start new game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
  
}

function newGame(){
  const newGameButton=document.querySelector("#newGame")
  newGameButton.addEventListener("click",function (clk){
     rm=parseInt(Math.random()*100+1)
     prevGuess=[]
     numGuess=1 
     pg.innerHTML=""
     rg.innerHTML=`${11-numGuess}`
     userInput.removeAttribute("disabled")
     startOver.removeChild(p)
     playGame=true
    
  })
  
}
  