const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const finalTheme = document.getElementById("finalTheme");
let mostRecentScore = localStorage.getItem("mostRecentScore");
let mostRecentTheme = localStorage.getItem("mostRecentTheme");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 7;
if(mostRecentScore<0){
  mostRecentScore=0;
}
finalScore.innerText = `Score : ${mostRecentScore}`;
finalTheme.innerText = `Thème : ${mostRecentTheme}`;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    theme: mostRecentTheme,
    name: username.value
  
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
