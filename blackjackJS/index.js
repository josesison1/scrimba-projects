let player = {
    name: "Johnny",
    chips: 3000
}

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el') 
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')
let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ": $" + player.chips


const getRandomCard = () => {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

const startGame = () => {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

const renderGame = () => {
    cardsEl.textContent = "Cards: " 
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
}

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = 'Do you want to draw another card ' + player.name + '?'
    } else if (sum === 21) {
        message = 'You won ' + player.name + '!!!'
        hasBlackjack = true
    } else {
        message = 'You lost. Try again ' + player.name + "."
        isAlive = false
    }    
    messageEl.textContent = message
}

const newCard = () => {
    if(isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}


