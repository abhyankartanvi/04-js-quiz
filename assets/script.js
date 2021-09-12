// variables to be used
let timeEl = document.querySelector("p.time");
let timeLeft = 75;
let questionCount = 0;
var startBtn = document.querySelector("#start");
let intro = document.querySelector(".introduction");
var ques = document.querySelector("#questions");
let questionEl = document.querySelector("#question");
let option1 = document.querySelector("#answer1");
let option2 = document.querySelector("#answer2");
let option3 = document.querySelector("#answer3");
let option4 = document.querySelector("#answer4");

// list of questions - create an array of objects
var questionsList = [
  {
    // question 1
    question: "Commonly used data types do NOT include",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctOption: "3",
  },
  // question 2
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    options: [
      "1. quotes",
      "2. curly brackets",
      "3. parentheses",
      "4. square brackets",
    ],
    correctOption: "3",
  },
  // question 3
  {
    question: "Arrays in Javascript can be used to store ____.",
    options: [
      "1. Numbers and Strings",
      "2. Other Arrays",
      "3. Booleans",
      "4. All of the above",
    ],
    correctOption: "4",
  },
  // question 4
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    options: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parantheses"],
    correctOption: "4",
  },
  // question 5
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is",
    options: ["1. Javascript", "2. Terminal", "3. for loops", "4.console.log"],
    correctOption: "4",
  },
];

// set timer interval and invoke it when start is clicked. Timer to reduce and stop if the seconds left is 0 or total questions have been exhausted
function timerDisplay() {
  let timerInterval = setInterval(function () {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft === 0 || questionCount === questionsList.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//function to be invoked when start button is clicked. Change display to display the questions and hide the introduction content
//we want to invoke question and options functions as well
function startQuiz() {
  intro.style.display = "none";
  ques.style.display = "block";
  questionCount = 0;

  timerDisplay();
  displayQuestion(questionCount);
}

function displayQuestion(id) {
  if (id < questionsList.length) {
    questionEl.textContent = questionsList[id].question;
    option1.textContent = questionsList[id].options[0];
    option2.textContent = questionsList[id].options[1];
    option3.textContent = questionsList[id].options[2];
    option4.textContent = questionsList[id].options[3];
  }
}

// event listener for start button
startBtn.addEventListener("click", startQuiz);
