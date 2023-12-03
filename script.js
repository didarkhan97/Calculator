// Codes Begin on Line 43

// NOTES FOR MYSELF - Table of Content

// 'DOMContentLoaded' - The event is for all content to be loaded and function is to grab the output display and create initial variables for display. Allows code to run immediately after initial HTML structure is loaded. This allows all other elements below to be manipulated. Prevents errors and does not run prematurely. Also does not need stylesheets to be present to function. (line 49). 

// First Part - Initializing Variables and Creating a updateOutput() function. Used in later parts of the code to change and manipulate the calculator.(See lines 49-58). 

// querySelector = This is how to grab elements from HTML and Manipulate and Change in JavaScript. (See lines 50,118,129)

// null = Is used as a default value - Calculator set with initial values of 'null' so later on when functions are created and clicked, calculator can display Arithmetic Operations (Number input, Operation input, and Calculation Output). (See lines 53,54,70,100,103,104,110,111)

// .textContent - Treats content as plaintext. Includes all text content. Accurate in displaying text content. It is dynamic and visually appealing. 

// parseFloat() (data type manipulation) - converts strings to numbers in the calculator. This allows accuracy in the Arithmetic calculations in the calculator. At the first part currentInput is set to the string of '0'. parseFloat() will change to accurate numbers for calculator. (See lines 82,83)

// --------------------------- FUNCTIONS -------------------------------

// CREATING RULES/DEFINITIONS/UNDERSTANDING FOR THE CALCULATOR TO FUNCTION FOR EACH BUTTON THAT IS CLICKED. (See lines 49-113)

// 1. updateOutput() - Output for the display. Everytime this function is used the display gets updated. When input changes this function updates calculator display. (see lines 66,95,112) for this being used after the function is created. (function on line 56)

// 2. handleNumberClick(value) - Input when a number is clicked (line 60)

// 3. handleOperatorClick(op) - Defines Operators Selected (line 69)

// 4. performCalculation() - Defining each operation (+ , - , * , /) This connects to the 3rd function. (line 81)

// 5. handleEqualClick () - Triggers Calculation. Once Calculation is complete the operator and the last input resets to null. This means the calculations can continue using current answer.(line 99)

// 6. clearCalculator() - Clears Calculator. Resets Value to display zero when clicked on clear. (line 108) 

// ------------------------- EVENT LISTENERS --------------------------- 

// CONNECTING BUTTONS WITH FUNCTIONS THAT WORK WHEN 'CLICKED' ON. (See lines 115-143)

// 1. handleNumberClick - Number Button (Function created in *line 31* , Button Clickability (handleNumberClick EventListner) (line 117 )

// 2. handleOperatorClick - Operator Button (Function for Operator (line 69) , Button Clickability (handleOperatorClick EventListner) (line 127)

// 3. handleEqualClick - Calculation Button (Function Created (line 81) , Button Clickability (handleEqualClick) (line 137)

// 4. clearCalculator - Clear Button (Function Created (line 108) , Button Clickability (clearCalculator) (line 140)



// First Part ('DOMContentLoaded' function) - Grabbing Display Element and Setting Initial values for Calculator display. This first  EventListener initiates the other EventListners and their functions to work with the display outputs. (line 3)

document.addEventListener('DOMContentLoaded', function() {
    const output = document.querySelector('.output');
    // This is the initial state of the calculator. 
    let currentInput = '0'; // Initial Value on display is set to 0
    let operator = null; 
    let previousInput = null;
  
    function updateOutput() {
      output.textContent = currentInput; //(See line 13 for .textContent)
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

    // parseFloat() - refer to (line 15) for understanding
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
    
    // Equal Button Operates based on the Functionality (line 81) of the Operators (Addition, Subtraction, Multiplication, Division).
    function handleEqualClick() {
      if (operator !== null) {
        // Function is in *line 81*
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

    // Event listener for number buttons
    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach(button => {
      button.addEventListener('click', function() {
        handleNumberClick(button.value);
      });
    });
  
    // Event listener for operator buttons

    // document.querySelectorAll('.operator') grabs the classes of operators(+ , - . * , /) that is in the HTML. Then each one of those buttons are given the functionality of the operators that was defined in the functions created above in (line 69 to line 96) . After That The funtionality has to be connected to the Clickability. This is all because I have the operators defined as classes in the HTML therefore it had to be manipulated in JS. 

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