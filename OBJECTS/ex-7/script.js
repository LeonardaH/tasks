// Create a function that will return the number of words in a text. Think about
// separators, they are not words !?;. :)

const sentence = document.querySelector("p");

function wordCount(str) {
  var stringArray = str.split(" ");
  var count = 0;
  for (var i = 0; i < stringArray.length; i++) {
    var word = stringArray[i];
    if (/[A-Za-z]/.test(word)) {
      count++;
    }
  }
  return count;
}

console.log(wordCount(sentence));
