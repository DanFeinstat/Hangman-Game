
let locationNames = ["aukland", "salvador", "stuttgart", "johannesburg", "philadelphia"]
let word = locationNames[Math.floor(Math.random()*locationNames.length)];
let answerArray = [];
let lettersUsed = [];
let guessLeft = 10;
let remainingLetters = word.length;
console.log(locationNames);
console.log(word);
console.log(guessLeft.toString());

//Sets blanks equal to the word to guess
//Sets chances left

function generatePuzzle(){
  for (var i = 0; i < word.length; i++){
    answerArray[i]="_";
  };
  document.getElementById("word").innerHTML = answerArray.join("");
  document.getElementById("chances-left").innerHTML = guessLeft.toString();
};
generatePuzzle(word);

//guess a letter by pressing a key.

document.onkeyup = function(event) {

  //checks to make sure it is a letter key only.
  var charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //updates letters tried
    lettersUsed.push(letter);
    document.getElementById("letters-used").innerHTML = lettersUsed.join("");

    //checks if the letter is in the word
    for (var k = 0; k < word.length; k++){
      if (word[k] === letter ){
        answerArray[k] = letter;
        remainingLetters--;
      }
      document.getElementById("word").innerHTML = answerArray.join("");
    };

    //updates the word and remaining guesses
    guessLeft--;
    document.getElementById("chances-left").innerHTML = guessLeft.toString();
    console.log(guessLeft);
  }
}
if (guessLeft > 0 || remaingingLetters > 0){
  //do the game
} else if (remainingLetters <= 0){
  //you win!
  //reset the game
} else if (guessLeft <= 0){
  //She got away for now! Try again!
  //reset the game
}
