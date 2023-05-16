// Get the calculator elements
const display = document.querySelector('.display');
const clearButton = document.querySelector('.clear');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const decimalButton = document.querySelector('.decimal');
const equalsButton = document.querySelector('.equals');

let firstNumber = '';
let operator = '';
let secondNumber = '';
let result = null;
let isFirstNumberDecimal = false;
let isSecondNumberDecimal = false;


// Function to update the display
// Function to update the display
function updateDisplay(value) {
    if (value === 'result') {
      display.textContent = result.toString();
    } else {
      let displayValue = '';
  
      if (operator !== '' && secondNumber !== '') {
        displayValue = `${firstNumber} ${operator} ${secondNumber}`;
      } else if (operator !== '') {
        displayValue = `${firstNumber} ${operator}`;
      } else {
        displayValue = firstNumber;
      }
  
      display.textContent = displayValue;
    }
  }
  
// Function to clear the calculator
function clearCalculator() {
  firstNumber = '';
  operator = '';
  secondNumber = '';
  result = null;
  updateDisplay('0');
}

// Function to handle number button click
function handleNumberButtonClick() {
  const number = this.textContent;

  if (operator === '') {
    firstNumber += number;
    updateDisplay(firstNumber);
  } else {
    secondNumber += number;
    updateDisplay(secondNumber);
  }
}

// Function to handle operator button click
// Function to handle operator button click

  

// Function to handle decimal button click
function handleDecimalButtonClick() {
    if (operator === '') {
      if (!isFirstNumberDecimal && !firstNumber.includes('.')) {
        firstNumber += '.';
        updateDisplay(firstNumber);
        isFirstNumberDecimal = true;
      }
    } else {
      if (!isSecondNumberDecimal && !secondNumber.includes('.')) {
        secondNumber += '.';
        updateDisplay(secondNumber);
        isSecondNumberDecimal = true;
      }
    }
  }
    
// Function to handle operator button click
function handleOperatorButtonClick() {
    if (firstNumber !== '' && secondNumber !== '') {
      calculate();
    }
  
    operator = this.textContent;
  }
  
  // Function to calculate the result
  function calculate() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '÷':
        if (num2 === 0) {
          updateDisplay('Error: Division by 0');
          return;
        }
        result = num1 / num2;
        break;
      default:
        return;
    }
  
    // Round the result to avoid long decimals
    result = Math.round(result * 100) / 100;
    console.log(result)
  }
  
  // Function to handle equals button click
  function handleEqualsButtonClick() {
    if (firstNumber !== '' && operator !== '' && secondNumber !== '') {
      calculate();
      updateDisplay('result');
  
      // Reset decimal flags
      isFirstNumberDecimal = false;
      isSecondNumberDecimal = false;
    }
  }
  
  
  
  
  // Add event listeners to buttons
  clearButton.addEventListener('click', clearCalculator);
  
  numberButtons.forEach(button => {
    button.addEventListener('click', handleNumberButtonClick);
  });
  
  operatorButtons.forEach(button => {
    button.addEventListener('click', handleOperatorButtonClick);
  });
  
  decimalButton.addEventListener('click', handleDecimalButtonClick);
  
  equalsButton.addEventListener('click', handleEqualsButtonClick);
