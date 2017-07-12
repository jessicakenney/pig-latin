
var newString = "";
var vowels = ["a","e","i","o","u"];

$(document).ready(function() {

  $("form#pigLatin").submit(function(event) {

    var inputString = $("input:text").val();
    vowels.forEach(function(vowel) {

      if (inputString === vowel) {
        newString = inputString + "way";
        }
    });

    function isConsonant(letter) {
      return !(isVowel(letter));
    };

    function isVowel(letter) {

      var checker = 0;
      vowels.forEach(function(vowel) {
        if (letter === vowel) {
          checker += 1;
          alert ("isVowel checker inc ");
        }
      });
      return (checker > 0);
    };

    alert("RESULT: " + isVowel(inputString));
    alert("RESULT: " + isConsonant(inputString));


//FRONT
    var result = newString;
    $("#result").append(result);
    event.preventDefault();
  });
});
