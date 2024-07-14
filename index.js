let number1 = 0
let operator
let number2 = 0

const numberButtons = document.querySelectorAll(".number")
numberButtons.forEach(button => button.addEventListener('click', handleNumberClick))

function handleNumberClick(event) {
    if (operator === undefined) {
        number1 = Number(String(number1) + String(event.target.id))
    } else {
        number2 = Number(String(number2) + String(event.target.id))
    }
    updateDisplayText()
}

function updateDisplayText() {
    let text = String(number1)
    if (operator) {
        text += ` ${operator} `
    }
    if (number2) {
        text += `${number2}`
    } 
    document.querySelector('#display-text').innerHTML = text
}

const operatorButtons = document.querySelectorAll(".operator")
operatorButtons.forEach(button => button.addEventListener('click', handleOperatorClick))

function handleOperatorClick(event) {
    if (number2) { handleOperate()}
    if(number1) {
        operator = event.target.id
    }
    updateDisplayText()
}

document.querySelector("#equals").addEventListener('click', handleOperate)
function handleOperate() {
    const result = operate(number1, operator, number2)
    document.querySelector('#display-text').innerHTML = result
    number1 = result
    operator = undefined
    number2 = 0
}

document.querySelector('#clear').addEventListener('click', handleClear)
function handleClear() {
    document.querySelector("#display-text").innerHTML = '0'
    number1 = 0
    operator = undefined
    number2 = 0
}

function operate(number1, operator, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2)
        case '-':
            return subtract(number1, number2)
        case 'x':
            return multiply(number1, number2)
        case '/':
            return divide(number1, number2)
    }
}

function add(a, b) {
	return a + b
};

function subtract(a, b) {
	return a - b
};

function multiply(a, b) {
    return a * b
};

function divide(a, b) {
	return a / b
};

