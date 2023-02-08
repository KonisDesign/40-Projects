
function generate() {
    let result = "";
    let length = document.getElementById("length").value;
    let characters = passwordType();
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter ++;
    }
    document.getElementById('password').value = result;
}

function passwordType() {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (document.getElementById("myuppercase").checked == true) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (document.getElementById("mysymbols").checked == true) {
        characters += '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
    }
    if (document.getElementById("mynumbers").checked == true) {
        characters += "0123456789";
    }
    return characters;
}