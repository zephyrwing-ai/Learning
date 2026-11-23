let firstCard = 10
let secondCard = 6

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message=""
let questionEl = document.getElementById("question")
let cardEl = document.getElementById("card")
let sumEl = document.getElementById("sum")

function startGame() {
    if (sum < 21) {
        message="Do you want to draw a new card? 🙂"
    }else if (sum === 21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    }else {
        message="You're out of the game! 😭"
        isAlive = false;
    }
    cardEl.textContent = "Cards: " + firstCard + "  " + secondCard;
    sumEl.textContent = "sum: " + sum
    questionEl.textContent = message
};



