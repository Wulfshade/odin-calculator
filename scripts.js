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
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  switch(op) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case 'x':
    case '*':
      return multiply(num1, num2);
    case '/':
      return divide(num1, num2);
  }
}

function processNumber(e) {
  let digit;
  if(typeof e === 'string') {
    digit = e;
  } else {
    digit = e.target.textContent;
  }

  if (display.textContent == 0 || toClear) {
    display.textContent = digit;
  } else if (display.textContent.length < 10) {
    display.textContent += digit;
  }
  toClear = false;
  console.log(toClear);
}

function processDot() {
  if(!display.textContent.includes(".")) {
    display.textContent += '.';
  }
}

function processInvert() {
  display.textContent = display.textContent - (display.textContent * 2);
}

function processPercent() {
  display.textContent = display.textContent / 100;
}

function processOperator(operator) {
  if(typeof operator === 'string') {
    op = operator;
  } else {
    op = operator.target.textContent;
  }

  num1 = display.textContent;
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

function processBacksapce() {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = 0;
  }
}

function processKey(e) {
  var key = e.key;

  if ( ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(key) ) {
    processNumber(key);
  } else if ( ['+', '-', 'x', '/', '*'].includes(key) ) {
    processOperator(key);
  } else if (key === 'Enter' || key === '=') {
    processEquals();
  } else if ( key === '.' ) {
    processDot();c
  } else if ( key === 'i' ) {
    processInvert();
  } else if ( key === '%' ) {
    processPercent();
  } else if ( key === 'c') {
    display.textContent = 0;
  } else if (key === 'Backspace') {
    processBacksapce();
  }

}

function darken() {
  this.style.filter = "brightness(0.85)";
}

function lighten() {
  this.style.filter = "brightness(1)";
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

/* Add eventListener for the backspace */
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', processBacksapce);

/* Add eventListeners to all buttons */
const buttons = Array.from(document.querySelectorAll('.buttons > div'));
buttons.forEach(button => button.addEventListener('mousedown', darken ));
buttons.forEach(button => button.addEventListener('mouseup', lighten ));

document.addEventListener('keydown', processKey);
