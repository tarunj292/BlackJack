let player = {
    name: "Guest",
    chips: 100,
    // sayHello: function(){
    //     console.log("Heisann!")
    // } this is a method -> Function attached to object calling syntax ---> player.sayHello()
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")//document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1; // Generates a random number between 1 and 13
    switch (randomNumber) {
        case 1:
            return 11; // Ace
        case 11:
        case 12:
        case 13:
            return 10; // Jack, Queen, King
        default:
            return randomNumber;
    }
}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length; i++){
        cardsEl.textContent += (cards[i] + " ")
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    console.log(message)
    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackJack){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}