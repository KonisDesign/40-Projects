try {
    let numberProducts = JSON.parse(localStorage.getItem('cart')).length;
    if (numberProducts > 0) {
        document.getElementById('notification').innerHTML = numberProducts;
        document.getElementById('notification').style.display = "flex";
    } else {
        document.getElementById('notification').style.display = "none";
    }
} catch {
    
}