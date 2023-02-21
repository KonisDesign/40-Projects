function showMain() {
    document.getElementById('main').style.display = "flex";
    document.getElementById('links').classList.add('slide-in-right');
    document.body.style.overflowY = "hidden";
    document.body.style.position = "fixed";
}

function hideMain() {
    document.getElementById('main').style.display = "none";
    document.body.style.overflowY = "scroll";
    document.body.style.position = "relative";
}

function showCollection() {
    document.getElementById('collection-menu').style.display = "flex";
    document.getElementById('collection-menu').classList.add('scale-up-ver-top');
}