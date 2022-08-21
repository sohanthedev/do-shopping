const cart = [];

function display(cartProduct) {
    const tBody = document.getElementById('products-cart');
    tBody.innerHTML = '';
    let totalPrice = 0;
    for (let i = 0; i < cartProduct.length; i++){
        
        const name = cartProduct[i].pdName;
        const price = cartProduct[i].pdPrice;
        totalPrice = price + totalPrice;
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i+1}</th>
        <td>${name}</td>
         <td>${price}</td>
        `;
        tBody.appendChild(tr);
    }
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th></th>
    <td>Total</td>
    <td>${totalPrice}</td>
    `;
    tBody.appendChild(tr);
}
function addToCart(element) {
    const pdName = element.parentNode.parentNode.children[0].innerText;
    const pdPrice = element.parentNode.parentNode.children[1].children[0].innerText;

    const pd = {
          pdName: pdName,
        pdPrice: parseInt(pdPrice)
          
    }
  
    cart.push(pd);
    // console.log(cart)

    document.getElementById('total-products').innerText = cart.length;
    display(cart);
}
     