// 1. Create a Animal class that has the properties: name, speed and favoriteFood
// 2. Also add the methods speak, run, eat and getName
// 3. Everything should return a string like “NAME is eating”
// 4. Now create a Cat class that inherits from Animal and uses all the properties from the super class.
// 5. Add also a new property called owner.
// 6. Override the speak function so that it returns “meow”
// 7. Now create a Cat instance and test your code properly :)
// */

class Animal {
  constructor(name, speed, favoriteFood) {
    this.name = name;
    this.speed = speed;
    this.favoriteFood = favoriteFood;
  }
  speak() {
    console.log(`${this.name} is speaking`);
  }
  run() {
    console.log(`${this.name} is running`);
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  getName() {
    console.log(`${this.name} is cat's name`);
  }
}

class Cat extends Animal {
  constructor(name, speed, favoriteFood, owner) {
    super(name, speed, favoriteFood);
    this.owner = owner;
  }
  speak() {
    console.log(`${this.name} is going meow`);
  }
}

const cat = new Cat("Aro", 13, "fish", "Lea");
console.log(cat.speak());
