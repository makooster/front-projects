let currentInput = ''; // Holds the current input being typed
let operator = '';      // Stores the chosen operator
let num1 = null;        // First number for operation
let num2 = null;        // Second number for operation

// Select all number buttons
let numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        currentInput += button.textContent; // Append the clicked number to currentInput
        document.querySelector('#display').textContent = currentInput; // Update the display
    });
});

// Select all operator buttons
let operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (currentInput !== '') { // Only store the operator if there's a number entered
            if (num1 === null) {
                num1 = parseFloat(currentInput); // Store the first number
            }
            operator = button.textContent;  // Store the operator
            currentInput = ''; // Clear the input for the next number
        }

        // Handle specific operator actions (like clear and equal)
        if (button.id === 'clear') {
            currentInput = '';
            num1 = null;
            num2 = null;
            operator = '';
            document.querySelector('#display').textContent = '0'; // Reset display
        }

        if (button.id === 'equal') {
            if (currentInput !== '' && num1 !== null && operator !== '') {
                num2 = parseFloat(currentInput); // Store the second number

                let result;
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
                    case '/':
                        if (num2 !== 0) {
                            result = num1 / num2;
                        } else {
                            result = "Cannot divide by zero!";
                        }
                        break;
                    default:
                        result = "Invalid operator!";
                }

                // Update the display with the result
                document.querySelector('#display').textContent = result;

                // Reset for next calculation
                currentInput = ''; // Clear the input after result
                num1 = null;       // Reset num1 for next calculation
                num2 = null;       // Reset num2
                operator = '';     // Reset operator
            }
        }
    });
});
