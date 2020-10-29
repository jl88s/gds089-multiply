// Create a function that calculates the user's input from two different input boxes.
function calcNumber() {
    // Grab the first value the user inputted and turn the STRING data into an INTEGER with praseInt.
    let getNum1 = parseInt(document.getElementById('number1').value);

    // Grab the second value the user inputted and turn the STRING data into an INTEGER with praseInt.
    let getNum2 = parseInt(document.getElementById('number2').value);

    // Multiply both of the user's inputs and store it into a variable.
    let answer = getNum1 * getNum2;

    // Grab the result input box to store the PRODUCT.
    document.getElementById("product").value = answer;

    // Return FALSE so the window will not refresh the page after clicking calculate.
    return false;
}

// Make a function that resets the all 3 of the input boxes.
function reset() {
    document.getElementById("number1").value = " ";
    document.getElementById("number2").value = " ";
    document.getElementById("product").value = " ";
}