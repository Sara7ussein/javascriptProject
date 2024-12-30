// var inputName = document.getElementById('productName')
// var inputPrice = document.getElementById('productPrice')
// var inputCate = document.getElementById('productCategory')
// var inputDes = document.getElementById('productDescription')
// var adProduct = document.getElementById('adProduct')
// var updateProduct = document.getElementById('updateProduct')



// var productArray =[


// ]



    

var btn = document.querySelector('.btn')
var input = document.querySelector('input')
btn.addEventListener('click',function(){
    console.log(input.value)
    getFood(input.value)
})


var allReceipes =[]


async function getFood(meal){
    var loading = document.querySelector('.loading')
    try {
        
        var response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)
    var data = await response.json()
    allReceipes= data.recipes 
   
     display()
    
    } catch (error) {
         alert('Errrrrrror In Service')
    }
    // finally{loading.classList.add('d-none')}


}




function display(){
    var cartona =   ``;
    for(var i =0; i<allReceipes.length ;i++){

        cartona +=`

  <div class="col-md-4">
            <div class="card">
                <img src="${allReceipes[i].image_url}" alt="" class="card-img">
                <h3>${allReceipes[i].title}</h3>
            </div>
        </div>
        `
    }
    document.getElementById('food').innerHTML = cartona;
    
}





getFood()



































// var myhttp = new XMLHttpRequest()
// myhttp.open("GET","https://fakestoreapi.com/products")
// myhttp.send()
// myhttp.addEventListener("readystatechange",function(){

//     if(myhttp.readyState == 4){
//         var x = JSON.parse(myhttp.response)
//    console.log(typeof x)

//     }
// })





// // if(localStorage =! null){

// //     productArray = JSON.parse(localStorage.getItem('product'))
// //     display(productArray)

// // }


//     function addProduct(){
    
//     var productObject = {
    
//     name:inputName.value,
//     price: inputPrice.value,
//     Cate:inputCate.value,
//     Des:inputDes.value
    
    
    
//     }

//     productArray.push(productObject)
//     console.log(productArray)


   
//     display(productArray)
//     clear()


//     }

//     function clear(){
//         inputName.value =null;
//         inputPrice.value = null;
//         inputCate.value = null;
//         inputDes.value = null


//     }

//     function display(productArray){
//         cartona =``

//         for(var i =0;i<productArray.length;i++){
//             cartona += `<tr>   
//      <td>${productArray[i].name}</td>
//     <td>${productArray[i].price}</td>
//     <td>${productArray[i].Cate}</td>
//         <td>${productArray[i].Des}</td>

// <td><button class="btn btn-warning" onclick= "update(${i})"> Update</button></td>
// <td><button class="btn btn-danger" onclick="delet(${i})">Delete</button></td></tr>
            
            
            
            
            
        
//             `

         

            
     
//         }
//         document.getElementById('tbody').innerHTML = cartona;
//     }

//     function delet(indexArray){
//         productArray.splice(indexArray,1);
//         // localStorage.setItem('product',JSON.stringify(productArray))

//         display(productArray)
//         // localStorage.clear()


     
//     }


//     function search(baby){
//         var searchInput = []
//         for (var i =0;i <productArray.length;i++){
//             if (productArray[i].name.toLowerCase().startsWith(baby.toLowerCase()) == true ) {
//                 searchInput.push(productArray[i])

//             }

//         }


//         display(searchInput)




//     }
     
//     function update(i){
//         adProduct.classList.replace('d-block','d-none')
//         updateProduct.classList.replace('d-none','d-block')
    
//         inputName.value = productArray[i].name;
//         inputPrice.value = productArray[i].price;
//         inputCate.value = productArray[i].Cate;
//         inputDes.value = productArray[i].Des
    
        
//       }



//       function done(indexArray){
//                adProduct.classList.replace('d-none','d-block')
//         updateProduct.classList.replace('d-block','d-none')
      
    
//         var test = {
    
//             name:inputName.value,
//             price: inputPrice.value,
//             Cate:inputCate.value,
//             Des:inputDes.value
            
            
            
//             }
        
//             productArray.splice(indexArray,1,test)
//             display(productArray)
//             clear()

//         }


// //  var test = document.body

// //  test.addEventListener("keyup", press)

// //  function press(eINfo){
// // console.log(eINfo)
// //     alert('hello')
// //  }




// var group = document.querySelectorAll(".group img")

// for(var i =0;i< group.length;i++){

//     group[i].addEventListener("click",
//         function(eInfo){
           
//            var path = eInfo.target.getAttribute("src")
//            document.querySelector("img").setAttribute("src",path)

       





//         }
//     )

// }







// var content= document.querySelector(".shadwa .content");
// var faxmark= document.querySelector(".fa-xmark");



// faxmark.addEventListener("click", close)

// function close(){


//     content.classList.replace('d-flex','d-none')    
    
    
//     }
    

//     let x = {

//         name:'sara',
//         age: 25,
//         grade:4
//     }
        
//     let y ={
//         name:'salma'
        
//     }
//     Object.setPrototypeOf( y, x)
//    console.log(y)
