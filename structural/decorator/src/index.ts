interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }

  description(): string {
    return "Simple Coffee";
  }
}

abstract class CoffeeDecorator implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  abstract cost(): number;
  abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  cost(): number {
    return 12;
  }

  description(): string {
    return "Coffe with milk";
  }
}

let coffee = new SimpleCoffee();
console.log(coffee.cost());
console.log(coffee.description());
coffee = new MilkDecorator(coffee); // now coffee is decorated
console.log(coffee);
console.log(coffee.cost());
console.log(coffee.description());
