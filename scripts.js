const questions = [
  {
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false},
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the largest country in the world?",
    answers: [
      { text: "China", correct: false },
      { text: "US", correct: true },
      { text: "Bangladesh", correct: false },
      { text: "France", correct: false },
    ],
  },
];

const questionElements = document.getElementById('question');
const answerBtn = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionElement = 0;
let score = 0;

const startQuiz = () => {
    currentQuestionElement = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

const showQuestion = () => {
    resetState();
    let currentQuestion = questions[currentQuestionElement];
    let questionNo = currentQuestionElement + 1;
    questionElements.innerHTML = `${questionNo}. ${currentQuestion.question}`
    
    currentQuestion.answers.forEach(element => {
        const button = document.createElement('button');
        button.innerHTML = element.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);

        if(element.correct){
            button.dataset.correct = element.correct;
        }

        button.addEventListener('click', selectAnswer);
    });

}

const resetState = () => {
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

const selectAnswer = (e) =>{
    const selectedBtn = e.target;
    // console.log(selectedBtn)
    const isCorrect = selectedBtn.dataset.correct === "true";
    // console.log(isCorrect)
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    // console.log(Array.from(answerBtn.children))
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block"
}

startQuiz();
