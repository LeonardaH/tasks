// 1. Create a class Person with the attributes: firstName, lastName, job, age
// 2. Create a getter for the name that returns the first and last name
// 3. Create a setter for the first and last name
// 4. Create a getter and setter for the age
// 5. Test your code

// Bonus: use static method for display the following: 'PERSON_01 meets PERSON_02'
// Note: two parameters (both should be Person instances)

class Person {
  constructor(firstName, lastName, job, _age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.job = job;
    this._age = _age;
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }

  get personAge() {
    return this.age;
  }

  set name(fullName) {
    this.fullName = this.firstName + this.lastName;
  }

  get age() {
    return this._age;
  }

  set age(_age) {
    return this._age;
  }
}

const person1 = new Person("Lea", "Halilovic", "Frontend Developer", 28);
console.log(person1.name);
console.log(person1.name);
console.log(person1.age);
console.log(person1.age);
