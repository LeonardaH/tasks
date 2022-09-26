// selecting elem

const password = document.getElementById("password");
const strength = document.querySelector(".password-strength-bar");
const characters = document.getElementById("characters");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const digit = document.getElementById("digit");
const symbol = document.getElementById("symbol");
const unique = document.getElementById("unique");

password.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  let counter = 0;
  let counterRules = 0;
  if (inputValue.length < 8) {
    characters.style.color = "red";
  } else {
    characters.style.color = "green";
    counter += 10;
    counterRules++;
  }
  //lowercase and uppercase
  if (inputValue == inputValue.toUpperCase()) {
    lowercase.style.color = "red";
    uppercase.style.color = "green";
    counter += 5;
    counterRules++;
  } else if (inputValue == inputValue.toLowerCase()) {
    uppercase.style.color = "red";
    lowercase.style.color = "green";
    counter += 5;
    counterRules++;
  } else {
    uppercase.style.color = "green";
    lowercase.style.color = "green";
    counter += 10;
    counterRules++;
    counterRules++;
  }
  if (inputValue.length === 0) {
    uppercase.style.color = "red";
    lowercase.style.color = "red";
  }
  //digit
  const matchDigit = inputValue.match(/(\d+)/);
  if (matchDigit) {
    digit.style.color = "green";
    counter += 5;
    counterRules++;
  } else {
    digit.style.color = "red";
  }
  //symbol
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const checkInput = specialChars.test(inputValue);
  if (checkInput) {
    symbol.style.color = "green";
    counter += 5;
    counterRules++;
  } else {
    symbol.style.color = "red";
  }
  //unique
  let str = inputValue.split("");
  str = new Set(str);
  if (str.size < 5) {
    unique.style.color = "red";
  } else {
    unique.style.color = "green";
    counter += 10;
    counterRules++;
  }

  //counter
  const formula = counter + counterRules * 10;
  console.log(formula);
  if (formula === 100) {
    strength.style.width = "100%";
    strength.style.backgroundColor = "green";
  } else if (inputValue.length === 0) {
    strength.style.width = 0;
  } else if (formula <= 50) {
    strength.style.width = formula + "%";
    strength.style.backgroundColor = "red";
  } else if (formula <= 75) {
    strength.style.width = formula + "%";
    strength.style.backgroundColor = "orange";
  } else if (formula < 100) {
    strength.style.width = formula + "%";
    strength.style.backgroundColor = "yellow";
  }
});
