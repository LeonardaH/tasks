// Make an app which collects data from people about favourite bands and the decade
// they were most popular.
// A band is defined by the band name and the year.
// After the input ends (the user can enter bands and years as much as he wants to) print in the console only bands that were active in the 80's!

let band = document.getElementById("band");
let year = document.getElementById("year");
const button = document.getElementById("btn");
let bands = [];

function Band(name, year) {
  this.name = name;
  this.year = year;
}

Band.prototype.fullData = function () {
  return `${this.name} were the most popular in ${this.year}`;
};

button.addEventListener("click", () => {
  let newBand = new Band(band, year);
  newBand.name = band.value;
  newBand.year = year.value;
  if (newBand.year < 1990 && newBand.year >= 1980) {
    console.log(newBand.fullData());
    bands.push(newBand);
    console.log(bands);
  }
  band.value = "";
  year.value = "";
});
