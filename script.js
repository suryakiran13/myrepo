const p1 = document.querySelector("#p1b");
const p2 = document.querySelector("#p2b");
const reset = document.querySelector("#reset");
const p1s = document.querySelector("#p1");
const p2s = document.querySelector("#p2");
const winS = document.querySelector("#ws");
let p1Score = 0,
  p2Score = 0,
  winningScore = 2;
let isGameOver = false;

const resetFunc = () => {
  isGameOver = false;
  p1Score = p2Score = 0;
  p1s.textContent = p1Score;
  p2s.textContent = p2Score;
  p1s.classList.remove("winner", "loser");
  p2s.classList.remove("winner", "loser");
};

winS.addEventListener("change", () => {
  winningScore = parseInt(winS.value);
  resetFunc();
});

const setScore = (score) => {
  if (!isGameOver) {
    score += 1;
    if (score === winningScore) isGameOver = true;
    return score;
  }
  return score;
};

p1.addEventListener("click", () => {
  p1Score = setScore(p1Score);
  if (p1Score === winningScore) {
    p1s.classList.add("winner");
    p2s.classList.add("loser");
  }
  p1s.textContent = p1Score;
});

p2.addEventListener("click", () => {
  p2Score = setScore(p2Score);
  if (p2Score === winningScore) {
    p2s.classList.add("winner");
    p1s.classList.add("loser");
  }
  p2s.textContent = p2Score;
});

reset.addEventListener("click", resetFunc);
