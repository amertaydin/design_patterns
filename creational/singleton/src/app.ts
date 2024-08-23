class Logger {
  private static instance: Logger;
  private constructor() {}

  public static getInstance() {
    if (!this.instance) {
      this.instance = new Logger();
      return this.instance;
    }
    return this.instance;
  }

  public log(text: string): void {
    console.log(`Logging ${text}`);
  }
}

let logger1 = Logger.getInstance();
logger1.log("Hello");

let logger2 = Logger.getInstance();
logger2.log("Hello again");
