function show(id, button) {
    document.getElementById('home').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('resume').style.display = "none";
    document.getElementById('projects').style.display = "none";
    document.getElementById('homebutton').classList.remove('active');
    document.getElementById('aboutbutton').classList.remove('active');
    document.getElementById('resumebutton').classList.remove('active');
    document.getElementById('projectbutton').classList.remove('active');


    document.getElementById(id).style.display = "flex";
    document.getElementById(button).classList.add("active");

    if (window.innerWidth <= 834) {
        document.getElementById('mymain').style.display = "none";
    }
}

function mainshow(id) {
    id = document.getElementById('mymain');
    if (id.style.display == "flex") {
        id.style.display = "none";
    } else {
        id.style.display = "flex";
    }
}

const year = new Date().getFullYear();
document.getElementById("year").innerHTML = year - 2008;