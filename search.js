let back=document.querySelector(".back")
back.addEventListener("click",function(){
    window.location.href="home1.html"
})

let search=document.getElementById("gsearch")
console.log(search);
let section3=document.querySelector(".section3")


search.addEventListener("keypress",function(e){
    if (e.key === "Enter"){
        section3.insertAdjacentHTML("beforeend",
        ` <div class="search">
        <p>${search.value}</p>
       <i class="fa fa-close" style="font-size:36px"></i>
         </div>`)
    }
})







