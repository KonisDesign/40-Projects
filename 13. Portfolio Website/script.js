function show(id, button) {
    document.getElementById('home').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('resume').style.display = "none";
    document.getElementById('homebutton').classList.remove('active');
    document.getElementById('aboutbutton').classList.remove('active');
    document.getElementById('resumebutton').classList.remove('active');


    document.getElementById(id).style.display = "flex";
    document.getElementById(button).classList.add("active");
}