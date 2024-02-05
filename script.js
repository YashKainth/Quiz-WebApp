const question = [
  {
    question: "Which is largest animal in the World?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Whale",
        correct: true,
      },
      {
        text: "Ant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which is largest animal in the World?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Whale",
        correct: true,
      },
      {
        text: "Ant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which is largest animal in the World?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Whale",
        correct: true,
      },
      {
        text: "Ant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
  {
    question: "Which is largest animal in the World?",
    answers: [
      {
        text: "Shark",
        correct: false,
      },
      {
        text: "Whale",
        correct: true,
      },
      {
        text: "Ant",
        correct: false,
      },
      {
        text: "Giraffe",
        correct: false,
      },
    ],
  },
];

const questionElement = document.getElementById("ques");
const answerButton = document.getElementById("ans-button");
const nextButton = document.getElementById("next-btn");

let currentQuesIndex = 0;
let score = 0;
function start() {
  currentQuesIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQues();
}

function showQues() {
  resetState();
  let currentQues = question[currentQuesIndex];
  let quesno = currentQuesIndex + 1;
  questionElement.innerHTML = quesno + "." + currentQues.question;

  currentQues.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selected = e.target;
  const iscorrect = selected.dataset.correct === "true";
  if (iscorrect) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuesIndex++;
  if (currentQuesIndex < question.length) {
    showQues();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuesIndex < question.length) {
    handleNextButton();
  } else {
    start();
  }
});

start();
