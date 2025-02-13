function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function toggleSign() {
    let display = document.getElementById("display");
    if (display.value) {
        display.value = parseFloat(display.value) * -1;
    }
}
