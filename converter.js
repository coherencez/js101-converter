// Grab all necessary elements off the page

var convertButton = document.getElementById("convert"),
		clearButton = document.getElementById("clear"),
		celsiusRadioSelector = document.getElementById("celsius"),
    fahrenheitRadioSelector = document.getElementById("fahrenheit"),
    userInput = document.getElementById("userInput"),
    messageOutput = document.getElementById("jsMessageOutput");
    conversionResult = document.getElementById("jsConversionOutput");

// Functions to convert the temp. Takes argument from user input, converts, builds up an HTML 
// string and sets CSS styles for <section>

var convertedF = function toFahrenheit (n) {
	var num =  Math.floor(((n * (9/5)) + 32)), htmlString = '<p>';
		htmlString += num;
		htmlString += '</p>';
		if (num > 90) {
			messageOutput.style.color = "rgba(255, 31, 43, 1.0)";
	} else if (num < 32) {
		messageOutput.style.color = "rgba(25, 210, 255, 1.0)";
	} else {
		messageOutput.style.color= "rgba(0, 221, 1, 1.0)";
	}
		messageOutput.style.background = "rgba(255,255,255, .8)";
		messageOutput.style.border = "5px ridge rgba(255, 255, 255, 1.0)";
		messageOutput.innerHTML = htmlString;
}

var convertedC = function toCelsius (n) {
	var num =  Math.floor((n - 32) * (5/9)), htmlString = '<p>';
		htmlString += num;
		htmlString += '</p>';
		if (num > 32) {
			messageOutput.style.color = "rgba(255, 31, 43, 1.0)";
	} else if (num < 0) {
		messageOutput.style.color = "rgba(25, 210, 255, 1.0)";
	} else {
		messageOutput.style.color= "rgba(0, 221, 1, 1.0)";
	}
		messageOutput.style.background = "rgba(255,255,255, .8)";
		messageOutput.style.border = "5px ridge rgba(255, 255, 255, 1.0)";
		messageOutput.innerHTML = htmlString;
	}



	// Determine which radio button is selected and run the appropriate function

function determineConverter () {
	if (fahrenheitRadioSelector.checked) {
  console.log("fahrenheit selected, converting now...");
		convertedF(userInput.value);
	} else if (celsiusRadioSelector.checked){
		console.log("Celsius selected, converting now...");
		convertedC(userInput.value);
	}
}

// Assign the determineConverter function to be executed when the convert button is clicked
convertButton.addEventListener('click', determineConverter);
userInput.addEventListener('keydown', function (e) {
    var key = e.which ||  e.keyCode;
    if (key === 13) { // 13 is enter
      // code for enter
      console.log("We just converted with the 'enter' key");
      determineConverter();
    }	
});

// clear all fields and start fresh

function clearFields () {
	fahrenheitRadioSelector.checked = false;
	celsiusRadioSelector.checked = false;
	userInput.value = '';
	messageOutput.innerHTML = '';
	messageOutput.style.background = '';
	messageOutput.style.border = '';

	// conversionResult.innerHTML = '';
	console.log("All fields have been reset!");
}

// Assign the clear fields function to the clear button

clearButton.addEventListener("click", clearFields);

