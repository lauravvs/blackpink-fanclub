const quizQuestions = [
  {
    question: "What do you prefer, cold or hot?",
    answers: ["Cold", "Hot"],
    correctAnswer: "cold",
  },
  {
    question: "What do you prefer, music or dance?",
    answers: ["Music", "Dance"],
    correctAnswer: "music",
  },
  {
    question: "What do you prefer, parties or chill?",
    answers: ["Parties", "Chill"],
    correctAnswer: "chill",
  },
  {
    question: "What do you prefer, videogames or movies?",
    answers: ["Videogames", "Movies"],
    correctAnswer: "movies",
  },
];

function submitQuiz() {
  let quizForm = document.getElementById("quizForm");
  let quizResult = document.getElementById("quizResult");
  let score = 0;
  let pink = "";

  if (quizForm.question1.value == "hot") {
    score++;
  }
  if (quizForm.question2.value == "music") {
    score++;
  }
  if (quizForm.question3.value == "chill") {
    score++;
  }
  if (quizForm.question4.value == "movies") {
    score++;
  }

  if (score == 4) {
    pink = "Jennie";
  } else if (score == 3) {
    pink = "Lisa";
  } else if (score == 2) {
    pink = "Rose";
  } else {
    pink = "Jisoo";
  }
  quizResult.innerHTML = "Your score is " + score + " Your pink is: " + pink;
}
