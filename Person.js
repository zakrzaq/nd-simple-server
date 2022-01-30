class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age})`);
  }
}

const person1 = new Person("Jake Zak", 30);
// console.log(__dirname, __filename);
person1.greeting();
