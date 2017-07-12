
var newString = "";
var vowels = ["a","e","i","o","u","y"];

$(document).ready(function() {

  $("form#pigLatin").submit(function(event) {

    var inputString = $("input:text").val();
    var splitsString = inputString.split("");
    // alert(splitsString);


    function pushWay(splits) {
        var string = splits.join("");
        return  string + "way";
    };

    function pushAy(splits) {
      var string = splits.join("");
      return string + "ay";
    }

    function isFirstLetterVowel(letter) {
      var modifiedVowels = vowels.pop();
      return isVowel(letter);
    };

    function isFirstLetterY(letter) {
      return (letter === "y");
    };

    function isConsonant(letter) {
      return !(isVowel(letter));
    };

    function getFirstVowelIndex(splits) {
      var checker = 0;
      var length = splits.length;
      for (var index = 1; index <= (length - 1); index += 1) {
        if (isVowel(splitsString[index]) && (checker === 0) ) {
            checker = 1;
            return index;
        }
      };
    };

    function isVowel(letter) {
      var checker = 0;
      vowels.forEach(function(vowel) {
        if (letter === vowel) {
          checker += 1;
          // alert ("isVowel checker inc ");
        }
      });
      return (checker > 0);
    };

    // alert("RESULT: " + isVowel(inputString));
    // alert("RESULT: " + isConsonant(inputString));
     if (isFirstLetterVowel(splitsString[0])) {
       alert(pushWay(splitsString));
     } else if (isFirstLetterY(splitsString[0])) {
          alert(pushAy(splitsString));
     };
     alert("Your first vowel occurs at index: " + getFirstVowelIndex(splitsString));



//FRONT
    var result = newString;
    $("#result").append(result);
    event.preventDefault();
  });
});
