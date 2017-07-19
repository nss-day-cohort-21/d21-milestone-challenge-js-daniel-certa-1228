console.log( "main.js" );

function checkNumField(number) { 
	if (number == 0) {
		return false;
	}  else {
		return true;
	}
};

function checkCharField(character) { 
	if (character === "") {
		return false;
	}  else {
		return true;
	}
};

//gets the number from the number field
function getNumber() {
	let userNumber = document.getElementById("tree_number").value;
	userNumber = Number(userNumber);
	// console.log( "userNumber", userNumber );
	return userNumber
};

//gets the character from the charater field
function getCharacter() {
	let userCharacter = document.getElementById("tree_character").value;
	userCharacter = userCharacter.toString();
	// console.log( "userCharacter", userCharacter );
	return userCharacter

};

// define the tree object and fill with the appropriate data
//throw an error when one or both of the fields aren't filled in
function fillTreeObject() {
	let treeObject = {};
	let userHeight = getNumber();
	let userCharacter = getCharacter();
	let numFieldFilled = checkNumField(userHeight);
	let charFieldFilled = checkCharField(userCharacter);

	if ( !numFieldFilled || !charFieldFilled ) {

		alert("Both fields MUST be filled.  You will obey.")

	}  else  {

		treeObject[0] = { "height" : userHeight , "character" : userCharacter }
		// console.log( "treeObject", treeObject );
		return treeObject;
	}
};
//main tree function
function tree(specs) {
	let height = specs[0].height;
	let character =  specs[0].character;
	// console.log( height, character );
	let treeSentence = "";
	let treeBranch = "";
	let space = " ";
	space = space.repeat(height);
	

	for (let i = 0; i<height; i++) {
		
		treeBranch += character;
		treeSentence = space + treeBranch
		console.log( treeSentence ); //this here is the money!!
		treeBranch += character;
		space = space.replace(' ','');
	}
};

//get grow button from the DOM
let growButton = document.getElementById('grow-btn');

//event handler to make grow button work
growButton.addEventListener("click", function(click){
	click.preventDefault();
	let treeSpecs = fillTreeObject();
	tree(treeSpecs);

});

//event handler to make return key work
let userNumberField = document.getElementById("tree_number");
userNumberField.addEventListener("keypress", function(event){
	if (event.which === 13) {
		
	}


});

//event handler to make return key work
let userCharacterField = document.getElementById("tree_character");
userCharacterField.addEventListener("keypress", function(event){
	if (event.which === 13) {

	}
});








// Create a tree function that should build a pine tree out of a character in the Chrome dev tools console.
// It accepts a single object as an argument. The object should have two key/value pairs.

// DONE -A key that specifies the height of the pine tree.
// DONE he value for the height of the tree should be from user input in a <input type="text"> field in the DOM.
// DONE -A key that specifies which character to use to build the pine tree.
// DONE -The character to use should be from user input in a <input type="text"> field in the DOM.
// DONE Once the user enters in a number, and a character, the user can either then just press the enter key (as long as the cursor is in one of the input fields), or click a button that is labeled "Grow your tree" and the tree should be shown in the console. This requires you to add an event listener to the button, as well as an event listener for the enter/return key.

// If either of the input fields does not have a value in it when the user presses the enter key, or presses the button, then display an alert stating that both fields must have a value.

// Grow your tree

// Example

// Here's what the pine tree should look like when you specify a height of 5, and use the asterisk character.

//       *      =  	1
//      ***  		1 + 2
//     *****		3 + 2
//    *******		5 + 2
//   *********
