let section4=document.querySelector(".section4")
// console.log(section4);
let heart=document.querySelector(".fa-heart-o")
console.log(heart);
heart.addEventListener("click",function(){
  heart.style.color="red"
  window.location.href="wishlist.html"
})
let iconHome=document.querySelector(".fa-home")
iconHome.style.color="gray"
let search=document.getElementById("gsearch")
console.log(search);
search.addEventListener("click" ,function(){
  window.location.href="search.html"
})
let btnNick=document.querySelector(".btnNick")
btnNick.addEventListener("click",function(){
  window.location.href="home3.html" 
})
let btnAll=document.querySelector(".btnAll")
btnAll.addEventListener("click",function(){
  window.location.href="home2.html" 
})
let shoes_id;

function create_products(){
    axios.get("http://localhost:4000/allProduct").then((res)=>{
        console.log(res.data);
        res.data.forEach(item => {
            console.log(item);
            shoes_id=item.id
            section4.insertAdjacentHTML("beforeend",
            ` 
            <div class="one">
            <div class="bggray">
              <img id="shoe1" src="${item.img}">
            </div>
                 <p><b>${item.name}</b></p>
               <p>${item.price}</p>
           </div>
          `)
            
        });
    }) 
}

window.addEventListener("load",create_products)
 