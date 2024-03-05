class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    throw new Error("Method not implemented.");
  }
}

class Rectangle extends Shape {
  displayFormula() {
    console.log("Area is : ");
    //console.log(`Area is :  ${this.width} ${this.height}`);
  }
  calculateArea() {
    console.log(this.height * this.width);
  }


}

const shape1 = new Rectangle(4, 6);

(shape1.displayFormula());
(shape1.calculateArea());

/*
class Shape {
  constructor (w, h) {
      this.width = w;
      this.height = h;
  }

  calculateArea() {
      throw new Error("Method not implemented.")
  }
}

class Rectangle extends Shape {
  displayFormula() {
      console.log("Width * Height = Area of a Rectangle");
  }

  calculateArea() {
      let area = this.width * this.height;
      console.log(`${this.width} * ${this.height} = ${area}`);
  }
}

const shape1 = new Rectangle(7, 3);
shape1.displayFormula();
shape1.calculateArea();
*/