// Using the following parameters and starter code to create a calculator.

// Add click handlers to the number buttons
// Create an array of the numbers clicked, in order
// Add click handlers to the calculation buttons
// Create an array of the operators
// Don't let a user start with an operator
// Don't let a user type multiple operators (i.e. you can't type '--' or '++' or "*+")
// Add click handler to the 'equals' button
// The 'equals' button needs to trigger a few events (NOTE: These will be functions)
// Loop through the array of numbers (NOTE: These are currently strings)
// Convert the strings to integers
// Write a new array of integers
// Get an array of the operators
// Perform each math operation (NOTE: We'll use 4 while loops)
// Add click handler clearing the input on press of clear

'use strict';
function addTogether(firstNumb, secondNumb){
    return firstNumb + secondNumb;
}

function subtractTogether(firstNumb, secondNumb){
    return firstNumb - secondNumb;
}

function multiplyTogether(firstNumb, secondNumb){
    return firstNumb * secondNumb;
}

function divideTogether(firstNumb, secondNumb){
    return firstNumb / secondNumb;
}

function getResults(array){
    let newString = '';
    let operatorArray = [];
    let numberArray = [];
    for (let index = 0; index < array.length; index++){
        if(array[index] == "+" || array[index] == "-" || array[index] == "*" || array[index] == "*"){
            operatorArray.push(array[index]);
            numberArray.push(Number(newString));
            newString = '';
        }else {
            newString += array[index];
        }
    }
    numberArray.push(Number(newString));

    let mathStuff = 0;

    // do the actual math operations
    for (let opIndex = 0; opIndex < operatorArray.length; opIndex++){
        switch (operatorArray[opIndex]) {
            case "+":
                if (opIndex === 0){
                    mathStuff = addTogether(numberArray[opIndex], numberArray[opIndex + 1]);
                }else{
                    mathStuff = addTogether(mathStuff, numberArray[opIndex + 1]);
                }
                break;
            case "-":
                if (opIndex === 0){
                    mathStuff = subtractTogether(numberArray[opIndex], numberArray[opIndex + 1]);
                }else{
                    mathStuff = subtractTogether(mathStuff, numberArray[opIndex + 1]);
                }        
                break;
            case "*":
                if (opIndex === 0){
                    mathStuff = multiplyTogether(numberArray[opIndex], numberArray[opIndex + 1]);
                }else{
                    mathStuff = multiplyTogether(mathStuff, numberArray[opIndex + 1]);
                }
                break;
            case "/":
                if (opIndex === 0){
                    mathStuff = divideTogether(numberArray[opIndex], numberArray[opIndex + 1]);
                }else{
                    mathStuff = divideTogether(mathStuff, numberArray[opIndex + 1]);
                }
                break;
        }
    }
    return mathStuff;

}


const input = document.querySelector('#input'), // input/output button
 numbers = document.querySelectorAll('.numbers div'), // number buttons
 operators = document.querySelectorAll('.operators div'), // operator buttons
 result = document.querySelector('#result'), // equal button
 clear = document.querySelector('#clear'); // clear button


let resultDisplayed = false; // flag to keep an eye on what output is displayed
let captureNumbersEntered = [];


document.addEventListener('click', function(e){
    
    if(e.target.getAttribute('class') == "op"){
        if (captureNumbersEntered.length === 0){
            alert('Cant start with an operator!');
        }else if (captureNumbersEntered[captureNumbersEntered.length - 1] == "+" || captureNumbersEntered[captureNumbersEntered.length - 1] == "-" || captureNumbersEntered[captureNumbersEntered.length - 1] == "*" || captureNumbersEntered[captureNumbersEntered.length - 1] == "*"){
           alert('Previous entry was an operator!');
        }else{
            captureNumbersEntered.push(e.target.innerHTML);
            input.innerHTML = e.target.innerHTML;
        }
    }else if(e.target.getAttribute('class') == "equal"){
        // logic to add everything up
        let newResult = getResults(captureNumbersEntered);
        input.innerHTML = newResult;
        captureNumbersEntered = [];
        captureNumbersEntered.push(newResult.toString());
        console.log(captureNumbersEntered);
    }else if(e.target.getAttribute('id') == "clear"){
        captureNumbersEntered = [];
        input.innerHTML = '';
    }else if(e.target.getAttribute('class') == "numb"){
        captureNumbersEntered.push(e.target.innerHTML);
        if (input.innerHTML == "+" || input.innerHTML == "-" || input.innerHTML == "*" || input.innerHTML == "*"){
            input.innerHTML = '';
            input.innerHTML = e.target.innerHTML;
        }else{
            input.innerHTML += e.target.innerHTML;
        }
    }
  })