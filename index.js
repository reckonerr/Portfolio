let night = document.querySelector(".dark-mode-btn")
let font = document.getElementById("#font")
let body = document.body;

night.addEventListener("click", function(){
    body.classList.toggle("light-mode") 

})
night.addEventListener("click", function() {
    font.style.backgroundColor="pink"

})
