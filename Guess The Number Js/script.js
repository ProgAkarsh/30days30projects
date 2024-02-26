;(function(){
const userInput = document.querySelector(".input")
const form = document.querySelector("form")
const submitBtn = document.querySelector(".submit")
const restartBtn = document.querySelector(".Restart")
const result = document.querySelector(".result")
const allGuesses = document.querySelector(".all-guesses")
const allGuessesArr = []

var randomNumber = Math.round(Math.random()*100)


form.addEventListener('submit', function(e){
    e.preventDefault()
    const userInputValue = parseInt(userInput.value)
    if(userInputValue< randomNumber){
        result.innerHTML ='Too low!'
    }
    else if(userInputValue>randomNumber){
        result.innerHTML ='Too high!'
    }
    else{
       result.innerHTML ='You got it!Congrats'
       restartBtn.disabled = false
       submitBtn.disabled = true
    }
    allGuessesArr.push(userInputValue)
    allGuesses.innerText = 'Your Guesses: ' + allGuessesArr.join(', ') 
    
    form.reset()

    
})

restartBtn.addEventListener('click', function(){
    result.innerHTML = ''
    allGuesses.innerHTML = ''
    restartBtn.disabled = true
    submitBtn.disabled = false
    randomNumber = Math.round(Math.random()*100)

})
})()