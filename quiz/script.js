const questions = [
  {
    question: "Koja je glavna prijestolnica Francuske?",
    answers: {
      a: "London",
      b: "Pariz",
      c: "Berlin"
    },
    correctAnswer: "b"
  },
  {
    question: "Koja je najviša planina na svijetu?",
    answers: {
      a: "Everest",
      b: "Kilimanjaro",
      c: "Mont Blanc"
    },
    correctAnswer: "a"
  },
  {
    question: "Koje godine je počeo Drugi svjetski rat?",
    answers: {
      a: "1939",
      b: "1941",
      c: "1945"
    },
    correctAnswer: "a"
  },
  {
    question: "Koji je najduži rijeka u svijetu?",
    answers: {
      a: "Nil",
      b: "Amazona",
      c: "Misisipi"
    },
    correctAnswer: "a"
  },
  {
    question: "Koja je najveća država na svijetu po površini?",
    answers: {
      a: "SAD",
      b: "Rusija",
      c: "Kina"
    },
    correctAnswer: "b"
  },
  {
    question: "Koja je glavna valuta Japana?",
    answers: {
      a: "Jen",
      b: "Dolar",
      c: "Euro"
    },
    correctAnswer: "a"
  },
  {
    question: "Tko je autor knjige 'Rat i mir'?",
    answers: {
      a: "Charles Dickens",
      b: "Leo Tolstoy",
      c: "Fyodor Dostoevsky"
    },
    correctAnswer: "b"
  },
  {
    question: "Koja je najveća životinja na kopnu?",
    answers: {
      a: "Slon",
      b: "Plavi kit",
      c: "Zlatni retriver"
    },
    correctAnswer: "b"
  },
  {
    question: "Koja je najveća pustinja na svijetu?",
    answers: {
      a: "Sahara",
      b: "Gobi",
      c: "Atacama"
    },
    correctAnswer: "a"
  },
  {
    question: "Koja je najbrža životinja na svijetu?",
    answers: {
      a: "Sokol",
      b: "Gepard",
      c: "Zec"
    },
    correctAnswer: "b"
  }
];

const quizContainer = document.getElementById('question-container');
const submitButton = document.getElementById('submit-btn');
const restartButton = document.getElementById('restart-btn');
const resultContainer = document.getElementById('result');

function buildQuiz() {
  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionDiv.innerHTML = `<div class="question-number">Pitanje ${index + 1}:</div>
                             <div class="question-text">${question.question}</div>`;
    
    for (const [key, value] of Object.entries(question.answers)) {
      questionDiv.innerHTML += `<label>
                                  <input type="radio" name="question${index}" value="${key}">
                                  ${value}
                                </label>`;
    }
    
    quizContainer.appendChild(questionDiv);
  });
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll('.question');
  let score = 0;

  questions.forEach((question, index) => {
    const answerContainer = answerContainers[index];
    const selector = `input[name=question${index}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === question.correctAnswer) {
      score++;
    }
  });

  resultContainer.textContent = `Broj točnih odgovora: ${score} od ${questions.length}`;
  restartButton.style.display = 'block';
}

function resetQuiz() {
  const answerContainers = quizContainer.querySelectorAll('input[type=radio]:checked');
  
  answerContainers.forEach(container => {
    container.checked = false;
  });
  
  resultContainer.textContent = '';
  restartButton.style.display = 'none';
}

buildQuiz();

submitButton.addEventListener('click', showResults);
restartButton.addEventListener('click', resetQuiz);