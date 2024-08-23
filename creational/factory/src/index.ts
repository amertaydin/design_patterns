abstract class Car {
  constructor(public model: string, public productionYear: number) {}

  displayCarInfo(): void {}
}

class Sedan extends Car {
  displayCarInfo(): void {
    console.log(
      `This is a Sedan. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class SUV extends Car {
  displayCarInfo(): void {
    console.log(
      `This is a SUV. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class Hatchback extends Car {
  displayCarInfo(): void {
    console.log(
      `This is a Hatchback. Model: ${this.model}, Production Year: ${this.productionYear}`
    );
  }
}

class CarFactory {
  createCar(
    type: "sedan" | "suv" | "hatchback",
    model: string,
    productionYear: number
  ): Car {
    switch (type) {
      case "sedan":
        return new Sedan(model, productionYear);

      case "suv":
        return new SUV(model, productionYear);

      case "hatchback":
        return new Hatchback(model, productionYear);

      default:
        throw new Error("Invalid car type");
    }
  }
}

const carFactory = new CarFactory();
carFactory.createCar("sedan", "x", 2014);
