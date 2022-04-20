function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(op, num1, num2) {
  switch(op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

const display = document.querySelector('.display');

/* Add eventListeners to all numbers */
const buttons = Array.from(document.querySelectorAll('.number'));
buttons.forEach(button => button.addEventListener('click', processNumber));

function processNumber() {
  if (display.textContent == 0) {
    display.textContent = this.textContent;
  } else if (display.textContent.length < 10) {
    display.textContent += this.textContent;
  }
}

/* Add eventListener to clear the display */
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => display.textContent = 0);
