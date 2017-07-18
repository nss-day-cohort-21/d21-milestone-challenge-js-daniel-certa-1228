console.log( "main.js" );

function checkNumField(number) { 
	if (number == 0) {
		return false;
	}  else {
		return true;
	}

}

function checkCharField(character) { 
	if (character === "") {
		return false;
	}  else {
		return true;
	}
}

//gets the number from the number field
function getNumber() {
	let userNumber = document.getElementById("tree_number").value;
	if (checkNumField(userNumber)){
		userNumber = Number(userNumber);
		console.log( "userNumber", userNumber );
		return userNumber
	} else  {
		alert("Both fields must be filled");
	}
}
//gets the character from the charater field
function getCharacter() {
	let userCharacter = document.getElementById("tree_character").value;
	if (checkCharField(userCharacter)) {
		userCharacter = userCharacter.toString();
		console.log( "userCharacter", userCharacter );
		return userCharacter
	} else {
		alert("Both fields must be filled");
	}

}



//get grow button from the DOM
let growButton = document.getElementById('grow-btn');

//event handler to make grow button work
growButton.addEventListener("click", function(click){
	click.preventDefault();
	console.log( "clickhandler working!" );

// define the tree object and fill with the appropriate data
let treeObject = {};
let userHeight = getNumber();
let userCharacter = getCharacter();
treeObject[0] = { "height" : userHeight , "character" : userCharacter }
console.log( "treeObject", treeObject );
});

//event handler to make return key work
let userNumberField = document.getElementById("tree_number");
userNumberField.addEventListener("keyup", function(event){
	if (event.which === 13) {
		console.log( "return listener on NUMBER field WORKING" );
	}
});

//event handler to make return key work
let userCharacterField = document.getElementById("tree_character");
userCharacterField.addEventListener("keyup", function(event){
	if (event.which === 13) {
		console.log( "return listener on CHARACTER field WORKING" );
	}
});

// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
// It accepts a single object as an argument. The object should have two key/value pairs.

// A key that specifies the height of the pine tree.
// The value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// A key that specifies which character to use to build the pine tree.
// The character to use should be from user input in a <input type="text"> field in the DOM.
// Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 7, and use the asterisk character.

//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************