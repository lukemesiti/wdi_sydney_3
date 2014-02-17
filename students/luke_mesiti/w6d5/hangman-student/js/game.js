var word = {
  secretWord: "",
  wordList: ['ruby', 'rails', 'javascript', 'array', 'hash', 'underscore', 'sinatra', 'model', 'controller', 'view', 'devise', 'authentication', 'capybara', 'jasmine', 'cache', 'sublime', 'terminal', 'system', 'twitter', 'facebook', 'function', 'google', 'amazon', 'development', 'data', 'design', 'inheritance', 'prototype', 'gist', 'github', 'agile', 'fizzbuzz', 'route', 'gem', 'deployment', 'database'],

  // Selects a random word from the word list sets the secret word
  setSecretWord: function(){
    // could have used _.sample for this. May need to update underscore library though.
    var randomIndex = _.random(0, (this.wordList.length-1));
    this.secretWord = this.wordList[randomIndex];
    console.log(this.secretWord);
  },

  // Takes an array of letters as input and returns an array of two items:
  // 1) A string with the parts of the secret word that have been guessed correctly and underscore for the parts that haven't
  // 2) An array of all the guessed letters that were not in the secret word
  checkLetters: function(guessedLetters){
    var secretWordArray = this.secretWord.split("");
    var wordArray = [];
    var rtnArray = [];
    var wrongGuess = [];
    var wrongGuessUniq = [];

    for(var z = 0; z < secretWordArray.length; z = z + 1){
      wordArray.push("_");
    }

    // think about using a map function.
    // _.contains(arr,"d");
    for(var i = 0; i < secretWordArray.length; i = i + 1){
      for(var x = 0; x < guessedLetters.length; x = x + 1){
        if(guessedLetters[x] === secretWordArray[i]){
          wordArray[i] = secretWordArray[i];
        }
        else if (!(_.contains(secretWordArray, guessedLetters[x]))){
          // create array of letters that were not in the secret word.
          wrongGuess.push(guessedLetters[x]);

        }
      }
    }
    wrongGuessUniq = _.uniq(wrongGuess);

    rtnArray = [wordArray.join(""), wrongGuessUniq.join("")];
    // console.log(rtnArray);

    return rtnArray;
  }
};

var player = {
  MAX_GUESSES: 8,
  guessedLetters: [],


  // Takes a new letter as input and updates the game
  makeGuess: function(letter){
    if(letter !== ""){
      this.guessedLetters.push(letter);
    }
    this.checkWin(this.guessedLetters);
    this.checkLose(this.guessedLetters);
    console.log("secretWordWithBlanks: " + word.checkLetters(this.guessedLetters)[0]);
    console.log("guessedLetters: " + this.guessedLetters);
    console.log("guessesLeft: " + (this.MAX_GUESSES - word.checkLetters(this.guessedLetters)[1].length));
    game.updateDisplay(word.checkLetters(this.guessedLetters)[0], this.guessedLetters, (this.MAX_GUESSES - word.checkLetters(this.guessedLetters)[1].length))
  },

  // Check if the player has won and end the game if so
  checkWin: function(wordString){
    if (word.checkLetters(wordString)[0] === word.secretWord){
      alert("You win! The answer is: " + word.secretWord);
      game.resetGame();
    }
  },

  // Check if the player has lost and end the game if so
  checkLose: function(wrongLetters){
    if (word.checkLetters(wrongLetters)[1].length === this.MAX_GUESSES){
      alert("You lose! The answer was: " + word.secretWord);
      game.resetGame();
    }
  }
};

var game = {
  // Resets the game
  resetGame: function(){
    word.setSecretWord();
    player.guessedLetters = [];
    // reset guessed letters.
  },

  // Reveals the answer to the secret word and ends the game
  giveUp: function(){
    alert('The secret word is "' + word.secretWord + '"')
    // this.resetGame();
  },

  // Update the display with the parts of the secret word guessed, the letters guessed, and the guesses remaining
  updateDisplay: function(secretWordWithBlanks, guessedLetters, guessesLeft){
    document.getElementById("guessedLetters").innerHTML = guessedLetters;
    document.getElementById("guessesLeft").innerHTML = guessesLeft + " " + secretWordWithBlanks;

  }
};

window.onload = function(){
  // Start a new game
  game.resetGame();
  // Add event listener to the letter input field to grab letters that are guessed

  var inputField = document.getElementById("letterField");

  inputField.addEventListener("keyup", function() {
    player.makeGuess(document.getElementById("letterField").value);
    document.getElementById("letterField").value = "";
  });

  // Add event listener to the reset button to reset the game when clicked
  var resetBtn = document.getElementById("resetButton");
  resetBtn.addEventListener("click", game.resetGame);

  // Add event listener to the give up button to give up when clicked
  var giveUpBtn = document.getElementById("giveUpButton");
  giveUpBtn.addEventListener("click", function() {
    game.giveUp();
    game.resetGame();
  });
};