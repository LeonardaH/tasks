/*
1. Create a class User that has the following properties: name, age and id
2. Use public field declarations to ensure that name and age is always present
3. Make the id of the user not changeable from the outside
4. Proof that your code works :)
*/

class User {
  name = "Lea";
  age = 28;
  #id;
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.#id = id;
  }

  //   get id() {
  //     return this.#id;
  //   }
}

const newUser = new User("Lea", 24, 2334);
console.log(newUser);
