
let firstNumber;
let operator;
let secondNumber;
let displayValue = document.querySelector('.display');
let buttons = document.querySelector('.buttons');
let numberButtons = Array.from(document.querySelectorAll('.number'));


numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(displayValue.textContent + button.textContent);
        if(displayValue.textContent == 0){ //or operator is pressed.
            displayValue.textContent = button.textContent;
        } else {
            displayValue.textContent =  displayValue.textContent + button.textContent;
        }

        
    });
});

function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

function operate(fN, op, sN){
    if(op == '+'){
        return add(fN, sN);
    } else if(op == '-'){
        return subtract(fN,sN);
    } else if(op == '*') {
        return multiply(fN,sN);
    } else {
        return divide(fN,sN);
    }
}