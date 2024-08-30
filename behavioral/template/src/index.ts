abstract class CakeRecipe {
  public bakeCake(): void {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  protected preHeatOven(): void {
    console.log("Preheating oven to 175 Degree C");
  }

  protected bake(): void {
    console.log("Baking cake");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake");
  }

  protected decorate(): void {
    console.log("Decorating cake...");
  }

  protected abstract mixIngredients(): void;
}

class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing chocolate, sugar, butter, flour, eggs");
  }

  protected decorate(): void {
    console.log("Decorating cake with choco");
  }
}

class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing vanilla, sugar, butter, flour, eggs");
  }
}

function bakeCake(cake: CakeRecipe) {
  cake.bakeCake();
}

let chocoCake = new ChocolateCake();
bakeCake(chocoCake);
