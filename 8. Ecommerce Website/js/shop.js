const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function readData(param) {

    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            if (param == "latest") {
                for (let i = data.length - 1; i > -1; i--) {
                    if (urlParams.has('collection') == true) {
                        if (data[i].collectionid == urlParams.get('collection')) {
                            document.getElementById('products-container').innerHTML += '<div class="item" id="' + data[i].id + '" onclick="location.href=' + '\'product.html?product=' + data[i].id + '\'' + ';"><img src="../assets/' + data[i].collectionid + '/' + data[i].nameid + '-1.png" alt="productid' + data[i].id + '"></div>'
                        }
                    } else if (window.location.pathname.split('/').pop() == "shop.html") {
                        document.getElementById('products-container').innerHTML += '<div class="item" id="' + data[i].id + '" onclick="location.href=' + '\'product.html?product=' + data[i].id + '\'' + ';"><img src="../assets/' + data[i].collectionid + '/' + data[i].nameid + '-1.png" alt="productid' + data[i].id + '"></div>'
                    }
                }
            } else {
                for (let i = 0; i < data.length; i++) {
                    if (urlParams.has('collection') == true) {
                        if (data[i].collectionid == urlParams.get('collection')) {
                            document.getElementById('products-container').innerHTML += '<div class="item" id="' + data[i].id + '" onclick="location.href=' + '\'product.html?product=' + data[i].id + '\'' + ';"><img src="../assets/' + data[i].collectionid + '/' + data[i].nameid + '-1.png" alt="productid' + data[i].id + '"></div>'
                        }
                    } else if (window.location.pathname.split('/').pop() == "shop.html") {
                        document.getElementById('products-container').innerHTML += '<div class="item" id="' + data[i].id + '" onclick="location.href=' + '\'product.html?product=' + data[i].id + '\'' + ';"><img src="../assets/' + data[i].collectionid + '/' + data[i].nameid + '-1.png" alt="productid' + data[i].id + '"></div>'
                    }
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function sort(param) {
    try {
        document.getElementById('products-container').innerHTML = "";
        readData(param);
    } catch {

    }
}

readData("none");


