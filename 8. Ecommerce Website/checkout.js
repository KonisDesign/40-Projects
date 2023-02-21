let cart = [];
let quantity = [];
let totalPrice = 0;

try {
    cart = JSON.parse(localStorage.getItem('cart'));
    quantity = JSON.parse(localStorage.getItem('quantity'));
} catch {
    window.location.href("index.html");
}

document.getElementById('bill').innerHTML = '<div class="row"><p>Product</p><p>Total</p></div>';

let promise = new Promise((resolve, reject) => {
    for (let c = 0; c < cart.length; c++) {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == cart[c]) {
                        console.log("zob")
                        document.getElementById('bill').innerHTML += '<div class="row"><p>' + data[i].name + ' X ' + quantity[c] + '</p><p>' + Number(data[i].price) * Number(quantity[c]) + '€</p></div>';
                        totalPrice += (Number(data[i].price) * Number(quantity[c]));
                    }
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    setTimeout(() => {
        resolve('Bill loaded')
    }, 200);
})

promise.then(() => {
    document.getElementById('bill').innerHTML += '<div class="row"><h3><b>Subtotal</b></h3><p>' + totalPrice + '€</p></div><div class="row"><h3><b>Total</b></h3><p>' + totalPrice + '€</p></div>';
})