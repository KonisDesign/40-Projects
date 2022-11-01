/*
Type of note
Title
Text
Shared or not 1-0
Favourite or not 1-0
Date

*/

let data = [
    ["work", "Work lessons", "Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.", "1", "1", "Jan 15th 2023"],
    ["personal", "Birthday", "You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.", "0", "1", "Nov 25th 2022"],
    ["other", "Quick Summary", "Need to write a summary note of the subject you just finished? NotePlus lets you do in on-the-go!", "1",
        "0", "May 17th 2023"]
];

function readData(dataBase) {
    let item = "";
    let type = "";
    let color = "";
    let privacy = "";

    for (let n = 0; n < dataBase.length; n++) {

        if (dataBase[n][0] == "work") {
            type = "fa-regular fa-calendar";
            color = "blue";
        } else if (dataBase[n][0] == "personal") {
            type = "fa-solid fa-mug-hot";
            color = "purple";
        } else {
            type = "fa-solid fa-thumbtack";
            color = "green";
        }

        if (dataBase[n][3] == "0") {
            privacy = "fa-solid fa-user";
        } else {
            privacy = "fa-solid fa-users";
        }

        item += '<div class="note ' + color + '" id="note' + n + '"><div class="note-head"><i class="' + type + ' cat"></i><button><i class="fa-solid fa-ellipsis"></i></button></div><h3>' + dataBase[n][1] + '</h3><p class="para">' + dataBase[n][2] + '</p><div class="note-footer"><i class="' + privacy + '"></i><p><i class="fa-solid fa-calendar-days"></i> ' + dataBase[n][5] + '</p></div></div>';
    }

    document.getElementById('items-container').innerHTML = item;
}

readData(data);
