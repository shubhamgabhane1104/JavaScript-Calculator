
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result;

    switch (operator) {

        case "+":
            result = add(num1, num2);
            break;

        case "-":
            result = subtract(num1, num2);
            break;

        case "*":
            result = multiply(num1, num2);
            break;

        case "/":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = divide(num1, num2);
            }
            break;

        default:
            result = "Invalid operator";
    }

    document.getElementById("result").innerHTML = "Result: " + result;
}

