let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let currentScoreH = 0;
let currentScoreG = 0;
let score = document.getElementsByClassName("score")

function initial(){
  currentScoreH = 0;
  currentScoreG = 0;
  homeScore.textContent = currentScoreH;
  guestScore.textContent = currentScoreG;
}

function homePlus1(){
    currentScoreH += 1;
    homeScore.textContent = currentScoreH;
}

function homePlus2(){
    currentScoreH += 2;
    homeScore.textContent = currentScoreH;
}

function homePlus3(){
    currentScoreH += 3;
    homeScore.textContent = currentScoreH;
}


function guestPlus1(){
    currentScoreG += 1;
    guestScore.textContent = currentScoreG;
}

function guestPlus2(){
    currentScoreG += 2;
    guestScore.textContent = currentScoreG;
}

function guestPlus3(){
    currentScoreG += 3;
    guestScore.textContent = currentScoreG;
}


