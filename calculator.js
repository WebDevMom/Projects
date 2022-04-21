let firstNumber = "";
let secondNumber = "";
let total = 0;
let lastOperator = "";
let clearOnNextNumber = false;

function add() {
  lastOperator = "+";
  firstNumber = document.getElementById("screen").innerText;
  secondNumber = "";
  clearOnNextNumber = true;
}
function subtract() {
  lastOperator = "-";
  firstNumber = document.getElementById("screen").innerText;
  secondNumber = "";
  clearOnNextNumber = true;
}
function multiply() {
  lastOperator = "*";
  firstNumber = document.getElementById("screen").innerText;
  secondNumber = "";
  clearOnNextNumber = true;
}
function divide() {
  lastOperator = "/";
  firstNumber = document.getElementById("screen").innerText;
  secondNumber = "";
  clearOnNextNumber = true;
}

function backspace() {
  if (!clearOnNextNumber) {
    let text = document.getElementById("screen").innerText;
    text = text.slice(0, -1);
    if (text == "") {
      document.getElementById("screen").innerText = 0;
    } else {
      document.getElementById("screen").innerText = text;
    }
  }
}
function posNeg() {
  let text = document.getElementById("screen").innerText;
  if (text != 0) {
    if (text[0] === "-") {
      text = text.substring(1);
    } else {
      text = "-" + text;
    }
    document.getElementById("screen").innerText = text;
  }
}
function equals() {
  if (lastOperator != "") {
    if (secondNumber == "") {
      secondNumber = document.getElementById("screen").innerText;
    }
    if (lastOperator == "+") {
      total = parseFloat(firstNumber) + parseFloat(secondNumber);
    } else if (lastOperator == "-") {
      total = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (lastOperator == "*") {
      total = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (lastOperator == "/") {
      total = parseFloat(firstNumber) / parseFloat(secondNumber);
    }

    firstNumber = total;
    updateDisplay(total, true);
  }
}

function point() {
  let str = document.getElementById("screen").innerText;

  if (!str.includes(".")) {
    document.getElementById("screen").innerText += ".";
  }
}
function numZero() {
  updateDisplay(0);
}
function numOne() {
  updateDisplay(1);
}
function numTwo() {
  updateDisplay(2);
}
function numThree() {
  updateDisplay(3);
}
function numFour() {
  updateDisplay(4);
}
function numFive() {
  updateDisplay(5);
}
function numSix() {
  updateDisplay(6);
}
function numSeven() {
  updateDisplay(7);
}
function numEight() {
  updateDisplay(8);
}
function numNine() {
  updateDisplay(9);
}

function clearDisplay() {
  firstNumber = "";
  secondNumber = "";
  total = 0;
  lastOperator = "";
  clearOnNextNumber = false;
  document.getElementById("screen").innerText = 0;
}

//Utility Functions

function updateDisplay(num, isTotal = false) {
  if (isTotal) {
    document.getElementById("screen").innerText = num;
  } else {
    clearChecker();
    trimZero();
    document.getElementById("screen").innerText += num;
  }
}

function clearChecker() {
  if (clearOnNextNumber == true) {
    document.getElementById("screen").innerText = "";
    clearOnNextNumber = false;
  }
}

function trimZero() {
  if (document.getElementById("screen").innerText === "0") {
    document.getElementById("screen").innerText = "";
  }
}
