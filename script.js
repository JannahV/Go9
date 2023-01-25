let timerDiv = document.getElementById("Timer");
let startBtn = document.getElementById("Start_Quiz");
let quizDiv = document.getElementById("Quiz");
let question = document.getElementById("Question");
let quiztime = 50;
let questionnumber = 0;

let quizQuestions = [
  {
    question: "What is HTML?",
    options: [
      "Hyper_Markup_Label",
      "Hippity_Mippity_Lippity",
      "Howels_Moving_Lasso",
      "Happy_Marking_Luck",
    ],
    answer: "Hyper_Markup_Label",
  },
  {
    question: "What does var mean?",
    options: ["Vegetable", "Victory", "Variable", "Vikings"],
    answer: "Variable",
  },
  {
    question: "Is CSS important?",
    options: ["Yes", "No", "Maybe", "Depends"],
    answer: "Yes",
  },
  {
    question: "What is Github?",
    options: [
      "A_free_platform_to_save/produce_your_own_code",
      "A_nerdy_version_of_Discord",
      "A_free_flash_game_for_kids",
      "A_digital_dictionary_for_code",
    ],
    answer: "A_free_platform_to_save/produce_your_own_code",
  },
  {
    question: "Is this Coding Bootcamp easy?",
    options: ["Choice_A", "Choice_B", "Choice_C", "Choice_D"],
    answer: "Choice_D",
  },
];

function startTimer() {
  let displayTime = setInterval(function () {
    if (quiztime > -1) {
      timerDiv.innerHTML = `Time left is : ${quiztime}`;
      quiztime--;
    } else {
      clearInterval(displayTime);
    }
  }, 1000);
}

function startQuiz() {
  document.getElementById("Start_Button").style.display = "none";
  let currentQuestion = quizQuestions[questionnumber];
  let h2El = document.createElement("h2");
  h2El.innerHTML = currentQuestion.question;
  let btn = document.createElement("button");
  quizDiv.append(h2El);
}

var score = 0;

for (var i = 0; i < question.length; i++) {
  var response = question[i].innerHTML;
  if (response == question[i].answer) {
    score++;
    alert("Correct!");
  } else {
    alert("Wrong :(");
  }
}
alert("You got" + score + "/" + question.length);

function init() {
  startTimer();
  startQuiz();
}

startBtn.addEventListener("click", init);
