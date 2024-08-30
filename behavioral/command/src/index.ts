interface ICommand {
  execute(): void;
  undo(): void;
}

class Light {
  turnOn(): void {
    console.log("The light is on");
  }
  turnOff(): void {
    console.log("The light is off");
  }
}

class TurnOnCommand implements ICommand {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOn();
  }

  undo(): void {
    this.light.turnOff();
  }
}

class TurnOffCommand implements ICommand {
  constructor(private light: Light) {}

  execute(): void {
    this.light.turnOff();
  }

  undo(): void {
    this.light.turnOn();
  }
}

class SimpleRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];

  setCommand(command: ICommand): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  buttonWasPressed(): void {
    if (this.hasCommands()) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  undoButtonWasPressed(): void {
    this.undoCommand.execute();
  }

  hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light = new Light();

// turn on light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();
remote.undoButtonWasPressed();
