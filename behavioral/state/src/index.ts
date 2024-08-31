interface LightState {
  switchState(light: LightSwitch): void;
}

class OnState implements LightState {
  public switchState(light: LightSwitch): void {
    console.log("Light state is On. Turning off...");
    light.setState(new OffState());
  }
}

class OffState implements LightState {
  public switchState(light: LightSwitch): void {
    console.log("Light state is Off. Turning on...");
    light.setState(new OnState());
  }
}

class LightSwitch {
  constructor(private state: LightState) {}

  public setState(state: LightState): void {
    this.state = state;
  }

  public press(): void {
    this.state.switchState(this);
  }
}

let lightswitch = new LightSwitch(new OffState());
lightswitch.press();
