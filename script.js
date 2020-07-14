var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var secondsLeft = 60;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");
var inputName = document.getElementById("name");
var timeEl = document.getElementById("timer");
var startBut = document.querySelector(".button");
var subBut = document.querySelector(".myButton");
var scoreCon = document.getElementById("scoreC");

function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + "." + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type = radio]:checked");
  if (!selectedOption) {
    alert("Please Select An Answer!");
    return;
  }
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 15;
  } else {
    selectedOption.checked = false;
    secondsLeft = secondsLeft - 10;
  }
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  gameOver();
}

function gameOver() {
  if (currentQuestion == totQuestions || secondsLeft <= 0) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Your Score:" + score;
    inputName.style.display = "";
    timeEl.style.display = "none";
    subBut.style.display = "";
    scoreCon.style.display = "";
    return;
  } else {
    loadQuestion(currentQuestion);
  }
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

startBut.addEventListener("click", function () {
  loadQuestion(currentQuestion);
  setTime();
  startBut.style.display = "none";
});
