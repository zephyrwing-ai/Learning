let deckId

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

document.getElementById("btn-el").addEventListener("click", handleClick)
document.getElementById("draw-cards").addEventListener("click", function(){
    if(deckId){
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data),
            document.getElementById("imgs").innerHTML += 
            `<img src = "${data.cards[0].image}">
            <img src = "${data.cards[1].image}">
            `
        })
    }
})