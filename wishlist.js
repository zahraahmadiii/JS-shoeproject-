let back=document.querySelector(".back")
back.addEventListener("click",function(){
    window.location.href="home1.html"
})

let section2=document.querySelector(".sec2")




let shoes_id;

function create_products(){
    axios.get("http://localhost:4000/allProduct").then((res)=>{
        // console.log(res.data);
        res.data.forEach(item => {
            // console.log(item);
            shoes_id=item.id
            section2.insertAdjacentHTML("beforeend",
            ` 
            <div class="one">
            <div class="bggray">
           
              <img id="shoe1" src="${item.img}" onclick="showProduct(${item.id})">
            
            </div>
            <p><b>${item.name}</b></p>
            <div class=info>
               
            <p class="rate">  <iconify-icon class="star" icon="ic:round-star-half"></iconify-icon> ${item.rate}</p>
            <p class="sold">${item.sold} <b>sold</b></p>
            </div>
            
            <p class="dollar">${item.price}</p>
           </div>
          `)
            
        });
    }) 
}


const showProduct=(id)=>{
    // console.log(id);
    // console.log(typeof id);
    window.location.href=`product.html?id=${id}`
}
    
window.addEventListener("load",create_products)





