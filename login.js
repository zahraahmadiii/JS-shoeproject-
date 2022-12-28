let eye=document.querySelector(".fa-eye-slash")
let passwordInput=document.querySelector(".pwd")
let btnNext=document.querySelector(".btnNext")

eye.addEventListener("click",function(){
    passwordInput.type="text"
    btnNext.style.backgroundColor="black"
})
btnNext.addEventListener("click",function(){
    window.location.href="home1.html";
})