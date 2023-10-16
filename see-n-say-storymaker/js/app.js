// Assignment 1 | COMP1073 Client-Side JavaScript
// Brad Buttineau 100078616
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = '';
let speakButton = document.querySelector('#speakBtn');
let debug = document.querySelector('#debug');

//made variables//
let purpleBtn = document.getElementById("purpleBtn");
let blueBtn = document.querySelector('#blueBtn');
let greenBtn = document.querySelector('#greenBtn');
let orangeBtn = document.querySelector('#orangeBtn');
let pinkBtn = document.querySelector('#pinkBtn');
let randStory = document.querySelector('#randStory');
let resetStory = document.querySelector('#reset');



//to speak
let purpleString = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"]; // 0
let blueString = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"]; // 1
let greenString = ["a funny", "a scary", " a goofy", " a slimy", "a barking", "a fat"]; // 2
let orangeString = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"]; // 3
let pinkString = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"]; //var
let text = ["", "", "", "", ""];
let textIndex = [-1, -1, -1, -1, -1];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	const utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}



/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
purpleBtn.addEventListener('click', function () {
	buttonEventListener(0, purpleString);
});

blueBtn.addEventListener('click', function () {
	buttonEventListener(1, blueString);
});

greenBtn.addEventListener('click', function () {
	buttonEventListener(2, greenString);
});

orangeBtn.addEventListener('click', function () {
	buttonEventListener(3, orangeString);
});

pinkBtn.addEventListener('click', function () {
	buttonEventListener(4, pinkString);
});

function buttonEventListener(index, string) {
	// checks if its the first time clicking a button
	if (textIndex[index] == -1) {
		textIndex[index] = 0;
	}

	// set text to array index and say it aloud
	text[index] = string[textIndex[index]];
	speakNow(text[index]);

	// see if next array element exists, if yes then add 1 if not then reset back to 0
	if (textIndex[index] + 1 === string.length) {
		textIndex[index] = 0;
	} else {
		textIndex[index]++;
	}

	debug.innerHTML = text.toString();
}


randStory.addEventListener('click', function () {
	speakNow();
})
// random story functions
function getRandomStory() {

	return (
		purpleString[Math.floor(Math.random() * purpleString.length)] +
		" " +
		blueString[Math.floor(Math.random() * blueString.length)] +
		" " +
		greenString[Math.floor(Math.random() * greenString.length)] +
		" " +
		orangeString[Math.floor(Math.random() * orangeString.length)] +
		" " +
		pinkString[Math.floor(Math.random() * pinkString.length)] +
		"."
	);
}


resetStory.addEventListener('click', function () {
	text = ["", "", "", "", ""];
	textIndex = [-1, -1, -1, -1, -1];
	debug.innerHTML = text.toString();

});