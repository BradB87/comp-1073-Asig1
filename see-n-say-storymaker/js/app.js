// Assignment 1 | COMP1073 Client-Side JavaScript
alert("It works")
/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');

//made variables//
var purpleBtn = document.getElementById('purpleBtn');
var blueBtn = document.getElementById('blueBtn');
var greenBtn = document.getElementById('greenBtn');
var orangeBtn = document.getElementById('orangeBtn');
var pinkBtn = document.getElementById('pinkBtn');
var randStory = document.getElementById('randStory');



//to speak
 purpleBtn = new SpeechSynthesisUtterance(" The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat");
window.speechSynthesis.speak(purpleBtn);

blueBtn = new SpeechSynthesisUtterance("sat on", "ate", "danced with", "saw", "doesn't like", "kissed");
window.speechSynthesis.speak(blueBtn);

 greenBtn = new SpeechSynthesisUtterance("a funny", "a scary", " a goofy", " a slimy", "a barking", "a fat");
window.speechSynthesis.speak(greenBtn);

orangeBtn = new SpeechSynthesisUtterance(" goat", "monkey", "fish", "cow", "frog", "bug", "worm");
window.speechSynthesis.speak(orangeBtn);
pinkBtn = new SpeechSynthesisUtterance(" On the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes");
window.speechSynthesis.speak(pinkBtn);


//var randStory = new speechSynthesis("randStory.random");
//window.speechSynthesis.speak(randStory);





/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	utterThis = new SpeechSynthesis.text(string);

	//code here//
	function purple() {
		utterThis = new SpeechSynthesisUtterance(purpleBtn);
		utterThis = new speechSynthesis.text(purpleBtn, value);
	}
	function blue() {
		utterThis = new SpeechSynthesisUtterance(blueBtn);
		utterThis = new speechSynthesis.text(blueBtn, value);
	}
	function green() {
		utterThis = new SpeechSynthesisUtterance(greenBtn);
		utterThis = new speechSynthesis.text(greenBtn, value);
	}
	function orange() {
		utterThis = new SpeechSynthesisUtterance(orangeBtn);
		utterThis = new speechSynthesis.text(orangeBtn, value);
	}
	function ButtonPink() {
		utterThis = new SpeechSynthesisUtterance(pinkBtn);
		utterThis = new speechSynthesis.text(pinkBtn, value);
	}
	function randomStory(){
		random.random
		if(randStory.onclick = random.randomStory){
		utterThis = new speechSynthesis(string);
	
		}
	}




	//Actually speak the text
	// utterThis.pitch(pitch.value);
	// utterThis.rate(rate.value);
	
	synth.speak(utterThis);
}



/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {

	//new button event listeners//

	speakButton.onclick= purple.addEventListener('click', () => {
		textToSpeak(purpleBtn.value)
	});
	document.getElementById("blueBtn").addEventListener('click', () => {
		textToSpeak(blueBtn.value)
	});
	document.getElementById("greenBtn").addEventListener('click', () => {
		textToSpeak(greenBtn.value)
	});
	document.getElementById("orangeBtn").addEventListener('click', () => {
		textToSpeak(orangeBtn.value)
	});
	document.getElementById("pinkBtn").addEventListener('click', () => {
		textToSpeak(pinkBtn.value)
	});
	//document.getElementById("randStory").addEventListener('click' () =>{
		//textToSpeak(randStory.value);
	//});


	// default: speech recognition rules//
	// utterThis.onpause =(button) => {
		// const char = Event.utterance.text.charAt(button.charIndex);
		// console.log(
			// `speech paused at character ${button,charIndex} of "${button.utterance.text}", which is "${','}". `
		// );
		// };
	// 
	//when clicked//
	purpleBtn.onclick(textToSpeak);
	blueBtn.onclick(textToSpeak);
	greenBtn.onclick(textToSpeak);
	orangeBtn.onclick(textToSpeak);
	pinkBtn.onclick(textToSpeak);




	{
		speakNow(textToSpeak);

	}
}

