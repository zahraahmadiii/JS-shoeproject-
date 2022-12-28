
let btnNext=document.querySelector(".btnNext")
console.log(btnNext);
btnNext.addEventListener("click",getstarted)

function getstarted(){
    window.location.href="login1.html";
}

let blankThree=document.querySelector(".three")
blankThree.style.backgroundColor = 'black';