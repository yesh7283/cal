let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function appendOperator(op) {
    if (currentInput !== '') {
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

function clearScreen() {
    currentInput = '';
    operator = '';
    previousInput = '';
    document.getElementById('result').value = '';
}

function calculate() {
    if (operator !== '' && previousInput !== '' && currentInput !== '') {
        let result;
        switch (operator) {
            case '+':
                result = parseFloat(previousInput) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(previousInput) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(previousInput) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(previousInput) / parseFloat(currentInput);
                break;
        }
        document.getElementById('result').value = result;
        currentInput = result.toString();
        operator = '';
        previousInput = '';
    }
}