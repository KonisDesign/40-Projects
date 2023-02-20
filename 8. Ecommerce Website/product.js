let cart = [];
let quantity = [];

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);



function readData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                if (urlParams.has('product') == true) {
                    document.getElementById('product-container').innerHTML = '<div class="product-container"><div class="snapshot-container"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-1.png" alt="snap1"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-2.avif" alt="snap2"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-3.avif" alt="snap3"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-4.avif" alt="snap"></div><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-1.png"><div class="options-container"><h2>' + data[urlParams.get('product')].name + '</h2><h1>' + data[urlParams.get('product')].price + '€</h1><p>' + data[urlParams.get('product')].description + '</p><div class="actions-container"><input type="number" id="quantityinput" value="1" min="1" max="10"><button class="primary-button" onclick="addToCart(\'' + data[urlParams.get('product')].id + '\')">Add to cart</button></div><div class="row-container"><h3>SKU:</h3><p>' + data[urlParams.get('product')].id + '</p></div><div class="row-container"><p>Share this items</p><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-pinterest-p"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a></div></div></div><div class="description-container"><h2>Description</h2><div class="detail-container"><div class="text-container"><h1>Detail</h1><p>' + data[urlParams.get('product')].description + '</p></div><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-1.png" alt="detail"></div></div>';
                    break;
                } else {
                    window.location.href = "./";
                    break;
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function addToCart(id) {
        cart = JSON.parse(localStorage.getItem('cart'));
        quantity = JSON.parse(localStorage.getItem('quantity'));
        if (cart == null) {
            cart = [];
            quantity = [];
        }
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                if (id == cart[i]) {
                    let newquantity = Number(quantity[i]) + Number(document.getElementById('quantityinput').value);
                    quantity.splice(i, 1, newquantity);
                    i = cart.length;
                    break;
                } else if (i == (cart.length - 1)) {
                    cart.push(id);
                    quantity.push(document.getElementById('quantityinput').value);
                    break;
                }
            }
        } else {
            cart.push(id);
            quantity.push(document.getElementById('quantityinput').value);
        }


    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('quantity', JSON.stringify(quantity));
    window.location.reload();
}

readData();