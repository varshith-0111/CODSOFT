let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (number === 0 && display.innerText === '0') return;
    if (display.innerText === '0') display.innerText = '';
    currentOperand += number.toString();
    display.innerText = currentOperand;
}

function appendDecimal() {
    if (currentOperand.includes('.')) return;
    currentOperand += '.';
    display.innerText = currentOperand;
}

function setOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation;
    operation = undefined;
    previousOperand = '';
    display.innerText = computation;
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    display.innerText = '0';
}
