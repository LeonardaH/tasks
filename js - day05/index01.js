var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

function printNumber(number) {
  var result = document.getElementById("result");
  result.innerHTML = number;
}

var button = document.getElementById("button");

button.addEventListener("click", "");

button.addEventListener();
