
let back=document.querySelector(".back")
back.addEventListener("click",function(){
    window.location.href="wishlist.html"
})

const queryParam=new URLSearchParams(location.search)
const id=queryParam.get('id')
console.log(id);


const getOneProduct=(id)=>{
    axios.get(`http://localhost:4000/allProduct/${id}`).then((res)=>{
    console.log(res.data);
     let myWish=res.data
     genaratshoe(myWish)
    
})
}
getOneProduct(id)


let container_product=document.querySelector(".container_product")
// console.log(container_product);

 function genaratshoe(myWish){

    container_product.insertAdjacentHTML("beforeend",
    ` <div class="product_img">
        <div class="wraper-img">
            <img src="${myWish.img}" class="shoePic">
        </div>
        <div class="blanks">
            <div class="blank one"></div>
            <div class="blank two"></div>
        </div>
        
    </div>
    
    <div class="product_info">
        <h1 class="shoe_name">${myWish.name}</h1>
        <i class="fa fa-heart-o"></i>
        <div class="more">
            <p class="sold">${myWish.sold}sold</p>
            <iconify-icon class="star" icon="ic:round-star-half"></iconify-icon>
            <p class="reviews">${myWish.rate}</p>
            <p class="reviews">(${myWish.review})</p>
        </div>
        
        <hr>
        <h2>description</h2>
         <p id="descript">${myWish.description}</p>  
    </div>
    
    <div class="size_color">
        <div class="sizes">
            <p>size</p>
            <div class="circles">
                <div class="circle one">${myWish.size[0]}</div>
                <div class="circle two">${myWish.size[1]}</div>
                <div class="circle three">${myWish.size[2]}</div>
            </div>
        </div>
        <div class="colors">
            <p>colors</p>
            <div class="circles">
                <div class="circle one"></div>
                <div class="circle two"></div>
                <div class="circle three"></div>
            </div>
        </div>
        
    </div>
    
    <div class="quantity">
        <p>Quantity</p>
        <div class="num">
            <p>-</p>
            <p>2</p>
            <p>+</p>
        </div>
        
    </div>
    
    <div class="total">
        <div class="price">
         <p>total price</p>
         <p class="dollar">${myWish.price}</p>
        </div>
        <div class="cartbtn">
            <i class="fa fa-shopping-bag"></i>
           <Button>Add to cart</Button>
        </div>
    </div>`)


 } 
