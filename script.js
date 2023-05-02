// Get the coin and button elements
const coin = document.getElementById("coin");
const flipBtn = document.getElementById("flip-btn");

// Add click event listener to button
flipBtn.addEventListener("click", function() {
	// Generate a random number between 0 and 1
	const randomNum = Math.floor(Math.random() * 2);

	// Disable the button during the animation
	flipBtn.disabled = true;

	// Add a class to the coin to start the flipping animation
	coin.classList.add("flip");

	// After 0.5 seconds, change the coin image to the other side of the coin
	setTimeout(function() {
		if (randomNum === 0) {
			coin.style.backgroundImage = "url('../img/tanjiro.png')";
		} else {
			coin.style.backgroundImage = "url('../img/Akaza.jpeg')";
		}
	}, 500);

	// After 1 second (the duration of the animation), remove the class and set the coin background image based on the random number
	setTimeout(function() {
		coin.classList.remove("flip");
		if (randomNum === 0) {
			coin.style.backgroundImage = "url('../img/tanjiro.png')";
		} else {
			coin.style.backgroundImage = "url('../img/Akaza.jpeg')";
		}
		// Enable the button after the animation is complete
		flipBtn.disabled = false;
	}, 1000);
});

function playSound() {
	var audio = new Audio('../audio/coin-flip-sound.mp3');
	audio.play();
  }

  // tf

