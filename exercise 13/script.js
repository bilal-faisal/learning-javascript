var input = document.querySelector('input');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var score = 15;
var highScore = 0;
var guessValue;
var randomNumber = generateRandomNum();

function displayMsg(message) {
  document.getElementById('status').innerText = message;
}
function displayGuessVal(message) {
  document.getElementById('guess').innerText = message;
}
function displayHighscoreVal(message) {
  document.getElementById('highScore').innerText = message;
}
function setBgColor(message) {
  document.querySelector('body').style.backgroundColor = message;
}
function inputBoxVisibility(message) {
  document.querySelector('input').style.visibility = message;
}
function secondBtnDisplay(message) {
  document.getElementById('btn2').style.display = message;
}
function displayScoreVal(message) {
  document.getElementById('score').innerText = message;
}
function generateRandomNum() {
  return Math.floor(Math.random() * 20 + 1);
}

btn2.addEventListener('click', function () {
  if (!input.value) {
    displayMsg('⛔ No number entered');
  } else {
    guessValue = Number(input.value);
    if (guessValue < 21 && guessValue > 0) {
      if (guessValue === randomNumber) {
        displayGuessVal(guessValue);
        displayMsg('🎉 Correct Guess');
        setBgColor('#ABD5BA');
        secondBtnDisplay('none');
        inputBoxVisibility('hidden');
        if (score > highScore) {
          highScore = score;
        }
        displayHighscoreVal(highScore);
      } else {
        if (guessValue > randomNumber + 5) {
          displayMsg('📈 Too High !');
        } else if (guessValue < randomNumber - 5) {
          displayMsg('📉 Too Low !');
        } else if (guessValue < randomNumber) {
          displayMsg('📊 Try a little bit Higher');
        } else if (guessValue > randomNumber) {
          displayMsg('📊 Try a little bit Lower');
        }

        score--;
        displayScoreVal(score);
        if (score === 0) {
          displayMsg("🙁 You've lost the game");
          secondBtnDisplay('none');
          inputBoxVisibility('hidden');
        }
      }
    } else {
      displayMsg('Guess between 1 and 20');
    }
  }
});

btn1.addEventListener('click', function () {
  score = 15;
  randomNumber = generateRandomNum();
  setBgColor('#89abe3ff');
  displayGuessVal('❓');
  displayMsg('😃 Start Guessing ...');
  secondBtnDisplay('block');
  inputBoxVisibility('inherit');
  displayScoreVal(score);
});
