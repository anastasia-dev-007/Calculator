const outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    }
    catch (err) {
        alert("Error");
    }
}

function clearBtn() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

