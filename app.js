const mots = [
    "voir",
    "cote",
    "terminal",
    "victime",
    "flaque",
    "sentir",
    "machine",
    "pause",
    "lire",
    "croquis",
    "couple",
    "morse",
    "voila",
    "courage",
    "avec"
]
var input = document.querySelector('input')
var screen = document.querySelector('.screen')
var hidden = document.querySelector('.mot-caché')
var button = document.querySelector('button')
let showEssai = document.querySelector('.nmbreEssai')
let smiley = document.querySelector('#smiley')
var hiddenWord = []
var alreadyGiven = []
let toShow = ""
const toGuess = once()
function once() {
    var random = Math.floor(Math.random() * mots.length)
    var wordToGuess = mots[random]
    var toGuess = [...wordToGuess]
    for (let i = 0; i < toGuess.length; i++) {
        hiddenWord.push("*")
        hidden.textContent += hiddenWord[i]
    }
    return toGuess
}
function loseGame() {
    hidden.textContent = toGuess.toString().replace(/,/g, "")
    screen.textContent = "Perdu !"
    screen.style = "color: red;"
    smiley.src = "https://cdn-0.emojis.wiki/emoji-pics/facebook/pensive-face-facebook.png"
}
function winGame() {
    hidden.textContent = toGuess.toString().replace(/,/g, "")
    screen.textContent = "Gagné !"
    screen.style = "color: green;"
    smiley.src = "https://emojis.wiki/emoji-pics/apple/grinning-face-with-big-eyes-apple.png"
}

let essai = ((1*toGuess.length)+2)
let bonneReponse = 0
showEssai.textContent = essai
let splitWord = hidden.textContent.split('')
button.addEventListener('click', function() {
    if (bonneReponse != toGuess.length) {
        if (essai > 0) {
            toShow = ""
            if (toGuess.includes(input.value)) {
                for (let i = 0; i < toGuess.length; i++) {
                        if (input.value == toGuess[i] && !alreadyGiven.includes(input.value)) {
                            splitWord[i] = input.value
                            bonneReponse += 1
                            alreadyGiven.push(input.value)
                        }
                        toShow += splitWord[i]
                        hidden.textContent = toShow
                }
            showEssai.textContent = essai
            }
            else {
                essai -= 1
                showEssai.textContent = essai
            }
        }
        if (essai <= 0) {
            loseGame()
        }
    } else {
        winGame()
    }
})