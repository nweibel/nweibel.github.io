const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
//const loader = document.getElementById("loader");
//const game = document.getElementById("game");

let themeNb = window.location.search.slice(1);
let themes_tab=["types de base","types construits","traitement de données en tables","interactions entre l'homme et la machine sur le Web","architectures matérielles et systèmes d'exploitation","langages et programmation","algorithmique"];
let themeSelected = themes_tab[parseInt(themeNb-1)];

let currentQuestion = {};
let acceptingAnswers=false ;
let score = 0; 
let questionCounter = 0; 
let availableQuestions = [];

let questions = []; 
//let fichier = `questionstest${themeNb}.json`;
let fichier = `questions${themeNb}.json`;

fetch(fichier)
  .then(res => {
    return res.json();
  })
  .then(loadedQuestions => {
    questions = loadedQuestions;
   
    startGame();
  })
  .catch(err => {
    console.error(err);
  });


//Constantes

const CORRECT_BONUS = 3;
const INCORRECT_BONUS = -1; 
const MAX_QUESTIONS = 10;

startGame=() =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
  //  game.classList.remove("hidden");
  // loader.classList.add("hidden");
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
      localStorage.setItem('mostRecentScore', score);
      localStorage.setItem('mostRecentTheme', themeSelected);
      //go to the end page
      return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}` ;

    //Update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;
  
    choices.forEach(choice => {
      const number = choice.dataset["number"];
      choice.innerHTML = currentQuestion["reponse" + number];
    });
  
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};
  
choices.forEach(choice => {
    choice.addEventListener("click", e => {
      if (!acceptingAnswers) return;
  
      acceptingAnswers = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.dataset["number"];
      //console.log("choix :" +selectedAnswer);
      //console.log("rep :" +currentQuestion.answer);

      const classToApply = 
      selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect' ;

      if(classToApply === 'correct'){
          incrementScore(CORRECT_BONUS);
      }
      if(classToApply === 'incorrect'){
        incrementScore(INCORRECT_BONUS);
    }
      selectedChoice.parentElement.classList.add(classToApply);
      
      setTimeout( () =>{
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
      }, 1000)
    });
});

incrementScore = num =>{
    score += num ;
    scoreText.innerText=score ;
};


