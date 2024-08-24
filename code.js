function updateText() {
    document.getElementById("heading").innerHTML = ""
    document.getElementById("meme").src = "stonks.png"
}

//Play Game Function
function playCraps() {
    //Roll the Dice
    var die1 = Math.floor(Math.random() * 6);
    var die2 = Math.floor(Math.random() * 6);
    //Add rolls together
    var sum = die1 + die2;
    var result = ""

    //Compare Values to determine result
    if (sum == 7 || sum == 11) {
        result = "You Lose!"
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        result = "You Won!"
    }
    else {
        result = "You pushed!"
    }

    //Set text for the rolls and the result of the game
    document.getElementById("results").innerText = die1 + ", " + die2;
    document.getElementById("output").innerText = result;
}

//Ask prompt when button is pressed
function checkWord() {
    let word = prompt("Please enter a word")

    checkPalindrome(word);
}

//Check if word is a palindrome
function checkPalindrome(str) {
    var re = /[\W_]/g;
    //replace symbols and capital letters
    var lowRegStr = str.toLowerCase().replace(re, '');
    //reverse the word
    var revWord = lowRegStr.split('').reverse().join('');

    //check if word is a palindrome by comparison
    if (lowRegStr == revWord) {
        let result = prompt("That is a palindrome! Would you like to enter another word?")
        checkPalindrome(result);
    }
    else {
        let result = prompt("That is not a palindrome. Please try another word.")
        checkPalindrome(result);
    }
}

//Form Submission
function submitForm() {
    //Get values of the form and set variables to them
    var firstName = document.getElementsByName("name1")[0].value;
    var lastName = document.getElementsByName("name2")[0].value;
    var zipcode = document.getElementsByName("zip")[0].value;

    //add variables together to form full name
    var fullName = firstName + " " + lastName;

    //Check if name is too long
    if (fullName.length > 20) {
        alert("That name is too long.");
    }
    //Check if Zip is valid
    if (zipcode.length > 5 || zipcode.length < 5) {
        alert("That is not a valid Zip Code.");
    }

    //If the form is valid, show the secret message
    if (fullName.length <= 20 && zipcode.length == 5) {
        alert("Congratulations! You found the secret mesasage! Which is: Don't share your personal information with places you don't trust.");
    }
}

//Set Interval variable
var moveInterval;

//Setup the Event
document.addEventListener("imageMove", function(event) {
    moveImage();
});

//Setup function to use Event
function triggerMove() {
    var event = new Event("imageMove");
    document.dispatchEvent(event);
}

//Function to randomly move the image around
function moveImage() {
    var image = document.getElementById("meme");

    var randX = Math.floor(Math.random() * (window.innerWidth - image.width));
    var randY = Math.floor(Math.random() * (window.innerHeight - image.height));

    image.style.left = randX + "px";
    image.style.top = randY + "px";
}

//Toggle the movement to start
function startMove() {
    // Check if the interval is already running
    if (!moveInterval) {
        moveInterval = setInterval(triggerMove, 1000); // Move every 1 second
    }
}

//Toggle the movement to stop
function stopMove() {
    // Stop the movement by clearing the interval
    clearInterval(moveInterval);
    moveInterval = null; // Reset the interval ID
}