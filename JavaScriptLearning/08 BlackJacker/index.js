let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message=""
let questionEl = document.getElementById("question")
let cardEl = document.getElementById("card")
let sumEl = document.querySelector("#sum")

let player = {
    name: "Zephyr",
    chips: 145 
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + " $" + player.chips

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
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
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
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        sumEl.textContent = sum
        renderGame()
    }
}


