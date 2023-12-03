// Codes Begin on Line 43

// NOTES FOR MYSELF - Table of Content

// 'DOMContentLoaded' - The event is for all content to be loaded and function is to grab the output display and create initial variables for display. Allows code to run immediately after initial HTML structure is loaded. This allows all other elements below to be manipulated. Prevents errors and does not run prematurely. Also does not need stylesheets to be present to function. (*line 40*). 

// First Part - Initializing Variables and Creating a updateOutput function - Used in later parts of the code to change and manipulate the calculator (*see lines 40-49*). 

// querySelector = This is how to grab elements from HTML and Manipulate and change in JavaScript

// null = Is used as a default value - Calculator set with initial values of 'null' so later on when functions are created and clicked, calculator can display Arithmetic Operations (Number input, Operation input, and Calculation Output).

// .textContent - 

// parseFloat() (data type manipulation) - converts strings to numbers in the calculator. This allows accuracy in the Arithmetic calculations in the calculator. At the first part currentInput is set to the string of '0'. parseFloat() will change to accurate numbers for calculator. *line 52*

// FUNCTIONS - CREATING RULES/DEFINITIONS/UNDERSTANDING FOR THE CALCULATOR TO FUNCTION FOR EACH BUTTON THAT IS CLICKED.

// 1. updateOutput() *line 47* - Output for the display. Everytime this function is used the display gets updated. When input changes this function updates calculator display. (see lines 57,86,103) for this being used after the function is created. 

// 2. handleNumberClick(value) *line 41* - Input when a number is clicked

// 3. handleOperatorClick(op) *line 52* - Defines Operators Selected 

// 4. performCalculation() *line 64* - Defining each operation (+ , - , * , /) This connects to the 3rd function. 

// 5. handleEqualClick () *line 83* - Triggers Calculation. Once Calculation is complete the operator and the last input resets to null. This means the calculations can continue using current answer.

// 6. clearCalculator() *line 94* - Clears Calculator. Resets Value to display zero when clicked on clear. 

// EVENT LISTENERS - Connecting Buttons to Functions that work when 'clicked' on. 

// 1. handleNumberClick - Number Button (Function created in *line 31* , Button Clickability (handleNumberClick EventListner) begins *line 81*)

// 2. handleOperatorClick - Operator Button (Function for Operator  created in *line 42* , Button Clickability (handleOperatorClick EventListner) begins *line 93* )

// 3. handleEqualClick - Calculation Button (Function Created - *line 71* , Button Clickability (handleEqualClick) *line 106*)

// 4. clearCalculator - Clear Button (Function Created - *line 80* , Button Clickability (clearCalculator) *line 109*)



// First Part ('DOMContentLoaded' function) - Grabbing Display Element and Setting Initial values for Calculator display. This first  EventListener initiates the other EventListners and their functions to work with the display outputs. (*line 3*)
document.addEventListener('DOMContentLoaded', function() {
    const output = document.querySelector('.output');
    // This is the initial state of the calculator. 
    let currentInput = '0'; // Initial Value on display is set to 0
    let operator = null;
    let previousInput = null;
  
    function updateOutput() {
      output.textContent = currentInput;
    }
  
    function handleNumberClick(value) {
      if (currentInput === '0' && value !== '00') {
        currentInput = value;
      } else {
        currentInput += value;
      }
      updateOutput();
    }
  
    function handleOperatorClick(op) {
      if (operator !== null) {
        performCalculation();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '0';
    }
    
    // Each Operations (+ , - , * , /) Function is defined here. This connects with handleOperatorClick function.

    // parseFloat() - refer to *line 9* for understanding
    function performCalculation() {
      const prev = parseFloat(previousInput);
      const current = parseFloat(currentInput);
  
      if (operator === '+') {
        currentInput = prev + current;
      } else if (operator === '-') {
        currentInput = prev - current;
      } else if (operator === 'x') {
        currentInput = prev * current;
      } else if (operator === '÷') {
        currentInput = prev / current;
      }
  
      updateOutput();
    }
    
    // Equal Button Operates based on the Functionality (definitions) of the Operators (Addition, Subtraction, Multiplication, Division) defined in *line 51*
    function handleEqualClick() {
      if (operator !== null) {
        // Functionality is in *line 52*
        performCalculation();
        operator = null;
        previousInput = null;
      }
    }
  
    function clearCalculator() {
      currentInput = '0';
      operator = null;
      previousInput = null;
      updateOutput();
    }
    
    // EVENT LISTENERS - NUMBER BUTTON , OPERATOR BUTTON, EQUAL BUTTON, CLEAR BUTTON

    // Event listeners for number buttons
    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach(button => {
      button.addEventListener('click', function() {
        handleNumberClick(button.value);
      });
    });
  
    // Event listeners for operator buttons

    // document.querySelectorAll('.operator') grabs the classes of operators(+ , - . * , /) that is in the HTML. Then each one of those buttons are given the functionality of the operators that was defined in the functions created above in *line 52* through *line 78* . After That The funtionality has to be connected to the Clickability. Finally What the button does has to be updated on display (*line 39*). This is all because I have the operators defined as classes in the HTML therefore it had to be manipulated in JS. 

    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
      button.addEventListener('click', function() {
        handleOperatorClick(button.textContent);
      });
    });
  
    // Event listener for equal button
    document.getElementById('equalButton').addEventListener('click', handleEqualClick);
  
    // Event listener for clear button
    document.getElementById('clearButton').addEventListener('click', clearCalculator);
  });
  

// -----------------------  END OF CALCULATOR  --------------------------


// ------------------------   SCRAP WORK   ------------------------------

// // First we connected all buttons from HTML. 
// let buttons = document.querySelectorAll('button');
// let displayOutput = document.querySelector('.output');
// // let operators = document.getElementsByClassName('operator')


// // Functions
// // .forEach brings over every button. after doing that we created an event using .addEventListner and putting click event. Then begin the function using Arrow function method. 
// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//         displayOutput.innerText = button.value
// })});


// function displayButtons(buttons){
//     displayOutput.innerText = buttons
// }