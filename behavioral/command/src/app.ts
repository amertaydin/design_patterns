interface ICommand {
  execute(): void;
  undo(): void;
}

class CreateFileCommand implements ICommand {
  constructor(private path: string) {}

  execute(): void {
    console.log(`Creating file at ${this.path}`);
  }

  undo(): void {
    console.log(`Deleting file at ${this.path}`);
  }
}

class UpdateFileCommand implements ICommand {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}

  execute(): void {
    console.log(
      `Updating ${this.oldContent} with ${this.newContent} at ${this.path}`
    );
  }

  undo(): void {}
}

class ReadFileCommand implements ICommand {
  constructor(private path: string) {}

  execute(): void {
    console.log(`Reading file at ${this.path}`);
  }

  undo(): void {
    console.log(`Undo operation is not available ${this.path}`);
  }
}

class MyFileSystem {
  commandQueue: ICommand[] = [];

  addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }

  executeCommand(): void {
    if (this.hasCommands()) {
      let command = this.commandQueue.shift();
      command?.execute();
    }
  }

  undoCommand(): void {
    if (this.hasCommands()) {
      let command = this.commandQueue.pop();
      command?.undo();
    }
  }

  hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

let fileSystem = new MyFileSystem();
fileSystem.addCommand(new CreateFileCommand("path"));
