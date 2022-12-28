
let blankTwo=document.querySelector(".two")
console.log(blankTwo);

blankTwo.style.backgroundColor = 'black';
let btnNext2=document.getElementById("btnNext2")
console.log(btnNext2);

btnNext2.addEventListener("click",goNext2);

function goNext2(){
 window.location.href="onboard5.html";
}

