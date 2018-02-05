let locationNames = ["aukland", "salvador", "stuttgart", "johannesburg", "philadelphia"]
let word;
let answerArray = [];
let lettersUsed = [];
let guessLeft = 15;
let winCounter = 0;
let remainingLetters = 1;

//Chooses the Location at random
function getLocation(){
  word = locationNames[Math.floor(Math.random()*locationNames.length)];
  remainingLetters = word.length;
}
getLocation();

console.log(locationNames);
console.log(word);
console.log(remainingLetters);

//Sets blanks equal to the word to guess
//Sets chances left
function generatePuzzle(){
  for (var i = 0; i < word.length; i++){
    answerArray[i]="_";
  };
  document.getElementById("word").innerHTML = answerArray.join("");
  document.getElementById("chances-left").innerHTML = guessLeft.toString();
  document.getElementById("letters-used").innerHTML = "";
};
generatePuzzle(word);

//guess a letter by pressing a key.

document.onkeyup = function(event) {

  //checks to make sure it is a letter key only.
  var charCode = event.keyCode;
  if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8){
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    //disallow repeat guesses
    for (var j = 0; j < lettersUsed.length; j++){
      if (letter === lettersUsed[j]){
        return;
      }
    }
    //updates letters tried
    lettersUsed.push(letter);
    document.getElementById("letters-used").innerHTML = lettersUsed.join("");

    //checks if the letter is in the word
    for (var k = 0; k < word.length; k++){
      if (word[k] === letter ){
        answerArray[k] = letter;
        remainingLetters--;
        console.log("remaining letters: " + remainingLetters)
      } //close if statement
      document.getElementById("word").innerHTML = answerArray.join("");
    }; //close forloop

    //updates the word and remaining guesses
    guessLeft--;
    document.getElementById("chances-left").innerHTML = guessLeft.toString();
    console.log(guessLeft);

    //win condition and reset
    if (remainingLetters <= 0){
      winCounter++;
      document.getElementById("wins").innerHTML = winCounter.toString();
      alert("You found her! She was in " + word +"!");
      answerArray = [];
      lettersUsed = [];
      guessLeft = 15;
      getLocation();
      generatePuzzle(word);
    };
  }
}
if (remainingLetters <= 0){
  //you win!
  //reset the game
}
if (guessLeft <= 0){
  //She got away for now! Try again!
  //reset the game
}
