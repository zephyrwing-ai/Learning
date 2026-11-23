let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message=""
let questionEl = document.getElementById("question")
let cardEl = document.getElementById("card")
let sumEl = document.querySelector("#sum")

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber >10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    sumEl.textContent = "sum: " + sum
    for (let i = 0; i < cards.length; i+=1) {
        cardEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message="Do you want to draw a new card? 🙂"
    }else if (sum === 21){
        message="Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true;
    }else {
        message="You're out of the game! 😭"
        isAlive = false;
    }

    questionEl.textContent = message
};


function newCard() {
    console.log("Drawing a new card from the deck!")
    let card = getRandomCard()
    cards.push(card)
    sum += card
    sumEl.textContent = sum
    renderGame()
}


