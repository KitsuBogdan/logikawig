let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    total += price;
    displayCart();
}

function displayCart() {
    const cartList = document.getElementById('cart');
    const totalDisplay = document.getElementById('total');
    
    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = `Total: $${total}`;
}
