document.querySelector(".btn").addEventListener("click",function(){
    window.location.href="payment.html"
  
})



let wraperProduct=document.querySelector(".wrapperProduct")
console.log(wraperProduct);

let obj;

function getmycart(){
    axios.get("http://localhost:4000/mycart").then((res)=>{
        console.log(res.data);
        res.data.forEach(item => {
            console.log(item);
           obj=item
           console.log(obj);
            wraperProduct.insertAdjacentHTML("beforeend",
            `    
            <div class="bgcolor">
                  <div class="img">
                      <img src="${item.img}" >
                  </div>
                  <div class="info">
                      <div class="row1">
                          <h3>${item.name} </h3>
                          <i class="fa fa-trash-o" onclick="deleteProduct(${item.id})"></i>
                      </div>
                      <div class="row3">
                          <p>black</p>
                          <p>${item.size}</p>
                      </div>
                      <div class="row4">
                          <p class="dollar">${item.price}</p>
                          <div class="num">
                              <p>2</p>
                          </div>
                      </div>
                  </div>
                
              </div>   `
           
     )

   
     });

    }) 
    
}
getmycart()

function deleteProduct(id){
    axios.delete(`http://localhost:4000/mycart/${id}`)
    
}


function postToOrder(){
 
    axios.post(`http://localhost:4000/orders`,obj).then((res)=>{
        console.log(res);
        // window.location.href="orders.html"
    
    })


}

