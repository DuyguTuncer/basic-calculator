const defaultValue = 0;
let currentNumber = defaultValue;
const logEntries = [];

const addOperation = "ADD";
const subtractOperation = "SUBTRACT";
const multiplyOperation = "MULTIPLY";
const divideOperation = "DIVIDE";

const getUserInput = () => {
  return parseInt(userInput.value);
};

const calculation = (calculationType) => {
  enteredNumber = getUserInput();
  let mathOperator;
  if (calculationType === addOperation) {
    mathOperator = "+";
    currentNumber += enteredNumber;
  } else if (calculationType === subtractOperation) {
    mathOperator = "-";
    currentNumber -= enteredNumber;
  } else if (calculationType === multiplyOperation) {
    mathOperator = "*";
    currentNumber *= enteredNumber;
  } else if (calculationType === addOperation) {
    mathOperator = "/";
    currentNumber /= enteredNumber;
  }
  let calculationDisplay = `${currentNumber} ${mathOperator} ${enteredNumber}`;
  showUserEntries(
    currentNumber,
    mathOperator,
    enteredNumber,
    calculationDisplay
  );
  outputResult(currentNumber, calculationDisplay);
};

const showUserEntries = (
  currentNumber,
  mathOperator,
  enteredNumber,
  calculationDisplay
) => {
  const singleEntry = {
    currentNumber,
    mathOperator,
    enteredNumber,
    calculationDisplay,
  };
  logEntries.push(singleEntry);
  console.log("logEntries:", logEntries)
};

const add = () => {
  calculation(addOperation);
};

const subtract = () => {
  calculation(subtractOperation);
};

const multiply = () => {
  calculation(multiplyOperation);
};

const divide = () => {
  calculation(divideOperation);
};

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
