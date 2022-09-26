const result = document.getElementById("result");
const counter = document.getElementById("count");
const button = document.getElementById("button");

const dice = {
  numOfSides: 6,
  roll: function () {
    return Math.floor(Math.random() * this.numOfSides + 1);
  },
  attempts: 0,
  higestNum: 0,
  currentNum: 0,
  button: function () {
    if (this.attempts < 5) {
      this.attempts++;
      counter.innerText = this.attempts;
      this.currentNum = this.roll();
      result.innerText = this.currentNum;
      if (this.currentNum > this.higestNum) {
        this.higestNum = this.currentNum;
      }
      if (this.currentNum === 6) {
        alert("You won");
        this.reset();
      }
    } else {
      alert("You lost");
      this.reset();
    }
  },
  reset: function () {
    this.attempts = 0;
    this.higestNum = 0;
    this.currentNum = 0;
    result.innerText = this.currentNum;
    counter.innerText = this.attempts;
  },
};

button.addEventListener("click", dice.button.bind(dice));
