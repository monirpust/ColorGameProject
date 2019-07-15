//The Greaty RGB color Game. Let's make it!!!
var numSquares = 6
var colors = generateRandomColor(numSquares)
var restString = " none repeat scroll 0% 0%"
var squares = document.querySelectorAll(".square")
var pickedColor = pickColor()//for generating random color
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset")
var easyBtn = document.querySelector("#easyBtn")
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected")
	easyBtn.classList.add("selected")
	numSquares = 3
	colors = generateRandomColor(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i]
		}

		else{
			squares[i].style.display = "none"
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected")
	hardBtn.classList.add("selected")
	numSquares = 6
	colors = generateRandomColor(numSquares)
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor

	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i]
			squares[i].style.display = "block"
	}
})

resetButton.addEventListener("click", function(){
	//generate all new colors
	messageDisplay.textContent = ""
	this.textContent = "New Colors"
	colors = generateRandomColor(numSquares)
	//pick a new random color from array
	pickedColor = pickColor()
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.background = colors[i]
	}
	//reset h1 background color
	h1.style.background = "steelblue"
})

colorDisplay.textContent = pickedColor

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i]

	//add click listeners to squares
	squares[i].addEventListener("click", function(){

		//grab color of clicked listener
		grabColor = this.style.background
		//alert(grabColor)
		console.log(grabColor,pickedColor.concat(restString))

		//compare color to picked color
		if(grabColor === pickedColor.concat(restString) ){
			//alert("Congrats!!!")
			messageDisplay.textContent = "Correct!"
			resetButton.textContent = "Play Again!"
			changeColors(grabColor)
			//change h1 background to grabColor
			h1.style.background = grabColor
		}
		else{
			this.style.background = "#232323"
			//alert("Try Again!")
			messageDisplay.textContent = "Try Again"
		}
	})
}

function changeColors(color){
	//loop through all squres
	for(var i = 0; i < squares.length; i++){
		//change color to match given color
		squares[i].style.background = color
	}
}

function pickColor(){
	var random = Math.floor(Math.random()* colors.length)
	return(colors[random])
}

function generateRandomColor(num){
	//make an array
	var arr = []
	//add n random colors to array
	for(var i = 0; i< num; i++){
		//get random color and push into array
		arr.push(randomColor())

	}
	//return that array
	return arr;
}

function randomColor(){
	//pick "red" from 0 to 255
	var r = Math.floor(Math.random()*256)
	//pick "green" from 0 to 255
	var g = Math.floor(Math.random()*256)
	//pick "blue" from 0 to 255
	var b = Math.floor(Math.random()*256)
	//rgb=(r, g, b)
	return "rgb("+ r + ", " + g + ", " + b + ")"
}