/*# Guessing Game Challenge

Your employer, Electric Ants, has tasked you with developing the newest entry in their web-based Triple-A titles, "Guessing Game". The idea behind it is to have the computer randomly generate a number between 1 and 10, the user must enter a number in the box, click guess, and the computer checks if the answer is correct or not.
This game will revolutionize the web-based gaming industry, and could lead to further projects with Electric Ants!

`Reminder: read the goals and match a concept js to each goal`

## Goals

- A randomly generated number from 1 to 10
- An entry for the user to guess a number between 1 and 10
- A procedure to check whether the user's answer is correct
  - Answer is too high - show the message "Too High!" to the user.
  - Answer is too low - show the message "Too Low!" to the user.
- A guess count, so there is a win/lose condition
  - Electric Ants has recommended guesses are limited to 3
  - The user should see a message "You lose, try again?" when the user meets the limit of guesses.

## Hints
You will need to research the following concepts to help you with solving this assignment:
- `parseInt()`
- `prompt`
- `alert`
- `Math.floor()`
- `Math.random()`
*/
document.getElementById('play-now').onclick = guessingGame;

function guessingGame(){
let randomNum = Math.floor(Math.random() * 10) + 1;

    for(let guess = 1; guess<=3; guess++){
    let numberEntered = prompt("Please enter a number 1-10:");
    guessCount= "Guess #" + guess;
    let value = parseInt(numberEntered);
    if(value < 1 || value === NaN || value > 10) {
        alert("That is not a valid entry. Please try again" + "Guess # " + guess + " of 3")
      } else if(value === randomNum) {
          alert("You win!")
          break;
      } else if(value < randomNum){
        alert("Too Low!" + "Guess # " + guess + " of 3")
      } else if(value > randomNum){
        alert("Too High!" + "Guess # " + guess + " of 3");
      }
    if (guess === 3) {alert("You lose, try again?")
    }
}

};