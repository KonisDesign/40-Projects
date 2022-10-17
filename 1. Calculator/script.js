let value = "0";
let value2 = "";
let operatorValue = "";

function myNumber(num) {
    if (value == "0") {
        value = '';
        document.getElementById('display').innerHTML = value;
    } else if (value2 == "0") {
        value2 = '';
        document.getElementById('display').innerHTML = value2;
    }
    if (operatorValue == "") {
        value = value + num;
        document.getElementById('display').innerHTML = value;
    } else {
        value2 = value2 + num;
        document.getElementById('display').innerHTML = value2;
    }
}

function myOperator(operator) {
    if (operatorValue == "") {
        operatorValue = operator;
    } else if (operatorValue == "+") {
        value = Number(value) + Number(value2);
        document.getElementById('display').innerHTML = value;
        operatorValue = operator;
        value2 = "";
    } else if (operatorValue == "-") {
        value = Number(value) - Number(value2);
        document.getElementById('display').innerHTML = value;
        operatorValue = operator;
        value2 = "";
    } else if (operatorValue == "*") {
        value = Number(value) * Number(value2);
        document.getElementById('display').innerHTML = value;
        operatorValue = operator;
        value2 = "";
    } else if (operatorValue == "/") {
        value = Number(value) / Number(value2);
        document.getElementById('display').innerHTML = value;
        operatorValue = operator;
        value2 = "";
    }
}

function myResult() {
    if (operatorValue == "+") {
        value = Number(value) + Number(value2);
    } else if (operatorValue == "-") {
        value = Number(value) - Number(value2);
    } else if (operatorValue == "*") {
        value = Number(value) * Number(value2);
    } else if (operatorValue == "/") {
        value = Number(value) / Number(value2);
    }
    document.getElementById('display').innerHTML = value;
    value = "0";
    value2 = "";
    operatorValue = "";
}

function restart() {
    value = "0";
    value2 = "";
    operatorValue = "";
    document.getElementById('display').innerHTML = value;
}

function myDelete() {
    if (operatorValue == "") {
        value = value.substring(0, value.length - 1);
        document.getElementById('display').innerHTML = value;
    } else {
        value2 = value2.substring(0, value2.length - 1);
        document.getElementById('display').innerHTML = value2;
    }
    if (value == "" && value2 == "") {
        restart();
    } else if (value == "" && value2 != "") {
        value = 0;
        document.getElementById('display').innerHTML = value;

    }
}
