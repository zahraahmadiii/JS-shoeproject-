let section4=document.querySelector(".section4")
let back=document.querySelector(".back")
// console.log(back);
back.addEventListener("click",function(){
    window.location.href="home1.html"
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