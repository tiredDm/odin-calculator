
let firstNumber;
let operator;
let secondNumber;

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