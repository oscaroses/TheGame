//Query Selectors
var timeEl = document.querySelector(".timer");
var mainEl = document.querySelector("#main");
var startBut = document.querySelector("#button1");

var secondsLeft = 120;

const trivia = [
  {
    question: "What is JavaScript?",
    answers: [
      "A programming language",
      "A coffee drink",
      "A videogame",
      "A computer",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Display of Monitor",
      "Document Object Model",
      "Department of Machines",
      "Delivery of Modal",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which file type do you link the .JS file to?",
    answers: [".html", ".css", ".jpg", ".com"],
    correctAnswer: 0,
  },
  {
    question: "How do you declare an array?",
    answers: ["{}", "()", "<>", "[]"],
    correctAnswer: 3,
  },
];

// When start button is clicked, display first question
function startGame() {
  setTime();
  updateDisplay();
}

// populate another question, when answer is checked.
function checkanswer() {}

function listenForAnswer() {
  alert("hi");
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time:" + secondsLeft;

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//populate question in main div
function updateDisplay() {
  var quests = document.createElement("p");
  quests.textContent = trivia[0].question;
  trivia[0].answers.forEach((answer) => {
    var para = document.createElement("button");
    para.setAttribute("id", "buttons");
    para.textContent = answer;
    quests.appendChild(para);
  });
  mainEl.appendChild(quests);
}

startBut.addEventListener("click", function () {
  startGame();
});
