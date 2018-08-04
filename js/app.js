ole.log('Hello world');

// Starts the game on click
function startGame() {

	for (var i = 1; i <= 9; i = i + 1) {
		clearCell(i);
	}

	// decides turn on a .5 chance to be x or o
	document.turn = "X";
	if (Math.random() < 0.5) {
		document.turn = "O";
	}
	document.winner = null;
	setMessage(document.turn + " gets to start.");
}

// Function to change the msg in the html document 
function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

// Move turn function
function nextMove(cell) {
	if(document.winner != null) {
		setMessage(document.winner + " already won the game.");
	} else if (cell.innerText == "") {
		cell.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("That cell is full.")
	}
}

// Switch turn function
function switchTurn() {
	if (checkForWin(document.turn)) {
		setMessage("Congrats, " + document.turn + "! You win!");
		document.winner = document.turn;
	} else if (document.turn == "X") {
		document.turn = "O";
		setMessage("It's " + document.turn + "'s turn!");
	} else {
		document.turn = "X";
		setMessage("It's " + document.turn + "'s turn!");
	}
}

// Checking cells in a row for a win after the last move
function checkForWin(move) {
	var result = false;
	if (checkCell(1, 2, 3, move) || 
		checkCell(4, 5, 6, move) || 
		checkCell(7, 8, 9, move) ||
		checkCell(1, 4, 7, move) ||
		checkCell(2, 5, 8, move) ||
		checkCell(3, 6, 9, move) ||
		checkCell(1, 5, 9, move) ||
		checkCell(3, 5, 7, move)) {

		result = true;
	}
	return result;
}

// Check win to be used in checkForWin function
function checkCell(a, b, c, move) {
	var result = false;
	if (getCell(a) == move && getCell(b) == move && getCell(c) == move) {
		result = true;
	}
	return result;
}

// Get cell 'c' and number
function getCell(number) {
	return document.getElementById("c" + number).innerText;
}

function clearCell(number) {
	document.getElementById("c" + number).innerText = "";
}