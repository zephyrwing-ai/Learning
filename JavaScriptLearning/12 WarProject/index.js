let deckId
const cardsEl = document.getElementById("imgs")
const drawCards = document.getElementById("draw-cards")
const btnEl = document.getElementById("btn-el")
const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
const winnerEl = document.getElementById("winner-el")
const remainingCards = document.getElementById("remainingCard")
let computerScore = 0
let playerScore = 0
const cScoreEl = document.getElementById("cScore")
const mScoreEl = document.getElementById("mScore")

function handleClick () {
    let url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        remainingCards.textContent = `Remaining Cards: ${data.remaining}`
        console.log(data);
        deckId = data.deck_id
        drawCards.disabled = false;
    })
}

btnEl.addEventListener("click", handleClick)
drawCards.addEventListener("click", function(){
    if(deckId){
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            remainingCards.textContent = `Remaining Cards: ${data.remaining}`
            console.log(data)
            let cardsEl = document.getElementById("imgs")
            for (const [index, child] of [...cardsEl.children].entries()) {
                child.innerHTML = `<img src = "${data.cards[index].image}" class="card">`
            }
            const winnerText = determineCardWinner(data.cards[0],data.cards[1])
            winnerEl.textContent = winnerText

            if (data.remaining === 0) {
                drawCards.disabled = true;
                if (computerScore > playerScore) {
                    winnerEl.textContent =  "Final Winner: Computer!"
                } else if(computerScore < playerScore){
                    winnerEl.textContent =  "Final Winner: You!"
                } else {
                    winnerEl.textContent = "It's a tie game!"
                }
            }

        })
    }
})

function determineCardWinner (card1, card2) {
    const score1 = valueOptions.indexOf(card1.value)
    const score2 = valueOptions.indexOf(card2.value)
    if (score1 > score2) {
        computerScore += 1
        cScoreEl.textContent = "Computer Score: " + computerScore
        return "Card 1 wins!"
    } else if (score1 < score2) {
        playerScore += 1
        mScoreEl.textContent = "My Score: " + playerScore
        return "Card 2 wins!"
    } else {
        return "War!"
    }
}