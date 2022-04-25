const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e){userChoice = e.target.id 
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
const randomNumber = Math.floor(Math.random() * 3) + 1

if(randomNumber === 1) {
    computerChoice= "rock"
}
if(randomNumber === 2) {
    computerChoice= "scissors"
}
if(randomNumber === 3) {
    computerChoice= "paper"
}
computerChoiceDisplay.innerHTML = computerChoice
}
function getResult() {
    if (computerChoice === userChoice) {
        result = "It's a Draw!"
    }
function getResult() {
     if (computerChoice === "rock" && userChoice === "paper") {
        result = "You Win!"
        }
function getResult() {
    if (computerChoice === "rock" && userChoice === "scissors") {
        result = "You Lose!"
            }
function getResult() {
    if (computerChoice === "paper" && userChoice === "scissors") {
        result = "You Win!"
                }
function getResult() {
    if (computerChoice === "paper" && userChoice === "rock") {
        result = "You Lose!"
                    }
function getResult() {
    if (computerChoice === "scissors" && userChoice === "rock") {
        result = "You Win!"
                        }
function getResult() {
    if (computerChoice === "scissors" && userChoice === "paper") {
        result = "You Lose!"
                            }