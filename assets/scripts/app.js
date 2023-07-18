const defaultValue = 0;
let currentValue = defaultValue;
const addOperation = "ADD";
const subtractOperation = "SUBTRACT";
const multiplyOperation = "MULTIPLY";
const divideOperation = "DIVIDE";
const arrayOfEntries = [];

function getUserInput() {
  let userInp = parseInt(userInput.value);
  return userInp;
}

function calculate(calculationType) {
  let enteredValue = getUserInput();
  let mathOperator;
  if (calculationType === addOperation) {
    mathOperator = "+";
    currentValue += enteredValue;
  } else if (calculationType === subtractOperation) {
    mathOperator = "-";
    currentValue -= enteredValue;
  } else if (calculationType === multiplyOperation) {
    mathOperator = "*";
    currentValue *= enteredValue;
  } else if (calculationType === divideOperation) {
    mathOperator = "/";
    currentValue /= enteredValue;
  }

  let calculationDescription = `${currentValue} ${mathOperator} ${enteredValue}`;
  outputResult(currentValue, calculationDescription);
  logEntries(mathOperator, currentValue, enteredValue, calculationDescription);
}

function logEntries(
  mathOperator,
  currentValue,
  enteredValue,
  calculationDescription
) {
  const singleEntry = {
    mathOperator: mathOperator,
    currentValue: currentValue,
    enteredValue: enteredValue,
    calculationDescription: calculationDescription,
  };
  arrayOfEntries.push(singleEntry);
  console.log("arrayOfEntries:", arrayOfEntries);
}

function add() {
  calculate(addOperation);
}

function subtract() {
  calculate(subtractOperation);
}

function multiply() {
  calculate(multiplyOperation);
}

function divide() {
  calculate(divideOperation);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", multiply);
