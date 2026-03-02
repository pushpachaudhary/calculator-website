document.addEventListener("DOMContentLoaded", function () {

    let display = document.getElementById("display");

    window.appendValue = function(value) {
        display.value += value;
    }

    window.clearDisplay = function() {
        display.value = "";
    }

    window.deleteLast = function() {
        display.value = display.value.slice(0, -1);
    }

    window.calculate = function() {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }

});