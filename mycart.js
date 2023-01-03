document.querySelector(".fa-shopping-bag").style.color="gray"


let wraperProduct=document.querySelector(".wrapperProduct")
console.log(wraperProduct);


function getfavorites(){
    axios.get("http://localhost:4000/mycart").then((res)=>{
        console.log(res.data);
        res.data.forEach(item => {
            console.log(item);
            wraperProduct.insertAdjacentHTML("beforeend",
            `        <div class="bgcolor">
            <div class="img">
                <img src="${item.img}" >
            </div>
            <div class="info">
                <div class="row1">
                    <h3>${item.name}</h3>
                    <i class="fa fa-trash-o" onclick="deleteProduct(${item.id})"></i>
                </div>
                <div class="row3">
                    <p>black</p>
                    <p>${item.size}</p>
                </div>
                <div class="row4">
                    <p class="dollar">${item.price}</p>
                    <div class="num">
                        <p>-</p>
                        <p>2</p>
                        <p>+</p>
                    </div>
                </div>
            </div>
          
        </div>`
           
     )
     });
    }) 
}
getfavorites()

function deleteProduct(id){
    // console.log(id);
    axios.delete(`http://localhost:4000/mycart/${id}`)
    
}
