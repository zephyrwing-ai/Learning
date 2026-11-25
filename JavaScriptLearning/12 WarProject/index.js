let deckId


document.getElementById("btn-el").addEventListener("click", handleClick)


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