// Codes Begin on Line 43

// NOTES FOR MYSELF - Table of Content

// 'DOMContentLoaded' - The event is for all content to be loaded and function is to grab the output display and create initial variables for display. Allows code to run immediately after initial HTML structure is loaded. This allows all other elements below to be manipulated. Prevents errors and does not run prematurely. Also does not need stylesheets to be present to function.

// First Part - Initializing Variables and Creating a updateOutput() function. Used in later parts of the code to change and manipulate the calculator. 

// querySelector = This is how to grab elements from HTML and Manipulate and Change in JavaScript. 

// null = Is used as a default value - Calculator set with initial values of 'null' so later on when functions are created and clicked, calculator can display Arithmetic Operations (Number input, Operation input, and Calculation Output).

// .innerText - Inserting Text/Numbers in the display. Works because of the function made for updating display when operating on calculator.

// parseFloat() (data type manipulation) - converts strings to numbers in the calculator. This allows accuracy in the Arithmetic calculations in the calculator. At the first part currentInput is set to the string of '0'. parseFloat() will change to accurate numbers for calculator. (See lines 88,89)

// --------------------------- FUNCTIONS -------------------------------

// CREATING RULES/DEFINITIONS/UNDERSTANDING FOR THE CALCULATOR TO FUNCTION FOR EACH BUTTON THAT IS CLICKED. (See lines 49-113)

// 1. updateOutput() - Output for the display. Everytime this function is used the display gets updated. When input changes this function updates calculator display (see lines 72,101,118) for this being used after the function is created. (function on line 62)


// 2. handleNumberClick(value) - Input when a number is clicked 

//LOGIC OF FUNCTION: Allows for values from HTML to be used in calculator. This along with the eventlistener that is attached to the classes of 'numbers' in the HTML file allows for buttons to be clicked. The eventListner attaches the function created for value. 

// 3. handleOperatorClick(op) - Defines Operators Selected 

// LOGIC OF FUNCTION: 

// 4. performCalculation() - Defining each operation (+ , - , * , /) This connects to the 3rd function. (line 81)

// 5. handleEqualClick () - Triggers Calculation. Once Calculation is complete the operator and the last input resets to null. This means the calculations can continue using current answer.(line 99)

// 6. clearCalculator() - Clears Calculator. Resets Value to display zero when clicked on clear. (line 108) 

// ------------------------- EVENT LISTENERS --------------------------- 

// CONNECTING BUTTONS WITH FUNCTIONS THAT WORK WHEN 'CLICKED' ON. 

// 1. handleNumberClick - Number Button/Button Clickability (handleNumberClick EventListner) 

// 2. handleOperatorClick - Operator Button (Function for Operator (line 69) , Button Clickability (handleOperatorClick EventListner) (line 127)

// 3. handleEqualClick - Calculation Button (Function Created (line 81) , Button Clickability (handleEqualClick) (line 137)

// 4. clearCalculator - Clear Button (Function Created (line 108) , Button Clickability (clearCalculator) (line 140)



// First Part ('DOMContentLoaded' function) - Grabbing Display Element and Setting Initial values for Calculator display. This first  EventListener initiates the other EventListners and their functions to work with the display outputs. (line 3)


document.addEventListener('DOMContentLoaded', function() {
    const output = document.querySelector('.display'); 
    // This is the initial state of the calculator and the display.  
    let currentInput = '0'; // Initial Value is set to 0
    let operator = null;   // refer to line 11 to understand the use of null here
    let previousInput = null;  // refer to line 11 to understand the use of null here
  
    function updateOutput() { 
      output.innerText = currentInput;
    }
  
    function handleNumberClick(value) {   // go to line 131 to see eventListener
      if (currentInput === '0' && value !== '00') {
        currentInput = value;
      } else {
        currentInput += value;
      }
      updateOutput();
    }

    // Each Operations (+ , - , * , /) Function is defined here. This connects with handleOperatorClick function.

    // parseFloat() - refer to (line 15) for understanding

    function performCalculation() {  // go to line 145 for eventListener
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
  
    function handleOperatorClick(op) { // go to line 139 to see eventListener
      if (operator !== null) {
        performCalculation();
      }
      operator = op;
      previousInput = currentInput;
      currentInput = '0';
    }
    
    
    
    //This connects with handleOperatorClick function.

    // Equal Button Function Operates based on the Functionality/Rules (line 86) of the Operators (Addition, Subtraction, Multiplication, Division).
    function handleEqualClick() { // go to line 150 for eventListener
      if (operator !== null) {
        // Function is in *line 86*
        performCalculation();
        operator = null; // 
        previousInput = null;
      }
    }
    

    // This function basically erases the uses of past operators and numbers
    function clearCalculator() {  // go to line 153 for eventListner
      currentInput = '0';
      operator = null; // refer to line 11 to understand the use of null here
      previousInput = null; // refer to line 11 to understand the use of null here
      updateOutput(); 
    }
    

    // EVENT LISTENERS - NUMBER BUTTON , OPERATOR BUTTON, EQUAL BUTTON, CLEAR BUTTON

    // Event listener for number buttons - function on line 65
    const numberButtons = document.querySelectorAll('.number');
    numberButtons.forEach(button => {
      button.addEventListener('click', function() {
        handleNumberClick(button.value);
      });
    });
  
    // Event listener for operator buttons - function on line 96

    // document.querySelectorAll('.operator') grabs the classes of operators(+ , - . * , /) that is in the HTML. Then each one of those buttons are given the functionality of the operators that was defined in the functions created above in (line 75 to line 102) . After That The funtionality has to be connected to the Clickability. This is all because I have the operators defined as classes in the HTML therefore it had to be manipulated in JS. 

    const operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(button => {
      button.addEventListener('click', function() {
        handleOperatorClick(button.innerText);
      });
    });
  
    // Event listener for equal button - function on line 109
    document.getElementById('equalButton').addEventListener('click', handleEqualClick);
  
    // Event listener for clear button - function on line 121
    document.getElementById('clearButton').addEventListener('click', clearCalculator);
  });
  

// -----------------------  END OF CALCULATOR  --------------------------




// ------------------------   SCRAP WORK   ------------------------------



// // Functions
// // .forEach brings over every button. after doing that I created an event using .addEventListner and putting click event. Then begin the function using Arrow function method. This now connects the function and allows it to work when clicked on.
// buttons.forEach(button => {
//     button.addEventListener("click", (event) => {
//         displayOutput.innerText = button.value
// })});


// function displayButtons(buttons){
//     displayOutput.innerText = buttons
// }