
let wraperProduct=document.querySelector(".wrapperProduct")
console.log(wraperProduct);


function getMyOrder(){
    axios.get("http://localhost:4000/orders").then((res)=>{
        console.log(res.data);
        res.data.forEach(item => {
            console.log(item);
            wraperProduct.insertAdjacentHTML("beforeend",
            `
            <div class="bgcolor">
            <div class="img">
                <img src="${item.img}" >
            </div>
            <div class="info">
                <div class="row1">
                    <h3>${item.name}</h3>
                    <i class="fa fa-trash-o"></i>
                </div>
                <div class="row3">
                    <p>black</p>
                    <p>${item.size}</p>
                </div>
                <div class="row4">
                    <p class="dollar">${item.price}</p>
                    <div class="num">
                        <p>Track order</p>
                        
                    </div>
                </div>
            </div>
          
        </div>   
            `
           
     )
     });
    }) 
}
getMyOrder()