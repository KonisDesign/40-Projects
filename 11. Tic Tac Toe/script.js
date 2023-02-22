let game = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let myturn = 1;

function press(where, buttonid, team) {
    game.splice(where, 1, team);
    document.getElementById(buttonid).innerHTML = team;
    document.getElementById(buttonid).disabled = true;
    detecWin();
}

function detecWin() {
    const winConditions = [[0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
    ];

    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (game[a] === game[b] && game[b] === game[c]) {
            whoWin(a, b, c);
            return;
        }
    }

    if (myturn === 1) {
        myturn = 0;
        iaPlay();
    }
}


function iaPlay() {
    if (detectEmpty()) {
        if (game[0] == "O" && game[0] == game[1] && game[2] != "X" && game[2] != "O") {
            press(2, "button2", "O");
        } else if (game[2] == "O" && game[2] == game[1] && game[0] != "X" && game[0] != "O") {
            press(0, "button0", "O");
        } else if (game[0] == "O" && game[0] == game[2] && game[1] != "X" && game[1] != "O") {
            press(1, "button1", "O");
        } else if (game[3] == "O" && game[3] == game[4] && game[5] != "X" && game[5] != "O") {
            press(5, "button5", "O");
        } else if (game[5] == "O" && game[5] == game[4] && game[3] != "X" && game[3] != "O") {
            press(3, "button3", "O");
        } else if (game[3] == "O" && game[3] == game[5] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[6] == "O" && game[6] == game[7] && game[8] != "X" && game[8] != "O") {
            press(8, "button8", "O");
        } else if (game[8] == "O" && game[8] == game[7] && game[6] != "X" && game[6] != "O") {
            press(6, "button6", "O");
        } else if (game[6] == "O" && game[6] == game[8] && game[7] != "X" && game[7] != "O") {
            press(7, "button7", "O");
        } else if (game[0] == "O" && game[0] == game[3] && game[6] != "X" && game[6] != "O") {
            press(6, "button6", "O");
        } else if (game[6] == "O" && game[6] == game[3] && game[0] != "X" && game[0] != "O") {
            press(0, "button0", "O");
        } else if (game[0] == "O" && game[0] == game[6] && game[3] != "X" && game[3] != "O") {
            press(3, "button3", "O");
        } else if (game[1] == "O" && game[1] == game[4] && game[7] != "X" && game[7] != "O") {
            press(7, "button7", "O");
        } else if (game[7] == "O" && game[7] == game[4] && game[1] != "X" && game[1] != "O") {
            press(1, "button1", "O");
        } else if (game[1] == "O" && game[1] == game[7] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[2] == "O" && game[2] == game[5] && game[8] != "X" && game[8] != "O") {
            press(8, "button8", "O");
        } else if (game[8] == "O" && game[8] == game[5] && game[2] != "X" && game[2] != "O") {
            press(2, "button2", "O");
        } else if (game[2] == "O" && game[2] == game[8] && game[5] != "X" && game[5] != "O") {
            press(5, "button5", "O");
        } else if (game[0] == "O" && game[0] == game[4] && game[8] != "X" && game[8] != "O") {
            press(8, "button8", "O");
        } else if (game[8] == "O" && game[8] == game[4] && game[0] != "X" && game[0] != "O") {
            press(0, "button0", "O");
        } else if (game[0] == "O" && game[0] == game[8] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[2] == "O" && game[2] == game[4] && game[6] != "X" && game[6] != "O") {
            press(6, "button6", "O");
        } else if (game[6] == "O" && game[6] == game[4] && game[2] != "X" && game[2] != "O") {
            press(2, "button2", "O");
        } else if (game[2] == "O" && game[2] == game[6] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[0] == game[1] && game[2] != "X" && game[2] != "O") {
            press(2, "button2", "O");
        } else if (game[2] == game[1] && game[0] != "X" && game[0] != "O") {
            press(0, "button0", "O");
        } else if (game[0] == game[2] && game[1] != "X" && game[1] != "O") {
            press(1, "button1", "O");
        } else if (game[3] == game[4] && game[5] != "X" && game[5] != "O") {
            press(5, "button5", "O");
        } else if (game[5] == game[4] && game[3] != "X" && game[3] != "O") {
            press(3, "button3", "O");
        } else if (game[3] == game[5] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[6] == game[7] && game[8] != "X" && game[8] != "O") {
            press(8, "button8", "O");
        } else if (game[8] == game[7] && game[6] != "X" && game[6] != "O") {
            press(6, "button6", "O");
        } else if (game[6] == game[8] && game[7] != "X" && game[7] != "O") {
            press(7, "button7", "O");
        } else if (game[0] == game[3] && game[6] != "X" && game[6] != "O") {
            press(6, "button6", "O");
        } else if (game[6] == game[3] && game[0] != "X" && game[0] != "O") {
            press(0, "button0", "O");
        } else if (game[0] == game[6] && game[3] != "X" && game[3] != "O") {
            press(3, "button3", "O");
        } else if (game[1] == game[4] && game[7] != "X" && game[7] != "O") {
            press(7, "button7", "O");
        } else if (game[7] == game[4] && game[1] != "X" && game[1] != "O") {
            press(1, "button1", "O");
        } else if (game[1] == game[7] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[2] == game[5] && game[8] != "X" && game[8] != "O") {
            press(8, "button8", "O");
        } else if (game[8] == game[5] && game[2] != "X" && game[2] != "O") {
            press(2, "button2", "O");
        } else if (game[2] == game[8] && game[5] != "X" && game[5] != "O") {
            press(5, "button5", "O");
        } else if (game[0] == game[4] && game[8] != "X" && game[8] != "O") {
            press(8, "button8", "O");
        } else if (game[8] == game[4] && game[0] != "X" && game[0] != "O") {
            press(0, "button0", "O");
        } else if (game[0] == game[8] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else if (game[2] == game[4] && game[6] != "X" && game[6] != "O") {
            press(6, "button6", "O");
        } else if (game[6] == game[4] && game[2] != "X" && game[2] != "O") {
            press(2, "button2", "O");
        } else if (game[2] == game[6] && game[4] != "X" && game[4] != "O") {
            press(4, "button4", "O");
        } else {
            let i = Math.floor(Math.random() * 9);
            while (game[i] == "X" || game[i] == "O") {
                i = Math.floor(Math.random() * 9);
            }
            press(i, "button" + i, "O");
        }
        detecWin();
        myturn = 1;
    } else {
        document.getElementById("winner").innerHTML = "Nobody win";
        document.getElementById("newgame").style.display = "block";
    }
}

function detectEmpty() {
    let empty = false;
    for (let i = 0; i < 9; i++) {
        if (game[i] != "X" && game[i] != "O") {
            empty = true;
        }
    }
    return empty;
}

function whoWin(id1, id2, id3) {
    for (let i = 0; i < 9; i++) {
        document.getElementById('button' + i).disabled = true;
    }
    if (game[id1] == "X") {
        document.getElementById('button' + id1).style.background = "green";
        document.getElementById('button' + id2).style.background = "green";
        document.getElementById('button' + id3).style.background = "green";
        document.getElementById("winner").innerHTML = "You win !";
    } else if (game[id1] == "O") {
        document.getElementById('button' + id1).style.background = "red";
        document.getElementById('button' + id2).style.background = "red";
        document.getElementById('button' + id3).style.background = "red";
        document.getElementById("winner").innerHTML = "You loose !";
    }

    document.getElementById("newgame").style.display = "block";
}