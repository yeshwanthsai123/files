let x = Math.random()*100;
let y = Math.round(x);
let useranswer = document.getElementById("userInput");


function checkGuess(){
let inputted = parseInt(userInput.value);
if (inputted === y) {
  gameResult.textContent = "You got it!"
  } else if (inputted > y) {
    gameResult.textContent = "Too high!"
    } else if (inputted < y) {
      gameResult.textContent = "Too low!"
      }
}
