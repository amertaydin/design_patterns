interface Observer1 {
  update(temperature: number, humidity: number, pressure: number): void;
}

interface Subject1 {
  registerObserver(o: Observer1): void;

  removeObserver(o: Observer1): void;

  notifyObservers(o: Observer1): void;
}

class CurrentConditionsDisplay implements Observer1 {
  private temperature: number | undefined;
  private humidity: number | undefined;
  private pressure: number | undefined;
  constructor(private weatherData: Subject1) {
    this.weatherData.registerObserver(this);
  }

  update(temperature: number, humidity: number, pressure: number): void {
    this.temperature = temperature;
    this.pressure = pressure;
    this.humidity = humidity;
    this.display();
  }

  display(): void {
    console.log(
      `Temperature is ${this.temperature} Humidity ${this.humidity} Pressure ${this.pressure}`
    );
  }
}

class WeatherData implements Subject1 {
  private observers: Observer1[] = [];
  temperature: number | undefined;
  humidity: number | undefined;
  pressure: number | undefined;

  registerObserver(o: Observer1): void {
    if (this.observers.includes(o)) {
      return;
    }
    this.observers.push(o);
  }

  removeObserver(o: Observer1): void {
    const index = this.observers.indexOf(o);
    if (index === -1) return;
    this.observers.splice(index, 1);
  }

  notifyObservers(): void {
    if (
      this.temperature !== undefined &&
      this.humidity !== undefined &&
      this.pressure !== undefined
    ) {
      for (let observer of this.observers) {
        observer.update(this.temperature, this.humidity, this.pressure);
      }
    }
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}

const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);

weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 30.4);
