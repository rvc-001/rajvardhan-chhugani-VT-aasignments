const currentDisplay = document.getElementById("current-operand");

function appendNumber(number) {
  if (currentDisplay.innerText === "0") {
    currentDisplay.innerText = number;
  } else {
    currentDisplay.innerText += number;
  }
}

function clearDisplay() {
  currentDisplay.innerText = "0";
}

function appendOperator(op) {
  // Adding simple logic to log operator for now as per instructions
  console.log("Operator selected:", op);
  currentDisplay.innerText += " " + op + " ";
}

function calculate() {
  try {
    // basic eval for demo purposes
    let expression = currentDisplay.innerText
      .replace("×", "*")
      .replace("÷", "/");
    currentDisplay.innerText = eval(expression);
  } catch {
    currentDisplay.innerText = "Error";
  }
}
