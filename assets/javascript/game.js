
let locationNames = ["aukland", "salvador", "stuttgart", "johannesburg", "philadelphia"]
let word = locationNames[Math.floor(Math.random()*locationNames.length)];
let answerArray = [];
let guessLeft = 10;
console.log(locationNames);
console.log(word);

function generatePuzzle(){
  for (var i = 0; i < word.length; i++){
    answerArray[i]="_";
  };
  document.getElementById("word").innerHTML = answerArray.join("");
};
generatePuzzle(word);



// wordchoice(word);
// var remainingLetters = word.length;
//
// document.onkeyup = function(event) {
//   var letter = String.fromCharCode(event.keyCode).toLowerCase();
//   document.getElementById("letters-used").innerhtml += letter;
// }
//
// while (remainingLetters > 0) {
//
// }
