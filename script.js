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
var hof = document.querySelector(".hof");
var resBut = document.getElementById("restart");

//This function loads the inital question in the container div and inputs.
function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  questionEl.textContent = questionIndex + 1 + "." + q.question;
  opt1.textContent = q.option1;
  opt2.textContent = q.option2;
  opt3.textContent = q.option3;
  opt4.textContent = q.option4;
}

//This function loads more questions, adds points to score, deducts time if questions are wrong. Also changes next button to finish button on final question.
function loadNextQuestion() {
  var selectedOption = document.querySelector("input[type = radio]:checked");
  //If no answer is selected, this conditional statement will prevent you from moving forward.
  if (!selectedOption) {
    alert("Please Select An Answer!");
    return;
  }
  //Score increases when you select correct answer.
  var answer = selectedOption.value;
  if (questions[currentQuestion].answer == answer) {
    score += 15;
    //Time decreases when you select wrong answer.
  } else {
    selectedOption.checked = false;
    secondsLeft = secondsLeft - 10;
  }
  //Next question is loaded here, on final question, next button is set to display finish to end quiz.
  currentQuestion++;
  if (currentQuestion == totQuestions - 1) {
    nextButton.textContent = "Finish";
  }
  gameOver();
}

//This function ends the game. Main container is hidden and final score + input controls are displayed.
function gameOver() {
  if (currentQuestion == totQuestions || secondsLeft <= 1) {
    container.style.display = "none";
    resultCont.style.display = "";
    resultCont.textContent = "Final Score:" + score;
    inputName.style.display = "";
    timeEl.style.display = "none";
    subBut.style.display = "";
    scoreCon.style.display = "";
    hof.style.display = "";
    resBut.style.display = "";
    return;
  } else {
    loadQuestion(currentQuestion);
  }
}

//This function sets the timer.
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time:" + secondsLeft;

    if (secondsLeft <= 1) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//This button starts the game. Set to not diplay once clicked.
startBut.addEventListener("click", function () {
  loadQuestion(currentQuestion);
  setTime();
  startBut.style.display = "none";
});

//This function stores the name entered in the input field.
addEventListener("keyup", function () {
  finalName = document.getElementById("name").value;
});

hallofFame = [];

//This function stores name from previous function + user score in an array.
subBut.addEventListener("click", function (event) {
  event.preventDefault();
  var scoresArr = {
    name: finalName,
    score: score,
  };
  //This stores the top 5 scores in order in local storage.
  hallofFame.push(scoresArr);
  hallofFame.sort(function (a, b) {
    return b.score - a.score;
  });

  hallofFame.splice(5);

  localStorage.setItem("FinalScore", JSON.stringify(hallofFame));
  displayHigh();
});

//This displays the scores stored in previous function.
function displayHigh() {
  hof.innerText = "";
  var finalScore = JSON.parse(localStorage.getItem("FinalScore"));
  console.log(finalScore);

  for (i = 0; i < finalScore.length; i++) {
    var dispScore = document.createElement("p");
    dispScore.innerHTML = finalScore[i].name + " " + finalScore[i].score;
    hof.appendChild(dispScore);
  }
}

//This button resets the game.
resBut.addEventListener("click", function (event) {
  event.preventDefault;
  currentQuestion = 0;
  score = 0;
  secondsLeft = 60;
  nextButton.textContent = "Next";
  resultCont.style.display = "none";
  scoreCon.style.display = "none";
  container.style.display = "";
  timeEl.style.display = "";
  loadQuestion(currentQuestion);
});
