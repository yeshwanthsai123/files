let x = Math.random()*100;
let y = Math.round(x);
let useranswer = document.getElementById("userInput");
function checkGuess(){
if (parseInt(userInput.value) === y) {
  gameResult.textContent = "You got it!"
  } else if (parseInt(userInput.value) > y) {
    gameResult.textContent = "Too high!"
    } else if (parseInt(userInput.value) < y) {
      gameResult.textContent = "Too low!"
      }
}
