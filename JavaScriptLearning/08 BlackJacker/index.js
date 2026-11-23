let firstCard = 10
let secondCard = 6
let card = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message=""
let questionEl = document.getElementById("question")
let cardEl = document.getElementById("card")
let sumEl = document.querySelector("#sum")

function startGame() {
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message="Do you want to draw a new card? 🙂"
    }else if (sum === 21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    }else {
        message="You're out of the game! 😭"
        isAlive = false;
    }
    cardEl.textContent = "Cards: " + card[0] + "  " + card[1];
    sumEl.textContent = "sum: " + sum
    questionEl.textContent = message
};


function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = 10
    card.append(card)
    sum += card
    sumEl.textContent = sum
    renderGame()
}


