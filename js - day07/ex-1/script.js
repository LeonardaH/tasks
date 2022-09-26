// Write a selector to query for the list element of the warmest and coolest day (determined by
// the max temperature). Dynamically add data attributes with temperature values for each day
// in html (data-max and data-min).
// The text color for the elements will be set using

const temperatures = [
  {
    min: 17,
    max: 30,
  },
  {
    min: 17,
    max: 32,
  },
  {
    min: 19,
    max: 35,
  },
  {
    min: 19,
    max: 37,
  },
  {
    min: 18,
    max: 36,
  },
  {
    min: 17,
    max: 31,
  },
  {
    min: 16,
    max: 29,
  },
];

function setTemperatureData() {
  const elements = document.querySelectorAll(".js-day");

  elements.forEach((elem, index) => {
    elem.dataset.min = temperatures[index].min;
    elem.dataset.max = temperatures[index].max;
  });
}

function highlightWarmestAndCoolestDay() {
  let warmest = 0;
  let coldest = 100;

  temperatures.forEach((elem) => {
    if (Number(elem.max) > warmest) {
      warmest = Number(elem.max);
    }
  });

  temperatures.forEach((elem) => {
    if (Number(elem.min) < coldest) {
      coldest = Number(elem.min);
    }
  });

  const warmestDay = document.querySelector(`[data-max="${warmest}"]`);
  const coolestDay = document.querySelector(`[data-min="${coldest}"]`);

  warmestDay.style.color = "red";
  coolestDay.style.color = "blue";
}

setTemperatureData();
highlightWarmestAndCoolestDay();
