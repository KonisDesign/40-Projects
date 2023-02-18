let cart = [];
let quantity = [];

if (localStorage.getItem('cart') != null) {
    cart = JSON.parse(localStorage.getItem('cart'));
    quantity = JSON.parse(localStorage.getItem('quantity'));
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < cart.length; i++) {
            document.getElementById('purchases-container').innerHTML += '<div class="row"><img class="small" src="assets/' + data[cart[i]].collectionid + '/' + data[cart[i]].nameid + '-1.png" alt="item"><h4 class="big">' + data[cart[i]].name + '</h4><p class="big">' + data[cart[i]].price + '€</p><input class="normal" type="number" id="number' + i + '" onchange="changeQuantity(' + i + ')" value="' + quantity[i] + '"><p class="normal"">' + Number(data[cart[i]].price) * Number(quantity[i]) + '€</p><button class="small" onclick="removeItem(' + i + ')">X</button></div>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

function changeQuantity(id) {
    quantity.splice(id, 1, document.getElementById('number' + id).value);
    localStorage.setItem('quantity', JSON.stringify(quantity));
    window.location.reload();
    console.log(cart);
    console.log(quantity);
}

function removeItem(id) {
    cart.splice(id, 1);
    quantity.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', JSON.stringify(quantity));
    window.location.reload();
    console.log(cart);
    console.log(quantity);
}

function clearCart() {
    localStorage.clear();
    window.location.reload();
}