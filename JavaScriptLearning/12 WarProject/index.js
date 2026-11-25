let deckId
const cardsEl = document.getElementById("imgs")
const drawCards = document.getElementById("draw-cards")
const btnEl = document.getElementById("btn-el")
const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]

function handleClick () {
    let url = "https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/"
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        deckId = data.deck_id
    })
}

btnEl.addEventListener("click", handleClick)
drawCards.addEventListener("click", function(){
    if(deckId){
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let cardsEl = document.getElementById("imgs")
            for (const [index, child] of [...cardsEl.children].entries()) {
                child.innerHTML += `<img src = "${data.cards[index].image}" class="card">`
            }
        })
    }
})

function determineCardWinner (card1, card2) {
    const score1 = valueOptions[card1.value]
    const score2 = valueOptions[card2.value]
    const result = score1 > score2 ? "card1 wins!" : score1 < score2 ? "card2 wins!" : "It's a tie!"
    return console.log(result)
}