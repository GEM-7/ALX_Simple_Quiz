// --- 1. Arithmetic Functions ---

/**
 * Adds two numbers.
 */
function add(number1, number2) {
    return number1 + number2;
}

/**
 * Subtracts the second number from the first.
 */
function subtract(number1, number2) {
    return number1 - number2;
}

/**
 * Multiplies two numbers.
 */
function multiply(number1, number2) {
    return number1 * number2;
}

/**
 * Divides the first number by the second. Includes a check for division by zero.
 */
function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero!";
    }
    return number1 / number2;
}

// --- 2. Input and Display Helper Function ---

/**
 * Retrieves and converts input values, runs the calculation, and displays the result.
 * @param {function} operationFunction The arithmetic function (add, subtract, etc.) to run.
 */
function performCalculation(operationFunction) {
    // Retrieve input values from the DOM
    const input1 = document.getElementById('number1').value;
    const input2 = document.getElementById('number2').value;
    
    // Convert inputs to floating-point numbers.
    // Use || 0 to provide a default value of 0 if the input is empty or invalid (NaN).
    const number1 = parseFloat(input1) || 0;
    const number2 = parseFloat(input2) || 0;
    
    // Execute the chosen arithmetic function
    const result = operationFunction(number1, number2);
    
    // Display the result in the dedicated span element
    document.getElementById('calculation-result').textContent = result;
}

// --- 3. Attach Event Listeners ---

// Addition Listener
document.getElementById('add').addEventListener('click', function() {
    // When clicked, call the helper function, passing the 'add' function as an argument.
    performCalculation(add);
});

// Subtraction Listener
document.getElementById('subtract').addEventListener('click', function() {
    performCalculation(subtract);
});

// Multiplication Listener
document.getElementById('multiply').addEventListener('click', function() {
    performCalculation(multiply);
});

// Division Listener
document.getElementById('divide').addEventListener('click', function() {
    performCalculation(divide);
});