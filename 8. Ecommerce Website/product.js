let cart = [];
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function addToCart(id) {
    if (localStorage.getItem('cart') != null) {
        cart = JSON.parse(localStorage.getItem('cart'));
    }

    cart.push(id);
    localStorage.setItem('cart', JSON.stringify(cart));
}



function readData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (urlParams.has('product') == true) {
                        document.getElementById('product-container').innerHTML = '<div class="product-container"><div class="snapshot-container"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-1.png" alt="snap1"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-2.avif" alt="snap2"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-3.avif" alt="snap3"><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-4.avif" alt="snap"></div><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-1.png"><div class="options-container"><h2>' + data[urlParams.get('product')].name + '</h2><h1>' + data[urlParams.get('product')].price + '€</h1><p>' + data[urlParams.get('product')].description + '</p><div class="actions-container"><input type="number" value="1"><button class="primary-button">Add to cart</button></div><div class="row-container"><h3>SKU:</h3><p>' + data[urlParams.get('product')].id + '</p></div><div class="row-container"><p>Share this items</p><a href="#"><i class="fa-brands fa-twitter"></i></a><a href="#"><i class="fa-brands fa-facebook-f"></i></a><a href="#"><i class="fa-brands fa-pinterest-p"></i></a><a href="#"><i class="fa-brands fa-instagram"></i></a></div></div></div><div class="description-container"><h2>Description</h2><div class="detail-container"><div class="text-container"><h1>Detail</h1><p>' + data[urlParams.get('product')].description + '</p></div><img src="assets/' + data[urlParams.get('product')].collectionid + '/' + data[urlParams.get('product')].nameid + '-1.png" alt="detail"></div></div>';
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

readData();