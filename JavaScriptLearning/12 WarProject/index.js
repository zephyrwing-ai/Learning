let deckId
const cardsEl = document.getElementById("imgs")
const drawCards = document.getElementById("draw-cards")
const btnEl = document.getElementById("btn-el")

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