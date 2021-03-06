let locationNames = ["auckland", "salvador", "stuttgart", "johannesburg", "philadelphia"]
let word;
let answerArray = [];
let lettersUsed = [];
let guessLeft = 13;
let winCounter = 0;
let remainingLetters = 1;
let themeSong = document.getElementById("myAudio");

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
      alert("You found her! She stashed the goods in " + word +". Good work, gumshoe!");
      answerArray = [];
      lettersUsed = [];
      guessLeft = 13;
      getLocation();
      generatePuzzle(word);
    };

    //loss condition
    if (guessLeft <= 0){
      alert("Oh no, she already moved on to a new city!  Lets try again...");
      answerArray = [];
      lettersUsed = [];
      guessLeft = 13;
      getLocation();
      generatePuzzle(word);
    }
  }
}

//hints
document.getElementById("hintButton").onclick = function(event){
  if(word === "auckland"){
    alert("One of your informants caught sight of Sandiego's gang boarding a ship bond for New Zealand!");
  } else if(word ==="stuttgart"){
    alert("An NSA wiretap heard Sandiego saying she couldn't wait to visit Mercedes-Benz headquarters and Wilhelma botanical gardens before selling off her loot in the same city...");
  } else if(word === "johannesburg"){
    alert("One of Sandiego's gang boasted on facebook that he was staying in Nelson Mandela's former residence!  He had over 2000 likes!");
  } else if(word === "philadelphia"){
    alert("Sandiego updated her instagram with a selfy of her and the \"Rocky\" statue.  Next up, the liberty Bell!");
  } else if(word === "salvador"){
    alert("Sandiego tweeted \"Working on my tan! #beach#southAmerica#beautiful#lifeisgood\"");
  }
}

//play theme song
document.getElementById("playSong").onclick = function(event){
  themeSong.play();
}

//pause theme song
document.getElementById("pauseSong").onclick = function(event){
  themeSong.pause();
}
