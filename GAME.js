let gameSeq = [];
let userSeq = [];
let btns = ["blue", "green", "red", "yellow"];

let starter = false;
let level = -1;
let highScore = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (starter == false) {
    // console.log("started");
    starter = true;
    levelUp();
  }
});
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function () {
  if (starter==false) {
    starter = true;
    levelUp();
  }
});

let high_score = document.getElementById("Score");

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let randIdx = Math.floor(Math.random() * btns.length);
  let randclr = btns[randIdx];
  let randBtn = document.querySelector(`.${randclr}`);

  if (level > highScore) {
    highScore = level;
    high_score.textContent = `Your High Score: ${highScore}`;
  }

  gameSeq.push(randclr);
  console.log("game seql", gameSeq);
  gameFlash(randBtn);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 500);
  // userSeq.push(userclr)
  // console.log(userSeq)
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `"Game over !!! <b>your SCORE :${level}</b><br/>
       Press any key to start"`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    //  alert("GAME OVER");
    reset();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);

  userclr = btn.getAttribute("id");

  userSeq.push(userclr);
  //   console.log("user seql",userSeq)
  //   console.log(userSeq)

  checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  level = 0;
  userSeq = [];
  gameSeq = [];
  starter = false;
}
function getCurrentYear() {
  return new Date().getFullYear();
}
// Function to update the element content with the current year
function updateCurrentYear() {
  const currentYearElement = document.getElementById("currentYear");
  currentYearElement.textContent = getCurrentYear();
}

// Call the function once the page has loaded to set the current year
document.addEventListener("DOMContentLoaded", updateCurrentYear);
