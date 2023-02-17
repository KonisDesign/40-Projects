if (localStorage.getItem('cart') != null) {
    cart = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
            for (let i = 0; i < cart.length; i++) {
                document.getElementById('purchases-container').innerHTML += '<div class="row"><img class="small" src="assets/' + data[cart[i]].collectionid + '/' + data[cart[i]].nameid + '-1.png" alt="item"><h4 class="big">' + data[cart[i]].name + '</h4><p class="big">' + data[cart[i]].price + '€</p><input class="normal" type="number" id="number-"' + data[cart[i]].id + '" onchange="" value="1"><p class="normal">' + Number(data[cart[i]].price) * 10 + '€</p><button class="small">X</button></div>';
            }
    })
    .catch(error => {
        console.error('Error:', error);
    });