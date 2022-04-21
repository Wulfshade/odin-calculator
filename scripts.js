function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
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
    case 'x':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

function processNumber() {
  if (display.textContent == 0 || toClear) {
    display.textContent = this.textContent;
  } else if (display.textContent.length < 10) {
    display.textContent += this.textContent;
  }
  toClear = false;
}

function processDot() {
  if(!display.textContent.includes(",")) {
    display.textContent += this.textContent;
  }
}

function processInvert() {
  display.textContent = display.textContent - (display.textContent * 2);
}

function processPercent() {
  display.textContent = display.textContent / 100;
}

function processOperator() {
  num1 = display.textContent;
  op = this.textContent;
  toClear = true;
}
 
function processEquals() {
  if (op != "") {
    num2 = display.textContent;
    result = operate(op, num1, num2)
    display.textContent = String(result).slice(0,10);
    num1 = display.textContent;
    num2 = "";
    op = "";
  }
}

let num1 = "";
let num2 = "";
let op = "";
let toClear = true;

const display = document.querySelector('.display');

/* Add eventListeners to all numbers */
const numbers = Array.from(document.querySelectorAll('.number'));
numbers.forEach(number => number.addEventListener('click', processNumber));

/* Add eventListener to clear the display */
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => display.textContent = 0);

/* Add eventListener for dot */
const dot = document.querySelector('.dot');
dot.addEventListener('click', processDot);

/* Add eventListener for invert */
const invert = document.querySelector('.invert');
invert.addEventListener('click', processInvert);

/* Add eventListener for percent */
const percent = document.querySelector('.percent');
percent.addEventListener('click', processPercent)

/* Add eventListeners to the basic operators (/ * - +) */
const operators = Array.from(document.querySelectorAll('.operator'));
operators.forEach(operator => operator.addEventListener('click', processOperator));

/* Add eventListener for equals */
const equals = document.querySelector('.equals');
equals.addEventListener('click', processEquals);

/* Add eventListeners to all buttons */
const buttons = Array.from(document.querySelectorAll('.buttons > div'));
buttons.forEach(button => button.addEventListener('mousedown', darken ));
buttons.forEach(button => button.addEventListener('mouseup', lighten ));

function darken() {
  this.style.filter = "brightness(0.85)";
}

function lighten() {
  this.style.filter = "brightness(1)";
}
