/*
Type of note
Title
Text
Shared or not 1-0
Favourite or not 1-0
Date

*/

let data = [
    ["Work", "Work lessons", "Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.", "1", "0", "Jan 15th 2023"],
    ["Personal", "Birthday", "You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.", "0", "1", "Nov 25th 2022"],
    ["Other", "Quick Summary", "Need to write a summary note of the subject you just finished? Note App lets you do in on-the-go!", "1",
        "0", "May 17th 2023"],
    ["Hobbies", "Football", "Quickly note down the address and email address on Note App so that you can access it from anywhere.", "1", "1", "Nov 20th 2022"]
];

function readData(dataBase, tab) {
    let item = "";
    let type = "";
    let color = "";
    let privacy = "";
    let option = document.getElementById('filter-option');

    document.getElementById('all').classList.remove("selected");
    document.getElementById('shared').classList.remove("selected");
    document.getElementById('fav').classList.remove("selected");

    for (let n = dataBase.length - 1; n > -1; n--) {

        if (dataBase[n][0] == "Work") {
            type = "fa-solid fa-briefcase";
            color = "blue";
        } else if (dataBase[n][0] == "Personal") {
            type = "fa-solid fa-mug-hot";
            color = "purple";
        } else if (dataBase[n][0] == "Hobbies") {
            type = "fa-solid fa-basketball";
            color = "orange";
        } else {
            type = "fa-solid fa-thumbtack";
            color = "green";
        }

        if (dataBase[n][3] == "0") {
            privacy = "fa-solid fa-user";
        } else {
            privacy = "fa-solid fa-users";
        }

        if (option.value == 0) {
            if (tab == 0) {
                document.getElementById('all').classList.add("selected");
                item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
            } else if (tab == 1 && dataBase[n][3] == "1") {
                document.getElementById('shared').classList.add("selected");
                item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
            } else if (tab == 2 && dataBase[n][4] == "1") {
                document.getElementById('fav').classList.add("selected");
                item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
            }
        } else {
            if (tab == 0 && dataBase[n][0] == option.options[option.selectedIndex].text) {
                document.getElementById('all').classList.add("selected");
                item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
            } else if (tab == 1 && dataBase[n][3] == "1" && dataBase[n][0] == option.options[option.selectedIndex].text) {
                document.getElementById('shared').classList.add("selected");
                item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
            } else if (tab == 2 && dataBase[n][4] == "1" && dataBase[n][0] == option.options[option.selectedIndex].text) {
                document.getElementById('fav').classList.add("selected");
                item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
            }
        }
    }

    document.getElementById('items-container').innerHTML = item;
    document.getElementById('filter').style.display = "none";
}

readData(data, 0);

function writeNote() {
    document.getElementById('new').style.display = "flex";
    document.getElementById('new').classList.remove("scale-out-ver-top");
    document.getElementById('new').classList.add("scale-in-ver-top");
}

function cancelNote() {
    setTimeout(hideNew, 600);
    document.getElementById('new').classList.remove("scale-in-ver-top");
    document.getElementById('new').classList.add("scale-out-ver-top");
}

function hideNew() {
    document.getElementById('new').style.display = "none";
}

function newNote() {
    document.getElementById('note-title').innerHTML = document.getElementById('my-title').value;
    document.getElementById('note-para').innerHTML = document.getElementById('my-para').value;
}

function getDate(date) {
    let mydate = new Date(date);
    let m = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let d = "";
    if (mydate.getDay == "1") {
        d = "st";
    } else if (mydate.getDay == "2") {
        d = "nd";
    } else if (mydate.getDay == "3") {
        d = "rd";
    } else {
        d = "th";
    }
    document.getElementById('note-date').innerHTML = '<i class="fa-solid fa-calendar-days"></i> ' + m[mydate.getMonth()] + ' ' + mydate.getDate() + d + ' ' + mydate.getFullYear();
}

function getType() {
    let mytype = document.querySelector('input[name="select"]:checked').value;
    if (mytype == "Work") {
        document.getElementById('note-type').className = 'fa-solid fa-briefcase cat';
        document.getElementById('noteE').className = 'note big-note blue';
    } else if (mytype == "Personal") {
        document.getElementById('note-type').className = 'fa-solid fa-mug-hot cat';
        document.getElementById('noteE').className = 'note big-note purple';
    } else if (mytype == "Hobbies") {
        document.getElementById('note-type').className = 'fa-solid fa-basketball cat';
        document.getElementById('noteE').className = 'note big-note orange';
    } else {
        document.getElementById('note-type').className = 'fa-solid fa-thumbtack cat';
        document.getElementById('noteE').className = 'note big-note green';
    }
}

function saveNote() {
    let mytype = document.querySelector('input[name="select"]:checked').value;
    let mytitle = document.getElementById('my-title').value;
    let mypara = document.getElementById('my-para').value;
    let mydate = document.getElementById('note-date').innerHTML;

    data.push([mytype, mytitle, mypara, "0", "0", mydate.slice(41)]);
    readData(data, 0);

    cancelNote();
}

function dropdown(menu) {
    if (document.getElementById(menu).style.display == "block") {
        document.getElementById(menu).style.display = "none";
    } else {
        document.getElementById(menu).style.display = "block";
    }
}
