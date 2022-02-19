// getting data from input fields
function getData(id){
    const dataInText = document.getElementById(id).value;
    const data = parseInt(dataInText);
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