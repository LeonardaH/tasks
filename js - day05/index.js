// EXERCISE 1

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}
Person.prototype.fullName = function () {
  return this.name + "" + this.surname;
};
let p = new Person();
p.name = prompt("Enter your first name");
p.surname = prompt("Enter your last name");
console.log(p.fullName());
