class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  strat() {
    return `${this.make} ${this.model} is starting the engine.`
  }
  stop() {
    return `${this.make} ${this.model} is stopping the engine.`
  }

}

const myCar = new Vehicle("Toyota", "Camry");
console.log(myCar.strat());
console.log(myCar.stop());