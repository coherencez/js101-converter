function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var submitButton = document.getElementById("convert"),
		clearButton = document.getElementById("clear"),
		celsiusRadioSelector = document.getElementById("celsius"),
    farenheightRadioSelector = document.getElementById("farenheight"),
    userInput = document.getElementById("userInput"),
    conversionResult = document.getElementById("jsOutput");


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter);