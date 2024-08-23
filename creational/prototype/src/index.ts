interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

abstract class Shape {
  constructor(public properties: ShapeProperties) {}

  abstract clone(): Shape;
}

class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  clone(): Shape {
    let clonedProperties = { ...this.properties };
    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

class Circle extends Shape {
  constructor(properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  clone(): Shape {
    let clonedProperties = { ...this.properties };
    return new Circle(clonedProperties, this.radius);
  }
}

let redRec = new Rectangle({ color: "red", x: 10, y: 20 }, 10, 20);
let clonedRec = redRec.clone();

clonedRec.properties.color = "blue";

console.log(redRec);
console.log(clonedRec);
