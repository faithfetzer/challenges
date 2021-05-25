document.getElementById('play-now').onclick = guessingGame;

function guessingGame(){
let randomNum = Math.floor(Math.random() * 10) + 1;

    for(let guess = 1; guess<=3; guess++){
    let numberEntered = prompt("Please enter a number 1-10:");
    guessCount= "Guess #" + guess;
    let value = parseInt(numberEntered);
    if(value < 1 || value === NaN || value > 10) {
        alert(("That is not a valid entry. Please try again. Guess # " + guess + " of 3"))
      } else if(value === randomNum) {
          alert("You win!")
          break;
      } else if(value < randomNum){
        alert("Too Low! Guess # " + guess + " of 3")
      } else if(value > randomNum){
        alert("Too High! Guess # " + guess + " of 3");
      }
    if (guess === 3) {alert("You lose, try again?")
    }
}

};