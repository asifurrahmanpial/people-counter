let welcomeEl = document.getElementById('welcome-el')

let name = "Summoner"
let greeting = "Welcome back "

let myGreeting = greeting + name

welcomeEl.innerText = myGreeting

welcomeEl.innerText += '👋'

let countEl = document.getElementById("count-el")

let count = 0

function increment () {
    count += 1
    countEl.textContent = count
}
let saveEl = document.getElementById('save-el')

function save() {
    prev = count + " - "
    // .textContent is better than innerText in terms of human readibility
    saveEl.textContent += prev
    countEl.textContent = 0
    count = 0
}



