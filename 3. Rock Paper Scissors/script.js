let data = ["rock", "paper", "scissors"];
let ai = Math.floor(Math.random() * 3);
let player;
let scoreplayer = 0;
let scoreai = 0;

function game(option) {
    aiBrain();
    blockItems();
    myAnimate(option);
}

function blockItems() {
    var items = document.getElementById("item-container").getElementsByTagName('*');
    for (var i = 0; i < items.length; i++) {
        items[i].disabled = true;
    }
    document.getElementById("score-ai").classList.remove("text-focus-in");
    document.getElementById("score-p").classList.remove("text-focus-in");
    setTimeout(unblockItems, 1600);
}

function unblockItems() {
    var items = document.getElementById("item-container").getElementsByTagName('*');
    for (var i = 0; i < items.length; i++) {
        items[i].disabled = false;
    }
    points();
}

function myAnimate(figure) {
    document.getElementById('player-anim').src = "assets/left-" + figure + ".gif";
    document.getElementById('ai-anim').src = "assets/right-" + data[ai] + ".gif";
    player = figure;
}


function aiBrain() {
    ai = Math.floor(Math.random() * 3);
}

function points() {
    if (player == "rock" && data[ai] == "paper") {
        scoreai++;
        document.getElementById("score-ai").classList.add("text-focus-in");
    } else if (player == "rock" && data[ai] == "scissors") {
        scoreplayer++;
        document.getElementById("score-p").classList.add("text-focus-in");
    } else if (player == "paper" && data[ai] == "rock") {
        scoreplayer++;
        document.getElementById("score-p").classList.add("text-focus-in");
    } else if (player == "paper" && data[ai] == "scissors") {
        scoreai++;
        document.getElementById("score-ai").classList.add("text-focus-in");
    } else if (player == "scissors" && data[ai] == "rock") {
        scoreai++;
        document.getElementById("score-ai").classList.add("text-focus-in");
    } else if (player == "scissors" && data[ai] == "paper") {
        scoreplayer++;
        document.getElementById("score-p").classList.add("text-focus-in");
    }
    document.getElementById('score-p').innerHTML = scoreplayer;
    document.getElementById('score-ai').innerHTML = scoreai;
}
