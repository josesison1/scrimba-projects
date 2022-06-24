let num1 = 10
let num2 = 5

document.getElementById('num1-el').innerHTML = num1
document.getElementById('num2-el').innerHTML = num2

let sumEl = document.getElementById('sum-el')

const add = () => {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

const subtract = () => {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

const divide = () => {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

const multiply = () => {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}