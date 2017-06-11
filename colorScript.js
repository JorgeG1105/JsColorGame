var numOfSquares = 6;
//List of random colors for us to apply to the 6 squares we made.
var colors = [];

//The color we have to guess which will be randomly picked
var pickedColor;

//Selecting our divs with class square from our html
var squares = document.querySelectorAll(".square");

//Selecting the span tag colorDisplay which will change to represent the random color we have to guess.
var colorDisplay = document.getElementById("colorDisplay");

//Selecting our message display
var messageDisplay = document.querySelector("#message");

//Selecting H1 so we can change its background color to match the picked color.
var h1 = document.querySelector("h1");

//Selecting our reset button
var resetButton = document.querySelector("#reset");

//Selecting our mode buttons
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();

	setUpSquares();

	reset();
}

function setUpSquares() {
	//looping through the squares variable and assigning each square a color.
	for(var i = 0; i < squares.length; i++){
		//Add Click listeners to squares
		squares[i].addEventListener("click",function(){
		//grab color of picked square.
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color.
		if(clickedColor === pickedColor) {
			
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
	}
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[1].classList.remove("selected");
		modeButtons[0].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
		reset();
		});
	}
}

function reset(){
	colors = generateRandomColors(numOfSquares);
	//Pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares on page.
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	//Set the background of that top div back to the blackish color.
	h1.style.backgroundColor = "steelblue";
}




resetButton.addEventListener("click",function(){
	reset();

})

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
	//Change each color to match given color

}

//Function that gives us a random whole number and returns that number from colors
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//Make an array
	var arr = [];
	//Repeat num times
	for(var i = 0; i < num; i++) {
		//get random color and oush intp array
		arr.push(randomColor());
	}
	//Return array.
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
