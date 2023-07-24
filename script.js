const display = document.querySelector('.currentOperation');
const numberBtns = document.querySelectorAll('.numbers');
const operatorBtns = document.querySelectorAll('.operator'); 
const equals = document.querySelector('.equals');
const clearBtn = document.querySelector('.clear');
const deleteBtn = document.querySelector('.delete');


function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;  
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;   
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber; 
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;   
}


let operator = '';
let secondNumber = '';
let firstNumber = '';
let evaluator = '';
let lastValue = '';


function operate(operator, firstNumber, secondNumber) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if(operator === '-') {
        return subtract(firstNumber, secondNumber)
    }
    else if(operator === '+') {
        return add(firstNumber, secondNumber)
    }

    else if(operator === '/'){
        if(secondNumber === 0) {
            return display.textContent = 'BRUHHH'
        } else return divide(firstNumber, secondNumber)
    } 
    else if(operator === 'x') {
        return multiply(firstNumber, secondNumber);
    } 
}

function resetScreen() {
    firstNumber ='';
    secondNumber ='';
    operator = '';
    evaluator ='';
    lastValue = '';
}

function evaluate(operator, firstNumber, secondNumber) {
    return operate(operator, firstNumber, secondNumber);   
}

for (i of numberBtns) {
    i.addEventListener('click', function() {
        if (operator === '' && evaluator != '=') {
        firstNumber += this.value;
        display.textContent = firstNumber;
        }
        else if(operator === '' && evaluator === '=') {
            resetScreen();
            firstNumber += this.value;
            display.textContent = firstNumber;        
        } else {
            secondNumber += this.value;
            display.textContent = secondNumber;     
        }  
    })
}

for (i of operatorBtns) {
    i.addEventListener('click', function() {
        if(operator === '') {
           operator = this.value;
        } else {
            total = evaluate(operator, firstNumber, secondNumber);
            display.textContent = total;
            resetScreen()
            firstNumber = total;
            operator = this.value;
            
        }
    })
}



equals.addEventListener('click', function() {
    evaluator = '=';
    total = evaluate(operator, firstNumber, secondNumber);
    display.textContent = total;
    resetScreen();
    evaluator = '='
    firstNumber = total;  
})

clearBtn.addEventListener('click', function() {
    resetScreen();
    display.textContent = '0';
})

deleteBtn.addEventListener('click', function() {
    //display.textContent = display.textContent.toString().slice(0, -1); 
    if(firstNumber && secondNumber) {
        secondNumber = secondNumber.toString().slice(0,-1);
        display.textContent = display.textContent.toString().slice(0, -1); 
    }
    else if(firstNumber && operator) {
        operator = '';
    }
    else if(firstNumber) {
        firstNumber = firstNumber.toString().slice(0,-1);
        display.textContent = display.textContent.toString().slice(0, -1); 
    } else if(secondNumber) {
        secondNumber = secondNumber.toString().slice(0,-1);
        display.textContent = display.textContent.toString().slice(0, -1); 
    }
});

console.log(operator);
console.log(firstNumber);
console.log(secondNumber);
console.log(evaluator);
console.log(lastValue);



let tere = 100;
tere.toString().slice(0,1)
console.log(tere)