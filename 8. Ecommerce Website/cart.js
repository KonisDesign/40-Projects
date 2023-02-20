let cart = [];
let quantity = [];
let totalPrice = 0;

if (localStorage.getItem('cart') != null && JSON.parse(localStorage.getItem('cart')).length != 0) {
    cart = JSON.parse(localStorage.getItem('cart'));
    quantity = JSON.parse(localStorage.getItem('quantity'));
    console.log(cart);
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < cart.length; i++) {
            document.getElementById('purchases-container').innerHTML += '<div class="row"><img class="small" src="assets/' + data[cart[i]].collectionid + '/' + data[cart[i]].nameid + '-1.png" alt="item"><h4 class="big">' + data[cart[i]].name + '</h4><p class="big">' + data[cart[i]].price + '€</p><input class="normal" type="number" id="number' + i + '" onchange="changeQuantity(' + i + ')" value="' + quantity[i] + '"><p class="normal"">' + Number(data[cart[i]].price) * Number(quantity[i]) + '€</p><button class="small" onclick="removeItem(' + i + ')">X</button></div>';
            totalPrice += (Number(data[cart[i]].price) * Number(quantity[i]));
            document.getElementById('subtotal').innerHTML = totalPrice + '€';
            document.getElementById('total').innerHTML = totalPrice + '€';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
} else {
    document.getElementById('purchases-container').innerHTML = '<div class="nopurchase"><h1>Your cart is empty</h1></div>';
    document.getElementById('titleList').style.display = 'none';
    document.getElementById('clearCart').style.display = 'none';
    document.getElementById('checkout').style.display = 'none';
}



function changeQuantity(id) {
    quantity.splice(id, 1, document.getElementById('number' + id).value);
    localStorage.setItem('quantity', JSON.stringify(quantity));
    window.location.reload();
}

function removeItem(id) {
    cart.splice(id, 1);
    quantity.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', JSON.stringify(quantity));
    window.location.reload();
}

function clearCart() {
    localStorage.clear();
    window.location.reload();
}