let carsArray = [];

function Cars(name, model, hp) {
  this.name = name;
  this.model = model;
  this.hp = hp;
}

function createCars(name, model, hp) {
  const myCar = new Cars();
  myCar.name = name;
  myCar.model = model;
  myCar.hp = hp;
  return myCar;
}

do {
  let name = prompt("Manufacturer:", "");
  let model = prompt("Model:", "");
  let hp = prompt("Horsepower:", "");

  carsArray.push(createCars(name, model, hp));
  console.log(name + "-" + model + "[" + hp + "]");
} while (confirm("another?"));

console.log(carsArray);
