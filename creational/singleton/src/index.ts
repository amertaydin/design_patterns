class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new Singleton();
      return this.instance;
    }
  }

  public printValue(num: number) {
    console.log(`number is ${num}`);
  }
}

const cls = Singleton.getInstance();
cls.printValue(4);
