function palindrome() {
    let answer = prompt("Please enter a word:", "Radar");
    checkPalindrome(answer);
}

function checkPalindrome (str) {
    return str == str.split("").reverse().join("");
  }

function updateText() {
    document.getElementById("heading").innerHTML = ""
    document.getElementById("meme").src = "stonks.png"
}

function playCraps() {
    var die1 = Math.floor(Math.random() * 6);
    var die2 = Math.floor(Math.random() * 6);
    var sum = die1 + die2;
    var result = ""

    if (sum == 7 || sum == 11) {
        result = "You Lose!"
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        result = "You Won!"
    }
    else {
        result = "You pushed!"
    }

    document.getElementById("results").innerText = die1 + ", " + die2;
    document.getElementById("output").innerText = result;
}