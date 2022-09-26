const stoflecNumber = document.getElementById("stoflec-num");
const submit = document.getElementById("submit");
const userNum = document.getElementById("user-num");
const nextBtn = document.getElementById("next");
const stoflecBtn = document.getElementById("stoflec");
const container = document.querySelector(".container");

submit.addEventListener("click", () => {
  if (
    !stoflecNumber.value ||
    stoflecNumber.value >= 10 ||
    stoflecNumber.value <= 0
  ) {
    alert("Invalid input value!");
    return;
  }

  container.removeAttribute("hidden");
  stoflecNumber.setAttribute("disabled", "disabled");
  submit.setAttribute("disabled", "disabled");
  userNum.value = 1;
});

const rules = (option) => {
  const stoflecValue = stoflecNumber.value;
  const userValue = userNum.value;

  if (option === "stoflec") {
    if (
      userValue % stoflecValue === 0 ||
      userValue.toString().includes(stoflecValue)
    ) {
      console.log("Štoflec");
      userNum.value++;
    } else {
      console.log("Game over");
      container.setAttribute("hidden", "hidden");
      stoflecNumber.removeAttribute("disabled");
      submit.removeAttribute("disabled");
    }
  } else {
    if (
      userValue % stoflecValue === 0 ||
      userValue.toString().includes(stoflecValue)
    ) {
      alert("Game over!");
      container.setAttribute("hidden", "hidden");
      stoflecNumber.removeAttribute("disabled");
      submit.removeAttribute("disabled");
    } else {
      console.log("NEXT");
      userNum.value++;
    }
  }
};

stoflecBtn.addEventListener("click", () => {
  rules("stoflec");
});

nextBtn.addEventListener("click", () => {
  rules("next");
});
