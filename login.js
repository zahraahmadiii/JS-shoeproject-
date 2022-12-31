let eye=document.querySelector(".fa-eye-slash")
let email = document.querySelector(".email");
let password=document.querySelector(".pwd")
let btnNext=document.querySelector(".btnNext")
let checkbox=document.querySelector(".checkbox")

function togglepass() {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
  }

  function check(){
    if(checkbox.checked){
        btnNext.style.backgroundColor="black"
    }
  }


btnNext.addEventListener("click",function(){
    window.location.href="home1.html";
    storedata()
})


//Storing users email and password

let dataArr= []
function storedata(){
    newdata = {
        email:email.value,
        password:password.value
    }
    email.value=""
    password.val=""

    dataArr.push(newdata)
    setLocalStorage(dataArr)
  
}

function setLocalStorage (data){
    localStorage.setItem('email',JSON.stringify(data))
    localStorage.setItem('password',JSON.stringify(data) )
}





function validateForm() {
    let email_input = email.value;
    if (email_input == "") {
        email.style.backgroundColor="#ed6b6f"
        email.placeholder='enter your email address';
    } 
  }