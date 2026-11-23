let firstCard = 10
let secondCard = 6

let sum = firstCard + secondCard
let hasBlackJack = false

if (sum < 21) {
    console.log("Do you want to draw a new card? 🙂");
}else if (sum === 21){
    console.log("Wohoo! You've got Blackjack! 🥳");
    hasBlackJack = true;
}else {
    console.log("You're out of the game! 😭");
}

