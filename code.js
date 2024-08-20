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