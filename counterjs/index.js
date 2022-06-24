
let count = 0

const increment = () => {
    document.getElementById('counter').innerHTML = count += 1
}

const decrement = () => {
    document.getElementById('counter').innerHTML = count -= 1
}

const save = () => {
    let countStr = count + " - "
    document.getElementById('save-el').textContent += countStr
    document.getElementById('counter').innerHTML = 0
    count = 0
} 



