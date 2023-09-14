
let firstNumber = null;
let operator = null;
let secondNumber = null;
let displayValue = document.querySelector('.display');
let buttons = document.querySelector('.buttons');
let numberButtons = Array.from(document.querySelectorAll('.number'));
let operatorButtons = Array.from(document.querySelectorAll('.operator'));
let clearButton = document.querySelector('.clear');
let equalsButton = document.querySelector('.equal');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        //console.log(displayValue.textContent + button.textContent);
        if(displayValue.textContent == 0){ //or operator is pressed.
            displayValue.textContent = button.textContent;
        } else {
            displayValue.textContent =  displayValue.textContent + button.textContent;
        }  
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        
        if(firstNumber != null){
            secondNumber = displayValue.textContent;
            displayValue.textContent = operate(Number(firstNumber), operator,Number(secondNumber));
            operator = button.textContent;
            secondNumber = null;
            firstNumber = null;
        }
        
        if(firstNumber == null){
            firstNumber = displayValue.textContent;
            displayValue.textContent = 0;
            operator = button.textContent;
            console.log(firstNumber);
        } 


    });
});

clearButton.addEventListener('click',() => {
    displayValue.textContent = 0;
});

equalsButton.addEventListener('click',() => {
    if(operator) {
        secondNumber = displayValue.textContent;
        displayValue.textContent = operate(Number(firstNumber), operator,Number(secondNumber));
        secondNumber = null;
        firstNumber = null;
        operator = null;
    }
            
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
    } else if(op == 'x') {
        return multiply(fN,sN);
    } else {
        return divide(fN,sN);
    }
}