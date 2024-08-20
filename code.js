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