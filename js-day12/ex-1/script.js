// 1. Create a class by using class declaration

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
}

console.log(new Person("Lea", "Halilovic"));

inst1 = new Person("Lea", "Halilovic");
console.log(inst1);

// 2. Create a class by using class expression

let Dog = class {
  constructor(breed, age) {
    this.breed = breed;
    this.age = age;
  }
};

console.log(new Dog("shair-pei", 10));
