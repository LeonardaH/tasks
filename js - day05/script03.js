let personArray = [];

do {
  const name = prompt("name:");
  const surname = prompt("surname:");
  const age = prompt("age:");
  personArray.push(createPerson(name, surname, age));
} while (confirm("Add another?"));

function Person(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
}

function createPerson(name, surname, age) {
  const person = new Person(name, surname, age);
  return person;
}

// ex 4

function Cylinder(cylHeight, cylRadius) {
  this.cylHeight = cylHeight;
  this.cylRadius = cylRadius;
}

Cylinder.prototype.Volume = function () {
  return this.cylHeight * Math.PI * this.cylRadius * cylRadius;
};

let cyl = new Cylinder(7, 4);
console.log("volume =", cyl.Volume().toFixed(2));
