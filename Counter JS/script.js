var num = document.querySelector(".num")
var btn = document.querySelector(".btn")
var btn1 = document.querySelector(".b1")
var btn2 = document.querySelector(".b2")
var incdec = document.querySelector(".addsub")
var reset = document.querySelector(".reset")
var input = document.querySelector(".input")


btn1.addEventListener("click",function(){
   var change = parseInt(input.value)
   num.innerText = parseInt(num.innerHTML) - change
   
})


btn2.addEventListener("click",function(){
   var change = parseInt(input.value)
   num.innerText = parseInt(num.innerHTML) + change
})


reset.addEventListener("click", function(){
   num.innerHTML = 0
   input.value = 1
})


