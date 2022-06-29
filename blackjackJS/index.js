let firstCard = 2
let secondCard = 8
let cards = [firstCard, secondCard]
let hasBlackjack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ''

let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

const startGame = () => {
    renderGame()
}

const renderGame = () => {
    cardsEl.textContent = "Cards: " + cards[0] + ' ' + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = 'Do you want to draw another card?'
    } else if (sum === 21) {
        message = 'You won!'
        hasBlackjack = true
    } else {
        message = 'You lost. Try again.'
        isAlive = false
    }    
    messageEl.textContent = message
}

const newCard = () => {
    console.log('Drawing a new card from deck.');
    let newCard = 9
    sum += newCard
    cards.push(newCard)
    renderGame()
}


for (let i=0; i <= cards.length; i++) {
    console.log(cards[i])
}