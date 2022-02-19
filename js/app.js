// getting data from input fields
function getData(id){
    const data = document.getElementById(id).value;
     return data;
}
//shopping cart button 
const buttons = document.getElementsByClassName('btn');
let cart = 0;
for (const button of buttons) {
    button.addEventListener('click', function(){
      cart = cart + 1;
      
      document.getElementById('cart').innerText = cart; 
    })  

}
const productContainer = document.getElementById('productContainer');
console.log(productContainer);
// post function 
document.getElementById('postButton').addEventListener('click', function(){
    const productName = getData('productName');
    const productDetails = getData('productDetails');
    const productPrice = getData('productPrice');
    
    
    const newProduct = document.createElement('div');
    newProduct.classList.add('col-lg-4', 'col-md-6');
    newProduct.innerHTML = `
                <div class="item shadow-lg rounded">
                <img class="item-img" src="images/download.png" alt="" />
                <h3>${productName}</h3>
                <p>
                  ${productDetails}
                </p>
                <div class="price">
                  <h3>$${productPrice}</h3>
                  <button  class="btn"
                    ><img
                      src="icons/shopping-cart 1.png"
                      width="24"
                      alt=""
                    />BUY NOW</button
                  >
                </div>
              </div>
    `
    console.log(newProduct);
    productContainer.appendChild(newProduct);

})