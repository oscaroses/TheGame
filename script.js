//Query Selectors
var timeEl = document.querySelector(".timer");
var mainEl = document.querySelector("main");

var secondsLeft = 60;

const trivia = [
    {
    question: "What is JavaScript?",
    answers: ["A programming language", "A coffee drink", "A videogame", "A computer"],
    correctAnswer: 0
    },
    {
    question: "What does DOM stand for?",
    answers: ["Display of Monitor", "Document Object Model", "Department of Machines", "Delivery of Modal"],
    correctAnswer: 1
    },
    {
    question: "Which file type do you link the .JS file to?",
    answers: [".html", ".css", ".jpg", ".com"],
    correctAnswer: 0
    },
    {
    question: "How do you declare an array?",
    answers: ["{}", "()", "<>", "[]"],
    correctAnswer: 3
    }
]

// When start button is clicked, display first question
function startGame() {
   
}

function checkanswer () {

}

function listenForAnswer() {

}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--
        timeEl.textContent = "Time:" + secondsLeft

        if (secondsLeft <= 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

function updateDisplay() {

}