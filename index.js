let diceValue = ["🪵", "🐑", "🌾", "🪨", "🧱", "✨"]
let dice1Active = true
let dice2Active = true
let dice3Active = true
let dice4Active = true
let dice5Active = true
let dice6Active = true
let dice1 = document.getElementById("dice1")
let dice2 = document.getElementById("dice2")
let dice3 = document.getElementById("dice3")
let dice4 = document.getElementById("dice4")
let dice5 = document.getElementById("dice5")
let dice6 = document.getElementById("dice6")
const rollBtn = document.getElementById("roll-btn")
const resetBtn = document.getElementById("reset-btn")

resetBtn.addEventListener("click", function(){
    dice1Active = true
    dice2Active = true
    dice3Active = true
    dice4Active = true
    dice5Active = true
    dice6Active = true
    dice1.textContent = "-"
    dice2.textContent = "-"
    dice3.textContent = "-"
    dice4.textContent = "-"
    dice5.textContent = "-"
    dice6.textContent = "-"
    dice1.classList.remove("save")
    dice1.classList.add("unsave")
    dice2.classList.remove("save")
    dice2.classList.add("unsave")
    dice3.classList.remove("save")
    dice3.classList.add("unsave")
    dice4.classList.remove("save")
    dice4.classList.add("unsave")
    dice5.classList.remove("save")
    dice5.classList.add("unsave")
    dice6.classList.remove("save")
    dice6.classList.add("unsave")
})


rollBtn.addEventListener("click", function(){
    
        dice1Render()
        dice2Render()     
        dice3Render()
        dice4Render()
        dice5Render()
        dice6Render()        
    
    
})

function dice1Render(){
    if (dice1Active){
    dice1.textContent = diceValue[Math.floor(Math.random()*6)]
    } else{
        console.log("dice inactive")
    }
}

dice1.addEventListener("click", function(){
    dice1Active = !dice1Active
    if (dice1Active === false){
        dice1.classList.remove("unsave")
        dice1.classList.add("save") 
    } else {
        dice1.classList.remove("save")
        dice1.classList.add("unsave")
    }
     
})
function dice2Render(){
    if (dice2Active){
    dice2.textContent = diceValue[Math.floor(Math.random()*6)]
    } else{
        console.log("dice inactive")
    }
}

dice2.addEventListener("click", function(){
      dice2Active = !dice2Active
    if (dice2Active === false){
        dice2.classList.remove("unsave")
        dice2.classList.add("save") 
    } else {
        dice2.classList.remove("save")
        dice2.classList.add("unsave")
    }  
     
})
function dice3Render(){
    if (dice3Active){
    dice3.textContent = diceValue[Math.floor(Math.random()*6)]
    } else{
        console.log("dice inactive")
    }
}

dice3.addEventListener("click", function(){
      dice3Active = !dice3Active
    if (dice3Active === false){
        dice3.classList.remove("unsave")
        dice3.classList.add("save") 
    } else {
        dice3.classList.remove("save")
        dice3.classList.add("unsave")
    }  
     
})
function dice4Render(){
    if (dice4Active){
    dice4.textContent = diceValue[Math.floor(Math.random()*6)]
    } else{
        console.log("dice inactive")
    }
}

dice4.addEventListener("click", function(){
      dice4Active = !dice4Active
    if (dice4Active === false){
        dice4.classList.remove("unsave")
        dice4.classList.add("save") 
    } else {
        dice4.classList.remove("save")
        dice4.classList.add("unsave")
    }  
     
})
function dice5Render(){
    if (dice5Active){
    dice5.textContent = diceValue[Math.floor(Math.random()*6)]
    } else{
        console.log("dice inactive")
    }
}

dice5.addEventListener("click", function(){
      dice5Active = !dice5Active
    if (dice5Active === false){
        dice5.classList.remove("unsave")
        dice5.classList.add("save") 
    } else {
        dice5.classList.remove("save")
        dice5.classList.add("unsave")
    }      
})
function dice6Render(){
    if (dice6Active){
    dice6.textContent = diceValue[Math.floor(Math.random()*6)]
    } else{
        console.log("dice inactive")
    }
}

dice6.addEventListener("click", function(){
      dice6Active = !dice6Active
    if (dice6Active === false){
        dice6.classList.remove("unsave")
        dice6.classList.add("save") 
    } else {
        dice6.classList.remove("save")
        dice6.classList.add("unsave")
    }     
})