class Grinder {
  grindBeans() {
    console.log("Grinding beans...");
  }
}

class Boiler {
  boilWater() {
    console.log("Boiling water...");
  }
}

class Brewer {
  brewCoffee() {
    console.log("Brewing coffee...");
  }
}

class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee() {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("Coffee is ready");
  }
}

const grinder = new Grinder();
const brewer = new Brewer();
const boiler = new Boiler();

let coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();
