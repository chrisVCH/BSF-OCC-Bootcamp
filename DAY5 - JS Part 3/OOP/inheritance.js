// Inheritance

class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

// child class Dog
class Dog extends Animal {
  bark() {
    console.log("Wof woof!");
  }
}

class Cat extends Animal {
  meow() {
    console.log("Meow meow!");
  }
}

const myDog = new Dog("Bingo");
myDog.bark();
myDog.eat();

const cat = new Cat("Pelusea");
cat.meow();
cat.eat();

