let back=document.querySelector(".back")
back.addEventListener("click",function(){
    window.location.href="home1.html"
})

let search=document.getElementById("gsearch")
// console.log(search);
let section3=document.querySelector(".section3")


search.addEventListener("keypress",function(e){
    if (e.key === "Enter"){

        let newSearch={mysearch:search.value}
        axios.post(`http://localhost:4000/searches`,newSearch)

        }

        getSearch()
        getProduct()
})


   function getSearch() {
       section3.innerHTML=""
            axios.get("http://localhost:4000/searches").then((res)=>{
                console.log(res.data);
                res.data.filter(item =>{
                    console.log(item.mysearch);
                 
                   section3.insertAdjacentHTML("beforeend",
                   ` <div class="search">
                   <p>${item.mysearch}</p>
                  <i class="fa fa-close" style="font-size:36px"  onclick="deleteSearch(${item.id})"
                   ></i>
                    </div>`)

                })

          }
        
      )}


      function deleteSearch(id){
        axios.delete(`http://localhost:4000/searches/${id}`)
   
      } 


     window.addEventListener("load", getSearch() )


  function getProduct(){
  axios.get("http://localhost:4000/allproduct").then((res)=>{
                console.log(res.data);
                res.data.filter(item=>{
                    
                    console.log(item.category);
                    if(item.category==search.value){

                        window.location.href=`product.html?id=${item.id}`
                        }
                        else{
                            window.location.href="notfound.html"
                        }
                   
                })
            })
             
}
