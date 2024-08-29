interface Observer {
  update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
  constructor(private id: number) {}

  update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {
    if (this.observers.includes(observer))
      return console.log("Observer already exists");
    this.observers.push(observer);

    console.log("Observer added successfully");
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) return console.log("Observer does not exist");

    this.observers.splice(index, 1);
    console.log(`Observer was succesfull removed`);
  }

  notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  setState(state: number): void {
    this.state = state;
    console.log("Setting state...");
    this.notifyObservers();
  }

  getState(): number {
    return this.state;
  }
}

let subject = new ConcreteSubject();
let observer1 = new ConcreteObserver(1);
subject.addObserver(observer1);
let observer2 = new ConcreteObserver(2);
subject.addObserver(observer2);

subject.setState(14);
